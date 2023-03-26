
// function validate()
// {
//     var name = document.getElementById("fname").value;
//     // document.getElementById("e_name").innerHTML = "Witam";
//     if (isWhiteSpaceOrEmpty(name))
//     {
//         document.getElementById("e_name").innerHTML = "";
//     }
//     else
//     {
//         document.getElementById("e_name").innerHTML = "Wprowadź imie!";
//     }

// }
// function isWhiteSpaceOrEmpty(str) {
//     return /^[\s\t\r\n]*$/.test(str);       
// }
// function isEmpty(char)
// {
//     if (char.length == 0)
//     {
//         return true;
//     }
//     else
//     {
//         return false;
//     }
// }
function validate(formularz)
{
    var name = formularz.elements["f_imie"];
    var surrname = formularz.elements["f_nazwisko"];
    var code = formularz.elements["f_kod"];
    var street = formularz.elements["f_ulica"];
    var city = formularz.elements["f_miasto"];
    var email = formularz.elements["f_email"];
    var login = formularz.elements["f_login"]
    var haslo = formularz.elements["f_haslo"]
    // var pusta = isWhiteSpaceOrEmpty(name);
    // if (pusta)
    // {
    //     alert("Podaj imie!");
    //     return false;
    // }
    // else
    // {
    //     return true;
    // }
    var namemess = "Podaj imie!";
    var surrmess = "Podaj nazwisko!";
    var codemess = "Podaj kod pocztowy!";
    var streetmess = "Podaj ulice!";
    var citymess = "Podaj miasto!";
    var emailmess = "Podaj właściwy mail!"
    var haslomess = "Podaj hasło!"
    var loginmess = "Podaj login!"
    // checkString(namemess, name);
    // checkString(surrmess, surrname);
    // checkString(codemess, code);
    // checkString(streetmess, street);
    // checkString(citymess, city);
    // checkEmail(email);
    bol = checkStringAndFocus(name, namemess, isWhiteSpaceOrEmpty) && checkStringAndFocus(surrname, surrmess, isWhiteSpaceOrEmpty) && checkStringAndFocus(code, codemess, isWhiteSpaceOrEmpty) && checkStringAndFocus(street, streetmess, isWhiteSpaceOrEmpty) && checkStringAndFocus(city, citymess, isWhiteSpaceOrEmpty) && checkStringAndFocus(email, emailmess, isEmailInvalid) && checkStringAndFocus(login, loginmess, isWhiteSpaceOrEmpty) && checkStringAndFocus(haslo, haslomess, isWhiteSpaceOrEmpty);
    return bol;

}
// function isWhiteSpaceOrEmpty(str) {
//     return /^[\s\t\r\n]*$/.test(str);
// }
// function checkString(mess, chain)
// {
//     var checking = isWhiteSpaceOrEmpty(chain);
//     if (checking)
//     {
//         alert(mess);
//         return false;
//     }
//     else
//     {
//         return true;
//     }
// }
// function checkEmail(str) {
//     let email = /^[a-zA-Z_0-9\.]+@[a-zA-Z_0-9\.]+\.[a-zA-Z][a-zA-Z]+$/;
//     return email.test(str);
// }
// function checkStringAndFocus(obj, msg) {
//     let str = obj.value;
//     let errorFieldName = "e_" + obj.name.substr(2, obj.name.length);
//     if (isWhiteSpaceOrEmpty(str)) {
//     document.getElementById(errorFieldName).innerHTML = msg;
//     obj.focus();
//     return false;
//     }
//     else {
//     document.getElementById(errorFieldName).innerHTML = "";
//     return true;
//     }

// }
// function checkEmailAndFocus(obj, msg) {
//     let email = /^[a-zA-Z_0-9\.]+@[a-zA-Z_0-9\.]+\.[a-zA-Z][a-zA-Z]+$/;
//     let errorFieldName = "e_" + obj.name.substr(2, obj.name.length);
//     let str = obj.value;
//     if (email.test(str))
//     {
//         document.getElementById(errorFieldName).innerHTML = "";
//         return true;
//     }
//     else {
//         document.getElementById(errorFieldName).innerHTML = msg;
//         obj.focus();
//         return false;                                                                                       
//     }
// }


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
function showElement(e) {
    document.getElementById(e).style.visibility = 'visible';
}
function hideElement(e) {
    document.getElementById(e).style.visibility = 'hidden';
}

function alterRows(i, e) {
    if (e) {
    if (i % 2 == 1) {
    e.setAttribute("style", "background-color: Aqua;");
    }
    e = e.nextSibling;
    while (e && e.nodeType != 1) {
    e = e.nextSibling;
    }
    alterRows(++i, e);
    }
}

function nextNode(e) {
    while (e && e.nodeType != 1) {
    e = e.nextSibling;
    }
    return e;
    }
function prevNode(e) {
    while (e && e.nodeType != 1) {
    e = e.previousSibling;
    }
    return e;
    }
function swapRows(z) {
    var b = document.getElementById(z);
    let tab = prevNode(b.previousSibling);
    let tBody = nextNode(tab.firstChild);
    let lastNode = prevNode(tBody.lastChild);
    tBody.removeChild(lastNode);
    let firstNode = nextNode(tBody.firstChild);
    tBody.insertBefore(lastNode, firstNode);
}
function cnt(form, msg, maxSize) {
    if (form.value.length > maxSize)
    form.value = form.value.substring(0, maxSize);
    else
    msg.innerHTML = maxSize - form.value.length;
}
    