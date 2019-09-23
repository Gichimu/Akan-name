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

    var akan_name = "";

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

        switch (Math.floor(dotw)){

        case 0 || -0:
            if(gender === "male"){
                akan_name = "kwasi";
                alert("Your Akan name is " + akan_name);
            }else{
                akan_name = "akosua";
                alert("Your Akan name is " + akan_name);
            }
            break;
        case 1 || -1:
        
            if(gender === "male"){
                akan_name = "kwadwo";
                alert("Your Akan name is " + akan_name);
            }else{
                akan_name = "adwoa";
                alert("Your Akan name is " + akan_name);
            }
            break;
        case 2 || -2:
        
            if(gender === "male"){
                akan_name = "kwabena";
                alert("Your Akan name is " + akan_name);
            }else{
                akan_name = "abenaa";
                alert("Your Akan name is " + akan_name);
            }
            break;
        case 3 || -3:
    
            if(gender === "male"){
                akan_name = "kwaku";
                alert("Your Akan name is " + akan_name);
            }else{
                akan_name = "akua";
                alert("Your Akan name is " + akan_name);
            }
            break;
        case 4 || -4:
        
            if(gender === "male"){
                akan_name = "Yaw";
                alert("Your Akan name is " + akan_name);
            }else{
                akan_name = "Yaa";
                alert("Your Akan name is " + akan_name);
            }
            break;
        case 5 || -5:
            if(gender === "male"){
                akan_name = "kofi";
                alert("Your Akan name is " + akan_name);
            }else{
                akan_name = "afua";
                alert("Your Akan name is " + akan_name);
            }
            break;
        case 6 || -6:
        
            if(gender === "male"){
                akan_name = "kwame";
                alert("Your Akan name is " + akan_name);
            }else{
                akan_name = "ama";
                alert("Your Akan name is " + akan_name);
            }
        
        }

    }
    
}