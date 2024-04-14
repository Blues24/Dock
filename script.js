document.getElementById("text").textContent = "Welcome to the Terminal";

var inactivitTime = function(){
    var time;
    window.onload = resetTimer;
    //DOM event
    document.onmousemove = resetTimer;
    document.onkeydown = resetTimer;



function dock(){
    console.log("The user has been afk for too long");
    console.error("Its time to wakeup the user");
    window.alert("Wake up Sleepy head")
    window.alert("pick the port")
    
}

function resetTimer(){
    clearTimeout(time);
    time = setTimeout(dock, 60000)
}
};

inactivitTime();