import React, {useState} from 'react';
import Form from "./Form";

import axios from 'axios';
import MessageSnackbar from "../../Components/MessageSnackbar";
import queryString from 'query-string'

import {withRouter} from 'react-router-dom'
import {BACKEND_URL} from "../../constants";
import Container from "@material-ui/core/Container";


function FormPage(props) {

	const pathParams = queryString.parse(window.location.search);
	let initialState = {
		email: "",
		election: {
			erstsemester: {},
			veranstaltungen: {},
			skripte: {},
			quantum: {},
			kooperationen: {},
			it: {},
			evaluationen: {},
			hochschulpolitik: {},
			finanzen: {},
			pr: {},
		}
	};

	if ("email" in pathParams) {
		initialState.email = pathParams["email"].replace("+", " ");
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

	for (let i=0; i<names.length; i++) {
		let nameList = names[i].split(".");

		if (nameList[1] === "andere") {
			if (names[i] in pathParams) {
				initialState.election[nameList[0]][nameList[1]] = pathParams[names[i]];
			} else {
				initialState.election[nameList[0]][nameList[1]] = "";
			}
		} else {
			if (names[i] in pathParams) {
				initialState.election[nameList[0]][nameList[1]] = (pathParams[names[i]] === "true");
			} else {
				initialState.election[nameList[0]][nameList[1]] = false;
			}
		}
	}


	const [formValues, setFormValuesRaw] = useState(initialState);

	function setFormValues(newValues) {
		closeMessage();
		setFormValuesRaw(newValues);
	}

	function getPathParams() {
		let pathParams = "?email=" + formValues["email"];

		names.forEach((name) => {
			let nameList = name.split(".");
			pathParams += "&" + name + "=" + formValues.election[nameList[0]][nameList[1]];
		})

		return pathParams;
	}

	const [snackbar, setSnackbar] = useState({open: false, text: ""})
	const [submitting, setSubmitting] = useState(false);

	function closeMessage(){
		setSnackbar({open: false, text: snackbar.text});
	}

	function openMessage(text){
		setSnackbar({open: true, text: text});
	}

	function submit() {
		setSubmitting(true);
		closeMessage();
		console.log("Submit");

		let backend = axios.create({
			baseURL: BACKEND_URL,
			responseType: "json"
		});

		backend.post("fvv-ss20-referate/submit", {form_data: formValues})
			.then(() => {
				// Timeout needed so that the user does not get on
				// mail.tum.de too fast (when outlook has not received
				// the mail yet)
				setTimeout(() => {
					setSubmitting(false);
					props.history.push('/fvv-ss20-referate/verify' + getPathParams());
				}, 1500);
			})
			.catch(error => {
				// Timeout for a better visual experience
				setTimeout(() => {
					setSubmitting(false);
					props.history.push('/fvv-ss20-referate/form' + getPathParams());
					console.log(error.response.data.status);
					openMessage(error.response.data.status);
				}, 800);
			})
	}

	return (
		<Container maxWidth="sm">
			<Form
				formValues={formValues}
				setFormValues={setFormValues}
				handleSubmit={submit}
				submitting={submitting}
			/>
			<MessageSnackbar
				open={snackbar.open}
				text={snackbar.text}
				closeMessage={closeMessage}
			/>
		</Container>
	);

}

export default withRouter(FormPage);
