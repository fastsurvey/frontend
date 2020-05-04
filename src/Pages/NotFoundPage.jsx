import React from 'react';
import useStyles from "../styles";
import Button from "@material-ui/core/Button";
import Drawing404 from '../Components/assets/Drawing_404.png';


function NotFoundPage() {

	const classes = useStyles();

	return (
		<React.Fragment>
			<div className={classes.NotFoundDrawingBox}>
				<img src={Drawing404} alt="404 Drawing" className={classes.NotFoundDrawing}/>
			</div>

			<div className={classes.flexBoxRow}>
				<a href="/">
					<Button variant="contained" color="primary" disableElevation>
						Zur Startseite
					</Button>
				</a>
			</div>
		</React.Fragment>
	);

}

export default NotFoundPage;
