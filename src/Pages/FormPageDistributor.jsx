import React from 'react';
import {Redirect, withRouter} from 'react-router-dom'
import FormPage20200505 from "../Components/survey20200505/FormPage20200505";


function FormPageDistributor(props) {
	switch (props.match.params.surveyId) {
		case "20200505":
			return <FormPage20200505/>;
		default:
			return <Redirect to="/"/>;
	}
}


export default withRouter(FormPageDistributor);
