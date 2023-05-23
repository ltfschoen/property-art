// import React, { Component } from "react";
// import UploadService from "../services/UploadFilesService";

// export default class UploadFiles extends Component {
//     constructor(props) {
//         super(props);

//         this.state = {
//             selectedFiles: undefined,
//             name: undefined,
//             description: undefined,
//             currentFile: undefined,
//             message: "",
//             fileInfos: [],
//         };
//     }

//     selectFile(event) {
//         this.setState({
//             selectedFiles: event.target.files,
//         });
//     }

//     upload(name, description) {
//         let currentFile = this.state.selectedFiles[0];
//         // let name = this.state.name;
//         // let description = this.state.description;

//         this.setState({
//             currentFile: currentFile,
//         });

//         UploadService.upload(currentFile, name, description)
//             .then((response) => {
//                 this.setState({
//                     message: response.message,
//                 });
//                 return response.data;
//             })
//             .then((files) => {
//                 this.setState({
//                     fileInfos: files.data,
//                 });
//             })
//             .catch(() => {
//                 this.setState({
//                     message: "Could not upload the file!",
//                     currentFile: undefined,
//                 });
//             });

//         this.setState({
//             selectedFiles: undefined,
//         });
//     }

//     componentDidMount() {
//         UploadService.getUrl().then((response) => {
//             this.setState({
//                 fileInfos: response.data,
//             });
//         });
//     }

//     render() {
//         const {
//             selectedFiles,
//             currentFile,
//             message,
//             fileInfos,
//         } = this.state;

//         return (
//             <div>
//                 <label className="btn btn-default">
//                     NFT Name <input type="text" id="name" />
//                     NFT Description <input type="text" id="description" />
//                     <input type="file" onChange={this.selectFile} />
//                 </label>

//                 <button className="btn btn-success"
//                     disabled={!selectedFiles}
//                     onClick={this.upload}
//                 >
//                     Upload
//                 </button>

//                 <div className="alert alert-light" role="alert">
//                     {message}
//                 </div>

//                 <div className="card">
//                     <div className="card-header">List of Files</div>
//                     <ul className="list-group list-group-flush">
//                         {fileInfos &&
//                             fileInfos.map((file, index) => (
//                                 <li className="list-group-item" key={index}>
//                                     <a href={file.url}>{file.name}</a>
//                                 </li>
//                             ))}
//                     </ul>
//                 </div>
//             </div>
//         );
//     }
// }
