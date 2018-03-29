//Challenge 4: Quiz Game
/////////////////////////////////////////////////////////////////////////
/*

1. Question constructor to describe a question which includes:
 ) The Question itself
 ) the Answer Choices in the form of an Object or Array
 ) the Correct Answer
 
2. Create a few questions using the constructor

3. Store them all inside an array

4. Select one random question and log it to the console, together with AC's. 
Useful: write a method for the Question objects for this task

5. Use the PROMPT function to ask the user for the correct answer. 

6. Check if the user is correct and print to the console whether the answer is correct or not
Useful: write another method

7. Suppose this code would be a plugin for other programmers to use. Make sure the code is private and doesn't interfere with other programmers' code. I.E. use Closure effect

8*/

(function () {
    

var quiz = [];


function question(q, c, a) {
    this.inquiry = q;
    this.answerChoices = c;
    this.answer = a;
};

function answers(a, b, c, d, e) {
    var choices = new Object();
    if(a)
        choices.a = a;
    if(b)
        choices.b = b;
    if(c)
        choices.c = c;
    if(d)
        choices.d = d;
    if(e) 
        choices.e = e;
    return choices;
};



quiz.push(new question(
        'What is your name?',
        answers('Phil', 'Steven', 'Emily', 'Curtis', '[your_name]'),
        'E'
));

quiz.push(new question(
        'What is your favourite colour?',
        answers('Yellow', 'Black', 'Maroon', 'Green', 'Blue'),
        'C'
));

quiz.push(new question(
        'What team did Michael Jordan first play for in the NBA?',
        answers('Bulls', 'Wizards', 'Jazz', 'Nets', 'Heat'),
        'A'
));

quiz.push(new question(
        'When did Paper Mario hit shelves for the N64?',
        answers('1998', '2000', '1995', '2001', '2002'),
        'D'
));

quiz.push(new question(
        'What is the common name of Dihydrogen Monoxide?',
        answers('liquid nitrogen', 'water', 'fire', 'carbon'),
        'B'
));

quiz.push(new question(
        'Which is the Lone Star State?',
        answers('Idaho', 'Wyoming', 'New Mexico', 'Oklahoma', 'Texas'),
        'E'
));

quiz.push(new question(
        'Which is correct?',
        answers('F=na', 'G=(m1*m2)/a', 'C= qV', 'd=rt', 'p=ma'),
        'D'
));
    
var score = 0;
question.prototype.checkAnswer = function(response) {
        if(response === this.answer){
            score++;
             alert('You totally nailed that one!' + 'Your score is ' + score);
        }
        else {
            alert('M I S S !!');
        }
    
}
    

var q = Math.floor(Math.random() * quiz.length);
function buttonAnswer(name, answer) {
    document.getElementById(name).addEventListener('click', function() {quiz[q].checkAnswer(answer);});
}
    
question.prototype.popQuiz = function() {
        var w = document.querySelector('h1');
        var a = [document.getElementById('p1'), 
                document.getElementById('p2'),
                document.getElementById('p3'),
                document.getElementById('p4'),
                document.getElementById('p5')];
        
        w.textContent = this.inquiry;
        (function() {
            var ac = quiz[q].answerChoices;
            var j = a;
            j[0].innerHTML = '<button id=a>A</button>  ' + ':: ' + ac.a;
            buttonAnswer('a', document.getElementById('a').textContent);
            j[1].innerHTML = '<button id=b>B</button>  ' + ':: ' + ac.b;
            buttonAnswer('b', document.getElementById('b').textContent);
            if(ac.c) {
                 j[2].innerHTML = '<button id=c>C</button>  ' + ':: ' + ac.c;
                buttonAnswer('c', document.getElementById('c').textContent);
            }
            else j[2].innerHTML = '';
            if(ac.d) {
                j[3].innerHTML = '<button id=d>D</button>  ' + ':: ' + ac.d;
                buttonAnswer('d', document.getElementById('d').textContent);
            }
            else j[3].innerHTML = '';
            if(ac.e) {
                j[4].innerHTML = '<button id=e>E</button>  ' + ':: ' + ac.e;
                buttonAnswer('e', document.getElementById('e').textContent);
            }
            else j[4].innerHTML = '';
        })();
}

var ending = false;
    document.getElementById('end').addEventListener('click', function() {ending = true;});
    //nl.last.addEventListener('click', function() {end = true;});
//while(!ending) {                             
        quiz[q].popQuiz();
    //}
    

})();
