const path = require('path');

module.exports = {
    // ...
    webpack: {
        alias: {
            '@': path.join(path.resolve(__dirname, './src')),
        }
    }
}

// const cracoAlias = require("craco-alias");

// module.exports = {
//   plugins: [
//     {
//       plugin: cracoAlias,
//       options: {
//         baseUrl: "./src",
//         source: "jsconfig",
//       }
//     }
//   ]
// };