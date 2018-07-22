document.onkeydown = function(e) {
    switch (game.screen) {
        case 'title1':
            title1Keyboard(e);
            break;
        case 'title2':
            title2Keyboard(e);
        break;
        case 'town':
            townKeyboard(e);
            break;
        case 'activity_select':
            activitySelectKeyboard(e);
            break;
        case 'activity':
            activityKeyboard(e);
            break;
        case 'party':
            partyKeyboard(e);
            break;
        case 'end':
            endKeyboard(e);
            break;
        case 'credits':
            creditsKeyboard(e);
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
            break;
        case 40://down
            game.activity = game.location.activities[buttons_down(activitySelectData.buttons)];
            break;
        case 13://enter
            game.beginTextAnimation = true;
            game.outcomeText = {
                complete: false,
                index: 0,
            };
            game.screen = "activity";
            game.outcome = selectOutcome(game.activity.outcomes);

            break;
    }
}

function selectOutcome(outcomes) {
    // select outcome based on stats
    if (!outcomes[0].requirements){ // no requirements
        return outcomes[0];
    }
    else { // requirements exist
        for(var i = 0; i < outcomes.length; i++) {
            if (eval(outcomes[i].requirements)){
                return outcomes[i];
            }
        }
    }
}

function goToNextDay(){
    if (game.day < game.numberOfDays){
        game.day++;
        game.screen = "town";
        game.activity = null;
        game.outcome = null;
        game.outcomeText = null;
    }
    else {
        game.day = "title2"
        game.screen = "title2"
    }

}

// activity
game.innerChoiceIndex = 0;
function activityKeyboard(e){
    switch (e.keyCode) {
        case 38://up
            if (game.outcome.text[game.outcomeText.index].choice){
                game.innerChoiceIndex = buttons_up(activityChoicesButtonsData.buttons);
            }
            break;
        case 40://down
            if (game.outcome.text[game.outcomeText.index].choice){
                game.innerChoiceIndex = buttons_down(activityChoicesButtonsData.buttons);
            }
            break;
        case 13://enter
            if (game.outcomeText.index + 1 >= game.outcome.text.length && game.outcomeText.complete){ //all the text for outcome is finished
                if(game.day === 'party'){
                    game.screen = 'end';
                    game.day = 'end';
                }
                else if(game.day === 'end'){
                    game.screen = 'credits';
                    game.day = 'credits';
                }
                else{
                    goToNextDay();
                }

            }
            else { // more text to come
                if (game.outcome.text[game.outcomeText.index].choice) {//on choice screen
                    game.outcome = selectOutcome(game.outcome.text[game.outcomeText.index].choice[game.innerChoiceIndex].outcomes);
                    addStatsMessages(game.outcome);
                    game.outcomeText.index = 0;
                    game.outcomeText.complete = false;
                    //reset button choice back to top
                    game.innerChoiceIndex = 0;
                    activityChoicesButtonsData.buttons[0].active = true;
                    activityChoicesButtonsData.buttons[0].image = activityChoicesButtonsData.buttons[0].images[1];
                    activityChoicesButtonsData.buttons[1].active = false;
                    activityChoicesButtonsData.buttons[1].image = activityChoicesButtonsData.buttons[0].images[0];

                }
                else{
                    if(game.outcomeText.complete) {//text animation complete
                        if(game.outcome.text[game.outcomeText.index].function){//if it has a function
                            eval(game.outcome.text[game.outcomeText.index].function);//run it
                        }
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

// party
function partyKeyboard(e){
    switch (e.keyCode) {
        case 38://up
            game.activity = game.location.activities[buttons_up(partyData.buttons)];
            break;
        case 40://down
            game.activity = game.location.activities[buttons_down(partyData.buttons)];
            break;
        case 13://enter
            if(!game.activity) {
                game.activity = game.location.activities[0];
            }
            game.beginTextAnimation = true;
            game.outcomeText = {
                complete: false,
                index: 0,
            };
            game.screen = "activity";
            game.outcome = selectOutcome(game.activity.outcomes);
        break;
    }
}

// title1
function title1Keyboard(e){// opening title
    game.screen = "town";
}

// title2
function title2Keyboard(e){ //before the party day
    game.day = "party";
    game.screen = "party";
    game.location = locations[4];
    game.activity = game.location.activities[0];
}

// credits
function creditsKeyboard(e){ //credits
    location.reload();
}

// end keyboard
function endKeyboard(e){ // description of the party at the end, before gareths monologue
    game.location = locations[5];
    game.activity = game.location.activities[0];
    game.screen = 'activity';

    if(!game.activity) {
        game.activity = game.location.activities[0];
    }
    game.beginTextAnimation = true;
    game.outcomeText = {
        complete: false,
        index: 0,
    };
    game.screen = "activity";
    game.outcome = selectOutcome(game.activity.outcomes);
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
