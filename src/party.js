function drawParty(){
    drawAssets(partyData);
    drawPartyScrolls();
    drawStats(1363, 603);
}

function drawPartyScrolls(){
    ctx.fillStyle = brown;
    ctx.font="35px Pixeled";
    ctx.fillText("The Baker",130,352);
    ctx.fillText("The Musician",130,513);
    ctx.fillText("The host",130,675);
    ctx.fillText("The drunk",130,833);
}

var playerSpeed = 5;

var partyData = {
    backgrounds: [
        {
            image: document.getElementById("background-party"),
            x: 0,
            y: 0
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