import React from 'react';
import useStyles from "../../styles";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Chart2 from "../fvv-ss20-referate/charts/Chart2";


function ResultsPage(props) {

    console.log(props.results);

    const classes = useStyles();

    return (
        <React.Fragment>
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
            <Container maxWidth="lg">

                <Chart2
                    results={props.loading ? undefined : props.results}
                    referat={{
                        name: "Fachschaftsleitung",
                        id: "leitung"
                    }}
                    candidates={[
                        {id: "haver", name: "Pauline Haver"},
                        {id: "anhalt", name: "Aaron Anhalt"},
                    ]}
                />

            </Container>
        </React.Fragment>
    );

}

export default ResultsPage;
