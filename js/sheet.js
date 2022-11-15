
function pick2()
{
    let choice = true;
    console.log(choice);
    sessionStorage.setItem("initialState", 'true');
    console.log(sessionStorage);
}

function check()
{
    if(sessionStorage.getItem("initialState") == 'true')
    {
        console.log("got key")
        document.getElementById('startMenu').style.visibility = 'visible'
    }
}