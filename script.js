const submit=document.getElementById("submit")
const input=document.getElementById("DOB")
submit.addEventListener("click",function
(){
const update = function(){
let DOB = input.value;
let  Day = new Date(DOB);
    TIME = Day.getTime(),
    TODAY= new Date(),
    TIMENOW = TODAY.getTime(),
    value = TIMENOW-TIME,
    YEAR = Math.floor(value/(1000*60*60*24*365.25)),
    MONTH = Math.floor(value/(1000*60*60*24*30.4375)),
    WEEK = Math.floor(value/(1000*60*60*24*7)),
    DAY = Math.floor(value/(1000*60*60*24));
    
let insert = function (x,y){
    document.querySelector(x).innerHTML = y;
}
    insert("#YEAR",YEAR + "-YEARS");
    insert("#MONTH",MONTH + "-MONTH");
    insert("#WEEK",WEEK + "-WEEK");
    insert("#DAY",DAY + "-DAY");
    }
    setInterval(update,1000);
})