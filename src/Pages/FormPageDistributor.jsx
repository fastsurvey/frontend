import React from 'react';
import {Redirect, withRouter} from 'react-router-dom'
import FormPage20200504 from "../Surveys/survey-20200504/FormPage20200504";
import FormPage2 from "../Surveys/fvv-ss20-referate/FormPage";
import FormPage3 from "../Surveys/fvv-ss20-go/FormPage";
import FormPage4 from "../Surveys/fvv-ss20-entlastung/FormPage";


function FormPageDistributor(props) {
	switch (props.match.params.surveyId) {
		case "20200504":
			return <FormPage20200504/>;
		case "fvv-ss20-referate":
			return <FormPage2/>;
		case "fvv-ss20-go":
			return <FormPage3/>;
		case "fvv-ss20-entlastung":
			return <FormPage4/>;
		default:
			return <Redirect to="/"/>;
	}
}

export default withRouter(FormPageDistributor);
