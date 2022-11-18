import React, {useEffect} from 'react';
import PageBase from "../components/PageBase";
import TransactionService from "../services/TransactionService";

const Dashboard = () => {

    useEffect(() => {
        const dataDummy = {
            travel: 500,
            groceries: 1000,
            transport: 100,
            rent: 2000
        }
        // TransactionService.getExpensesByTags(new Date(), new Date())
        //     .then(res => {
        //         console.log(res);
        //     })
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