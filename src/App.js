import './scss/styles';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Transactions from "./pages/Transactions";
import AddTransaction from "./pages/AddTransaction";
import Import from "./pages/Import";

function App() {
    return (
	<Router>
		<Switch>
			<Route path="/" exact component={Dashboard} />
			<Route path="/transactions" exact component={Transactions} />
			<Route path="/import" exact component={Import} />
			<Route path="/transactions/add" exact component={AddTransaction} />

		</Switch>
	</Router>
  );
}

export default App;
