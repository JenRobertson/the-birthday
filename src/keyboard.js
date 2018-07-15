document.onkeydown = function(e) {
    switch (game.screen) {
        case 'town':
            townKeyboard(e);
            break;
        case 'activity_select':
            activitySelectKeyboard(e);
            break;
        case 'activity':
            activityKeyboard(e);
            break;
    }
};

// town
function townKeyboard(e){
    switch (e.keyCode) {
        case 38://up
            movePlayer(locations[buttons_up(townData.buttons)]);
            break;
        case 40://down
            movePlayer(locations[buttons_down(townData.buttons)]);
            break;
        case 13://enter
            game.screen = "activity_select";
            game.activity = game.location.activities[0];
            activitySelectData.buttons[0].value = game.location.activities[0];
            activitySelectData.buttons[1].value = game.location.activities[1];
            break;
    }
}

function movePlayer(location){
    townData.players[0].destinationX = location.x;
    townData.players[0].destinationY = location.y;
    game.location = location;
}

// activitySelect
function activitySelectKeyboard(e){
    switch (e.keyCode) {
        case 38://up
            // game.activity = buttons_up(activitySelectData.buttons);
            game.activity = game.location.activities[buttons_up(activitySelectData.buttons)];
            break;
        case 40://down
            // game.activity = buttons_down(activitySelectData.buttons)
            game.activity = game.location.activities[buttons_down(activitySelectData.buttons)];
            break;
        case 13://enter
            // todo make this select one properly form your stats
            game.outcome = game.activity.outcomes[2];
            game.outcomeText = {
                complete: false,
                index: 0,
            };
            game.screen = "activity";
            break;
    }
}

// activity
function activityKeyboard(e){
    switch (e.keyCode) {
        // case 38://up
        //     movePlayer(locations[buttons_up(townData.buttons)]);
        //     break;
        // case 40://down
        //     movePlayer(locations[buttons_down(townData.buttons)]);
        //     break;
        case 13://enter
            if (game.outcomeText.index + 1 >= game.outcome.text.length){
                game.day++;
                game.screen = "town";
            }
            else {
                game.outcomeText.index++;
                if (game.outcome.text[game.outcomeText.index].updateStat) {
                    eval(game.outcome.text[game.outcomeText.index].updateStat);
                }
            }
        break;
    }
}


// generic buttons
function buttons_down(buttonsArray) {
    for (let i = 0; i < buttonsArray.length; i++){
        button = buttonsArray[i];
        if (button.active) {
            button.active = false;
            button.image = button.images[0];
            
            var indexOfNewlySelectedButton = i + 1;
            if ( indexOfNewlySelectedButton >= buttonsArray.length){
                indexOfNewlySelectedButton = 0;
            }
            buttonsArray[indexOfNewlySelectedButton].active = true;
            buttonsArray[indexOfNewlySelectedButton].image = button.images[1];
            return indexOfNewlySelectedButton;
        }
    }
}

function buttons_up(buttonsArray) {
    for (let i = 0; i < buttonsArray.length; i++){
        button = buttonsArray[i];
        if (button.active) {
            button.active = false;
            button.image = button.images[0];
            
            var indexOfNewlySelectedButton = i - 1;
            if ( indexOfNewlySelectedButton < 0){
                indexOfNewlySelectedButton = buttonsArray.length -1;
            }
            buttonsArray[indexOfNewlySelectedButton].active = true;
            buttonsArray[indexOfNewlySelectedButton].image = button.images[1];
            return indexOfNewlySelectedButton;
        }
    }
}