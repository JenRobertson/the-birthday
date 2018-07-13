var playerSpeed = 5;
var getButtonImage = function (){
    console.log(this.images[0]);
    return this.images[0];
}

console.log(document.getElementById("text-location1-rollover").width);

var locations = [
    {
        name: 'castle',
        x: 1265,
        y: 262
    },
    {
        name: 'bakery',
        x: 748,
        y: 513
    },
    {
        name: 'orchard',
        x: 1285,
        y: 640
    },
    {
        name: 'meadows',
        x: 929,
        y: 221
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
            x: 20, 
            y: 238,
            width: document.getElementById("text-location1-rollover").width,
            height: document.getElementById("text-location1-rollover").height,
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

