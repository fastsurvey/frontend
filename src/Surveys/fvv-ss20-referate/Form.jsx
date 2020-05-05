import React from 'react';
import useStyles from "../../styles";
import {CustomTextField} from "../../Components/CustomTextField";
import Grid from "@material-ui/core/Grid";
import Checkbox from "@material-ui/core/Checkbox";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import PortraitAlbers from '../assets/albers.jpg';
import PortraitBallweg from '../assets/ballweg.jpg';
import PortraitDeniers from '../assets/deniers.jpeg';
import PortraitSchmidt from '../assets/schmidt.jpeg';
import clsx from "clsx";
import {Breakpoint} from "react-socks";
import Collapse from '@material-ui/core/Collapse';

function CandidateRow(props) {

	const classes = useStyles();

	return (

		<div className={classes.flexBoxRow}>
			<Checkbox
				disabled={props.submitting}
				checked={props.checked}
				color="primary"
				onChange={props.onChange}
			/>
			<Typography variant="subtitle1"
						className={clsx(props.submitting ? classes.disabledText : "", classes.candidateTextSmall)}>
				{props.name}
			</Typography>
		</div>

	);
}

const names = [
	"erstsemester.koenigbaur", "erstsemester.wernsdorfer", "erstsemester.andere",
	"veranstaltungen.ritter", "veranstaltungen.pro", "veranstaltungen.andere",
	"skripte.lukasch", "skripte.limant", "skripte.andere",
	"quantum.albrecht", "quantum.roithmaier", "quantum.andere",
	"kooperationen.winckler", "kooperationen.andere",
	"it.kalk", "it.sittig", "it.andere",
	"evaluationen.reichelt", "evaluationen.andere",
	"hochschulpolitik.armbruster", "hochschulpolitik.paulus", "hochschulpolitik.andere",
	"finanzen.spicker", "finanzen.schuh", "finanzen.andere",
	"pr.werle", "pr.andere",
];

function Form(props) {

	const classes = useStyles();

	function handleFormChange(stateUpdate) {

		// Deepcopy object without a library
		let newState = {
			email: props.formValues.email,
			election: props.formValues.election,
		};

		if ("email" in stateUpdate) {
			newState.email = stateUpdate.email;
		}

		if ("election" in stateUpdate) {
			for (let i=0; i<names.length; i++) {
				let nameList = names[i].split(".");

				// no distinction between "<name>" and "andere" necessary
				if (nameList[0] in stateUpdate) {
					if (nameList[1] in stateUpdate[nameList[0]]) {
						newState.election[nameList[0]][nameList[1]] = stateUpdate.election[nameList[0]][nameList[1]];
					}
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
						Semestersprecher Wahl
					</Typography>
				</div>
				<div className={classes.titleTextBox1}>
					<Typography variant="h5">
						6. Fachsemester, 04.05.2020
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
						onChange={(newValue) => handleFormChange({email: newValue})}
					/>
				</Grid>

				<Grid item xs={12}>
					<div className={classes.divider3}/>
				</Grid>

				<Grid item xs={12}>
					<CandidateRow
						submitting={props.submitting}
						checked={props.formValues.election.albers}
						onChange={() => handleFormChange({election: {albers: !props.formValues.election.albers}})}
						name="Steffi Albers"
						image={PortraitAlbers}
					/>
				</Grid>

				<Grid item xs={12}>
					<CandidateRow
						submitting={props.submitting}
						checked={props.formValues.election.ballweg}
						onChange={() => handleFormChange({election: {ballweg: !props.formValues.election.ballweg}})}
						name="Jonas Ballweg"
					/>
				</Grid>

				<Grid item xs={12}>
					<CandidateRow
						submitting={props.submitting}
						checked={props.formValues.election.deniers}
						onChange={() => handleFormChange({election: {deniers: !props.formValues.election.deniers}})}
						name="Clara Deniers"
					/>
				</Grid>

				<Grid item xs={12}>
					<CandidateRow
						submitting={props.submitting}
						checked={props.formValues.election.schmidt}
						onChange={() => handleFormChange({election: {schmidt: !props.formValues.election.schmidt}})}
						name="Tobias Schmidt"
					/>
				</Grid>

				<Grid item xs={12}>

					<div className={classes.divider2}/>
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
