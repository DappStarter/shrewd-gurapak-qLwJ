require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict drum off uphold drift recipe still equip idea area slot gauge'; 
let testAccounts = [
"0xd63f4c0161fc06a118f927ebdcbd9323f5493ec21424cacc60f9c78cc68535b0",
"0x4a64ebb044baeb5eb7c78339a4ae5294c43788264fb95990f69287c0d04d9f6a",
"0xca1e3cf14f2fc534b09bfff23047ad504c286eaa57ec6f13b457143ae8e541f8",
"0xa060c49b62b021686b9ac096bdd321bace2262ea179715570b40d1295f7fa586",
"0xefc6c824a4ef8f26b344a7c32c5faa5a7d7ea0f49c907d1bc79a04cdeb82e961",
"0xa6e0bc6abba751f673a8ebfd49ea88819e33a0a1d6cb8e46d22916ed09f20890",
"0x2ca0d95ed060313e03cd9691e4d8066112068f5bec734397ee7940f93ab2f1a3",
"0x0fcbe8f5cb6e25d3ee94afe8a4dd16b54b483a2292c6c71965456103e15d03c4",
"0x44f9fbfda9c4cb3cac5668292efa65dc715769f203a1f848d268ec4a28a95e7e",
"0xd3a406834157c83c10ea6706ccab65a9e78e8c3d24a51047e2fffc61ad153228"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

