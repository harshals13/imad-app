// counter code

var button = document.getElementById('counter');
buttin.onclick =  funtion(){
    // create a request object
    var request = new XMLHttpRequest();
    //Capture the response and store it in a variable
    
    request.onreadystatechange=function(){
        if(request.resdyState === XMLHttpRequest.Done){
            //take some action
            if(request.status === 200){
                var counter = request.responseText;
                var span = document.getElementById('count');
                span.innerHTML = counter.toString();
            }
        }
    };
}
