import React from 'react';
import {Redirect, withRouter} from 'react-router-dom';
import IndexPage20200505 from "../Components/survey20200505/IndexPage20200505";


function IndexPageDistributor(props) {
	switch (props.match.params.surveyId) {
		case "20200505":
			return <IndexPage20200505/>;
		default:
			return <Redirect to="/"/>;
	}
}


export default withRouter(IndexPageDistributor);
