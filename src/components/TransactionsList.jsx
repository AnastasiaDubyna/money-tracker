import React from 'react';

const TransactionsList = (props) => {
    const tags = {
        groceries: "brown",
        travels: "green",
        transport: "orange",
        home: "green",
        presents: "brown",
        restaurants: "green",
        rent: "orange"
    };

    const arrows = {
        expense: "east",
        income: "west",
        own: "sync"
    }

    return (
        <div className="transactions-list">
            <h3 className="transaction-date">{props.date}</h3>
            {props.transactions.map(transactionObj =>
                <div className="transaction-record">
                    <div className="type">
                        <span>{transactionObj.type}</span>
                        <span className={`material-symbols-outlined ${arrows[transactionObj.type]}`}>{arrows[transactionObj.type]}</span>
                    </div>
                    <span className="amount">{transactionObj.amount}</span>
                    <div className="tags">
                        {transactionObj.tags.map(tag =>
                            <p className={`tag ${tags[tag]}`}>{tag}</p>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default TransactionsList;