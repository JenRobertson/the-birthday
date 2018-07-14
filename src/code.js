var canvas_town, c;

window.onload = function () {
    canvas_town_element = document.getElementById("canvas_town");
    canvas_choose_event_element = document.getElementById("canvas_choose_event");

    canvas_town = canvas_town_element.getContext("2d");
    canvas_choose_event = canvas_choose_event_element.getContext("2d");
    window.requestAnimationFrame(frame);
}

function frame() {
    drawAssets(assets.town);
    animateAssets(assets.town.players);
    drawTitle();
    drawScrolls();
    drawStats();
    window.requestAnimationFrame(frame);
}

function drawTitle(){
    canvas_town.fillStyle = '#36260e';

    canvas_town.font="60px eight-bit-pusab";
    canvas_town.fillText("day",183,153);
    
    canvas_town.font="50px eight-bit-pusab";
    canvas_town.fillText("1",383,157);
}

function drawStats(){
    canvas_town.font="20px Pixeled";
    var i = 0;
    for (var key in stats){
        canvas_town.fillText(`${stats[key].label}: ${stats[key].value}`, assets.town.stats[0].x + 20, assets.town.stats[0].y + 50 + i);
        i+= 50;
    }
}

function drawScrolls(){
    canvas_town.font="48px Pixeled";
    canvas_town.fillText("CASTLE",166,362);
    canvas_town.fillText("BAKERY",166,523);
    canvas_town.fillText("ORCHARD",150,685);
    canvas_town.fillText("MEADOWS",146,843);
}

function animateAssets(container) {
    container.forEach(function (asset) {
        if (asset.x < asset.destinationX){
            asset.x += asset.speed;
            if ((asset.x - asset.destinationX) > asset.speed){
                asset.x = asset.destinationX;
            }
        }
        else if (asset.x > asset.destinationX){
            asset.x -= asset.speed;
            if ((asset.x - asset.destinationX) < asset.speed){
                asset.x = asset.destinationX;
            }
        }
        if (asset.y < asset.destinationY){
            asset.y += asset.speed;
            if ((asset.y - asset.destinationY) > asset.speed){
                asset.y = asset.destinationY;
            }
        }
        else if (asset.y > asset.destinationY){
            asset.y -= asset.speed;
            if ((asset.y - asset.destinationY) < asset.speed){
                asset.y = asset.destinationY;
            }
        }
    });
};

function drawAsset(asset) {
    canvas_town.drawImage(asset.image, asset.x, asset.y);
}

function drawAssets (assetsObject) {
    for (var key in assetsObject){
        assetsObject[key].forEach(function (asset) {
            drawAsset(asset);
        });
    }
}