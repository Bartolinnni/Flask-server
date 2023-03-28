
function validatereg(formularz)
{
    var email = formularz.elements["f_email"];
    var login = formularz.elements["f_login"]
    var haslo1 = formularz.elements["f_haslo1"]
    var haslo2 = formularz.elements["f_haslo2"]

    
    var emailmess = "Podaj właściwy mail!"
    var haslomess1 = "Podaj hasło!"
    var loginmess = "Podaj login!"
    var haslomess2 = "Podaj hasło!"
    
    bol = checkStringAndFocus(email, emailmess, isEmailInvalid) && checkStringAndFocus(login, loginmess, isWhiteSpaceOrEmpty) && checkStringAndFocus(haslo1, haslomess1, isWhiteSpaceOrEmpty) && checkStringAndFocus(haslo2, haslomess2, isWhiteSpaceOrEmpty);;
    return bol;

}
function validatelog(formularz)
{
    var login = formularz.elements["f_login"]
    var haslo1 = formularz.elements["f_haslo1"]
    
    var haslomess1 = "Podaj hasło!"
    var loginmess = "Podaj login!"
    
    bol = checkStringAndFocus(login, loginmess, isWhiteSpaceOrEmpty) && checkStringAndFocus(haslo1, haslomess1, isWhiteSpaceOrEmpty);
    return bol;

}

function validateblog(formularz)
{
    var name = formularz.elements["f_notename"]
    var note = formularz.elements["f_note"]

    var namemess = "Podaj nazwe posta!"

    bol = checkNote(name, namemess, isWhiteSpaceOrEmpty) && checkNote(note, namemess, isWhiteSpaceOrEmpty);
    return bol;

}


function isWhiteSpaceOrEmpty(str) {
    return /^[\s\t\r\n]*$/.test(str);       
}

function isEmailInvalid(str) {
    let email = /^[a-zA-Z_0-9\.]+@[a-zA-Z_0-9\.]+\.[a-zA-Z][a-zA-Z]+$/;
    return !email.test(str);
}

function checkStringAndFocus(obj, msg, fun) {
    let str = obj.value;
    let errorFieldName = "e_" + obj.name.substr(2, obj.name.length);
    if (fun(str)) {
        document.getElementById(errorFieldName).innerHTML = msg;
        obj.focus();
        return false;
    }
    else {
        document.getElementById(errorFieldName).innerHTML = "";
        return true;
    }
}

function checkNote(obj, msg, fun) {
    let str = obj.value;
    let errorFieldName = "e_" + obj.name.substr(2, obj.name.length);
    if (fun(str)) {
        document.getElementById(errorFieldName).innerHTML = msg;
        return false;
    }
    else {
        document.getElementById(errorFieldName).innerHTML = "";
        return true;
    }
}