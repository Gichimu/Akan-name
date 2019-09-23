var auth = function (){
    var birthday = document.getElementById("birthdate").value;
    var myLIst = document.getElementById("gender");
    var gender = myLIst.options[myLIst.selectedIndex].text;
    submitOk = "true";

    var arr = birthday.split("-");

    var cc = arr[0].split("");

    var CC = parseInt(cc[0] + cc[1]);

    var YY = parseInt(cc[2] + cc[3]);

    var MM = parseInt(arr[1]);

    var DD = parseInt(arr[2]);

    for(i = 0; i < arr.length; i++){
        parseInt(arr[i]);
    }

    if(arr[0] > 2010){
        alert("Invalid year of birth, please try again");
        submitOk = "false";
    }

    if(submitOk == "false"){
        return false;
    }else{
        var dotw = (((CC/4) -2*CC-1) + ((5*YY/4)) + ((26*(MM+1)/10)) + DD ) % 7;
        alert(Math.floor(dotw));
    }
    
}