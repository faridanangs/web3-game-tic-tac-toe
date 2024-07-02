// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

// Uncomment this line to use console.log
import "hardhat/console.sol";

contract GameWeb3 {
    enum Player {
        None,
        Player1,
        Player2
    }
    enum GameState {
        WaitingPlayer,
        TurningPlayer,
        Finised
    }

    // error handlers
    error InsufficientBalance(uint256 balance, uint256 required);

    // event handlers
    event CreateGameEvent(uint256 gameId, address player1);
    event JoinGameEvent(uint256 gameId, address player2);
    event LeaveGameEvent(uint256 gameId, Player player);
    event WinnerGameEvent(uint256 gameId, Player player);
    event MoveMadeEvent(uint256 gameId, GameState state);
    event GameDrawEvent(uint256 gameId, address player1, address player2);
    event Transfer(address from, address to, uint256 value);

    struct Game {
        address player1;
        address player2;
        uint256 balance;
        Player[3][3] board;
        GameState state;
        Player currentPlayer;
        Player winner;
        uint256 turningCount;
    }

    uint256 gameCount;
    mapping(uint256 => Game) internal games;

    modifier isTurnPlayer(uint256 gameId) {
        require(
            (games[gameId].player1 == msg.sender &&
                games[gameId].currentPlayer == Player.Player1) ||
                (games[gameId].player2 == msg.sender &&
                    games[gameId].currentPlayer == Player.Player2),
            "Not your turn"
        );
        _;
    }

    modifier onlyPlayer(uint256 gameId) {
        require(
            games[gameId].player1 == msg.sender ||
                games[gameId].player2 == msg.sender,
            "Only player can play this game"
        );
        _;
    }

    modifier isGameActive(uint256 gameId) {
        require(
            games[gameId].state == GameState.TurningPlayer,
            "Game is not active"
        );
        _;
    }

    function createGame() public payable returns (uint256) {
        gameCount++;

        Game storage game = games[gameCount];

        game.player1 = msg.sender;
        game.balance = msg.value;
        game.state = GameState.WaitingPlayer;
        game.currentPlayer = Player.Player1;

        emit CreateGameEvent(gameCount, msg.sender);

        return gameCount;
    }

    function joinGame(uint256 gameId) public payable returns (uint256) {
        Game storage game = games[gameId];

        require(game.player1 != msg.sender, "you can't join your own game");
        if (msg.value < game.balance) {
            revert InsufficientBalance(msg.value, game.balance);
        }

        game.player2 = msg.sender;
        game.state = GameState.TurningPlayer;

        uint256 exectBalance = 0;
        if (msg.value > game.balance) {
            exectBalance = msg.value - game.balance;
            game.balance += msg.value - exectBalance;
            (bool ok, ) = payable(msg.sender).call{value: exectBalance}("");
            require(ok, "Transfer failed");
        }

        game.balance += msg.value;

        emit JoinGameEvent(gameId, msg.sender);
        return gameId;
    }

    function makeMove(
        uint256 gameId,
        uint8 row,
        uint8 col
    ) public isGameActive(gameId) isTurnPlayer(gameId) onlyPlayer(gameId) {
        Game storage game = games[gameId];

        require(row < 3 && col < 3, "Invalid Broad Position");
        require(
            game.board[row][col] == Player.None,
            "Board Position was taken"
        );

        game.board[row][col] = game.currentPlayer;

        // check the winner and draw
        if (winner(gameId, game.currentPlayer)) {
            game.state = GameState.Finised;
            game.winner = game.currentPlayer;

            game.winner == Player.Player1
                ? payable(game.player1).call{value: game.balance}("")
                : payable(game.player2).call{value: game.balance}("");
            address winnerPlayer = game.winner == Player.Player1
                ? game.player1
                : game.player2;

            emit Transfer(address(this), winnerPlayer, game.balance);
            emit WinnerGameEvent(gameId, game.currentPlayer);

            game.balance = 0;
        } else if (game.turningCount == 9) {
            game.state = GameState.Finised;
            game.winner = Player.None;

            uint256 balance = game.balance / 2;

            payable(game.player1).transfer(balance);
            payable(game.player2).transfer(balance);

            emit Transfer(address(this), game.player1, balance);
            emit Transfer(address(this), game.player2, balance);
            emit GameDrawEvent(gameId, game.player1, game.player2);

            game.balance = 0;
        } else {
            game.currentPlayer == Player.Player1
                ? game.currentPlayer = Player.Player2
                : game.currentPlayer = Player.Player1;
            game.turningCount++;
        }
    }

    function winner(
        uint256 gameId,
        Player player
    ) internal view returns (bool) {
        Game storage game = games[gameId];

        for (uint8 i = 0; i < 3; i++) {
            if (
                (game.board[i][0] == player &&
                    game.board[i][1] == player &&
                    game.board[i][2] == player) ||
                (game.board[0][i] == player &&
                    game.board[1][i] == player &&
                    game.board[2][i] == player)
            ) {
                return true;
            }
        }

        if (
            (game.board[0][0] == player &&
                game.board[1][1] == player &&
                game.board[2][2] == player) ||
            (game.board[0][2] == player &&
                game.board[1][1] == player &&
                game.board[2][0] == player)
        ) {
            return true;
        }
        return false;
    }
}
