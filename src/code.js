var ctx, c;

window.onload = function () {
	c = document.getElementById("myCanvas");
	ctx = c.getContext("2d");
    window.requestAnimationFrame(frame);
}

function frame() {
    drawAssets();
    animateAssets(assets.players);
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

function drawAssets () {
    for (var key in assets){
        assets[key].forEach(function (asset) {
            drawAsset(asset);
        });
    }
}