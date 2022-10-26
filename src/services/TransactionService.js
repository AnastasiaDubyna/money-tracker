import axios from "axios";

const BASE_URL = "http://localhost:8080/api/v1/transaction";

class TransactionService {

    getAllTransactions() {
        const url = `${BASE_URL}/all`;
        return axios.get(url);
        // return dataDummy;
    }

    getExpensesByTags(startDate, endDate) {
        const url = `${BASE_URL}/getByTags`;
        return axios.get(url, {
            params: {
                startDate,
                endDate
            }
        })
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

