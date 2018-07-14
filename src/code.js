var ctx, c;

window.onload = function () {
    canvasElement = document.getElementById("ctx");
    ctx = canvasElement.getContext("2d");
    window.requestAnimationFrame(frame);
}

function frame() {
    switch (game.screen) {
        case 'town':
            drawTown();
            break;
        case 'activity_select':
            drawActivitySelect();
            break;
    }
    window.requestAnimationFrame(frame);
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
    ctx.drawImage(asset.image, asset.x, asset.y);
}

function drawAssets (assetsObject) {
    for (var key in assetsObject){
        assetsObject[key].forEach(function (asset) {
            drawAsset(asset);
        });
    }
}

function drawStats(x, y){
    statsImage = {
        image: document.getElementById("stats"),
        x,
        y
    };
    drawAsset(statsImage);
    ctx.font="20px Pixeled";
    var i = 0;
    for (var key in game.stats){
        ctx.fillText(`${game.stats[key].label}: ${game.stats[key].value}`, statsImage.x + 20, statsImage.y + 50 + i);
        i+= 50;
    }
}

var brown = '#36260e';