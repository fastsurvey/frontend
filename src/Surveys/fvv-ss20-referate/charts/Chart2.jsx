import React from 'react'
import {ResponsiveBar} from '@nivo/bar'
import Typography from "@material-ui/core/Typography";
import useStyles from "../../../styles";
import Divider from "@material-ui/core/Divider";
import Container from "@material-ui/core/Container";


// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.


function Chart2(props) {

    const classes = useStyles();
    let resultsFormatted = [];

    if (props.results !== undefined) {
        for (let i = 0; i < props.candidates.length; i++) {
            if (props.candidates[i].id !== "andere") {
                resultsFormatted.push({
                    "name": props.candidates[i].name,
                    "Stimmen": props.results[props.referat.id][props.candidates[i].id]
                });
            }
        }
    }

    return (
        <React.Fragment>
            <div className={classes.divider123}>
                <Divider/>
            </div>
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
        </React.Fragment>
    );
}

export default Chart2;
