import axios from "axios";

const BASE_URL = "http://localhost:8080/api/v1/transaction";

class TransactionService {
    getAllTransactions() {
        return axios.get(BASE_URL);
    }

    addTransaction(type, amount, date, tags) {
        const url = `${BASE_URL}/add`;
        console.log(
            {
                amount,
                type,
                date,
                tags
            }
        );
        return axios.post(url, {
            type,
            amount,
            date,
            tags
        })
    }
}

export default new TransactionService();