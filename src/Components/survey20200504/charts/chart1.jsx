
import React from 'react'
import { ResponsiveBar } from '@nivo/bar'


const data = [
    {
        "country": "AD",
        "hot dog": 10,
        "hot dogColor": "hsl(339, 70%, 50%)",
        "burger": 171,
        "burgerColor": "hsl(143, 70%, 50%)",
        "sandwich": 177,
        "sandwichColor": "hsl(116, 70%, 50%)",
        "kebab": 98,
        "kebabColor": "hsl(101, 70%, 50%)",
        "fries": 93,
        "friesColor": "hsl(105, 70%, 50%)",
        "donut": 45,
        "donutColor": "hsl(26, 70%, 50%)"
    },
    {
        "country": "AE",
        "hot dog": 148,
        "hot dogColor": "hsl(203, 70%, 50%)",
        "burger": 93,
        "burgerColor": "hsl(224, 70%, 50%)",
        "sandwich": 166,
        "sandwichColor": "hsl(215, 70%, 50%)",
        "kebab": 130,
        "kebabColor": "hsl(210, 70%, 50%)",
        "fries": 56,
        "friesColor": "hsl(242, 70%, 50%)",
        "donut": 42,
        "donutColor": "hsl(310, 70%, 50%)"
    },
    {
        "country": "AF",
        "hot dog": 15,
        "hot dogColor": "hsl(295, 70%, 50%)",
        "burger": 155,
        "burgerColor": "hsl(201, 70%, 50%)",
        "sandwich": 83,
        "sandwichColor": "hsl(283, 70%, 50%)",
        "kebab": 70,
        "kebabColor": "hsl(191, 70%, 50%)",
        "fries": 198,
        "friesColor": "hsl(230, 70%, 50%)",
        "donut": 62,
        "donutColor": "hsl(181, 70%, 50%)"
    },
    {
        "country": "AG",
        "hot dog": 77,
        "hot dogColor": "hsl(118, 70%, 50%)",
        "burger": 152,
        "burgerColor": "hsl(5, 70%, 50%)",
        "sandwich": 156,
        "sandwichColor": "hsl(26, 70%, 50%)",
        "kebab": 84,
        "kebabColor": "hsl(128, 70%, 50%)",
        "fries": 66,
        "friesColor": "hsl(293, 70%, 50%)",
        "donut": 162,
        "donutColor": "hsl(128, 70%, 50%)"
    },
    {
        "country": "AI",
        "hot dog": 152,
        "hot dogColor": "hsl(224, 70%, 50%)",
        "burger": 144,
        "burgerColor": "hsl(313, 70%, 50%)",
        "sandwich": 31,
        "sandwichColor": "hsl(231, 70%, 50%)",
        "kebab": 100,
        "kebabColor": "hsl(302, 70%, 50%)",
        "fries": 144,
        "friesColor": "hsl(3, 70%, 50%)",
        "donut": 46,
        "donutColor": "hsl(311, 70%, 50%)"
    },
    {
        "country": "AL",
        "hot dog": 18,
        "hot dogColor": "hsl(280, 70%, 50%)",
        "burger": 171,
        "burgerColor": "hsl(91, 70%, 50%)",
        "sandwich": 26,
        "sandwichColor": "hsl(287, 70%, 50%)",
        "kebab": 164,
        "kebabColor": "hsl(224, 70%, 50%)",
        "fries": 158,
        "friesColor": "hsl(292, 70%, 50%)",
        "donut": 189,
        "donutColor": "hsl(94, 70%, 50%)"
    },
    {
        "country": "AM",
        "hot dog": 8,
        "hot dogColor": "hsl(172, 70%, 50%)",
        "burger": 183,
        "burgerColor": "hsl(26, 70%, 50%)",
        "sandwich": 165,
        "sandwichColor": "hsl(65, 70%, 50%)",
        "kebab": 104,
        "kebabColor": "hsl(121, 70%, 50%)",
        "fries": 119,
        "friesColor": "hsl(239, 70%, 50%)",
        "donut": 30,
        "donutColor": "hsl(166, 70%, 50%)"
    }
]


// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.

function Chart1 (props) {

    let resultsFormatted = [
        {
            "name": "Steffi Albers",
            "Stimmen": props.results["albers"]
        }, {
            "name": "Jonas Ballweg",
            "Stimmen": props.results["ballweg"]
        }, {
            "name": "Clara Deniers",
            "Stimmen": props.results["deniers"]
        }, {
            "name": "Tobias Schmidt",
            "Stimmen": props.results["schmidt"],
            "StimmenColor": "rgb(0, 200, 0)"
        }
    ];


    console.log(props.results);
    console.log(resultsFormatted);

    return (
        <ResponsiveBar
            data={resultsFormatted}
            keys={[ 'Stimmen' ]}
            indexBy="name"
            margin={{top: 40, right: 60, bottom: 60, left: 60}}
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
            labelTextColor={{ from: 'color', modifiers: [ [ 'darker', 1.6 ] ] }}
            animate={true}
            motionStiffness={90}
            motionDamping={15}
        />
    );
}

export default Chart1;
