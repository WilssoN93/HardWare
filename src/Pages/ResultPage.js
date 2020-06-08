import React from 'react';
import RestClient from '../DataExtraction/RestClient';


const ResultPage = (props) => {
     return <RestClient budget = {props.budget}/> 
}

export default ResultPage;