// counter code

var button = document.getElementById('counter');

buttin.onclick =  funtion(){
    
    // create a request object
    
    var request = new XMLHttpRequest();
    
    //Capture the response and store it in a variable
    
    request.onreadystatechange=function(){
        if(request.readyState === XMLHttpRequest.DONE){
            //take some action
            if(request.status === 200){
                var counter = request.responseText;
                var span = document.getElementById('count');
                span.innerHTML = counter.toString();
            }
        }
    };
    //Make the request
request.open('GET','http://harshasuryavamshi.imad.hasura-app.io/counter',true);
request.send(null);
}
//Submit name
var submit=document.getElementById('submit_btn');
submit.onclick = function(){
    //create request object
    var request = new XMLHttpRequest();
    // Capture the response and store it in a variable
    request.onreadystatechange = function(){
        if(request.readyState === XMLHttpRequest.DONE){
            //take some action
            if(request.status=== 200){
                //capture a list of names and render is as a list
                var names = request.responseText;
                names= JSON.parse(names);
                var list ='';
                for(var i=0; i<names.length;i++){
                    list+= '<li>'+ names[i] + '<li>';
                }
                var ul= document.getElementById('namelist');
                ul.innerHTML=list;
            }
        }
    };
    



