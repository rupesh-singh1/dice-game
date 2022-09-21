var first=Math.random();
 var first_res=Math.floor(first*6)+1;
 var second=Math.random();
 var second_res=Math.floor(second*6)+1;
 
  if(first_res>second_res){
     document.querySelector("h1").innerHTML="🚩Player 1 is Winner";
  }
  else if(second_res>first_res){
    document.querySelector("h1").innerHTML="Player 2 is Winner!🚩";
  }
  else{
    document.querySelector("h1").innerHTML="Draw!";
  }
  document.querySelector(".img1").setAttribute("src","dice"+first_res+".png");
  document.querySelector(".img2").setAttribute("src","dice"+second_res+".png");