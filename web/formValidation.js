function showMessage(){
    var username=document.getElementById("form1:userName").value;
    var password=document.getElementById("form1:password").value;
    
    if (username==""){
        alert("Please, enter a username");
        return false;
    }
    else if (password=="") {
        alert("Please, enter a password");
        return false;
    }
    else if (/[#$]/.test(username)) {
        alert("Username contains invalid characters");
        return false;
    }
    return true;
}

