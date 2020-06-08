import React from "react";
import "../CSS/HomePage.css"
import logo from "../images/storLoggaFrostVitBakrund.png"
import { NavLink} from "react-router-dom";

const HomePage = (props) => {
    return(
        <div className="input-wrapper">
            <img className="logo-image" src={logo} alt="Logo"></img>
            <p className="text">Sidan som ger dig tips när du ska köpa nytt!</p>
            <form onSubmit>
                <input placeholder="Enter Budget" className="input-field" id="input" onChange={props.handleBudgetInput}/>
            </form>
            <NavLink to="/computer" >Compute Computer</NavLink>

        </div>
    )
}

export default HomePage;