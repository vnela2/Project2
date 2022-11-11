function hoverChange_color()
{
    document.body.style.backgroundColor = "blue";
    console.log("function ran");
}

function changeFont()
{
    document.body.style.fontFamily = "verdana";
    console.log("it ran")
}

let luck = random(1,2);
let type = false;

if(luck == 1) type = true;
else if (luck == 2) type = false;