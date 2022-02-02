const Web3 = require('web3')
const http = new Web3(process.env.WEB3_HTTP_PROVIDER)

async function parseTransaction(transactionHash) {
  const tx = await http.eth.getTransaction(transactionHash)
  
  // figure out how to return this info:
  return { 
    hash: tx.hash,
    status: "success",
    block: 14074449,
    contract: "0x7be8076f4ea4a4ad08075c2508e481d6c946d12b",
    buyer: "0x2a838fb71a5c6987bf09123ca65841874a663444",
    seller: "0xd809bbde36cb8df835070353ebb515b597211a3b",
    ethAmt: 79.5,
    gasGas: 0.020932484712683328,
    royalties: [
      {
        address: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
        ethAmt: 3.975
      }
    ],
    tokens: [
      {
        address: "0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d",
        tokenId: 6188
      }
    ]
  }
}

async function run() {
  // @see transaction here: https://etherscan.io/tx/0xa52ca3611ad3ea1aa566dd605e24c25b6bc601eabf0969076eebc85df644a1d8
  const parsed = await parseTransaction("0xa52ca3611ad3ea1aa566dd605e24c25b6bc601eabf0969076eebc85df644a1d8")
  console.log({parsed})
}

run()
