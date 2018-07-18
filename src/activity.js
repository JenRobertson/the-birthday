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
    x: frameAsset.x + 55,
    y: frameAsset.y + 55
}

function drawOutcome() {
    if (game.activity.image){
        drawAsset({
            image: game.activity.image,
            x: frameAsset.x + 55,
            y: frameAsset.y + 55
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

    var textDataObject = game.outcome.text[game.outcomeText.index];
    if (textDataObject.choice) {
        drawAssets(activityChoicesButtonsData);
        ctx.fillText(textDataObject.choice[0].label, 300, 780);
        ctx.fillText(textDataObject.choice[1].label, 300, 830);
        game.outcomeText.complete = true;
    }
    else {
        wrapText(ctx, animateText(textDataObject.text), 300, 780, 1100, 45);
    }
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
function addStatsMessagesToOuterOutcomes(){
    locations.forEach(function (location) {
        location.activities.forEach(function (activity){
            activity.outcomes.forEach(function (outcome){
                if(outcome.result){
                    addStatsMessages(outcome);
                }
                else{
                    //stops it ending too soon, todo fix this issue lol
                    outcome.text.push({text: ''})
                }
            });
        });
    });
}


function addStatsMessages(outcome){
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
}

function createUpdateStatValue(type, textFunction){
    var value = '';
    var symbol = type === 'gain' ? '+' : '-';
    if (Object.keys(textFunction).length > 0) {
        for (var key in textFunction){
            value += `game.stats.${key}.value${symbol}=${textFunction[key]};`;
        };
    }
    return value;
}

function createStatsMessage(type, textFunction){
    var message = '';
    index = 0;
    if (Object.keys(textFunction).length > 0) {
        message += 'You ' + type + ' ';
        for (var key in textFunction){
            if (index > 0 && index < Object.keys(textFunction).length) {//middle one
                message += ', '
            }
            if (index > 0 && index === Object.keys(textFunction).length - 1) {//last one
                message += 'and '
            }
            message += textFunction[key] + ' ' + key;
            index++;
        };
        message += '.';
    }
    return message;
};

var activityChoicesButtonsData = {
    buttons: [
        {
            active: true,
            images: [
                document.getElementById("blank"),
                document.getElementById("arrow"),
            ],
            image: document.getElementById("arrow"),
            x: 250,
            y: 735,
            value: 'poo1'
        },
        {
            active: false,
            images: [
                document.getElementById("blank"),
                document.getElementById("arrow"),
            ],
            image: document.getElementById("blank"),
            x: 250,
            y: 790,
            value: 'poo2'
        },
    ],
}
