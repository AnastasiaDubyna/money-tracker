import React, {useEffect} from 'react';
import PageBase from "../components/PageBase";
import TransactionService from "../services/TransactionService";

const Dashboard = () => {

    useEffect(() => {
        TransactionService.getExpensesByTags(new Date(), new Date())
            .then(res => {
                console.log(res);
            })
    }, []);

    return (
        <PageBase title="Dashboard">
            <div className="body-container">
                Body
            </div>
        </PageBase>
    );
};

export default Dashboard;