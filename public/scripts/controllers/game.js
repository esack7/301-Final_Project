'use strict';

// This is our genre object with values set to 0
let genreObject = {'Action' : 0, 'Adventure' : 0, 'Animation' : 0, 'Comedy' : 0, 'Crime' : 0, 'Documentary' : 0, 'Drama' : 0, 'Family' : 0, 'Fantasy': 0, 'History': 0, 'Horror' : 0, 'Music' : 0, 'Mystery' : 0, 'Romance'  : 0, 'Science Fiction'  : 0, 'TV Movie' : 0, 'Thriller' : 0, 'War' : 0, 'Western' : 0};

// THIS IS GOING TO BE OUR PLAYER'S NAME === INPUT IS GOING TO TAKE THIS IN FROM THE INITIAL FORM
let playerName;

// Object OF GOOD MOODS VARIABLE === we will edit their values based on answers and pull certain genres bassed on the highest counter...
let goodMoodsObject = {'Amused' : 0, 'Blissful' : 0, 'Calm' : 0, 'Cheerful' : 0, 'Content' : 0, 'Dreamy' : 0, 'Ecstatic' : 0, 'Energetic' : 0, 'Excited' : 0, 'Flirty' : 0, 'Giddy' : 0, 'Good' : 0, 'Happy' : 0, 'Joyful' : 0, 'Loving' : 0, 'Mellow' : 0, 'Optimistic' : 0, 'Peaceful' : 0, 'Silly' : 0, 'Sympathetic' : 0};
let goodCounter = 0;
// Object OF BAD MOODS VARIABLE -- same as good moods.
let badMoodsObject = {'Angry' : 0, 'Annoyed' : 0, 'Apathetic' : 0, 'Bad' : 0, 'Cranky' : 0, 'Depressed' : 0, 'Envious' : 0, 'Frustrated' : 0, 'Gloomy' : 0, 'Grumpy' : 0, 'Guilty' : 0, 'Indifferent' : 0, 'Irritated' : 0, 'Mad' : 0, 'Melancholy' : 0, 'Pessimistic' : 0, 'Rejected' : 0, 'Restless' : 0, 'Sad' : 0, 'Stressed' : 0, 'Weird' : 0};
let evilCounter = 0;

// THESE ARE THE POSSIBLE ANWSERS Variables TO THE FIRST QUESTION DEFINED IN randomizeMoodOptionsFunction...
let answer1;
let emotion1;
let emotion2;
let emotion3;
let emotion4;

let answer2;

// this value will be used to determine what happens based on the math questions answer...
let mathAnswered = false;

// // This has to do with canceling out the math TIMER
let timer;

// WHEN MADAM FLICKS BUTTON CLICK === hide everything but game... Start Game!
// IT PULLS UP THE GAME FILE...
$('#game').click(function (event) {
  event.preventDefault();
  $('#main').hide();
  $('#displayRandomMovie').hide();
  $('#game-start').show();
  console.log('GAME STARTED!!! on BUTTON \"click!\"');
  // THIS RESETS ALL NECESSARY VARIABLES IN THE EVENT OF GAME MISHAPS
  answer1 = '';
  emotion1 = '';
  emotion2 = '';
  emotion3 = '';
  emotion4 = '';
  goodCounter = 0;
  evilCounter = 0;
  repos.all = [];
  vote_average;
  genre = '';
  genreInput = '';
  runtime = '';
  console.log('current values: vote_average = ' + vote_average + ', genre = ' + genre + ', runtime = ' + runtime);
});

// THIS BUTTON TAKES THE NAME, puts it into playerName variable and fires the first question!
// SO it has to hide the initial Welcome form and bring up the first question with possible button answers! -- It calls the append first question function!
$('#enter-name').click(function (event) {
  event.preventDefault();
  console.log('Name Entered ENTER BUTTON \"click!\"');
  playerName = $('#player-name-input').val();
  $('#game-start').hide();
  $('#first-question').show();
  console.log('the player entered = ' + playerName + ' = as their playerName!');
  randomizeMoodOptionsFunction()
  appendQuestionOne();
});

// This appendQuestionOne FUNCTION is fired on ENTER BUTTON click.  IT appends the first question and possible answers...
let appendQuestionOne = function (){
  console.log('APPENDING Question 1');
  $('#first-question-text').html('What kind of mood are you in ' + playerName + '?');
}

// THIS IS GOING TO CHOOSE THE MOODS AVAILABLE TO ANSWER THE FIRST QUESTION MADAM FLICKS ASKS
// IT appends these Possible answers to the button text!
let randomizeMoodOptionsFunction = function(){
  // THIS CLEARS THE BUTTONS SO IF THE get more EMOTIONS Button is click it doesn't cause problems.
  //THESE NEXT FOUR LINES OF CODE MAY NOT BE NEEDED.
  $('#emotion-one').html(emotion1);
  $('#emotion-three').html(emotion3);
  $('#emotion-two').html(emotion2);
  $('#emotion-four').html(emotion4);
  console.log('randomizeMoodOptionsFunction FIRED!!!')
  console.log(goodMoodsObject.length + ' = goodMoodsObject.length');
  let randomMoodMultplierOne = Math.ceil(Math.random() * (Object.keys(goodMoodsObject).length - 1));
  let randomMoodMultplierTwo = Math.ceil(Math.random() * (Object.keys(goodMoodsObject).length - 1));
  // This while loop prevents the emotions from being equal to one another... as long as they are equal it will reassign them.
  while (randomMoodMultplierOne === randomMoodMultplierTwo) {
    console.log('While LOOP had to FIRE!');
    randomMoodMultplierTwo = Math.ceil(Math.random() * (Object.keys(goodMoodsObject).length - 1));
  }
  console.log('randomMoodMultplierONE = ' + randomMoodMultplierOne);
  console.log('randomMoodMultplierTWO = ' + randomMoodMultplierTwo);
  emotion1 = Object.keys(goodMoodsObject)[randomMoodMultplierOne];
  emotion3 = Object.keys(goodMoodsObject)[randomMoodMultplierTwo];
  console.log('Emotions = ' + emotion1 + ' & ' + emotion3);
  // THIS IS WHERE ANSWER 1 and 3 is appended
  $('#emotion-one').html(emotion1);
  $('#emotion-three').html(emotion3);

  console.log(badMoodsObject.length + ' = badMoodsObject.length');
  let randomMoodMultplierThree = Math.ceil(Math.random() * (Object.keys(badMoodsObject).length - 1));
  let randomMoodMultplierFour = Math.ceil(Math.random() * (Object.keys(badMoodsObject).length - 1));
  // This while loop prevents the emotions from being equal to one another... as long as they are equal it will reassign them.
  while (randomMoodMultplierThree === randomMoodMultplierFour) {
    console.log('While LOOP had to FIRE!');
    randomMoodMultplierFour = Math.ceil(Math.random() * (Object.keys(badMoodsObject).length - 1));
  }
  emotion2 = Object.keys(badMoodsObject)[randomMoodMultplierThree];
  emotion4 = Object.keys(badMoodsObject)[randomMoodMultplierFour];
  console.log('Emotions = ' + emotion2 + ' & ' + emotion4);
  // THIS IS WHERE ANSWER 2 and 4 is appended
  $('#emotion-two').html(emotion2);
  $('#emotion-four').html(emotion4);
};

// THIS BUTTON CHANGES THE FOUR EMOTIONS DISPLAY IF THEY DON"T LIKE THEM!
$('#next-four-emotions').click(function (event) {
  event.preventDefault();
  console.log('NEXT EMOTIONS BUTTON \"click!\"');
  // THIS WILL HIDE THE BUTTON SO THEY CAN"T DO IT AGAIN.
  $('#next-four-emotions').hide();
  randomizeMoodOptionsFunction()
});

// THESE ANSWER FUNCTION WILL FIND THE BUTTON THE USER CLICKED for an ANSWER and TAKE its VALUE, APPEND QUESTION 2 and impliment game funcitonality!
// THIS CAN DEFINITELY BE REFACTORED...
//Q1 ANSWER 1
$('#emotion-one').click(function (event) {
  event.preventDefault();
  console.log('QUESTION ONE ANSWERED! \"click!\"');
  console.log('ANSWER = ' + $('#emotion-one').html());
  answer1 = $('#emotion-one').html();
  // this adds +1 to goodCounter! Because A1 & A2 are goodMoods
  goodCounter++
  console.log('goodCounter = ' + goodCounter);

  // This ADS 1 TO THAT SPECIFIC GENRE's VALUE in the OBJECT!
  console.log('reassigning emotion value');
  console.log(answer1 + ' = answer1');
  // Object.values(goodMoodsObject)[Object.keys(goodMoodsObject).indexOf(answer1)] = 1;
  console.log(goodMoodsObject[answer1] + ' = goodMoodsObject[answer1]');
  goodMoodsObject[answer1] = goodMoodsObject[answer1] + 1;
  console.log(goodMoodsObject[answer1] + ' = goodMoodsObject[answer1]');
  // THIS WILL HIDE QUESTION 1 and BRING UP QUESTION 2
  $('#first-question').hide();
  // this appends the correct question 2 to the dom
  appendQuestionTwoELEMENTS();
  $('#second-question').show();
});

//Q1 ANSWER 2
$('#emotion-two').click(function (event) {
  event.preventDefault();
  console.log('QUESTION ONE ANSWERED! \"click!\"');
  console.log('ANSWER = ' + $('#emotion-two').html());
  answer1 = $('#emotion-two').html();
  // this adds +1 to evilCounter! Because A1 & A2 are badMoods
  evilCounter++
  console.log('evilCounter = ' + evilCounter);

  // This ADS 1 TO THAT SPECIFIC GENRE's VALUE in the OBJECT!
  console.log('reassigning emotion value');
  console.log(answer1 + ' = answer1');
  // Object.values(badMoodsObject)[Object.keys(badMoodsObject).indexOf(answer1)] = 1;
  console.log(badMoodsObject[answer1] + ' = badMoodsObject[answer1]');
  badMoodsObject[answer1] = badMoodsObject[answer1] + 1;
  console.log(badMoodsObject[answer1] + ' = badMoodsObject[answer1]');
  // THIS WILL HIDE QUESTION 1 and BRING UP QUESTION 2
  $('#first-question').hide();
  // this appends the correct question 2 to the dom
  appendQuestionTwoELEMENTS();
  $('#second-question').show();
});

//Q1 ANSWER 3
$('#emotion-three').click(function (event) {
  event.preventDefault();
  console.log('QUESTION ONE ANSWERED! \"click!\"');
  console.log('ANSWER = ' + $('#emotion-three').html());
  answer1 = $('#emotion-three').html();
  // this adds +1 to goodCounter!
  goodCounter++
  console.log('goodCounter = ' + goodCounter);

  // This ADS 1 TO THAT SPECIFIC GENRE's VALUE in the OBJECT!
  console.log('reassigning emotion value');
  console.log(answer1 + ' = answer1');
  // Object.values(goodMoodsObject)[Object.keys(goodMoodsObject).indexOf(answer1)] = 1;
  console.log(goodMoodsObject[answer1] + ' = goodMoodsObject[answer1]');
  goodMoodsObject[answer1] = goodMoodsObject[answer1] + 1;
  console.log(goodMoodsObject[answer1] + ' = goodMoodsObject[answer1]');
  // THIS WILL HIDE QUESTION 1 and BRING UP QUESTION 2
  $('#first-question').hide();
    // this appends the correct question 2 to the dom
  appendQuestionTwoELEMENTS();
  $('#second-question').show();
});

//Q1 ANSWER 4
$('#emotion-four').click(function (event) {
  event.preventDefault();
  console.log('QUESTION ONE ANSWERED! \"click!\"');
  console.log('ANSWER = ' + $('#emotion-four').html());
  answer1 = $('#emotion-four').html();
  // this adds +1 to evilCounter! Because A1 & A2 are badMoods
  evilCounter++
  console.log('evilCounter = ' + evilCounter);

  // This ADS 1 TO THAT SPECIFIC GENRE's VALUE in the OBJECT!
  console.log('reassigning emotion value');
  console.log(answer1 + ' = answer1');
  // Object.values(badMoodsObject)[Object.keys(badMoodsObject).indexOf(answer1)] = 1;
  console.log(badMoodsObject[answer1] + ' = badMoodsObject[answer1]');
  badMoodsObject[answer1] = badMoodsObject[answer1] + 1;
  console.log(badMoodsObject[answer1] + ' = badMoodsObject[answer1]');
  // THIS WILL HIDE QUESTION 1 and BRING UP QUESTION 2
  $('#first-question').hide();
    // this appends the correct question 2 to the dom
  appendQuestionTwoELEMENTS();
  $('#second-question').show();
});

// This is what APPENDS SPECIFIC ELEMENTS to the QUESTION 2 field which are dependent on question 1s answer!
function appendQuestionTwoELEMENTS() {
  if (evilCounter > 0) {
    $('#second-question-text').html(answer1 + '!  Sounds like someone needs a drink. Will you be drinking during the movie ' + playerName + '?');
  } else {
    $('#second-question-text').html('Good to hear your ' + answer1 + ' ' + playerName + '.  Will you be having a drink with your movie?');
  }
}

// ANSWER FUNCTIONALITY FOR Drinking Question BUTTONS (question 2)
//
// THIS CAN DEFINITELY BE REFACTORED...
//Q2 ANSWER 1
// NOTE Answer = Not at all
$('#qTwoAnswer-one').click(function (event) {
  event.preventDefault();
  console.log('question TWO answer CLICKED');
  goodCounter++
  // this add plus 1 to the values of genres that corr. with this answer
  // Specific values for GENRE
  genreObject['Animation'] = genreObject['Animation'] + 1;
  genreObject['Documentary'] = genreObject['Documentary'] + 1;
  genreObject['Family'] = genreObject['Family'] + 1;
  genreObject['History'] = genreObject['History'] + 1;
  genreObject['Music'] = genreObject['Music'] + 1;

  answer2 = 'Not at all';
  console.log('answer2 = ' + answer2);

  $('#second-question').hide();
  appendQuestionThreeELEMENTS();
});

//Q2 ANSWER 2
$('#qTwoAnswer-two').click(function (event) {
  event.preventDefault();
  console.log('question TWO answer CLICKED');
  goodCounter++
  genreObject['Action'] = genreObject['Action'] + 1;
  genreObject['Adventure'] = genreObject['Adventure'] + 1;
  genreObject['Comedy'] = genreObject['Comedy'] + 1;
  genreObject['Crime'] = genreObject['Crime'] + 1;
  genreObject['Drama'] = genreObject['Drama'] + 1;
  genreObject['Fantasy'] = genreObject['Fantasy'] + 1;
  genreObject['Mystery'] = genreObject['Mystery'] + 1;
  genreObject['Science Fiction'] = genreObject['Science Fiction'] + 1;
  genreObject['Romance'] = genreObject['Romance'] + 1;

  answer2 = 'Maybe a little';
  console.log('answer2 = ' + answer2);

  $('#second-question').hide();
  appendQuestionThreeELEMENTS();
});

//Q2 ANSWER 3
// Already am...
$('#qTwoAnswer-three').click(function (event) {
  event.preventDefault();
  console.log('question TWO answer CLICKED');
  evilCounter++
  genreObject['Action'] = genreObject['Action'] + 1;
  genreObject['Adventure'] = genreObject['Adventure'] + 1;
  genreObject['Comedy'] = genreObject['Comedy'] + 1;
  genreObject['Crime'] = genreObject['Crime'] + 1;
  genreObject['Drama'] = genreObject['Drama'] + 1;
  genreObject['Fantasy'] = genreObject['Fantasy'] + 1;
  genreObject['Horror'] = genreObject['Horror'] + 1;
  genreObject['Science Fiction'] = genreObject['Science Fiction'] + 1;
  genreObject['Thriller'] = genreObject['Thriller'] + 1;
  genreObject['War'] = genreObject['War'] + 1;
  genreObject['Western'] = genreObject['Western'] + 1;

  answer2 = 'Already am...';
  console.log('answer2 = ' + answer2);

  $('#second-question').hide();
  appendQuestionThreeELEMENTS();
});

//Q2 ANSWER 4
// no counter is given to this... for good or evil
$('#qTwoAnswer-four').click(function (event) {
  event.preventDefault();
  console.log('question TWO answer CLICKED');
  genreObject['Comedy'] = genreObject['Comedy'] + 2;

  answer2 = 'Let\'s get wasted!';
  console.log('answer2 = ' + answer2);

  $('#second-question').hide();
  appendQuestionThreeELEMENTS();
});

// THIS FUNCTION APPENDS THE RIGHT TEXT TO QUESTION 3 -- This function is called in the answers for question 2! buttons.
function appendQuestionThreeELEMENTS() {
  if ( (answer2 === 'Not at all') || (answer2 === 'Maybe a little') ) {
    console.log('were inside the if part === show FOUR LETTERS');
    $('#four-letter-word-question').show();
  } else {
    $('#math-question').show();
    console.log('were inside the else part === show MATH');
    setTimeout(mathTimedOut, 10000);
  }
}

// THIS IS THE FUNCTIONALITY FOR THE MATH TIMER!!! CALLED IN THE IF STATEMENT ABOVE
function mathTimedOut() {
  // This has to do with canceling out the math TIMER
  timer = setTimeout(mathTimedOut, 10000);
  console.log('times UP!');
  console.log('TIMED OUT FUNCTION CALLED FIRE!!! FIRE!!! FIRE!!! FIRE!!! FIRE!!! FIRE!!! FIRE!!! FIRE!!! FIRE!!! FIRE!!! FIRE!!! FIRE!!! FIRE!!! FIRE!!! FIRE!!! FIRE!!! FIRE!!! FIRE!!! FIRE!!! FIRE!!! FIRE!!! FIRE!!! FIRE!!!')
  if (mathAnswered === false) {
    appendFourLetterWord()
  } else {
    console.log('error!')
  }
  $('#math-question').hide();
  $('#four-letter-word-question').show();
}


// THIS IS THE BUTTON FUNCTIONALITY FOR THE MATH QUESTION!
$('#math-answer-button').click(function (event) {
  event.preventDefault();
  mathAnswered = $('#math-question-answer').val();
  console.log(mathAnswered + ' = math-question-answer')
  clearTimeout(timer);

  $('#math-question').hide();
  console.log('MATH BUTTON CLICKED');
  if (mathAnswered === '176') {
    console.log('they got it right!')
    $('#times-up').html('GOOD GUESS!!!');
    $('#four-letter-word-question').show();
  } else {
    appendFourLetterWord();
  }
});

// FUNCTION ASSIGN MOVIE VALUES do to math question RESULTS
function mathResults() {
  console.log('updating movies based on math answer!')
  if (mathAnswered === '176') {
    console.log('THE ANSWER IS RIGHT!!! UPDATING MATH MATH MATH RIGHT RIGHT RIGHT!')
    genreObject['Crime'] = genreObject['Crime'] + 2;
    genreObject['Mystery'] = genreObject['Mystery'] + 2;
  } else {
    console.log('they are normal');
    console.log('THEY GOT THE MATH WRONG, NO UPDATED VALUES --- NOTE NOTE NOTE NOTE');
  }
}

// This is the functionality for appending QUESTION four-letter-word-question in the event you get timed out on the math question!!!
function appendFourLetterWord (){
  $('#times-up').html('TIMES UP!!!');
  $('#four-letter-word-text').html('Did you have enough time?  Tell us how you really feel!');
}

//BUTTON FUNCTIONALITY FOR FOUR LETTER WORD -- determines if what they entered was a cuss word and if so will return more risky movies
$('#four-letter-word-button').click(function (event) {
  console.log('Four letter button is clicked!')
  event.preventDefault();
  let fourLetterAnswer = $('#four-letter-word-input').val();
  console.log(fourLetterAnswer);
  let curseArray = ['fuck', 'cock', 'dick', 'puss', 'cunt', 'shit', 'piss'];
  if (curseArray.indexOf(fourLetterAnswer.toLowerCase()) > -1) {
    console.log('they cursed!')
    genreObject['Family'] = genreObject['Family'] - 2;
    genreObject['TV Movie'] = genreObject['TV Movie'] - 2;
    alert('... ' + playerName + '!');
  } else {
    console.log('they did not curse!');
    genreObject['Family'] = genreObject['Family'] + 2;
    genreObject['TV Movie'] = genreObject['TV Movie'] + 2;
    genreObject['Music'] = genreObject['Music'] + 2;
  }
  // WE ARE UPDATING THE MATH FIGURES HERE... BECAUSE OF LOOP ISSUES WITH OUR CURRENT TIMER!
  mathResults()
  $('#four-letter-word-question').hide();
  $('#last-question').show();
});


// THIS IS THE LAST QUESTION FUNCTIONALITY BUTTON CLICKS
$('#last-question-button-one').click(function (event) {
  event.preventDefault();
  $('#last-question').hide();

});

// last answer 2
$('#last-question-button-two').click(function (event) {
  event.preventDefault();
  $('#last-question').hide();

});

// last answer 3
$('#last-question-button-three').click(function (event) {
  event.preventDefault();
  $('#last-question').hide();

});

// last answer 4
$('#last-question-button-four').click(function (event) {
  event.preventDefault();
  $('#last-question').hide();
});
