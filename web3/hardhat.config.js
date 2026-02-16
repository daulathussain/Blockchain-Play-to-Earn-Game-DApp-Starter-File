// hardhat.config.js
require('@nomicfoundation/hardhat-toolbox')
require('dotenv').config()

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    version: '0.8.19',
    settings: {
      optimizer: {
        enabled: true,
        runs: 1000, // Increased from 200 to optimize for contract size
      },
      viaIR: true, // This helps with contract size optimization
    },
  },
  networks: {
    localhost: {
      url: 'http://127.0.0.1:8545',
      allowUnlimitedContractSize: true, // Allow large contracts in localhost
    },
  },
  paths: {
    artifacts: './artifacts',
    sources: './contracts',
    cache: './cache',
    tests: './test',
  },
  sourcify: {
    enabled: true,
  },
}
