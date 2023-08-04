
var playing=false;
var score;
var action;
var timer;
var correctanswer;
document.getElementById("startreset").onclick=function(){
	if(playing==true)
	{
		location.reload();// reload the page
	}
	else
	{ //if we are not playing
		//change mode to playing
		playing=true;
		score=0;
		timer=10;
		document.getElementById("scorevalue").innerHTML=score;
		hide("gameover");
		show("time");
		document.getElementById("startreset").innerHTML="Reset Game";
		//start countdown
		generateQNA();
	}
	for(i=1;i<5;i++){
	document.getElementById("option"+i).onclick=function(){
	if(playing==true)
	{
		if(this.innerHTML==correctanswer)
		{
			score+=1;
			document.getElementById("scorevalue").innerHTML=score;
			hide("wrong");
			show("correct");
			setTimeout(function(){hide("correct")},1000)
			stoptimer();
			generateQNA();
		}
		else
		{
			hide("correct");
			show("wrong");
			setTimeout(function(){hide("wrong")},1000)
		}
	}
}

}
};



function generateQNA(){
	timer=10;
	countdown();
	var x=Math.round(9*Math.random())+1;
	var y=Math.round(9*Math.random())+1;
	correctanswer= x*y;
	document.getElementById("question").innerHTML=x+"x"+y;
	var position=Math.round(3*Math.random() +1);
	document.getElementById("option"+position).innerHTML=correctanswer;// add correct answer to one box
	var answers=[correctanswer];
	for(i=1;i<5;i++){
		if(i!=position)
		{
			var wronganswer=(Math.round(9*Math.random())+1) * (Math.round(9*Math.random())+1);
			do
			{
				var wronganswer=(Math.round(9*Math.random())+1) * (Math.round(9*Math.random())+1);
			}while(answers.indexOf(wronganswer)>-1);
			document.getElementById("option"+i).innerHTML=wronganswer;
			answers.push(wronganswer);
		}
	}
}
function countdown(){
		action=setInterval(function(){
			timer -= 1;
			document.getElementById("timevalue").innerHTML=timer;
			if(timer==0){
				stoptimer();
				show("gameover")
				document.getElementById("gameover").innerHTML="<p>game over!!</p><p>Your score is "+score+"</p>";
				hide("time");
				hide("correct");
				hide("wrong");
				playing=false;
				document.getElementById("startreset").innerHTML="Start Game"
			}
		},1000);
	}
function stoptimer()
	{
		clearInterval(action);
	}
	function hide(id)
	{
		document.getElementById(id).style.display="none";
	}
	function show(id)
	{
		document.getElementById(id).style.display="block";
	}