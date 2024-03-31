// https://eth-sepolia.g.alchemy.com/v2/S-Cmt11sSpiMKFPgeKwUYfImqPifYq7-
require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    sepolia: {
      url: 'https://eth-sepolia.g.alchemy.com/v2/S-Cmt11sSpiMKFPgeKwUYfImqPifYq7-',
      // chainId: 11155111,
      accounts: ['0x377f108b27243df7c33a92a34c3ab5d0c8e45d009fd00dda5a2eb333804f6592']
    }
  }
}