document.onkeydown = function(e) {
    switch (e.keyCode) {
        case 38://up
            up();
            break;
           case 40://down
            down();
            break;
        case 13://enter
            break;
    }
};

function movePlayer(location){
    assets.players[0].destinationX = location.x;
    assets.players[0].destinationY = location.y;
}

function down() {
    for (let i = 0; i < assets.buttons.length; i++){
        button = assets.buttons[i];
        if (button.active) {
            button.active = false;
            button.image = button.images[0];
            
            var nextButton;
            if (assets.buttons.length > [i + 1]){
                nextButton = assets.buttons[i + 1];
            }
            else {
                nextButton = assets.buttons[0];
            }
            nextButton.active = true;
            nextButton.image = button.images[1];
            movePlayer(nextButton.location);
            break;
        }
    }
    
}

function up() {
    for (let i = 0; i < assets.buttons.length; i++){
        button = assets.buttons[i];
        if (button.active) {
            button.active = false;
            button.image = button.images[0];

            var nextButton;
            if (i > 0){
                nextButton = assets.buttons[i - 1];
            }
            else {
                nextButton = assets.buttons[assets.buttons.length - 1];
            }
            nextButton.active = true;
            nextButton.image = button.images[1];
            movePlayer(nextButton.location);
            break;
        }
    }
}