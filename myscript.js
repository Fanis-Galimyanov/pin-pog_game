// JavaScript Document

 var delay = 1, i = 0, pixels = 1, vec_x = true, vec_y = false, v_x = true, decision_speed = 25, ii = 0;
 
 
 function moveRect(e){
    
   
    // получаем стиль для blueRect
    var cs = window.getComputedStyle(blueRect);
     
    var left = parseInt(cs.marginLeft);
    var top = parseInt(cs.marginTop); 
   
   //left_pr = left;
  // top_pr = top;// + parseInt(blueRect.style.height);
     
    switch(e.keyCode){
         
        case 37:  // если нажата клавиша влево
            if(left>0)
                blueRect.style.marginLeft = left - 25 + "px";
				blueRect.style.backgroundColor = "red";
            break;
       
        case 39:   // если нажата клавиша вправо
            if(left < document.documentElement.clientWidth - 100)
                blueRect.style.marginLeft = left + 25 + "px";
				blueRect.style.backgroundColor = "red";
            break;
      
    }
}
 

   addEventListener("keydown", moveRect);
 
  function ColorR(e){
	 var blueRect = document.getElementById('blueRect');  
	  blueRect.style.backgroundColor = "blue";
  }
 
 addEventListener("keyup", ColorR);
 
 //-------------------------------------------------------------------------------//
 
 
 function moveRect2(left2, x)
 {
	 
	 if(x < left2)
	{
		v_x  = false;
	}
	
	if(left2< x )
	{
		v_x = true;
	}
	
	

}
 
 
 startTimer = function ()
 {
 
 //var blueRect = document.getElementById('blueRect');
	var elem = document.getElementById('circle');
	var y = elem.offsetTop,
	x = elem.offsetLeft;
	
  var cs = window.getComputedStyle(blueRect);
     
    var left = parseInt(cs.marginLeft);
    var top = parseInt(cs.marginTop);
	
 var cs2 = window.getComputedStyle(blueRect2);
     
    var left2 = parseInt(cs2.marginLeft);
    var top2 = parseInt(cs2.marginTop);

	if (vec_x)
	{
		elem.style.left = x + pixels + 'px';
	}

	else
	{
		elem.style.left = x - pixels + 'px';
	}
	
	if(x > 1500)
	{
		vec_x  = false;
	}
	
	if(x < 0)
	{
		vec_x = true;
	}
	
	
	
	
	if (vec_y)
	{
		elem.style.top = y + pixels + 'px';
	}

	else
	{
		elem.style.top = y - pixels + 'px';
	}
	
	if(y >700)
	{
		vec_y  = false;
	}
	
	if(y < 0)
	{
		vec_y = true;    
	}
  
  if(((y < top+50) && (x > left) && (x < left + 200))	||
			((y < top+50) && (x+100 > left) && (x+100 < left + 200)))   
	{
		vec_y = true;  
         
		 //document.body.style.backgroundColor = "red";		
	}
   
   if(((y > top2+50) && (x > left2) && (x < left2 + 200))	||
			((y > top2+50) && (x+100 > left2) && (x+100 < left2 + 200)))   
	{
		vec_y = false;  
         
		 //document.body.style.backgroundColor = "red";		
	}
  
  if (v_x)
	{
		 blueRect2.style.marginLeft = left2 + pixels + "px";
	}

	else
	{
		blueRect2.style.marginLeft = left2 - pixels + "px";
	}

 if(decision_speed < ii)
 {
		moveRect2(left2, x);
		
		ii = 0;
 }
 
 ii++;
 
 

 
 }
var timer = setInterval(startTimer, delay); 



//----------------------------------------------------------------------------//

