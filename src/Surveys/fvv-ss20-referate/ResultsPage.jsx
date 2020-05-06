import React from 'react';
import useStyles from "../../styles";
import clsx from "clsx";
import VotingImage from "../assets/undraw_voting_nvu7.svg";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Chart2 from "./charts/Chart2";
import Collapse from "@material-ui/core/Collapse";
import Divider from "@material-ui/core/Divider";

function ResultsPage(props) {

    console.log(props.results);

    const classes = useStyles();

    return (
        <React.Fragment>
            <div className={classes.titleTextBox2}>
                <Typography variant="h4">
                    Wahl der Fachschafts-Referate
                </Typography>
            </div>
            <div className={classes.titleTextBox1}>
                <Typography variant="h5">
                    FVV, 06.05.2020
                </Typography>
            </div>
            <Container maxWidth="lg">

                <Chart2
                    results={props.loading ? undefined : props.results}
                    referat={{
                        name: "Erstsemester-Referat",
                        id: "erstsemester"
                    }}
                    candidates={[
                        {id: "koenigbaur", name: "Marie Königbaur"},
                        {id: "wernsdorfer", name: "Ruben Wernsdorfer"},
                    ]}
                />

                <Chart2
                    results={props.loading ? undefined : props.results}
                    referat={{
                        name: "Veranstaltungs-Referat",
                        id: "veranstaltungen"
                    }}
                    candidates={[
                        {id: "ritter", name: "Alvaro Ritter"},
                        {id: "pro", name: "Daniel San José Pro"},
                    ]}
                />

                <Chart2
                    results={props.loading ? undefined : props.results}
                    referat={{
                        name: "Skripten-Referat",
                        id: "skripte"
                    }}
                    candidates={[
                        {id: "lukasch", name: "Carolin Lukasch"},
                        {id: "limant", name: "Semyon Limant"},
                    ]}
                />

                <Chart2
                    results={props.loading ? undefined : props.results}
                    referat={{
                        name: "Quantum-Referat",
                        id: "quantum"
                    }}
                    candidates={[
                        {id: "albrecht", name: "Lena Albrecht"},
                        {id: "roithmaier", name: "Tobias Roithmaier"},
                    ]}
                />

                <Chart2
                    results={props.loading ? undefined : props.results}
                    referat={{
                        name: "Kooperationen-Referat",
                        id: "kooperationen"
                    }}
                    candidates={[
                        {id: "winckler", name: "Klara Winckler"},
                    ]}
                />

                <Chart2
                    results={props.loading ? undefined : props.results}
                    referat={{
                        name: "IT-Referat",
                        id: "it"
                    }}
                    candidates={[
                        {id: "kalk", name: "Maximilian Kalk"},
                        {id: "sittig", name: "Malte Sittig"},
                    ]}
                />

                <Chart2
                    results={props.loading ? undefined : props.results}
                    referat={{
                        name: "Evalutionen-Referat",
                        id: "evaluationen"
                    }}
                    candidates={[
                        {id: "reichelt", name: "Charlotte Reichelt"},
                    ]}
                />

                <Chart2
                    results={props.loading ? undefined : props.results}
                    referat={{
                        name: "Hochschulpolitik-Referat",
                        id: "hochschulpolitik"
                    }}
                    candidates={[
                        {id: "armbruster", name: "Luis Armbruster"},
                        {id: "paulus", name: "Jona Paulus"},
                    ]}
                />

                <Chart2
                    results={props.loading ? undefined : props.results}
                    referat={{
                        name: "Finanzen-Referat",
                        id: "finanzen"
                    }}
                    candidates={[
                        {id: "schuh", name: "Anna Schuh"},
                        {id: "spicker", name: "Daniel Spicker"},
                    ]}
                />

                <Chart2
                    results={props.loading ? undefined : props.results}
                    referat={{
                        name: "PR-Referat",
                        id: "pr"
                    }}
                    candidates={[
                        {id: "werle", name: "Lara Werle"}
                    ]}
                />
            </Container>
        </React.Fragment>
    );

}

export default ResultsPage;
