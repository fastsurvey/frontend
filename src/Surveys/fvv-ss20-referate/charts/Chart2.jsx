import React from 'react'
import {ResponsiveBar} from '@nivo/bar'
import Typography from "@material-ui/core/Typography";
import useStyles from "../../../styles";
import Divider from "@material-ui/core/Divider";
import Paper from "@material-ui/core/Paper";
import PersonIcon from '@material-ui/icons/Person';
import Chip from "@material-ui/core/Chip";

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.


function Chart2(props) {

    const classes = useStyles();
    let resultsFormatted = [];
    let andereResults = [];

    if (props.results !== undefined) {
        for (let i = 0; i < props.candidates.length; i++) {
            resultsFormatted.push({
                "name": props.candidates[i].name,
                "Stimmen": props.results[props.referat.id][props.candidates[i].id]
            });
        }

        const andereDict = props.results[props.referat.id]["andere"];
        const keys = Object.keys(andereDict);

        for (let j = 0; j < keys.length; j++) {
            andereResults.push({
                "name": keys[j],
                "Stimmen": andereDict[keys[j]]
            });
        }

        andereResults = andereResults.sort((a, b) => {
            return b["Stimmen"] - a["Stimmen"]
        })
    }

    console.log(andereResults)

    return (
        <Paper elevation={3} className={classes.resultsPaper}>
            <Typography variant="h6" className={classes.titleTextBox3}>
                {props.referat.name}
            </Typography>
            <div style={{height: 200}}>
                <ResponsiveBar
                    data={resultsFormatted}
                    keys={['Stimmen']}
                    indexBy="name"
                    margin={{top: 40, right: 25, bottom: 25, left: 25}}
                    padding={0.3}
                    colors={{scheme: 'red_yellow_green'}}
                    colorBy="index"
                    borderRadius={3}

                    axisTop={null}
                    axisRight={null}
                    axisBottom={{
                        tickSize: 5,
                        tickPadding: 5,
                        tickRotation: 0,
                        legend: 'Kandidaten',
                        legendPosition: 'middle',
                        legendOffset: 32
                    }}
                    axisLeft={{
                        tickSize: 5,
                        tickPadding: 5,
                        tickRotation: 0,
                        legend: 'Anzahl an Stimmen',
                        legendPosition: 'middle',
                        legendOffset: -40
                    }}
                    labelSkipWidth={12}
                    labelSkipHeight={12}
                    labelTextColor={{from: 'color', modifiers: [['darker', 1.6]]}}
                    animate={true}
                    motionStiffness={90}
                    motionDamping={15}
                />
            </div>
            {andereResults.length !== 0 && (
                <div component="ul" className={classes.chipRoot}>
                    {andereResults.map((data) => {
                        return (
                            <li key={data["name"]}>
                                <Chip
                                    icon={<PersonIcon/>}
                                    label={data["name"] + " (" + data["Stimmen"].toString() +
                                    " Stimme" + (data["Stimmen"] === 1 ? "" : "n") + ")"}
                                    className={classes.chip}
                                />
                            </li>
                        );
                    })}
                </div>
            )}
        </Paper>
    );
}

export default Chart2;
