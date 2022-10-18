import React, { Component } from 'react';
import PageBase from '../components/PageBase';
import FileService from '../services/FileService';

class Import extends Component {
    constructor(props) {
        super(props);

        this.state = {
            uploadedFile: ""
        };

        this.handleFileUpload = this.handleFileUpload.bind(this); 
    }

    handleFileUpload(e) {
        FileService.uploadFile(e.target.files[0]).then(e => {
            console.log("File uploaded");
        })
    }

    render() {
        return (
            <PageBase>
                <input 
                    type="file"
                    value={this.state.uploadedFile}
                    onChange={this.handleFileUpload}
                />
            </PageBase>
        );
    }
}

export default Import;