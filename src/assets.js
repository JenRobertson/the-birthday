var playerSpeed = 5;
var getButtonImage = function (){
    console.log(this.images[0]);
    return this.images[0];
}

var locations = [
    {
        name: 'bakery',
        x: 708,
        y: 99
    },
    {
        name: 'woods',
        x: 619,
        y: 600
    },
    {
        name: 'castle',
        x: 346,
        y: 222
    }
];

var assets = {
    backgrounds: [
        {
            image: document.getElementById("background"),
            x: 0,
            y: 0
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
            x: 50, 
            y: 50,
            location: locations[0]
        },
        {
            active: false,
            images: [
                document.getElementById("text-location1"),
                document.getElementById("text-location1-rollover"),
                
            ], 
            image: document.getElementById("text-location1"),
            x: 50, 
            y: 150,
            location: locations[1]
        },
        {
            active: false,
            images: [
                document.getElementById("text-location1"),
                document.getElementById("text-location1-rollover"),
                
            ], 
            image: document.getElementById("text-location1"),
            x: 50, 
            y: 250,
            location: locations[2]
        }
    ],
}


// var assets = {
//     player1: new Asset(document.getElementById("player1"), 10, 10, 100, 100, playerSpeed),
//     background: new Asset(document.getElementById("background")),
//     button1: new Asset(document.getElementById("text-location1"))
// }

// var assets = {
//     player1: new Asset(document.getElementById("player1"), 10, 10, 100, 100, playerSpeed),
//     background: new Asset(document.getElementById("background")),
//     button1: new Asset(document.getElementById("text-location1"))
// }

