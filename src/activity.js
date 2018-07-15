function drawActivity() {
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

function drawOutcome() {
    if (game.activity.image){
        drawAsset({
            image: game.activity.image,
            x: frameAsset.x + 50,
            y: frameAsset.y + 50
        });
    }
    else{
        drawAsset(paintingTemplate);
    }

    drawAsset(frameAsset);
}


// https://www.html5canvastutorials.com/tutorials/html5-canvas-wrap-text-tutorial/
function drawText(){
    ctx.fillStyle = "#FFFFFF";
    ctx.font="48px pixel-font-2";
    wrapText(ctx, animateText(game.outcome.text[game.outcomeText.index].text), 300, 780, 1100, 45);
}

var amountToCutOffText;

function animateText(text){
    if(game.beginTextAnimation){// so it only runs once
        game.beginTextAnimation = false;
        amountToCutOffText = text.length;
    }

    if (amountToCutOffText > 0){
        amountToCutOffText--;
        return text.slice(0, -amountToCutOffText);
    }
    game.outcomeText.complete = true;
    return text;
}

function wrapText(context, text, x, y, maxWidth, lineHeight) {
    var words = text.split(' ');
    var line = '';
    
    for(var n = 0; n < words.length; n++) {
        var testLine = line + words[n] + ' ';
        var metrics = context.measureText(testLine);
        var testWidth = metrics.width;
        if (testWidth > maxWidth && n > 0) {
            context.fillText(line, x, y);
            line = words[n] + ' ';
            y += lineHeight;
        }
        else {
            line = testLine;
        }
    }
    return context.fillText(line, x, y);
}

// generate stats messages from stats data
function addStatsMessages(){
    locations.forEach(function (location) {
        location.activities.forEach(function (activity){
            activity.outcomes.forEach(function (outcome){
                var gain = {
                    text: createStatsMessage('gain', outcome.result.gain),
                    updateStat: createUpdateStatValue('gain', outcome.result.gain)
                };
                var lose = {
                    text: createStatsMessage('lose', outcome.result.lose),
                    updateStat: createUpdateStatValue('lose', outcome.result.lose)
                };
                if (gain.text) outcome.text.push(gain);
                if (lose.text) outcome.text.push(lose);
            });
        });
    });
}

function createUpdateStatValue(type, statsObject){
    var value = '';
    var symbol = type === 'gain' ? '+' : '-';
    if (Object.keys(statsObject).length > 0) {
        for (var key in statsObject){
            value += `game.stats.${key}.value${symbol}=${statsObject[key]};`;
        };
    }
    return value;
}

function createStatsMessage(type, statsObject){
    var message = '';
    index = 0;
    if (Object.keys(statsObject).length > 0) {
        message += 'You ' + type + ' ';
        for (var key in statsObject){
            if (index > 0 && index < Object.keys(statsObject).length) {//middle one
                message += ', '
            }
            if (index > 0 && index === Object.keys(statsObject).length - 1) {//last one
                message += 'and '
            }
            message += statsObject[key] + ' ' + key;
            index++;
        };
        message += '.';
    }
    return message;
};
