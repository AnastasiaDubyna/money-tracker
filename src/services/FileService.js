import axios from "axios";

const BASE_URL = "http://localhost:8080/api/v1/transaction/file";

class FileService {
    uploadFile(file) {
        const formData = new FormData();
        formData.append("file", file);
    
        const config = {
            headers: {
                "content-type": "multipart/form-data"
            }
        };
        
        const url = `${BASE_URL}/upload`;
        return axios.post(url, formData, config);
    }
}

export default new FileService();