import React, {useState} from 'react';
import {Redirect, withRouter} from 'react-router-dom';
import ResultsPage20200504 from "../Components/survey20200504/ResultsPage20200504";
import axios from 'axios';
import {BACKEND_URL} from "../constants";


function ResultsPageDistributor(props) {

	const [results, setResults] = useState({});
	const [loading, setLoading] = useState(true);

	const surveyId = props.match.params.surveyId;
	const validSurveyIds = ["20200504"];

	if (validSurveyIds.includes(surveyId) && Object.keys(results).length === 0) {
		axios.get(BACKEND_URL + surveyId + "/results").then(response => {
			setResults(response.data.results);
			setTimeout(() => {
				setLoading(false);
			}, 700);
		}).catch(() => {
			setTimeout(() => {
				setLoading(false);
			}, 700);
		})
	}

	switch (surveyId) {
		case "20200504":
			return <ResultsPage20200504 results={results} loading={loading}/>;
		default:
			return <Redirect to="/"/>;
	}
}


export default withRouter(ResultsPageDistributor);
