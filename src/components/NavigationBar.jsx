import React from 'react';
import {Link} from "react-router-dom";

const NavigationBar = ({activeTab}) => {
    const tabs = {
        "/": "leaderboard",
        "/transactions": "sync_alt"
    }
    return (
        <div className="nav-bar">
            <Link to="/" className="material-symbols-outlined nav-home"> account_balance_wallet </Link>
            {Object.keys(tabs).map(key => {
                const className = "material-symbols-outlined nav-tab " + (key === "/" + activeTab ? "active" : "");
                return <Link to={key} className={className} key={key}> {tabs[key]} </Link>}
            )}
        </div>
    );
};

export default NavigationBar;