// import { NFTStorage, File } from 'nft.storage'
// const client = new NFTStorage({ token: import.meta.env.REACT_APP_API_TOKEN })

// class UploadFilesService {
//     // mint ERC-1155 compatible NFT metadata
//     async upload(file, name, description) {
//         const options = { type: 'application/glb' };
//         const metadata = await client.store({
//             name: name || '54 Campbell Pde Bondi',
//             description: description || 'Pin Bondi!',
//             image: new File(
//                 [
//                     file
//                 ],
//                 'BondiCompressed.glb',
//                 options
//             ),
//         })
//         console.log(metadata.url)
//         // ipfs://bafyreib4pff766vhpbxbhjbqqnsh5emeznvujayjj4z2iu533cprgbz23m/metadata.json
//         return {
//             data: metadata.url,
//             message: 'Success'
//         }
//     }

//     getUrl() {
//         return {
//             data: 'ipfs://bafybeictywqbuzzeq3oqyuikhhaercmhlcpbmrsvzn4qohqxwj33shrmky/metadata.json'
//         };
//     }
// }

// export default new UploadFilesService();
