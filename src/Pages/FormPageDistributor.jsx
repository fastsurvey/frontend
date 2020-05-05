import React from 'react';
import {Redirect, withRouter} from 'react-router-dom'
import FormPage20200504 from "../Components/survey20200504/FormPage20200504";


function FormPageDistributor(props) {
	switch (props.match.params.surveyId) {
		case "20200504":
			return <FormPage20200504/>;
		default:
			return <Redirect to="/"/>;
	}
}

export default withRouter(FormPageDistributor);
