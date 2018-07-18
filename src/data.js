var locations = [
    {
        name: 'CASTLE',
        x: 1265,
        y: 262,
        activities: [
            {
                label: "Socialise",
                image: document.getElementById('story-socialise'),
                outcomes: [
                    {
                        text: [
                            {
                                text: "You put on your best hat and go to make conversation with the nobles at the castle.",
                            },
                            {
                                text: "You stand and nod for a while, when suddenly everyone looks at you...",
                            },
                            {
                                choice: [
                                    {
                                        label: "Make a joke",
                                        outcomes: [
                                            {
                                                requirements: "game.stats.charm.value >= 3",
                                                text:[
                                                    {
                                                        text: "You tell the funniest joke you know and everyone laughs hysterically. You even did the actions!"
                                                    },
                                                ],
                                                result: {
                                                    gain: {
                                                        charm: 3,
                                                        finesse: 2,
                                                    },
                                                    lose: {}
                                                }
                                            },
                                            {
                                                requirements: "true",
                                                text:[
                                                    {
                                                        text: "You tell that joke that you read off a popsicle stick the other day."
                                                    },
                                                    {
                                                        text: "It's not very funny, and you got muddled up half way through. "
                                                    },
                                                    {
                                                        text: "The courtiers nod patronisingly and get on with their conversations."
                                                    },
                                                ],
                                                result: {
                                                    gain: {},
                                                    lose: {
                                                        charm: 2,
                                                        finesse: 2,
                                                    }
                                                }
                                            }
                                        ]
                                    },
                                    {
                                        label: "Do a somersault",
                                        outcomes: [
                                            {
                                                requirements: "game.stats.finesse.value >= 3",
                                                text:[
                                                    {
                                                        text: "You perform a dazzling acrobatic display and wow the courtiers! "
                                                    },
                                                    {
                                                        text: "Baron Burton is so impressed that he tips you a shiny coin."
                                                    },
                                                ],
                                                result: {
                                                    gain: {
                                                        wealth: 1,
                                                        finesse: 2,
                                                    },
                                                    lose: {}
                                                }
                                            },
                                            {
                                                requirements: "true",
                                                text:[
                                                    {
                                                        text: "You try to do a somersault but you don't have much finesse and accidentally fall right into a pyramid of champaign glasses. "
                                                    },
                                                    {
                                                        text: "You're okay, but you don't wait to see the courtiers reactions."
                                                    },
                                                ],
                                                result: {
                                                    gain: {},
                                                    lose: {
                                                        finesse: 1,
                                                        charm: 1
                                                    }
                                                }
                                            },
                                        ]
                                    },
                                ]
                            }
                        ]
                    },
                ]
            },
            {
                label: "Water flowers",
                image: document.getElementById('story-flowers'),
                outcomes: [
                    {
                        requirements: "Math.random() < 0.1",
                        text: [
                            {
                                text: "While digging up the weeds you find a leather pouch containing gold coins.",
                            },
                            {
                                choice: [
                                    {
                                        label: "Give it into the palace guard in case someone has lost it",
                                        outcomes: [
                                            {
                                                text:[
                                                    {
                                                        text: "The guard thanks you and says you are lovely."
                                                    },
                                                ],
                                                result: {
                                                    gain: {
                                                        charm: 2,
                                                        finesse: 1,
                                                    },
                                                    lose: {}
                                                }
                                            }
                                        ]
                                    },
                                    {
                                        label: "Keep it for yourself",
                                        outcomes: [
                                            {
                                                text:[
                                                    {
                                                        text: "You keep the money but can\'t help feeling that you\'ve been naughty."
                                                    },
                                                ],
                                                result: {
                                                    gain: {
                                                        wealth:5
                                                    },
                                                    lose: {
                                                        finesse: 1,
                                                        charm: 2
                                                    }
                                                }
                                            }
                                        ]
                                    },
                                ]
                            }
                        ],
                    },
                    {
                        requirements: "true",
                        text: [
                            {
                                text: "You have a relaxing day tending to the many flowers around the castle.",
                            },
                            {
                                text: "While in the garden, a magic frog appears from the pond and offers to grant you a wish!",
                            },
                            {
                                choice: [
                                    {
                                        label: "Wish to be charming and witty and great at banter.",
                                        outcomes: [
                                            {
                                                text:[
                                                    {
                                                        text: "He croaks and grants you your wish!"
                                                    },
                                                    {
                                                        text: "You feel funny anecdotes and charming ice breakers enter your mind..."
                                                    },
                                                ],
                                                result: {
                                                    gain: {
                                                        charm: 4,
                                                        farming: 2,
                                                    },
                                                    lose: {}
                                                }
                                            }
                                        ]
                                    },
                                    {
                                        label: "Wish to be a skillful musician.",
                                        outcomes: [
                                            {
                                                text:[
                                                    {
                                                        text: "The frog croaks and you begin to sing and tap a beat with your spade."
                                                    },
                                                    {
                                                        text: "You feel melodic ideas fill your mind."
                                                    },
                                                ],
                                                result: {
                                                    gain: {
                                                        finesse: 4,
                                                        farming: 2
                                                    },
                                                    lose: {}
                                                }
                                            }
                                        ]
                                    },
                                ]
                            }
                        ],
                    },
                ]
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
                image: document.getElementById('story-study'),
                outcomes: [
                    {
                        text: [
                            {
                                text: "You surround yourself with old sticky cooking books and try to understand the recipes."
                            }
                        ],
                        result: {
                            gain: {
                                finesse: 2,
                                baking: 2
                            },
                            lose: {}
                        }
                    }
                ]
            },
            {
                label: "Bake crumble",
                image: document.getElementById('story-bake'),
                outcomes: [
                    {
                        requirements: "game.stats.wealth.value < 1",
                        text: [
                            {
                                text: "You ask the baker if you can make a crumble."
                            },
                            {
                                text: "You don\'t have enough money to buy any flour or apples."
                            }
                        ],
                        result: {
                            gain: {},
                            lose: {
                                finesse: 1
                            }
                        }
                    },
                    {
                        requirements: "game.stats.baking.value < 4",
                        text: [
                            {
                                text: "You ask the baker if you can make a crumble."
                            },
                            {
                                text: "You make a massive mess all over the kitchen and the crumble looks a bit burned on top, but you learned a lot! "
                            },
                        ],
                        result: {
                            gain: {
                                baking: 3,
                            },
                            lose: {
                                wealth: 1
                            }
                        }
                    },
                    {
                        requirements: "game.stats.baking.value >= 4",
                        text: [
                            {
                                text: "You ask the baker if you can make a crumble. "
                            },
                            {
                                text:"The baker is wowed by your skills and amazing appley smells waft from the oven.",
                            },
                            {
                                text:"He offers to buy the crumble off you.",
                            },
                        ],
                        result: {
                            gain: {
                                baking: 2,
                                finesse: 1,
                                charm: 1,
                                wealth: 2
                            },
                            lose: {}
                        }
                    },
                ]
            }
        ]
    },
    {
        name: 'ORCHARD',
        x: 1200,
        y: 640,
        activities: [
            {
                label: "Pick apples",
                image: document.getElementById('story-apple'),
                outcomes: [
                    {
                        text: [
                            {
                                text: "You spend the day picking some delicious looking apples. You get a little hungry and the apples look so tasty...",
                            },
                            {
                                choice: [
                                    {
                                        label: "Eat an apple",
                                        outcomes: [
                                            {
                                                text:[
                                                    {
                                                        text: "As you bite into the apple the farmer sees you!"
                                                    },
                                                    {
                                                        text: "\"Naughty Mookie, eating all the apples!\" He charges you for the apple."
                                                    },
                                                ],
                                                result: {
                                                    gain: {
                                                        farming: 2
                                                    },
                                                    lose: {
                                                        wealth: 2,
                                                        charm: 1,
                                                    }
                                                }
                                            }
                                        ]
                                    },
                                    {
                                        label: "Take the apples back to the farmer",
                                        outcomes: [
                                            {
                                                text:[
                                                    {
                                                        text: "The farmer is so pleased with the great job you did picking apples that he tells you his secret for finding the tastiest ones! "
                                                    },
                                                    {
                                                        text: "He pays you for your work."
                                                    },
                                                ],
                                                result: {
                                                    gain: {
                                                        wealth: 2,
                                                        farming: 4
                                                    },
                                                    lose: {}
                                                }
                                            }
                                        ]
                                    },
                                ]
                            }
                        ],
                        result: {
                            gain: {},
                            lose: {
                                finesse: 1
                            }
                        }
                    },
                ]
            },
            {
                label: "Brew cider",
                image: document.getElementById('story-cider'),
                outcomes: [
                    {
                        text: [
                            {
                                text: "You have a go at making some cider using apples from the Great Kingdom\'s orchard.",
                            },
                            {
                                text: "The brewing equipment bubbles and fizzes, and out comes a stream of orange looking cider.",
                            },
                            {
                                choice: [
                                    {
                                        label: "Drink the cider",
                                        outcomes: [
                                            {
                                                text:[
                                                    {
                                                        text: "You take a big swig of the cider, only to discover that it is incredibly alcoholic...!"
                                                    },
                                                    {
                                                        text: "..........."
                                                    },
                                                    {
                                                        text: "You wake up in the brewing shed."
                                                    },
                                                    {
                                                        text: "There\'s equipment and cider all over the floor and you are covered in crumble. This will cost a lot to fix!"
                                                    },
                                                ],
                                                result: {
                                                    gain: {
                                                        farming: 1,
                                                        baking: 1
                                                    },
                                                    lose: {
                                                        wealth: 2,
                                                    }
                                                }
                                            }
                                        ]
                                    },
                                    {
                                        label: "Sell the cider",
                                        outcomes: [
                                            {
                                                text:[
                                                    {
                                                        text: "You ask if the apple farmer if he would like to buy your cider."
                                                    },
                                                    {
                                                        text: "He takes a sniff of it and makes a face. \"Yo\'ve put in too much alcohol Mookie!\""
                                                    },
                                                    {
                                                        text: "He doesn\'t buy any but you have a good laugh about it! "
                                                    },
                                                ],
                                                result: {
                                                    gain: {
                                                        baking: 2,
                                                        farming: 1,
                                                        charm: 1
                                                    },
                                                    lose: {}
                                                }
                                            }
                                        ]
                                    },
                                ]
                            }
                        ],
                        result: {
                            gain: {},
                            lose: {
                                finesse: 1
                            }
                        }
                    },
                ]
            },
        ]
    },
    {
        name: 'MEADOWS',
        x: 929,
        y: 221,
        activities: [
            {
                label: "Have a nap",
                image: document.getElementById('story-nap'),
                outcomes: [
                    {
                        requirements: "Math.random() < 0.1",
                        text: [
                            {
                                text: "You settle down and have a relaxing nap among the grass and flowers. "
                            },
                            {
                                text: "You have a vivid dream about baking a delicious cake!"
                            }
                        ],
                        result: {
                            gain: {
                                baking: 1
                            },
                            lose: {}
                        }
                    },
                    {
                        requirements: "Math.random() < 0.5",
                        text: [
                            {
                                text: "You settle down and have a relaxing nap among the grass and flowers. "
                            },
                            {
                                text: "You slowly awake to something snuffling around you. "
                            },
                            {
                                text: "You open your eyes and see a group of guinea pigs surrounding you."
                            },
                            {
                                text: "They thank you for keeping Mookie Meadows' grass so green for them to eat. "
                            },
                            {
                                text: "To pay you back, the ginger one whispers their people\'s secret guinea pig farming techniques into your ear!"
                            }
                        ],
                        result: {
                            gain: {
                                farming: 3,
                                charm: 1
                            },
                            lose: {}
                        }
                    },
                    {
                        requirements: "true",
                        text: [
                            {
                                text: "You settle down and have a relaxing nap among the grass and flowers. "
                            },
                            {
                                text: "You dream about the funniest joke ever. It even still seems funny when you wake up!"
                            }
                        ],
                        result: {
                            gain: {
                                charm: 2
                            },
                            lose: {}
                        }
                    },
                ]
            },
            {
                label: "Bounce",
                image: document.getElementById('story-bounce'),
                outcomes: [
                    {
                        requirements: "game.stats.finesse.value >= 3",
                        text: [
                            {
                                text: "You bounce around Mookie meadows having tons of fun!"
                            },
                            {
                                text: "You try to do a flip and manage to do an amazing 360! It\'s a shame no one was there to see it."
                            }
                        ],
                        result: {
                            gain: {
                                finesse: 2,
                                charm: 1
                            },
                            lose: {}
                        }
                    },
                    {
                        requirements: "true",
                        text: [
                            {
                                text: "You bounce around Mookie meadows having tons of fun."
                            },
                            {
                                text: "You try to do a flip but you aren\'t skilled enough and bang your head on the grass. Silly Mookie!"
                            },
                        ],
                        result: {
                            gain: {
                                finesse: 1,
                            },
                            lose: {
                                charm: 1
                            }
                        }
                    }
                ]
            }
        ]
    },
    {
        name: 'party',
        x: 929,
        y: 221,
        activities: [
            {
                label: "Have a nap",
                image: document.getElementById('story-nap'),
                outcomes: [
                    {
                        requirements: "Math.random() < 0.1",
                        text: [
                            {
                                text: "You settle down and have a relaxing nap among the grass and flowers. "
                            },
                            {
                                text: "You have a vivid dream about baking a delicious cake!"
                            }
                        ],
                        result: {
                            gain: {
                                baking: 1
                            },
                            lose: {}
                        }
                    },
                    {
                        requirements: "Math.random() < 0.5",
                        text: [
                            {
                                text: "You settle down and have a relaxing nap among the grass and flowers. "
                            },
                            {
                                text: "You slowly awake to something snuffling around you. "
                            },
                            {
                                text: "You open your eyes and see a group of guinea pigs surrounding you."
                            },
                            {
                                text: "They thank you for keeping Mookie Meadows' grass so green for them to eat. "
                            },
                            {
                                text: "To pay you back, the ginger one whispers their people\'s secret guinea pig farming techniques into your ear!"
                            }
                        ],
                        result: {
                            gain: {
                                farming: 3,
                                charm: 1
                            },
                            lose: {}
                        }
                    },
                    {
                        requirements: "true",
                        text: [
                            {
                                text: "You settle down and have a relaxing nap among the grass and flowers. "
                            },
                            {
                                text: "You dream about the funniest joke ever. It even still seems funny when you wake up!"
                            }
                        ],
                        result: {
                            gain: {
                                charm: 2
                            },
                            lose: {}
                        }
                    },
                ]
            },
            {
                label: "Bounce",
                image: document.getElementById('story-bounce'),
                outcomes: [
                    {
                        requirements: "game.stats.finesse.value >= 3",
                        text: [
                            {
                                text: "You bounce around Mookie meadows having tons of fun!"
                            },
                            {
                                text: "You try to do a flip and manage to do an amazing 360! It\'s a shame no one was there to see it."
                            }
                        ],
                        result: {
                            gain: {
                                finesse: 2,
                                charm: 1
                            },
                            lose: {}
                        }
                    },
                    {
                        requirements: "true",
                        text: [
                            {
                                text: "You bounce around Mookie meadows having tons of fun."
                            },
                            {
                                text: "You try to do a flip but you aren\'t skilled enough and bang your head on the grass. Silly Mookie!"
                            },
                        ],
                        result: {
                            gain: {
                                finesse: 1,
                            },
                            lose: {
                                charm: 1
                            }
                        }
                    }
                ]
            }
        ]
    }
];

var game = {
    day: 1,
    numberOfDays: 6,
    screen: "town",
    location: locations[0],
    activity: null,
    outcome: null,
    outcomeText: {
        complete: false,
        index: 0
    },
    beginTextAnimation: true,
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
//game.stats.wealth.value

