import {
  loadFixture,
} from "@nomicfoundation/hardhat-toolbox-viem/network-helpers";
import { expect } from "chai";
import hre from "hardhat";
import { getAddress, parseEther } from "viem";

describe("TicTacToe", function () {
  async function deployedContract() {
    const [acount, otherAcount] = await hre.viem.getWalletClients();
    const Game = await hre.ethers.getContractFactory("GameWeb3");
    const game = await Game.deploy();

    return {
      game,
      acount,
      otherAcount,
    };

  }
  it("Create A Game", async ()=> {
    const {acount, game} = await loadFixture(deployedContract);
    
    const tx = await game.createGame({value: parseEther("10")});
    const receipe = await tx.wait();

    console.log(await game.games(1))
  })
});
