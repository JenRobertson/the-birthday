function drawActivitySelect() {
    drawTown();
    ctx.fillStyle = "rgba(0, 0, 0, 0.9)"
    ctx.fillRect(0,0,2000,2000);
    drawAssets(activityData);
    activityScrollLabels();
    drawStats(1363, 300);
}

function activityScrollLabels(){
    ctx.font="42px Pixeled";
    ctx.fillStyle = brown;
    ctx.fillText(game.location.activities[0].label, activityData.buttons[0].x + 130, activityData.buttons[0].y + 120);
    ctx.fillText(game.location.activities[1].label, activityData.buttons[1].x + 130, activityData.buttons[1].y + 120);
}

var activityData = {
    buttons: [
        {
            active: true,
            images: [
                document.getElementById("scroll-long"),
                document.getElementById("scroll-long-active"),
                
            ], 
            image: document.getElementById("scroll-long-active"),
            x: 420, 
            y: 238,
            location: locations[0]
        },
        {
            active: false,
            images: [
                document.getElementById("scroll-long"),
                document.getElementById("scroll-long-active"),
                
            ], 
            image: document.getElementById("scroll-long"),
            x: 420, 
            y: 450,
            location: locations[1]
        },
    ],
}