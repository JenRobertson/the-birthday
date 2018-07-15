function drawActivity() {
    selectOutcome();

    drawTown();
    drawActivitySelect();
    drawOutcome();
    drawText();
}

var frameAsset = {
    image: document.getElementById("frame"),
    x: 400,
    y: 50
}

var paintingTemplate = {
    image: document.getElementById("painting-template"),
    x: frameAsset.x + 50,
    y: frameAsset.y + 50
}
function selectOutcome() {
    // todo make this select one properly form your stats
    game.outcome = game.activity.outcomes[0];
}

function drawOutcome() {
    drawAsset(paintingTemplate);
    drawAsset(frameAsset);
}

// https://www.html5canvastutorials.com/tutorials/html5-canvas-wrap-text-tutorial/
function drawText(){
    ctx.fillStyle = "#FFFFFF";
    ctx.font="25px Pixeled";
    ctx.fillText(game.outcome.text,300,800);
}