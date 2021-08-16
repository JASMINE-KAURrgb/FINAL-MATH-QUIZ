player1_name=localStorage.getItem("player1_name");
player2_name=localStorage.getItem("player2_name");
console.log(player1_name);
console.log(player2_name);


player1_score=0;
player2_score=0;

document.getElementById("player1_score").innerHTML=player1_score;
document.getElementById("player2_score").innerHTML=player2_score;

function send(){
    var number1= document.getElementById("number1").value;
    var number2= document.getElementById("number2").value;
    actual_answer= parseInt(number1) * parseInt(number2);
    //creating tags to hold the numbers in the output div
    question_number="<h4>"+ number1+ "X" + number2 +  "</h4>";
    input_box= "<br> Answer: <input type='text' id='input_check_box'> ";
    check_btn= "<br><br> <button class='btn btn-info' onclick='check()'> Check Answer!</button> ";
    row= question_number+ input_box+ check_btn;
    //storing the row in the html file
    document.getElementById("output").innerHTML=row;
    document.getElementById("number1").value="";
    document.getElementById("number2").value="";
      //code for question and answer turns
      if(question_turn=="player1")
      {
          question_turn="player2";
          document.getElementById("questionplayer").innerHTML="Question turn- "+ player2_name;
          answer_turn="Player1";
      document.getElementById("answerplayer").innerHTML="Answer turn- "+player1_name;
      }
      else
      {
          question_turn= "player1";
          document.getElementById("questionplayer").innerHTML="Question turn- "+ player1_name;
          answer_turn="Player2";
      document.getElementById("answerplayer").innerHTML="Answer turn- "+player2_name;
      } 
}

//variables to keep track of players asking questions
question_turn= "player1";
answer_turn= "player2";


function check(){
    var get_answer= document.getElementById("input_check_box").value;
    if(get_answer== actual_answer)
    {
        if(answer_turn=="player1")
        {
            update_player1_score= player1_score+1;
            document.getElementById("player1_score").innerHTML=update_player1_score;

        }
        else
        {
            update_player2_score= player2_score+1;
            document.getElementById("player2_score").innerHTML=update_player2_score;
        }
    }
}