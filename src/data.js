var locations = [
    {
        name: 'CASTLE',
        x: 1265,
        y: 262,
        activities: [
            {
                label: "Socialise"
            },
            {
                label: "Water flowers"
            }
        ]
    },
    {
        name: 'BAKERY',
        x: 748,
        y: 513
    },
    {
        name: 'ORCHARD',
        x: 1200,
        y: 640
    },
    {
        name: 'MEADOWS',
        x: 929,
        y: 221
    }
];

var game = {
    screen: "town",
    location: locations[0],
    stats: {
        wealth: {
            label: 'Wealth',
            value: 0,
        },
        baking: {
            label: 'Baking',
            value: 2,
        },
        farming: {
            label: 'Farming',
            value: 1,
        },
        finesse: {
            label: 'Finesse',
            value: 1,
        },
        charm: {
            label: 'Charm',
            value: 2,
        }
    }
}

