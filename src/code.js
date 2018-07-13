var ctx, c;



window.onload = function () {
	c = document.getElementById("myCanvas");
	ctx = c.getContext("2d");
    window.requestAnimationFrame(frame);
}

function frame() {
    drawAssets();
    animateAssets(assets.players);
    drawTitle();
    drawScrolls();
    window.requestAnimationFrame(frame);
}

function drawTitle(){
    ctx.fillStyle = '#36260e';

    ctx.font="60px eight-bit-pusab";
    ctx.fillText("day",183,153);
    
    ctx.font="50px eight-bit-pusab";
    ctx.fillText("1",383,157);
}

function drawScrolls(){
    ctx.font="48px Pixeled";
    ctx.fillText("CASTLE",166,362);

    ctx.font="48px Pixeled";
    ctx.fillText("BAKERY",166,523);

    ctx.font="48px Pixeled";
    ctx.fillText("ORCHARD",150,685);

    ctx.font="48px Pixeled";
    ctx.fillText("MEADOWS",146,843);
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
    if (asset.width) {
        ctx.drawImage(asset.image, asset.x, asset.y, asset.width, asset.height);
    }
    else {
        ctx.drawImage(asset.image, asset.x, asset.y);
    }
}

function drawAssets () {
    for (var key in assets){
        assets[key].forEach(function (asset) {
            drawAsset(asset);
        });
    }
}