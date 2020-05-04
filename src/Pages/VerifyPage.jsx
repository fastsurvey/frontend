import React from 'react';
import useStyles from "../styles";
import Typography from "@material-ui/core/Typography";
import {Link, withRouter} from "react-router-dom";
import Button from "@material-ui/core/Button";
import queryString from "query-string";

function VerifyPage(props) {

	const classes = useStyles();

	let verifyEmail;
	const pathParams = queryString.parse(window.location.search);
	if ("email" in pathParams) {
		verifyEmail = pathParams["email"];
	}

	return (
		<React.Fragment>
			<div className={classes.textBox3}>
				<Typography variant="h4">
					Bitte bestätige deine Email Adresse!
				</Typography>
			</div>

			<div className={classes.textBox3}>
				<Typography variant="subtitle1">
					{([undefined, ""].includes(verifyEmail)) && (
						<React.Fragment>
							Email Adresse nochmal ändern?
						</React.Fragment>
					)}

					{(![undefined, ""].includes(verifyEmail)) && (
						<React.Fragment>
							<strong>{verifyEmail}</strong> ist nicht deine Email Adresse?
						</React.Fragment>
					)}
				</Typography>
			</div>

			<div className={classes.flexBoxRow}>
				<Link to={"/" + props.match.params.surveyId + "/form" + window.location.search}>
					<div className={classes.button}>
						<Button variant="contained" disableElevation>
							Zum Formular
						</Button>
					</div>
				</Link>
				<a href="https://mail.tum.de/" target="_self">
					<div className={classes.button}>
						<Button variant="contained" color="primary" disableElevation>
							mail.tum.de öffnen
						</Button>
					</div>
				</a>
			</div>
		</React.Fragment>
	);

}

export default withRouter(VerifyPage);
