function drawActivitySelect() {
    drawTown();
    ctx.fillStyle = "rgba(0, 0, 0, 0.9)"
    ctx.fillRect(0,0,2000,2000);
    drawAssets(activitySelectData);
    activityScrollLabels();
    drawStats(1363, 300);
}

function activityScrollLabels(){
    ctx.font="42px Pixeled";
    ctx.fillStyle = brown;
    ctx.fillText(game.location.activities[0].label, activitySelectData.buttons[0].x + 130, activitySelectData.buttons[0].y + 120);
    ctx.fillText(game.location.activities[1].label, activitySelectData.buttons[1].x + 130, activitySelectData.buttons[1].y + 120);
}

var activitySelectData = {
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
            value: game.location.activities[0]
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
            value: game.location.activities[1]
        },
    ],
}