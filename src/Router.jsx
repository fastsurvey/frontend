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

function Content (props) {
	const classes = useStyles();

	return (
		<div className={classes.page}>
			<div className={classes.cornerLogoBox}>
				<Link to="/">
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


function Router() {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact strict path="/20200505">
					<Content>
						<IndexPage/>
					</Content>
				</Route>

				<Route exact strict path="/20200505/form">
					<Content>
						<FormPage/>
					</Content>
				</Route>

				<Route exact strict path="/20200505/verify">
					<Content>
						<VerifyPage/>
					</Content>
				</Route>

				<Route exact strict path="/20200505/success">
					<Content>
						<SuccessPage/>
					</Content>
				</Route>

				<Route path="/20200505">
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
