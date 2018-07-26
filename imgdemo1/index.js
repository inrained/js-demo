$(document).ready(function(){
    var index=1;
    
     function photoleft(ind){
        if(ind==1)ind=6;
        else ind--;
        $("#leftphoto").css("background-image","url(img/"+ind+".jpg)");
        $("#str"+ind).css("background-color","#EEE8CD");

     }
     function photomid(ind){
        $("#midphoto").css("background-image","url(img/"+ind+".jpg)");
        $("#str"+ind).css("background-color","#AEEEEE");        
     }
     function photoright(ind){
        if(ind==6)ind=1;
        else ind++;
        $("#rightphoto").css("background-image","url(img/"+ind+".jpg)");
        $("#str"+ind).css("background-color","#EEE8CD");
     }
    
    $("#up").click(function(){

        if(index==1)index=6;
        else index--;
        photomid(index);
        photoleft(index);               
        photoright(index); 


    });

     $("#down").click(function(){
        if(index==6)index=1;
        else index++;
        photomid(index);
        photoleft(index);               
        photoright(index); 
    });

    var str=document.getElementsByClassName('str');
    for(var i=0;i<6;i++){
        str[i].no=i+1;
        str[i].onclick=function(){
            $("#str"+index).css("background-color","#EEE8CD");
            index=this.no;     
            photoleft(index);               
            photoright(index); 
            photomid(index);

        }
        

       
                
            
        
    }
    setInterval(function(){if(index==6)index=1;
        else index++;
        photomid(index);
        photoleft(index);               
        photoright(index);},3000);

    






})