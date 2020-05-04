import React from 'react';
import useStyles from "../styles";
import Button from "@material-ui/core/Button";
import Drawing404 from '../Components/assets/Drawing_404.png';
import Typography from "@material-ui/core/Typography";
import clsx from "clsx";


function NotFoundPage() {

	const classes = useStyles();

	return (
		<React.Fragment>
			<div className={classes.flexBoxCol}>
				<div className={classes.textBox3}>
					<Typography variant="h4">
						Welcome to the MSE Survey Tool!
					</Typography>
				</div>
				<div className={classes.textBox3}>
					<Typography variant="subtitle1">
						Please <strong>use a valid link</strong> to take part in a survey.
					</Typography>
				</div>
			</div>
		</React.Fragment>
	);

}

export default NotFoundPage;
