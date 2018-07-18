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
            game.beginTextAnimation = true;
            game.outcomeText = {
                complete: false,
                index: 0,
            };
            game.screen = "activity";
            game.outcome = selectOutcome();

            break;
    }
}

function selectOutcome() {
    // select outcome based on stats
    if (!game.activity.outcomes[0].requirements){ // no requirements
        return game.activity.outcomes[0];
    }
    else { // requirements exist
        for(var i = 0; i < game.activity.outcomes.length; i++) {
            console.log(game.activity.outcomes[i].requirements);
            console.log(eval(game.activity.outcomes[i].requirements));
            if (eval(game.activity.outcomes[i].requirements)){
                return game.activity.outcomes[i];
            }
        }
    }
}

// activity
var innerChoiceIndex = 0;
function activityKeyboard(e){
    switch (e.keyCode) {
        case 38://up
            if (game.outcome.text[game.outcomeText.index].choice){
                innerChoiceIndex = buttons_up(activityChoicesButtonsData.buttons);
            }
            break;
        case 40://down
            if (game.outcome.text[game.outcomeText.index].choice){
                innerChoiceIndex = buttons_down(activityChoicesButtonsData.buttons);
            }
            break;
        case 13://enter
            if (game.outcomeText.index + 1 >= game.outcome.text.length && game.outcomeText.complete){ //all the text for outcome is finished
                game.day++;
                game.screen = "town";
                game.activity = null;
                game.outcome = null;
                game.outcomeText = null;
            }
            else { // more text to come
                if (game.outcome.text[game.outcomeText.index].choice) {//on choice screen
                    console.log('choice! from keyboard ' + innerChoiceIndex);
                    //HERE
                    game.outcome = game.outcome.text[game.outcomeText.index].choice[innerChoiceIndex].outcome;
                    // game.outcome = selectOutcome(game.outcome.text[game.outcomeText.index].choice[innerChoiceIndex].outcomes);
                    addStatsMessages(game.outcome);
                    game.outcomeText.index = 0;
                    //reset button choice back to top
                    activityChoicesButtonsData.buttons[0].active = true;
                    activityChoicesButtonsData.buttons[0].image = activityChoicesButtonsData.buttons[0].images[1];
                    activityChoicesButtonsData.buttons[1].active = false;
                    activityChoicesButtonsData.buttons[1].image = activityChoicesButtonsData.buttons[0].images[0];
                }
                else{
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
            buttonsArray[indexOfNewlySelectedButton].active = true;
            buttonsArray[indexOfNewlySelectedButton].image = button.images[1];
            return indexOfNewlySelectedButton;
        }
    }
}
