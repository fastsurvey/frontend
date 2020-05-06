
import React from 'react';
import { ResponsivePie } from '@nivo/pie';


// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.


function Chart3 (props) {

    let resultsFormatted = [
        {
            "id": "ja",
            "label": "ja",
            "value": props.results["ja"]
        }, {
            "id": "nein",
            "label": "Nein",
            "value": props.results["nein"]
        }, {
            "id": "enthaltung",
            "name": "Enthaltung",
            "value": props.results["enthaltung"]
        }
    ];

    console.log(props.results);
    console.log(resultsFormatted);

    return (
        <ResponsivePie
            data={resultsFormatted}
            margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
            innerRadius={0.5}
            padAngle={0.7}
            cornerRadius={3}
            colors={{scheme: 'red_yellow_green'}}
            borderWidth={1}
            borderColor={{ from: 'color', modifiers: [ [ 'darker', 0.2 ] ] }}
            radialLabelsSkipAngle={10}
            radialLabelsTextXOffset={6}
            radialLabelsTextColor="#333333"
            radialLabelsLinkOffset={0}
            radialLabelsLinkDiagonalLength={16}
            radialLabelsLinkHorizontalLength={24}
            radialLabelsLinkStrokeWidth={1}
            radialLabelsLinkColor={{ from: 'color' }}
            slicesLabelsSkipAngle={10}
            slicesLabelsTextColor="#333333"
            animate={true}
            motionStiffness={90}
            motionDamping={15}
        />
    );
}

export default Chart3;
