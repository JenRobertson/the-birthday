function drawTown(){
    drawAssets(townData);
    animateAssets(townData.players);
    drawTownTitle(game.day);
    drawScrolls();
    if(game.screen === "town"){
        drawStats(1363, 603);
    }
}

function drawTownTitle(day){
    ctx.fillStyle = brown;

    ctx.font="60px eight-bit-pusab";
    ctx.fillText("day",183,153);
    
    ctx.font="50px eight-bit-pusab";
    ctx.fillText(day,383,157);
}

function drawScrolls(){
    ctx.fillStyle = brown;
    ctx.font="48px Pixeled";
    ctx.fillText("CASTLE",166,362);
    ctx.fillText("BAKERY",166,523);
    ctx.fillText("ORCHARD",150,685);
    ctx.fillText("MEADOWS",146,843);
}

var playerSpeed = 5;

var townData = {
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
                document.getElementById("scroll"),
                document.getElementById("scroll-active"),
                
            ], 
            image: document.getElementById("scroll-active"),
            x: 20, 
            y: 238,
            value: locations[0]
        },
        {
            active: false,
            images: [
                document.getElementById("scroll"),
                document.getElementById("scroll-active"),
                
            ], 
            image: document.getElementById("scroll"),
            x: 20, 
            y: 394,
            value: locations[1]
        },
        {
            active: false,
            images: [
                document.getElementById("scroll"),
                document.getElementById("scroll-active"),
                
            ], 
            image: document.getElementById("scroll"),
            x: 20, 
            y: 558,
            value: locations[2]
        },
        {
            active: false,
            images: [
                document.getElementById("scroll"),
                document.getElementById("scroll-active"),
                
            ], 
            image: document.getElementById("scroll"),
            x: 20, 
            y: 718,
            value: locations[3]
        }
    ],
};