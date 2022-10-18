import React, {Component} from 'react';
import PageBase from "../components/PageBase";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import TagsContainer from "../components/TagsContainer";
import TransactionService from "../services/TransactionService";
import { withRouter } from "react-router-dom";

class AddTransaction extends Component {
    constructor(props) {
        super(props);

        this.state = {
            transactionType: "expense",
            amount: 0,
            date: new Date(),
            tags: {
                groceries: "brown",
                travels: "green",
                transport: "orange",
                home: "green",
                presents: "brown",
                restaurants: "green",
                rent: "orange"
            },
            selectedTags: [],
            newTags: [],
            isAddButtonClicked: false
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleDate = this.handleDate.bind(this);
        this.handleTagsSelection = this.handleTagsSelection.bind(this);
        this.handleTagsAddition = this.handleTagsAddition.bind(this);
    }
    handleSubmit(e) {
        e.preventDefault();
        TransactionService.addTransaction(
            this.state.transactionType,
            this.state.amount,
            this.state.date,
            this.state.selectedTags
        ).then(res => {
            console.log(res);
            this.props.history.push("/transactions");
        })

    }
    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    handleDate(picked) {
        this.setState({
            "date": picked
        });
    }
    handleTagsSelection(e) {
        this.setState(prevState => ({
            selectedTags: [...prevState.selectedTags, e.target.name]
        }));
    }
    handleTagsAddition(tagName, color) {
        this.setState(prevState => ({
            tags:
                {
                    ...prevState.tags,
                    [tagName]: color
                }
        }));
    }
    render() {
        console.log(this.state);

        return (
            <PageBase title="Transactions" active="transactions">
                <div className="container add-new-container">
                    <form onSubmit={this.handleSubmit}>
                        <select name="transactionType" value={this.state.transactionType} onChange={this.handleChange}>
                            <option value="income">Income</option>
                            <option value="expense">Expense</option>
                            <option value="own">Own transfer</option>
                        </select>
                        <input name="amount" value={this.state.amount} onChange={this.handleChange}/>
                        <DatePicker selected={this.state.date} onChange={this.handleDate} />
                        <button type="submit">Add transaction</button>
                    </form>
                    <TagsContainer
                        handleTagsAddition = {this.handleTagsAddition}
                        handleTagsSelection = {this.handleTagsSelection}
                        tags = {this.state.tags}
                    />
                </div>
            </PageBase>
        );
    }
}

export default withRouter(AddTransaction);