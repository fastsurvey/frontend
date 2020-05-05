import React from 'react';
import useStyles from "../../styles";
import clsx from "clsx";
import VotingImage from "../assets/undraw_voting_nvu7.svg";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Chart1 from "./charts/chart1";
import Collapse from "@material-ui/core/Collapse";

function ResultsPage20200504(props) {

    console.log(props.results);

    const classes = useStyles();

    return (
        <React.Fragment>
            <div className={classes.titleTextBox2}>
                <Typography variant="h4">
                    Semestersprecher-Wahl
                </Typography>
            </div>
            <div className={classes.titleTextBox2}>
                <Typography variant="h5">
                    6. Fachsemester, 04.05.2020
                </Typography>
            </div>
            <Container maxWidth="lg">
                <div className={classes.chartBox1}>
                    <Chart1 results={props.loading ? {} : props.results}/>
                </div>
            </Container>
        </React.Fragment>
    );

}

export default ResultsPage20200504;
