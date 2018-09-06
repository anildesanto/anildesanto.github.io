var url = "https://raw.githubusercontent.com/anildesanto/Java-Portfolio/master/j.json";
var request = new XMLHttpRequest();
request.open('GET',url);
request.responseType = "json";
request.send();
request.onload = function()
{
    var employed = request.response;
    for (employees in employed)
    {
        var person = document.createElement("p");
        var details = "";
        //console.log(employees);
        console.log("a"+employed[employees]);
        for (otherKey in employed[employees])
        {
            //console.log(otherKey);
            console.log("b" +employed[employees][otherKey]);
            //details += "\n"+employed[key][otherKey];
            for(p in employed[employees][otherKey])
            {
                //console.log(skills);
                console.log("c" +employed[employees][otherKey][p]);
                details += "\n"+employed[employees][otherKey][p] + "\n";
                if(employed[employees][otherKey][p] == employed[employees][otherKey]["skills"])
                {
                    for(skill in employed[employees][otherKey]["skills"])
                    {
                        console.log("skills "+ employed[employees][otherKey]["skills"][skill]);
                    }
                }
            }
        }

        person.textContent = details;
        document.getElementById("people").appendChild(person);
    }
}
function validateRegistration()
{
    console.log("validating");
    var n = document.getElementById("name").value;
    var e = document.getElementById("email").value;
    var p = document.getElementById("password").value;
    var nameValid =/^[a-zA-Z- ]+$/;
    var emailValid = /(\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,6})/;
    var passwordValid = /((?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,15})/;
    if((n == "" | e == "" | p == ""))
    {
        window.alert("Fill in details");
        return false;
    }
    if(!(n.match(nameValid)))
    {
        window.alert("Invalid name");
        return false;
    }
    if(!(e.match(emailValid)))
    {
        window.alert("Invalid email");
        return false;
    }
    if(!(p.match(passwordValid)))
    {
        window.alert("Invalid password");
        return false;
    }
    window.alert("Form submited");
}
//document.getElementById("dropdown").addEventListener("click",showOptions());
function showOptions(n)
{
    document.getElementById(n.textContent.toLowerCase()).classList.toggle("active");   
}
function closeOptions()
{
    document.getElementById("options").classList.remove("active");
}
function openOptions()
{
    document.getElementById("options").classList.add("active");
}
function insertParagraph()
{
    textZone = document.getElementById("text");
    var paragraph = document.createElement("p");
    console.log(paragraph.textContent = employees[0]);
    textZone.appendChild(paragraph);
}