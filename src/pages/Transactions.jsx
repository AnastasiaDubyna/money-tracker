import React, {useEffect, useState} from 'react';
import PageBase from "../components/PageBase";
import {Link} from "react-router-dom";
import TransactionService from "../services/TransactionService";
import TransactionsList from "../components/TransactionsList";

const Transactions = () => {
    const [transactions, setTransactions] = useState();


    useEffect(() => {
        TransactionService.getAllTransactions().then(res => {
            // console.log(res.data);
            setTransactions(res.data.map(transaction => {
                let date = transaction.date;
                transaction.date = new Date(date).toDateString();
                return transaction;
            }));
        }).catch((error) => {
            console.log(error.message);
        });
    }, []);

    function makeTransactionLists() {
        const components = [];
        let date = transactions[0].date;
        transactions.reduce((acc, transaction, index) => {
            if (date !== transaction.date || index === transactions.length - 1) {
                components.push(<TransactionsList transactions={acc.splice(0, acc.length)} date={date}/>);
                date = transaction.date;
            }
            acc.push(transaction);
            return acc;
        }, []);
        return components;
    }

    return (
        <PageBase title="Transactions" active="transactions">
            <div className="transaction-page-content">
                <Link to="/transactions/add" className="material-symbols-outlined add-button">add_box</Link>
                <div className="container">
                    {transactions ? makeTransactionLists() : ""}
                </div>
            </div>
        </PageBase>
    );
};


export default Transactions;