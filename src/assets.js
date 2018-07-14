var playerSpeed = 5;
var getButtonImage = function (){
    console.log(this.images[0]);
    return this.images[0];
}

var locations = [
    {
        name: 'CASTLE',
        x: 1265,
        y: 262
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

var stats = {
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
    },
}


var assets = {
    town: {
        backgrounds: [
            {
                image: document.getElementById("background"),
                x: 0,
                y: 0
            }
        ],
        stats: [
            {
                image: document.getElementById("stats"),
                x: 1363,
                y: 603
            }
        ],
        players: [
            {
                image: document.getElementById("player1"), 
                x: locations[0].x, 
                y: locations[0].y, 
                destinationX: locations[0].x, 
                destinationY: locations[0].y, 
                speed: playerSpeed
            }
        ],
        buttons: [
            {
                active: true,
                images: [
                    document.getElementById("text-location1"),
                    document.getElementById("text-location1-rollover"),
                    
                ], 
                image: document.getElementById("text-location1-rollover"),
                x: 20, 
                y: 238,
                location: locations[0]
            },
            {
                active: false,
                images: [
                    document.getElementById("text-location1"),
                    document.getElementById("text-location1-rollover"),
                    
                ], 
                image: document.getElementById("text-location1"),
                x: 20, 
                y: 394,
                location: locations[1]
            },
            {
                active: false,
                images: [
                    document.getElementById("text-location1"),
                    document.getElementById("text-location1-rollover"),
                    
                ], 
                image: document.getElementById("text-location1"),
                x: 20, 
                y: 558,
                location: locations[2]
            },
            {
                active: false,
                images: [
                    document.getElementById("text-location1"),
                    document.getElementById("text-location1-rollover"),
                    
                ], 
                image: document.getElementById("text-location1"),
                x: 20, 
                y: 718,
                location: locations[3]
            }
        ],
    }
}