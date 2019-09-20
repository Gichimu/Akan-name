var auth = function (){
    var birthday = document.getElementById("birthdate").value;
    var myLIst = document.getElementById("gender");
    var gender = myLIst.options[myLIst.selectedIndex].text;


    var arr = birthday.split("-");

    for(i = 0; i < arr.length; i++){
        parseInt(arr[i]);
    }

    if(arr[0] > 2002){
        alert("Invalid year of birth, please try again")
    }
    
}