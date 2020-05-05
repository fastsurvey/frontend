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

	if (validSurveyIds.includes(surveyId)) {
		loadResults();
	}

	function loadResults() {
		axios.get(BACKEND_URL + surveyId + "/results").then(response => {
			setResults(response.data.results);
			setLoading(false);
		}).catch(() => {
			setLoading(false);
		})
	}

	switch (surveyId) {
		case "20200504":
			return <ResultsPage20200504 results={results} loading={loading} triggerReload={loadResults}/>;
		default:
			return <Redirect to="/"/>;
	}
}


export default withRouter(ResultsPageDistributor);
