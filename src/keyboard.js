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
            // set activity button labels
            activitySelectData.buttons[0].value = game.location.activities[0];
            activitySelectData.buttons[1].value = game.location.activities[1];
            // reset activity_select buttons to top one
            activitySelectData.buttons[0].active = true;
            activitySelectData.buttons[0].image = activitySelectData.buttons[0].images[1];
            activitySelectData.buttons[1].active = false;
            activitySelectData.buttons[1].image = activitySelectData.buttons[0].images[0];
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
            game.activity = game.location.activities[buttons_up(activitySelectData.buttons)];
            console.log(game.activity);
            break;
        case 40://down
            game.activity = game.location.activities[buttons_down(activitySelectData.buttons)];
            console.log(game.activity);
            break;
        case 13://enter
            // todo make this select one properly form your stats
            
            game.beginTextAnimation = true;
            game.outcome = game.activity.outcomes[0];
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
        case 38://up
            if (game.outcome.text[game.outcomeText.index].choice){
                // console.log(game.outcome.text[game.outcomeText.index].choice[0].label);
                buttons_up(activityChoicesButtonsData.buttons);
                
            }
            break;
        case 40://down
            if (game.outcome.text[game.outcomeText.index].choice){
                // console.log(game.outcome.text[game.outcomeText.index].choice[0].label);
                buttons_down(activityChoicesButtonsData.buttons);
            }
            break;
        case 13://enter
            if (game.outcomeText.index + 1 >= game.outcome.text.length){ //all the text for outcome is finished
                game.day++;
                game.screen = "town";
                game.activity = null;
                game.outcome = null;
                game.outcomeText = null;
            }
            else { // more text to come
                // if (game.outcome.text[0].choice) {
                //     console.log('choice! from keyboard')
                //     game.inChoice
                //     // drawChoice(game.outcome.text[0].choice);
                // }
                //normal text
                if( game.outcomeText.complete) {//text animation complete
                    game.beginTextAnimation = true;
                    game.outcomeText.index++;
                    if (game.outcome.text[game.outcomeText.index].updateStat) {
                        eval(game.outcome.text[game.outcomeText.index].updateStat);
                    }
                    game.outcomeText.complete = false;
                }
                else {// text not finished animating
                    //complete animation
                    amountToCutOffText = 0;
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
    console.log('buttons up');
    for (let i = 0; i < buttonsArray.length; i++){
        
        button = buttonsArray[i];
        if (button.active) {
            button.active = false;
            button.image = button.images[0];
            
            var indexOfNewlySelectedButton = i - 1;
            if ( indexOfNewlySelectedButton < 0){
                indexOfNewlySelectedButton = buttonsArray.length -1;
            }
            console.log(buttonsArray[indexOfNewlySelectedButton].active);
            buttonsArray[indexOfNewlySelectedButton].active = true;
            buttonsArray[indexOfNewlySelectedButton].image = button.images[1];
            console.log(buttonsArray[indexOfNewlySelectedButton].image);
            return indexOfNewlySelectedButton;
        }
    }
}