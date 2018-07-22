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
                                                        text: "You\'re okay, but you don't wait to see the courtiers reactions."
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
                    // {
                    //     requirements: "Math.random() < 0.5",
                    //     text: [
                    //         {
                    //             text: "You surround yourself with old sticky cooking books and try to understand the recipes."
                    //         }
                    //     ],
                    //     result: {
                    //         gain: {
                    //             finesse: 2,
                    //             baking: 2
                    //         },
                    //         lose: {}
                    //     }
                    // },
                    {
                        requirements: "true",
                        text: [
                            {
                                text: "You surround yourself with old sticky cooking books and try to understand the recipes."
                            },
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
                            lose: {}
                        }
                    },
                    {
                        requirements: "game.stats.baking.value < 3",
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
                                                requirements: "game.stats.farming.value >= 2 | game.stats.baking.value >= 2",
                                                text:[
                                                    {
                                                        text: "You take a big swig of the cider..."
                                                    },
                                                    {
                                                        text: "It\'s delicious!"
                                                    },
                                                    {
                                                        text: "You are impressed with yourself and gain confidence."
                                                    }
                                                ],
                                                result: {
                                                    gain: {
                                                        charm: 2,
                                                        farming: 1,
                                                        baking: 1,
                                                    },
                                                    lose: {}
                                                }
                                            },
                                            {
                                                requirements: "true",
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
                                                requirements: "game.stats.farming.value >= 2 | game.stats.baking.value >= 2",
                                                text:[
                                                    {
                                                        text: "You ask if the apple farmer if he would like to buy your cider."
                                                    },
                                                    {
                                                        text: "He takes a sniff of it and looks suprised. He takes a sip."
                                                    },
                                                    {
                                                        text: "\"Wow Mookie, this cider is amazing! You really know your stuff!\""
                                                    },
                                                    {
                                                        text: "\"I\'d love to buy a 3 barrels!\""
                                                    },
                                                    {
                                                        text: "You work together on a branding campaign and name it \'Mookie Cider\'"
                                                    },
                                                ],
                                                result: {
                                                    gain: {
                                                        wealth: 6,
                                                        baking: 2,
                                                        farming: 2,
                                                    },
                                                    lose: {}
                                                }
                                            },
                                            {
                                                requirements: "true",
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
                        requirements: "Math.random() < 0.3",
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
                        text: [
                            {
                                text: "You bounce around Mookie meadows having tons of fun!"
                            },
                            {
                                choice: [
                                    {
                                        label: "Do a flip!",
                                        outcomes: [
                                            {
                                                requirements: "game.stats.finesse.value >=2",
                                                text:[
                                                    {
                                                        text: "You roll to the far end of the field and begin bouncing as fast as you can."
                                                    },
                                                    {
                                                        text: "You give your biggest bounce and rise into the air."
                                                    },
                                                    {
                                                        text: "With all your finesse, you manage to land the jump perfectly!"
                                                    },
                                                    {
                                                        text: "A near by bird is super impressed and sings you a charming song."
                                                    },
                                                ],
                                                result: {
                                                    gain: {
                                                        finesse: 1,
                                                        charm: 2
                                                    },
                                                    lose: {}
                                                }
                                            },
                                            {
                                                requirements: "true",
                                                text:[
                                                    {
                                                        text: "You roll to the far end of the field and begin bouncing as fast as you can."
                                                    },
                                                    {
                                                        text: "You give your biggest bounce and rise into the air."
                                                    },
                                                    {
                                                        text: "You rotate too far and end up landing with a thud right on your nose!"
                                                    },
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        label: "Do a rolly-polly",
                                        outcomes: [
                                            {
                                                text:[
                                                    {
                                                        text: "You do an adorable rolly-polly around the field."
                                                    },
                                                    {
                                                        text: "You notice a shiny gold coin in the grass!"
                                                    },
                                                ],
                                                result: {
                                                    gain: {
                                                        finesse: 2,
                                                        wealth: 1
                                                    },
                                                    lose: {}
                                                }
                                            }
                                        ]
                                    },
                                ]
                            }
                        ],
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
                label: "The Baker",
                image: document.getElementById('end-baker'),
                outcomes: [
                    {
                        requirements: "game.stats.baking.value >= 3 && game.stats.farming.value >= 3",
                        text: [
                            {
                                text: "You decide to help out by baking delicious puddings and cakes for Prince Gareth\'s birthday."
                            },
                            {
                                text: "You use your amazing farming skills to pick out the best apples and ask your fellow farmers for their freshest eggs."
                            },
                            {
                                text: "With all your baking knowledge you make an enourmous cake with blue frosting for Prince Gareth!"
                            },
                            {
                                text: "Your apple crumble is perfectly put together, with tasty apple and crunchy crumble."
                            },
                            {
                                text: "This helps the party immensely!",
                                function: "game.endResult = 'good'"
                            },
                        ],
                    },
                    {
                        requirements: "game.stats.baking.value >= 3",
                        text: [
                            {
                                text: "You decide to help out by baking delicious puddings and cakes for Prince Gareth\'s birthday."
                            },
                            {
                                text: "You look around for some spare ingredients, like apples, which might be laying around."
                            },
                            {
                                text: "With all your baking knowledge you make an enourmous cake with blue frosting for Prince Gareth!"
                            },
                            {
                                text: "Although the apple\'s weren\'t the freshest, your crumble still tastes pretty good."
                            },
                            {
                                text: "This helps the party!",
                                function: "game.endResult = 'ok'"
                            },
                        ],
                    },
                    {
                        requirements: "game.stats.farming.value >= 3",
                        text: [
                            {
                                text: "You decide to help out by baking delicious puddings and cakes for Prince Gareth\'s birthday."
                            },
                            {
                                text: "You use your amazing farming skills to pick out the best apples and ask your fellow farmers for their freshest eggs."
                            },
                            {
                                text: "You try your best to bake a cake for Prince Gareth, but the blue frosting goes everywhere and the cake is a bit droopy."
                            },
                            {
                                text: "Your apple crumble it a little overcooked, but the apples are high quality and taste divine."
                            },
                            {
                                text: "This helps the party!",
                                function: "game.endResult = 'ok'"
                            },
                        ],
                    },
                    {
                        requirements: "true",
                        text: [
                            {
                                text: "You decide to help out by baking delicious puddings and cakes for Prince Gareth\'s birthday."
                            },
                            {
                                text: "You look around for some spare ingredients, like apples, which might be laying around."
                            },
                            {
                                text: "You try your best to bake a cake for Prince Gareth, but the blue frosting goes everywhere and the cake is a bit droopy."
                            },
                            {
                                text: "Your apple crumble is a little overcooked and the ingredients taste pretty stale."
                            },
                            {
                                text: "This doesn\'t really help the party, but everyone thanks you for trying.",
                                function: "game.endResult = 'bad'"
                            },
                        ],
                    }
                ]
            },
            {
                label: "musician",
                image: document.getElementById('end-tuba'),
                outcomes: [
                    {
                        requirements: "game.stats.wealth.value >= 3 && game.stats.finesse.value >= 3",
                        text: [
                            {
                                text: "You decide to help by entertaining the guests at the party by playing some fun music."
                            },
                            {
                                text: "Your instrument of choice is the tuba!"
                            },
                            {
                                text: "You go to the instrument store and use your many gold coins to buy the shiniest and best tuba they have."
                            },
                            {
                                text: "With your considerable finesse, you manage to play the tuba beautifully. The guests are wowed and everyone begins dancing to your jaunty tune."
                            },
                            {
                                text: "This helps the party immensely!",
                                function: "game.endResult = 'good'"
                            },
                        ],
                    },
                    {
                        requirements: "game.stats.finesse.value >= 3",
                        text: [
                            {
                                text: "You decide to help by entertaining the guests at the party by playing some fun music."
                            },
                            {
                                text: "Your instrument of choice is the tuba!"
                            },
                            {
                                text: "You go to the instrument store but you don\'t have enough money to buy the tuba you wanted. All you can get is a triangle."
                            },
                            {
                                text: "With your considerable finesse, you manage to play a beautiful rhythm on the triangle. No one can really dance to the triangle, but everyone enjoys the music!"
                            },
                            {
                                text: "This helps the party!",
                                function: "game.endResult = 'ok'"
                            },
                        ],
                    },
                    {
                        requirements: "game.stats.wealth.value >= 3",
                        text: [
                            {
                                text: "You decide to help by entertaining the guests at the party by playing some fun music."
                            },
                            {
                                text: "Your instrument of choice is the tuba!"
                            },
                            {
                                text: "You go to the instrument store and use your many gold coins to buy the shiniest and best tuba they have."
                            },
                            {
                                text: "You don\'t have much finesse, but you try your best to play the tuba anyway."
                            },
                            {
                                text: "The amazing quality of the instrument slightly makes up for your dodgey playing. It\'s quite a funny moment and the party guests have a chuckle."
                            },
                            {
                                text: "This helps the party!",
                                function: "game.endResult = 'ok'"
                            },
                        ],
                    },
                    {
                        requirements: "true",
                        text: [
                            {
                                text: "You decide to help by entertaining the guests at the party by playing some fun music."
                            },
                            {
                                text: "Your instrument of choice is the tuba!"
                            },
                            {
                                text: "You go to the instrument store but you don\'t have enough money to buy the tuba you wanted. All you can get is a triangle."
                            },
                            {
                                text: "You don\'t have much finesse, and everyone awkwardly watches as you try and play the triangle."
                            },
                            {
                                text: "ding... ding.... dingding... ding."
                            },
                            {
                                text: "You tried your best but your music wasn\'t great and no one could really dance to it."
                            },
                            {
                                text: "This doesn\'t really help the party, but everyone thanks you for trying.",
                                function: "game.endResult = 'bad'"
                            }
                        ],
                    },
                ]
            },
            {
                label: "Host",
                image: document.getElementById('end-host'),
                outcomes: [
                    {
                        requirements: "game.stats.baking.value >= 3 && game.stats.charm.value >= 3",
                        text: [
                            {
                                text: "You decide to help out with the party by being the host!"
                            },
                            {
                                text: "You spend the evening handing out food and nibbles to dignitaries."
                            },
                            {
                                text: "With your impressive baking knowledge you\'re able to recommend different dishes to the guests and wow them with detailed background information."
                            },
                            {
                                text: "It\'s time to make a speech!"
                            },
                            {
                                text: "You tap into your iridescent charm and perform an eloquent, touching and humorous address. You crack a joke to finish and everyone falls around laughing."
                            },
                            {
                                text: "Prince Gareth wipes a tear from his eye. \"Thanks Mookie, that was aces!\""
                            },
                            {
                                text: "This helps the party immensely!",
                                function: "game.endResult = 'good'"
                            },
                        ],
                    },
                    {
                        requirements: "game.stats.baking.value >= 3",
                        text: [
                            {
                                text: "You decide to help out with the party by being the host!"
                            },
                            {
                                text: "You spend the evening handing out food and nibbles to dignitaries."
                            },
                            {
                                text: "With your impressive baking knowledge you\'re able to recommend different dishes to the guests and wow them with detailed background information."
                            },
                            {
                                text: "It\'s time to make a speech! You are a bit nervous but you still manage to thank everyone for coming and tell Prince Gareth a happy birthday. "
                            },
                            {
                                text: "You try to finish with a joke, but you got the names in it mixed up and so the joke made so sense."
                            },
                            {
                                text: "Prince Gareth chuckles and shakes his head and says, \"Thanks Mookie, you\'re cool!\""
                            },
                            {
                                text: "This helps the party!",
                                function: "game.endResult = 'ok'"
                            },
                        ],
                    },
                    {
                        requirements: "game.stats.charm.value >= 3",
                        text: [
                            {
                                text: "You decide to help out with the party by being the host!"
                            },
                            {
                                text: "You spend the evening handing out food and nibbles to dignitaries."
                            },
                            {
                                text: "You don\'t know much about baking, and so you just hand out random food to everyone and hope they like it."
                            },
                            {
                                text: "Baron Burton asks about one of the dishes but you have no idea what it even is."
                            },
                            {
                                text: "It\'s time to make a speech!"
                            },
                            {
                                text: "You tap into your iridescent charm and perform an eloquent, touching and humorous address. You crack a joke to finish and everyone falls around laughing."
                            },
                            {
                                text: "Prince Gareth wipes a tear from his eye. \"Thanks Mookie, that was aces!\""
                            },
                            {
                                text: "This helps the party!",
                                function: "game.endResult = 'ok'"
                            },
                        ],
                    },
                    {
                        requirements: "true",
                        text: [
                            {
                                text: "You decide to help out with the party by being the host!"
                            },
                            {
                                text: "You spend the evening handing out food and nibbles to dignitaries."
                            },
                            {
                                text: "You don\'t know much about baking, and so you just hand out random food to everyone and hope they like it."
                            },
                            {
                                text: "Baron Burton asks about one of the dishes but you have no idea what it even is."
                            },
                            {
                                text: "It\'s time to make a speech! You are a bit nervous but you still manage to thank everyone for coming and tell Prince Gareth a happy birthday. "
                            },
                            {
                                text: "You try to finish with a joke, but you got the names in it mixed up and so the joke made so sense."
                            },
                            {
                                text: "Prince Gareth chuckles and shakes his head and says, \"Thanks Mookie, you\'re cool!\""
                            },
                            {
                                text: "Maybe being a host wasn\'t the best job for you, but everyone appreciates the effort.",
                                function: "game.endResult = 'bad'"
                            },
                        ],
                    },
                ]
            },
            {
                label: "Drunk",
                image: document.getElementById('story-cider'),
                outcomes: [
                    {
                        requirements: "game.stats.farming.value >=3 && game.stats.charm.value >=3",
                        text: [
                            {
                                text: "You decide to brew some cider for party guests to drink!"
                            },
                            {
                                text: "You skillfully select the best apples from the orchard and ferment them with some delicious spices."
                            },
                            {
                                text: "You roll your best barrel to the party and ask if anyone would like to try some."
                            },
                            {
                                text: "Your charm wins them over, and they discover that your cider is delicious!"
                            },
                            {
                                text: "All the guests have a glass and have a jolly good time."
                            },
                            {
                                text: "This helps the party immensely!",
                                function: "game.endResult = 'good'"
                            },
                        ],
                    },
                    {
                        requirements: "game.stats.farming.value >=3",
                        text: [
                            {
                                text: "You decide to brew some cider for party guests to drink!"
                            },
                            {
                                text: "You skillfully select the best apples from the orchard and ferment them with some delicious spices."
                            },
                            {
                                text: "You roll your best barrel to the party and ask if anyone would like to try some."
                            },
                            {
                                text: "The dignitaries are a bit worried about trying your homemade cider, but you convince some of the town\'s people to try it"
                            },
                            {
                                text: "It\'s delicious, and those who were brave enough to drink it have a jolly time!"
                            },
                            {
                                text: "This helps the party!",
                                function: "game.endResult = 'ok'"
                            },
                        ],
                    },
                    {
                        requirements: "game.stats.charm.value >=3",
                        text: [
                            {
                                text: "You decide to brew some cider for party guests to drink!"
                            },
                            {
                                text: "You find a box of old apples and try to ferment them into some cider. You throw in some flavourings willy-nilly."
                            },
                            {
                                text: "You roll your best barrel to the party and ask if anyone would like to try some."
                            },
                            {
                                text: "The guests weren\'t sure at first, but your charm wins them over."
                            },
                            {
                                text: "They all gulp your cider down."
                            },
                            {
                                text: "Unfortunately, it seems the cider was far too strong and everyone gets messy drunk."
                            },
                            {
                                text: "It\'s not ideal, but at least the dignitaries are letting loose!"
                            },
                            {
                                text: "This helps the party!",
                                function: "game.endResult = 'ok'"
                            },
                        ],
                    },
                    {
                        requirements: "true",
                        text: [
                            {
                                text: "You decide to brew some cider for party guests to drink!"
                            },
                            {
                                text: "You find a box of old apples and try to ferment them into some cider. You throw in some flavourings willy-nilly."
                            },
                            {
                                text: "You roll your best barrel to the party and ask if anyone would like to try some."
                            },
                            {
                                text: "The dignitaries are a bit worried about trying your homemade cider, but you convince some of the town\'s people to try it"
                            },
                            {
                                text: "The tavern owner takes one sip and spits it on the floor. \"Sorry Mookie, we can\'t drink this!!\""
                            },
                            {
                                text: "Unfortunately, it seems the cider was far too strong and did not taste good at all."
                            },
                            {
                                text: "This doesn\'t really help the party, but everyone thanks you for trying.",
                                function: "game.endResult = 'bad'"
                            }
                        ],
                    },
                ]
            },
        ]
    },
    {
        name: 'end',
        x: 929,
        y: 221,
        activities: [
            {
                label: "Good",
                image: document.getElementById('end-end'),
                outcomes: [
                    {
                        requirements: "game.endResult === 'good'",
                        text: [
                            {
                                text: "\"Mookie, thanks so much for helping out with my party.\""
                            },
                            {
                                text: "\"I\'m so impressed, I had no idea you were so skilled! You've really gone above and beyond!\""
                            },
                            {
                                text: "\"But the best present of all is you just being here.\""
                            },
                            {
                                text: "\"Moo\", says Mookie."
                            }
                        ],
                    },
                    {
                        requirements: "game.endResult === 'ok'",
                        text: [
                            {
                                text: "\"Mookie, thanks so much for helping out with my party.\""
                            },
                            {
                                text: "\"You've done a good job!\""
                            },
                            {
                                text: "\"But the best present of all is you just being here.\""
                            },
                            {
                                text: "\"Moo\", says Mookie."
                            }
                        ],
                    },
                    {
                        requirements: "game.endResult === 'bad'",
                        text: [
                            {
                                text: "\"Mookie, thanks so much for helping out with my party.\""
                            },
                            {
                                text: "\"I know things didn't go exactly as you planned,\""
                            },
                            {
                                text: "\"But the best present of all is you just being here.\""
                            },
                            {
                                text: "\"Moo\", says Mookie."
                            }
                        ],
                    },
                ]
            },
        ]
    }
];


/*good
The party carries on late into the night.
Prince gareth get's a massive pile of presents.
All the guests have a great time!
As the party draws to a close, Prince Gareth takes you aside.
*/

//worst
/*
"Mookie, thanks so much for helping out with my party.
I know things didn't go exactly as you planned,
but the best present of all is you just being here.""

"Moo :)", you say.
*/

//medium
/*
"Mookie, thanks so much for helping out with my party.
You've done a great job!
but the best present of all is you just being here.""

"Moo :)", you say.
*/

//good
/*
"Mookie, thanks so much for helping out with my party.
I'm so impressed, I had no idea you were so skilled! You've really gone above and beyond!
But the best present of all is you just being here."

"Moo :)", you say.
*/

// fade to black

var game = {
    day: 1,
    numberOfDays: 6,
    screen: "title1",
    endResult: "good",
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
            value: 0,
        },
        farming: {
            label: 'Farming',
            value: 1,
        },
        finesse: {
            label: 'Finesse',
            value: 0,
        },
        charm: {
            label: 'Charm',
            value: 1,
        }
    }
}

var audio = {
    town: {
        audio: document.getElementById('audio-town'),
        volume: 0.3
    },
    new_day_ding: {
        audio: document.getElementById('audio-new-day'),
        volume: 0.5
    },
    gain: {
        audio: document.getElementById('audio-gain'),
        volume: 1
    },
    lose: {
        audio: document.getElementById('audio-lose'),
        volume: 1
    },
    click: {
        audio: document.getElementById('audio-click'),
        volume: 0.5
    },
    gong: {
        audio: document.getElementById('audio-gong'),
        volume: 0.7
    },
    party: {
        audio: document.getElementById('audio-party'),
        volume: 0.4
    }
}
