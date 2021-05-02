

player1name=localStorage.getItem("player1name");
player2name=localStorage.getItem("player2name");

document.getElementById("player1name").innerHTML=player1name+": ";
document.getElementById("player2name").innerHTML=player2name+": ";

player1score=0;
player2score=0;

document.getElementById("playerquestion").innerHTML="Question turn-"+player1name;
document.getElementById("playeranswer").innerHTML="Answer turn-"+player2name;

document.getElementById("player1score").innerHTML=player1score;
document.getElementById("player2score").innerHTML=player2score;




function send()
{

    number1=document.getElementById("word1").value;
    number2=document.getElementById("word2").value;
    actual_answer=parseInt(number1)*parseInt(number2);
    console.log(actual_answer);

    question_number="<h4>"+number1+"X"+number2+"</h4>"
    innput_box="<br>Answer: <input type='text' id='input_check_box'>";
    check_button="<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    row=question_number+innput_box+check_button;
    document.getElementById("output").innerHTML=row;
    document.getElementById("word1").innerHTML=" ";
    document.getElementById("word2").innerHTML=" ";
   
}
questionturn="player1";
answerturn="player2";
function check()
{
   getanswer=document.getElementById("input_check_box").value;
   console.log(getanswer);
   

   if (getanswer==actual_answer)
   {

      if(answerturn=="player1")
      {
         player1score=player1score+1;
         console.log(player1score)
         document.getElementById("player1score").innerHTML=player1score;
      }
      else{
         player2score=player2score+1;
         document.getElementById("player2score").innerHTML=player2score;
      }
   }
      if(questionturn=="player1")
      {
         questionturn="player2";
         document.getElementById("playerquestion").innerHTML="Question turn -"+player2name;
      }
      else{
         questionturn="player1";
         document.getElementById("playerquestion").innerHTML="Question turn -"+player1name;
      }

      if(answerturn=="player1")
      {
         answerturn="player2";
         document.getElementById("playeranswer").innerHTML="Answer turn -"+player2name;
      }
      else{
         answerturn="player1";
         document.getElementById("playeranswer").innerHTML="Answer turn -"+player1name;
      }
 
    document.getElementById("output").innerHTML=("");
      
   


}