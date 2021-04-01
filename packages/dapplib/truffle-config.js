require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good climb surge traffic number crater remain solid grace glimpse fortune square'; 
let testAccounts = [
"0x0c9f2e90e575fa511068e963c8f4b0066e69df58e9a16e16ce4aba36f64e0b91",
"0x0c9503bc6ac1d7a053b34b85ed7afd455ae69001afad811b8bbebbdde374ff30",
"0x7495c4f139b583806291ff86b128eef6002c2281f274dda4fd4309e08926ba0c",
"0x005d3020684b9a6d793b4ac4ac941fae75067c5c18f2560e2d6e3b18e98b90d4",
"0x645d351b61133d588f0689ff8c554600e8e5e5e767b0e88945afb0230ac71b6b",
"0x57556857df96dd0e5b0482ebddeb367de6d704ff75d6a2cb99ccb13fe9140598",
"0xc1841bc16823fa3b93e16bbf33e7656d2e4da5f8dcce801587d5ddcae8535485",
"0x1ac7690c5f9a211dad0205a177b176ba8f7e0bdaa38a6cb61cea6c0513ed4166",
"0xc18b1906e7416b7813c213fe02008ca7f4f8e368d605b295602d0281275836d9",
"0x97ffa36048671aa8b27d9ac3db3d64fc6feab65c12ee9e40a576aeef7f9f781c"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
