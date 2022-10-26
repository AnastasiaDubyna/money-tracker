import React, {useState} from 'react';
import PageBase from "../components/PageBase";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import TagsContainer from "../components/TagsContainer";
import TransactionService from "../services/TransactionService";
import {useHistory} from "react-router-dom";

const AddTransaction = () => {
    const [transactionType, setTransactionType] = useState("expense");
    const [amount, setAmount] = useState(0);
    const [date, setDate] = useState(new Date());
    const [tags, setTags] = useState({
        groceries: "brown",
        travels: "green",
        transport: "orange",
        home: "green",
        presents: "brown",
        restaurants: "green",
        rent: "orange"
    })
    const [selectedTags, setSelectedTags] = useState([]);
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        TransactionService.addTransaction(transactionType, amount, date, selectedTags)
            .then(res => {
                console.log(res);
                history.push("/transactions");
            })
    }
    const handleChange = stateSetter => {
        return event => {
            stateSetter(event.target.value);
        }
    }
    const handleDate = pickedDate => {
        setDate(pickedDate);
    }
    const handleTagsSelection = e => {
        setSelectedTags(prevState => [...prevState, e.target.name]);
    }
    const handleTagsAddition = (tagName, color) => {
        setTags(prevState => ({
            ...prevState,
            tagName: color
        }))
    }

    return (
        <PageBase title="Transactions" active="transactions">
            <div className="container add-new-container">
                <form onSubmit={handleSubmit}>
                    <select name="transactionType" value={transactionType} onChange={handleChange(setTransactionType)}>
                        <option value="income">Income</option>
                        <option value="expense">Expense</option>
                        <option value="own">Own transfer</option>
                    </select>
                    <input name="amount" value={amount} onChange={handleChange(setAmount)}/>
                    <DatePicker selected={date} onChange={handleDate} />
                    <button type="submit">Add transaction</button>
                </form>
                <TagsContainer
                    handleTagsAddition = {handleTagsAddition}
                    handleTagsSelection = {handleTagsSelection}
                    tags = {tags}
                />
            </div>
        </PageBase>
    );
};


export default AddTransaction;