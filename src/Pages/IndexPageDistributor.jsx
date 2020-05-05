import React from 'react';
import {Redirect, withRouter} from 'react-router-dom';
import IndexPage20200504 from "../Surveys/survey-20200504/IndexPage20200504";
import IndexPage2 from "../Surveys/fvv-ss20-referate/IndexPage";

function IndexPageDistributor(props) {
	switch (props.match.params.surveyId) {
		case "20200504":
			return <IndexPage20200504/>;
		case "fvv-ss20-referate":
			return <IndexPage2/>;
		default:
			return <Redirect to="/"/>;
	}
}


export default withRouter(IndexPageDistributor);
