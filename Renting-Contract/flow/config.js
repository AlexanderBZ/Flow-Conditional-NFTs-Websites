const fcl = require("@onflow/fcl");

fcl.config({
  "app.detail.title": "Conditional NFTs", // this adds a custom name to our wallet
  "accessNode.api": "https://rest-testnet.onflow.org", // this is for the local emulator
  "discovery.wallet": "https://fcl-discovery.onflow.org/testnet/authn", // this is for the local dev wallet
  "0xDeployer": "0xae95963d3be2cd41", // this auto configures `0xDeployer` to be replaced by the address in txs and scripts
})
