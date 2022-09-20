function checkBox(a){
    var ch = "checkboxli"+a;
    var lab= "label"+a;
    var cbox = document.getElementById(ch);
    if( cbox.checked==true){
    document.getElementById(lab).setAttribute("style","text-decoration:line-through;");
    }
    else{
        document.getElementById(lab).style.textDecoration = "none";
    }
    console.log(cbox);
}

var count=0;
function newTask(){
    var task= "";
    task = prompt("Enter The Task You Want");
    if(task==null){
        return;
    }

    task = task.charAt(0).toUpperCase()+ task.slice(1);
    document.getElementById("taskdivs").innerHTML+= "<div class=tasks><div id=up><h2 id=taskheader>"+task+"</h2></div><div id=addbuttondiv><button id=btn onclick=toDoList("+count+")>+</button></div><div class=down id=down"+count+"></div></div> "
    count++
}

var cnt=0;
function toDoList(b){
    var dwn="down"+b;
    var todo="";
    todo = prompt("Enter the sub-tasks");
    if(todo==null){
        return;
    }
    todo = todo.charAt(0).toUpperCase() + todo.slice(1);
    document.getElementById(dwn).innerHTML+= " <input type=checkbox id=checkboxli"+cnt+" onclick=checkBox("+cnt+")><label id=label"+cnt+">"+todo+" </label><br> ";
    cnt++;
}