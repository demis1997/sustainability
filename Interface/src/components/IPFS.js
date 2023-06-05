// import React from 'react';

// //npm install ipfs -g
// //jsipfs cat QmPChd2hVbrJ6bfo3WBcTW4iZnpHm8TEzWkLHmLpXhF68A

// const node = await IPFS.create()

// const data = 'Hello, <YOUR NAME HERE>';

// // add your data to IPFS - this can be a string, a Buffer,
// // a stream of Buffers, etc
// const results = node.add(data)

// // we loop over the results because 'add' supports multiple 
// // additions, but we only added one entry here so we only see
// // one log line in the output
// for await (const { cid } of results) {
//   // CID (Content IDentifier) uniquely addresses the data
//   // and can be used to get it again.
//   console.log(cid.toString())
// }

// const stream = node.cat('QmPChd2hVbrJ6bfo3WBcTW4iZnpHm8TEzWkLHmLpXhF68A')
// const decoder = new TextDecoder()
// let data = '';

// for await (const chunk of stream) {
//   // chunks of data are returned as a Uint8Array, convert it back to a string
//   data += decoder.decode(chunk, { stream: true })
// }

// console.log(data)

// function IPFS() {
//   return (
//     <div>IPFS</div>
//   )
// }

// export default IPFS