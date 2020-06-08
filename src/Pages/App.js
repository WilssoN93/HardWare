import React from "react";
import {Route, Switch} from "react-router-dom";
import HomePage from "../Pages/HomePage";
import AboutPage from "./AboutPage"
import Header from "../common/Header"
import ResultPage from "./ResultPage"
import ErrorPage from "./ErrorPage";
import "../CSS/App.css"
 
const App = () => {

    let budget = 0;

    function handleBudgetInput(){
        budget = document.getElementById("input").value
    }

    return  (
    <div className="App">
        <Header/>
        <Switch>
            <Route exact path= "/" render={() => <HomePage handleBudgetInput={handleBudgetInput}/>}/>
            <Route path="/about" component={AboutPage}/>
            <Route path="/computer" render={() => Number(budget) === Number(0) || isNaN(budget) ? <ErrorPage/> : <ResultPage budget={budget}/>}/>
        </Switch>
    </div>
    )
}

export default App;