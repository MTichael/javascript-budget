/*

First Lecture Overview (#39): 
    How to create game vars
    How to GEERATE A RANDOM NUMBER
    How to manipulate the DOM
    How to READ from the DOM
    HOW TO CHANGE CSS STYES



GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a die as many times as he wishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLOBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/


var scores, roundScore, activePlayer, gamePlaying, goal, lastDie;
init();

//All web pages have a DOM, manipulated below
//querySelector references the CSS document for the webpage
//Select id: #       Select class: .    
//document.querySelector('#current-' + activePlayer/*
                            //used to adjust the active player
                                    //*/).textContent = dice;
//Modifies the HTML so that the current score is displayed in italics
//need innerHTML instead of textContent to parse HTML, not disp plaintext
//document.querySelector('#current-' + activePlayer).innerHTML = 
                       // '<em>' + dice + '</em';

//READING from the DOM and storing in a variable. Logging it like a woodsman
//var x = document.querySelector('#score-0').textContent;
//console.log(x);

//Remove the image of the die rolled
//querySelector uses '.dice' to select the dice class

//get id from DOM, use this func, as it is faster than querySelector


/////////////////////////////////////////////////////////////////////////////////////
//Event Handling!

//Set button callback function
document.querySelector('.btn-roll').addEventListener('click', function() {
    if(gamePlaying) {
        //Anonymous function being made
        // TODO:
            //1. Random Number
        var dice = Math.ceil(Math.random() * 6);
        var dice2 = Math.ceil(Math.random() * 6);
        
            //2.Display the result of the roll
        var diceDOM = document.querySelector('.dice');
        diceDOM.style.display = 'block';
        diceDOM.src = 'dice-' + dice + '.png';
          diceDOM = document.querySelector('.dice2');
        diceDOM.style.display = 'block';
        diceDOM.src = 'dice-' + dice2 + '.png';
        
            //3.Update the round score IF the roll was NOT a 1
        if((lastDie[0] === dice && dice === 6) || (lastDie[1] === dice2 && dice2 === 6)) {
            roundScore = 0;
            scores[activePlayer] = 0;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
            document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
            lastDie = [0,0];
            nextPlayer();
        }
        else if(dice !== 1 && dice2 !== 1) {   //use double equal for type coercion in JS, don't forget!
            //Add Score
            roundScore += dice + dice2;
            if(dice === dice2)
                roundScore += dice + dice2;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
            if(dice === dice2) 
                holdScore();
        } else {
            //function detailing some CSS-editing ability
            nextPlayer();
        }
        lastDie = [dice, dice2];
    }
});


document.querySelector('.btn-hold').addEventListener('click', holdScore);
                                                     
function holdScore() {
    if(gamePlaying) {
        //Add CURRENT to GLOBAL score
        scores[activePlayer] += roundScore;
        //set CURRENT to 0 
        document.querySelector('#current-' + activePlayer).textContent = '0';
        //Update the UI
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
        
        var input = document.querySelector('.final-score').value;
        if(input && input > 1)  {
            goal = input - 1; 
        }
        
        //Check if player won the Game
        if(scores[activePlayer] > goal) {
            //Congratulations, activePlayer won!
            document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
            document.querySelector('.dice').style.display = 'none';            
            document.querySelector('.dice2').style.display = 'none';
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            gamePlaying = false;

        }
        else {
            //Next Player
            nextPlayer();
        }
    }
}

function nextPlayer(){
    //Change player context +1
        activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
        roundScore = 0;
    
    //element, current, set scores to 0 on either side
        document.getElementById('current-0').textContent = '0';
        document.getElementById('current-1').textContent = '0';
        
        //select class, not id, swap the active context
        //Most easily done with the 'toggle' call, not 'add'/'remove'
        //      Note the existence of the 'add' and 'remove' calls here
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');
}

document.querySelector('.btn-new').addEventListener('click', init);

function init() {
    scores = [0, 0];
    roundScore = 0;
    activePlayer = 0;
    lastDie = [0, 0];
    goal = 99;
    
    document.querySelector('.dice').style.display = 'none';
    document.querySelector('.dice2').style.display = 'none';
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    document.querySelector('.final-score').value = '';

    gamePlaying = true;
}


/////////////////////////////////////////////////////////////////////////////////////
// Lecture 40!
//How to change, add, remove HTML classes from the JS, 

//  document << CSS document 
///         .getElementById('id on HTML page')/.querySelector('#id or .className)
////           .add/remove/toggle   << for classes on an object display in the CSS
////        


///////////////////////////////////////////////////////////////////////////////////////
//Lecture 44: State Variables
/*
    State Variables are basically flags describing and allowing certain states, wherein certain actions may be performed. 
    Example in this practicum:  ::gamePlaying::




/*

Challenges : 
1. If 2 sixes in a row are rolled, erase the whole score, nextPlayer()
2. Allow players to enter their own win condition in the HTML doc
3. Manipulate the CSS to allow 2 dice to be rolled, and reset the score when one of them is a 1. 
*/