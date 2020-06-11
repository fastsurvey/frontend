import React from 'react';
import useStyles from "../../styles";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Chart3 from "./charts/Chart3";

function ResultsPage(props) {

    console.log(props.results);

    const classes = useStyles();

    return (
        <React.Fragment>
            <div className={classes.titleTextBox2}>
                <Typography variant="h4">
                    Abstimmung zur Geschäftsordnung der Fachschaft
                </Typography>
            </div>
            <div className={classes.titleTextBox1}>
                <Typography variant="h5">
                    FVV SS20, 06.05.2020
                </Typography>
            </div>
            <Container maxWidth="lg">
                <div className={classes.chartBox3}>
                    <Chart3 results={props.loading ? {} : props.results}/>
                </div>
            </Container>
        </React.Fragment>
    );

}

export default ResultsPage;
