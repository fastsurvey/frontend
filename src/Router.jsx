import React from 'react';
import {Switch, Route, BrowserRouter, Link} from 'react-router-dom';
import IndexPage from "./Pages/IndexPage";
import FormPage from "./Pages/FormPage";
import VerifyPage from "./Pages/VerifyPage";
import SuccessPage from "./Pages/SuccessPage";
import NotFoundPage from "./Pages/NotFoundPage";
import Container from "@material-ui/core/Container";
import useStyles from "./styles";
import MSELogo from './Components/assets/MSELogo.png';
import {withRouter} from 'react-router-dom';


function ContentComponent (props) {
	const classes = useStyles();

	return (
		<div className={classes.page}>
			<div className={classes.cornerLogoBox}>
				<Link to={"/" + props.match.params.surveyId}>
					<img src={MSELogo} alt="MSE Logo" className={classes.cornerLogo}/>
				</Link>
			</div>
			<Container maxWidth="sm">
				<div className={classes.main}>
					{props.children}
				</div>
			</Container>
		</div>
	)
}

const Content = withRouter(ContentComponent);


function Router() {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact strict path="/:surveyId">
					<Content>
						<IndexPage/>
					</Content>
				</Route>

				<Route exact strict path="/:surveyId/form">
					<Content>
						<FormPage/>
					</Content>
				</Route>

				<Route exact strict path="/:surveyId/verify">
					<Content>
						<VerifyPage/>
					</Content>
				</Route>

				<Route exact strict path="/:surveyId/success">
					<Content>
						<SuccessPage/>
					</Content>
				</Route>

				<Route path="/:surveyId">
					<Content>
						<NotFoundPage/>
					</Content>
				</Route>

				<Route>
					<Content>
						<NotFoundPage/>
					</Content>
				</Route>
			</Switch>
		</BrowserRouter>
	);
}


export default Router;
