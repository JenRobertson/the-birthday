document.onkeydown = function(e) {
    switch (game.screen) {
        case 'town':
            townKeyboard(e);
            break;
        case 'activity_select':
            activitySelectKeyboard(e);
            break;
    }
};

function townKeyboard(e){
    switch (e.keyCode) {
        case 38://up
            movePlayer(buttons_up(townData.buttons));
            break;
           case 40://down
            movePlayer(buttons_down(townData.buttons));
            break;
        case 13://enter
            town_enter();
            break;
    }
}

function activitySelectKeyboard(e){
    switch (e.keyCode) {
        case 38://up
            buttons_up(activityData.buttons);
            break;
        case 40://down
            buttons_down(activityData.buttons);
            break;
        case 13://enter
            activitySelectEnter();
            break;
    }
}

function movePlayer(location){
    townData.players[0].destinationX = location.x;
    townData.players[0].destinationY = location.y;
    game.location = location;
}

function town_enter() {
    game.screen = "activity_select";
}

function activitySelectEnter() {
    game.screen = "town";
}


function buttons_down(buttonsArray) {
    for (let i = 0; i < buttonsArray.length; i++){
        button = buttonsArray[i];
        if (button.active) {
            button.active = false;
            button.image = button.images[0];
            
            var nextButton;
            if (buttonsArray.length > [i + 1]){
                nextButton = buttonsArray[i + 1];
            }
            else {
                nextButton = buttonsArray[0];
            }
            nextButton.active = true;
            nextButton.image = button.images[1];
            return nextButton.location;
        }
    }
    
}

function buttons_up(buttonsArray) {
    for (let i = 0; i < buttonsArray.length; i++){
        button = buttonsArray[i];
        if (button.active) {
            button.active = false;
            button.image = button.images[0];

            var nextButton;
            if (i > 0){
                nextButton = buttonsArray[i - 1];
            }
            else {
                nextButton = buttonsArray[buttonsArray.length - 1];
            }
            nextButton.active = true;
            nextButton.image = button.images[1];
            return nextButton.location;
        }
    }
}