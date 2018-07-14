document.onkeydown = function(e) {
    switch (e.keyCode) {
        case 38://up
            up();
            break;
           case 40://down
            down();
            // canvas_town_element.style.display = "none";
            // canvas_choose_event_element.style.display = "block";
            break;
        case 13://enter
            break;
    }
};

function movePlayer(location){
    assets.town.players[0].destinationX = location.x;
    assets.town.players[0].destinationY = location.y;
}

function down() {
    for (let i = 0; i < assets.town.buttons.length; i++){
        button = assets.town.buttons[i];
        if (button.active) {
            button.active = false;
            button.image = button.images[0];
            
            var nextButton;
            if (assets.town.buttons.length > [i + 1]){
                nextButton = assets.town.buttons[i + 1];
            }
            else {
                nextButton = assets.town.buttons[0];
            }
            nextButton.active = true;
            nextButton.image = button.images[1];
            movePlayer(nextButton.location);
            break;
        }
    }
    
}

function up() {
    for (let i = 0; i < assets.town.buttons.length; i++){
        button = assets.town.buttons[i];
        if (button.active) {
            button.active = false;
            button.image = button.images[0];

            var nextButton;
            if (i > 0){
                nextButton = assets.town.buttons[i - 1];
            }
            else {
                nextButton = assets.town.buttons[assets.town.buttons.length - 1];
            }
            nextButton.active = true;
            nextButton.image = button.images[1];
            movePlayer(nextButton.location);
            break;
        }
    }
}