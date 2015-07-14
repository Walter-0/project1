$(document).ready(function() {
    console.log( "ready!" );


var user;
var score = 0;
var finalScore;



//begin with all questions disabled DONE
$(".cards div").css("pointer-events", "none")

//add click listeners to the new game button DONE
$("#newGame").click(function(){
  console.log("started a new game")
  //when new game is clicked, prompt the user to enter their name DONE
  user = prompt("Please enter your name")
  //add short game description and instructions
  alert("Hi " + user + ", when you're ready, click the first box to begin.")
  $(".cards div").eq(0).css("pointer-events", "auto")
})

//high score table
$("#highScore").click(function(){
  alert()
})


//add click listeners to each card DONE
//prompt a question when a card is clicked DONE
//allow only the first question to be enabled after new game DONE
//add 1 to the score if question is correctly answered DONE
//allow each question in order after the preceding question has been answered DONE

$(".cards div").eq(0).click(function(){
    var question0 = prompt("Is Pluto a planet? (yes/no)")
    if (question0.toLowerCase() == "no") {
      alert("Correct!")
      //turn the box green
      $(".cards div").eq(0).css("background-color", "chartreuse")
      //increase score by 1
      score = score + 1
      $("#score").eq(0).html("Score: " + score);
      //turn off the box
      $(".cards div").eq(0).css("pointer-events", "none")
      //enable the next box
      $(".cards div").eq(1).css("pointer-events", "auto")
    }
    else {
      alert("Incorrect.")
      //turn the box red
      $(".cards div").eq(0).css("background-color", "red")
      //turn off the box
      $(".cards div").eq(0).css("pointer-events", "none")
      //enable the next box
      $(".cards div").eq(1).css("pointer-events", "auto")
    }
})

$(".cards div").eq(1).click(function(){
    var question1 = prompt("Should you run from or fight a black bear? \n (run/fight)")
    if (question1.toLowerCase() == "fight") {
      alert("Correct!")
      //turn the box green
      $(".cards div").eq(1).css("background-color", "chartreuse")
      //increase score by 1
      score = score + 1
      $("#score").eq(0).html("Score: " + score);
      //turn off the box
      $(".cards div").eq(1).css("pointer-events", "none")
      //enable the next box
      $(".cards div").eq(2).css("pointer-events", "auto")
    }
    else {
      alert("Incorrect.")
      //turn the box red
      $(".cards div").eq(1).css("background-color", "red")
      //turn off the box
      $(".cards div").eq(1).css("pointer-events", "none")
      //enable the next bx
      $(".cards div").eq(2).css("pointer-events", "auto")
    }
})

$(".cards div").eq(2).click(function(){
    var question2 = prompt("Will a 12 lb bowling ball sink or float in the ocean? \n (sink/float)")
    if (question2.toLowerCase() == "float") {
      alert("Correct!")
      //turn the box green
      $(".cards div").eq(2).css("background-color", "chartreuse")
      //increase score by 1
      score = score + 1
      $("#score").eq(0).html("Score: " + score);
      //turn off the box
      $(".cards div").eq(2).css("pointer-events", "none")
      //enable the next box
      $(".cards div").eq(3).css("pointer-events", "auto")
    }
    else {
      alert("Incorrect.")
      //turn the box red
      $(".cards div").eq(2).css("background-color", "red")
      //turn off the box
      $(".cards div").eq(2).css("pointer-events", "none")
      //enable the next box
      $(".cards div").eq(3).css("pointer-events", "auto")
    }
})

$(".cards div").eq(3).click(function(){
    var question3 = prompt("Middle age alchemists wanted to turn lead into what metal? \n (silver/gold/platinum)")
    if (question3.toLowerCase() == "gold") {
      alert("Correct!")
      //turn the box green
      $(".cards div").eq(3).css("background-color", "chartreuse")
      //increase score by 1
      score = score + 1
      $("#score").eq(0).html("Score: " + score);
      //turn off the box
      $(".cards div").eq(3).css("pointer-events", "none")
      //enable the next box
      $(".cards div").eq(4).css("pointer-events", "auto")
    }
    else {
      alert("Incorrect.")
      //turn the box red
      $(".cards div").eq(3).css("background-color", "red")
      //turn off the box
      $(".cards div").eq(3).css("pointer-events", "none")
      //enable the next box
      $(".cards div").eq(4).css("pointer-events", "auto")
    }
})

$(".cards div").eq(4).click(function(){
    var question4 = prompt("If someone is tripping, they are doing what? \n (drugs/falling down/acting foolish)")
    if (question4.toLowerCase() == "drugs") {
      alert("Correct!")
      //turn the box green
      $(".cards div").eq(4).css("background-color", "chartreuse")
      //increase score by 1
      score = score + 1
      $("#score").eq(0).html("Score: " + score);
      //turn off the box
      $(".cards div").eq(4).css("pointer-events", "none")
      //enable the next box
      $(".cards div").eq(5).css("pointer-events", "auto")
    }
    else {
      alert("Incorrect.")
      //turn the box red
      $(".cards div").eq(4).css("background-color", "red")
      //turn off the box
      $(".cards div").eq(4).css("pointer-events", "none")
      //enable the next box
      $(".cards div").eq(5).css("pointer-events", "auto")
    }
})
$(".cards div").eq(5).click(function(){
    var question5 = prompt("In the TV show Breaking Bad, what was the name of the fast-food chain Walter White frequently visits? \n (los pollos hermanos/hank's subs/la cantina)")
    if (question5.toLowerCase() == "los pollos hermanos") {
      alert("Correct!")
      //turn the box green
      $(".cards div").eq(5).css("background-color", "chartreuse")
      //increase score by 1
      score = score + 1
      $("#score").eq(0).html("Score: " + score);
      //turn off the box
      $(".cards div").eq(5).css("pointer-events", "none")
      //enable the next box
      $(".cards div").eq(6).css("pointer-events", "auto")
    }
    else {
      alert("Incorrect.")
      //turn the box red
      $(".cards div").eq(5).css("background-color", "red")
      //turn off the box
      $(".cards div").eq(5).css("pointer-events", "none")
      //enable the next box
      $(".cards div").eq(6).css("pointer-events", "auto")
    }
})

$(".cards div").eq(6).click(function(){
    var question6 = prompt("Finish this sentence: liquor before beer, you're in the clear; beer before liquor, \n (never sicker/that's the kicker/you're a city slicker)")
    if (question6.toLowerCase() == "never sicker") {
      alert("Correct!")
      //turn the box green
      $(".cards div").eq(6).css("background-color", "chartreuse")
      //increase score by 1
      score = score + 1
      $("#score").eq(0).html("Score: " + score);
      //turn off the box
      $(".cards div").eq(6).css("pointer-events", "none")
      //enable the next box
      $(".cards div").eq(7).css("pointer-events", "auto")
    }
    else {
      alert("Incorrect.")
      //turn the box red
      $(".cards div").eq(6).css("background-color", "red")
      //turn off the box
      $(".cards div").eq(6).css("pointer-events", "none")
      //enable the next box
      $(".cards div").eq(7).css("pointer-events", "auto")
    }
})

$(".cards div").eq(7).click(function(){
    var question7 = prompt("Who is Magic Mike \n (a man/a myth/a legend)")
    if (question7.toLowerCase() == "a legend") {
      alert("Correct!")
      //turn the box green
      $(".cards div").eq(7).css("background-color", "chartreuse")
      //increase score by 1
      score = score + 1
      $("#score").eq(0).html("Score: " + score);
      //turn off the box
      $(".cards div").eq(7).css("pointer-events", "none")
      //enable the next box
      $(".cards div").eq(8).css("pointer-events", "auto")
    }
    else {
      alert("Incorrect.")
      //turn the box red
      $(".cards div").eq(7).css("background-color", "red")
      //turn off the box
      $(".cards div").eq(7).css("pointer-events", "none")
      //enable the next box
      $(".cards div").eq(8).css("pointer-events", "auto")
    }
})

$(".cards div").eq(8).click(function(){
    var question8 = prompt("What's your favorite band? \n (nicki minaj/you've probably never heard of them/aerosmith)")
    if (question8.toLowerCase() == "aerosmith") {
      alert("Correct!")
      //turn the box green
      $(".cards div").eq(8).css("background-color", "chartreuse")
      //increase score by 1
      score = score + 1
      $("#score").eq(0).html("Score: " + score);
      //turn off the box
      $(".cards div").eq(8).css("pointer-events", "none")
      //enable the next box
      $(".cards div").eq(9).css("pointer-events", "auto")
    }
    else {
      alert("Incorrect.")
      //turn the box red
      $(".cards div").eq(8).css("background-color", "red")
      //turn off the box
      $(".cards div").eq(8).css("pointer-events", "none")
      //enable the next box
      $(".cards div").eq(9).css("pointer-events", "auto")
    }
})

$(".cards div").eq(9).click(function(){
    var question9 = prompt("How many problems do you have? \n (99 but a bitch ain't one/don't worry about a thing/too many problems, oh why am I here)")
    if (question9.toLowerCase() == "99 but a bitch ain't one") {
      alert("Correct!")
      //turn the box green
      $(".cards div").eq(9).css("background-color", "chartreuse")
      //increase score by 1
      score = score + 1
      $("#score").eq(0).html("Score: " + score);
      //turn off the box
      $(".cards div").eq(9).css("pointer-events", "none")
      //enable the next box
      $(".cards div").eq(10).css("pointer-events", "auto")
    }
    else {
      alert("Incorrect.")
      //turn the box red
      $(".cards div").eq(9).css("background-color", "red")
      //turn off the box
      $(".cards div").eq(9).css("pointer-events", "none")
      //enable the next box
      $(".cards div").eq(10).css("pointer-events", "auto")
    }
})

$(".cards div").eq(10).click(function(){
    var question10 = prompt("If you give a mouse a cookie \n (he will be your loyal friend/all his friends will want one too/he will ask if you have a cigarette instead)")
    if (question10.toLowerCase() == "all his friends will want one too") {
      alert("Correct!")
      //turn the box green
      $(".cards div").eq(10).css("background-color", "chartreuse")
      //increase score by 1
      score = score + 1
      $("#score").eq(0).html("Score: " + score);
      //turn off the box
      $(".cards div").eq(10).css("pointer-events", "none")
      //enable the next box
      $(".cards div").eq(11).css("pointer-events", "auto")
    }
    else {
      alert("Incorrect.")
      //turn the box red
      $(".cards div").eq(10).css("background-color", "red")
      //turn off the box
      $(".cards div").eq(10).css("pointer-events", "none")
      //enable the next box
      $(".cards div").eq(11).css("pointer-events", "auto")
    }
})

$(".cards div").eq(11).click(function(){
    var question11 = prompt("Has anyone really been far even as decided to use even go want to do look more like? \n (yes/only on the weekend/wtf)")
    if (question11.toLowerCase() == "wtf") {
      alert("Correct!")
      //turn the box green
      $(".cards div").eq(11).css("background-color", "chartreuse")
      //increase score by 1
      score = score + 1
      $("#score").eq(0).html("Score: " + score);
      //turn off the box
      $(".cards div").eq(11).css("pointer-events", "none")
      //enable the next box
      $(".cards div").eq(12).css("pointer-events", "auto")
    }
    else {
      alert("Incorrect.")
      //turn the box red
      $(".cards div").eq(11).css("background-color", "red")
      //turn off the box
      $(".cards div").eq(11).css("pointer-events", "none")
      //enable the next box
      $(".cards div").eq(12).css("pointer-events", "auto")
    }
})

$(".cards div").eq(12).click(function(){
    var question12 = prompt("In America you search the web. In Soviet Russia, \n (they don't have the web/the web searches you/it is snowy, snowy day)")
    if (question12.toLowerCase() == "the web searches you") {
      alert("Correct!")
      //turn the box green
      $(".cards div").eq(12).css("background-color", "chartreuse")
      //increase score by 1
      score = score + 1
      $("#score").eq(0).html("Score: " + score);
      //turn off the box
      $(".cards div").eq(12).css("pointer-events", "none")
      //enable the next box
      $(".cards div").eq(13).css("pointer-events", "auto")
    }
    else {
      alert("Incorrect.")
      //turn the box red
      $(".cards div").eq(12).css("background-color", "red")
      //turn off the box
      $(".cards div").eq(12).css("pointer-events", "none")
      //enable the next box
      $(".cards div").eq(13).css("pointer-events", "auto")
    }
})

$(".cards div").eq(13).click(function(){
    var question13 = prompt("What's the worst of these things? \n (lung cancer/poverty/when your golf glove wears faster over the calluses your tennis racquet gives you)")
    if (question13.toLowerCase() == "when your golf glove wears faster over the calluses your tennis racquet gives you") {
      alert("Correct!")
      //turn the box green
      $(".cards div").eq(13).css("background-color", "chartreuse")
      //increase score by 1
      score = score + 1
      $("#score").eq(0).html("Score: " + score);
      //turn off the box
      $(".cards div").eq(13).css("pointer-events", "none")
      //enable the next box
      $(".cards div").eq(14).css("pointer-events", "auto")
    }
    else {
      alert("Incorrect.")
      //turn the box red
      $(".cards div").eq(13).css("background-color", "red")
      //turn off the box
      $(".cards div").eq(13).css("pointer-events", "none")
      //enable the next box
      $(".cards div").eq(14).css("pointer-events", "auto")
    }
})

$(".cards div").eq(14).click(function(){
    var question14 = prompt("What is America famous for? \n (freedom/fat people/spray cheese)")
    if (question14.toLowerCase() == "spray cheese") {
      alert("Correct!")
      //turn the box green
      $(".cards div").eq(14).css("background-color", "chartreuse")
      //increase score by 1
      finalScore = score + 1
      $("#score").eq(0).html("Score: " + score);
      //turn off the box
      $(".cards div").eq(14).css("pointer-events", "none")
      //display your final score
      alert("Your final score is " + finalScore + " out of 15")
    }
    else {
      alert("Incorrect.")
      //turn the box red
      $(".cards div").eq(14).css("background-color", "red")
      //turn off the box
      $(".cards div").eq(14).css("pointer-events", "none")
      // display your final score
      finalScore = score
      alert("Your final score is " + finalScore + " out of 15")

    }
})

function highScores() {
  this.user = user;
  this.getFinalScore = function() {

  };
}

});
//if question is answered correctly, display congratulatory message and increase score by 1 DONE
//if question is answered incorrectly, display disapproving message and do not increase the score DONE


//alert results when all questions have been answered DONE
//////////Icebox///////////
//create button to alert a table of high scores//
