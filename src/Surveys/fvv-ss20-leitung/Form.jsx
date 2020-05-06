import React from 'react';
import useStyles from "../../styles";
import {CustomTextField} from "../../Components/CustomTextField";
import Grid from "@material-ui/core/Grid";
import Checkbox from "@material-ui/core/Checkbox";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import clsx from "clsx";
import Collapse from '@material-ui/core/Collapse';

import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Container from "@material-ui/core/Container";


function ReferatRow(props) {

	const classes = useStyles();

	// TODO: Add Error indicator (no votes or too many votes)

	const referatId = props.referat.id;

	let voteCount = 0;
	let voteCountMessage = "";

	props.candidates.forEach((candidate) => {
		if (props.formValues.election[referatId][candidate.id]) {
			voteCount++;
		}
	})

	let andereList = (props.formValues.election[referatId]["andere"].split(","));
	for (let i=0; i<andereList.length; i++) {
		if (andereList[i] !== "" && andereList[i] !== " " && andereList[i] !== "  ") {
			voteCount++;
		}
	}

	if (voteCount === 0) {
		voteCountMessage = "Du enthälst dich ...";
	} else if (voteCount > 2) {
		voteCountMessage = "Maximal 2 Stimmen!";
	}

	let candidateList = props.candidates.map((candidate) => {
		const candidateId = candidate.id;

		return (
			<div className={clsx(classes.flexBoxRow)}>
				<Checkbox
					disabled={props.submitting}
					checked={props.formValues.election[referatId][candidate.id]}
					color="primary"
					onChange={() => props.handleElectionChange(
						referatId, candidateId, !props.formValues.election[referatId][candidateId])}
				/>
				<Typography variant="subtitle1"
							className={clsx(props.submitting ? classes.disabledText : "", classes.candidateTextLarge)}>
					{candidate.name}
				</Typography>
			</div>
		);
	});

	return (
		<ExpansionPanel elevation={3}>
			<ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
				<div className={classes.expansionSummaryBox}>
					<Typography variant="h6">
						{props.referat.name}
					</Typography>

					{voteCount <= 2 && (
						<Typography variant="subtitle1" className={classes.expansionIndicator}>{voteCountMessage}</Typography>
					)}
					{voteCount > 2 && (
						<Typography variant="subtitle1" className={classes.expansionError}>{voteCountMessage}</Typography>
					)}
				</div>
			</ExpansionPanelSummary>
			<ExpansionPanelDetails>
				<Container maxWidth="sm">
					<div className={classes.margin3}>
						{candidateList}
					</div>
					<CustomTextField
						disabled={props.submitting}
						label="Andere"
						fullWidth
						helperText="'<leer>' oder '<Name 1>' oder '<Name 1>, <Name 2>'"
						value={props.formValues.election[referatId]["andere"]}
						variant="outlined"
						onChange={(newValue) => props.handleElectionChange(referatId, "andere", newValue)}
					/>
				</Container>
			</ExpansionPanelDetails>
		</ExpansionPanel>

	);
}

const names = [
	"leitung.haver", "leitung.anhalt", "leitung.andere"
];

function Form(props) {

	const classes = useStyles();

	function handleEmailChange(newEmail) {

		// Deepcopy object without a library
		let newState = {
			email: newEmail,
			election: props.formValues.election,
		};

		props.setFormValues(newState);
	}

	function handleElectionChange(referatId, candidateId, newValue) {

		// Deepcopy object without a library
		let newState = {
			email: props.formValues.email,
			election: props.formValues.election,
		};

		for (let i=0; i<names.length; i++) {
			let nameList = names[i].split(".");

			// no distinction between "<name>" and "andere" necessary
			if (nameList[0] === referatId) {
				if (nameList[1] === candidateId) {
					newState.election[referatId][candidateId] = newValue;
				}
			}
		}

		props.setFormValues(newState);
	}



	return (
		<React.Fragment>
			<Grid container justitfy="center" spacing={2}>

				<div className={classes.titleTextBox2}>
					<Typography variant="h4">
						Wahl der Fachschaftsleitung
					</Typography>
				</div>
				<div className={classes.titleTextBox1}>
					<Typography variant="h5">
						FVV SS20, 06.05.2020
					</Typography>
				</div>
				<Grid item xs={12}>
					<CustomTextField
						disabled={props.submitting}
						label="Email"
						fullWidth
						helperText="<lrz-kennung>@mytum.de"
						value={props.formValues.email}
						variant="outlined"
						onChange={(newValue) => handleEmailChange(newValue)}
					/>
				</Grid>

				<Grid item xs={12}>
					<div className={classes.divider1}/>
				</Grid>

				<Grid item xs={12}>
					<ReferatRow
						submitting={props.submitting}
						formValues={props.formValues}
						handleElectionChange={handleElectionChange}
						referat={{
							name: "Fachschaftsleitung",
							id: "leitung"
						}}
						candidates={[
							{id: "haver", name: "Pauline Haver"},
							{id: "anhalt", name: "Aaron Anhalt"},
						]}
					/>
				</Grid>

				<Grid item xs={12}>

					<div className={classes.divider3}/>
					<Collapse className={classes.hintText}
							  in={!props.formValues.email.endsWith("@mytum.de") ||
							  props.formValues.email.length !== 16}>
						<em>Bitte gib eine gültige <strong>@mytum.de</strong> Email Adresse an</em>
					</Collapse>
					<div className={classes.divider2}/>

					<div className={classes.flexBoxRow}>
						<div className={classes.button}>
							<Button
								disabled={(
									props.submitting
								) || (
									!props.formValues.email.endsWith("@mytum.de") ||
									props.formValues.email.length !== 16
								)}
								variant="contained"
								color="primary"
								onClick={props.handleSubmit}
								disableElevation>
								Wahl Bestätigen
							</Button>
							{props.submitting && (
								<CircularProgress size={24}
								                  className={classes.buttonProgress}
								                  color="primary"/>
							)}
						</div>
					</div>
				</Grid>
			</Grid>
		</React.Fragment>
	);

}

export default Form;
