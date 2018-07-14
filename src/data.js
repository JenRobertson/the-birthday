var locations = [
    {
        name: 'CASTLE',
        x: 1265,
        y: 262,
        activities: [
            {
                label: "Socialise",

            },
            {
                label: "Water flowers"
            }
        ]
    },
    {
        name: 'BAKERY',
        x: 748,
        y: 513,
        activities: [
            {
                label: "Study recipes",
            },
            {
                label: "Bake crumble",
                outcomes: [
                    {
                        requirements: "game.stats.wealth < 1",
                        text: "You ask the baker if you can make a crumble but you don’t have enough money to buy any flowers or apples.",
                        result: {
                            finesse: -1
                        }
                    },
                    {
                        requirements: "game.stats.wealth > 0 && game.stats.baking < 2",
                        text: "You ask the baker if you can make a crumble. You make a massive mess all over the kitchen and the crumble looks a bit burned on top, but you learned a lot!",
                        result: {
                            baking: 3,
                            wealth: -1
                        }
                    },
                    {
                        requirements: "game.stats.baking > 0 && game.stats.baking > 2",
                        text: "You ask the baker if you can make a crumble. The baker is wowed by your skills and amazing appley smells waft from the oven. He offers to buy the crumble off you.",
                        result: {
                            baking: 2,
                            finesse: 1,
                            charm: 1,
                            wealth: 2
                        }
                    },
                ]
            }
        ]
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
    activity: null,
    outcome: null,
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

