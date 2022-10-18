import React, {Component} from 'react';
import PageBase from "../components/PageBase";
import {Link} from "react-router-dom";
import TransactionService from "../services/TransactionService";

class Transactions extends Component {
    getTransactionsData() {
        TransactionService.getAllTransactions().then(res => {
            console.log(res.data);
        }).catch((error) => {
            console.log(error.message);
        });
    }
    componentDidMount() {
        this.getTransactionsData();
    }

    render() {
        return (
            <PageBase title="Transactions" active="transactions">
                <Link to="/transactions/add" className="material-symbols-outlined add-button">add_box</Link>
            </PageBase>
        );
    }
}

export default Transactions;