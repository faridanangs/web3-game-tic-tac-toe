import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";


const GameWeb3 = buildModule("GameWeb3", (m) => {
  const lock = m.contract("GameWeb3", []);

  return { lock };
});

export default GameWeb3;
