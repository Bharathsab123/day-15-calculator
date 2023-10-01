
let container=document.createElement("div")
container.setAttribute("class","container-fluid")

let box=document.createElement("div")
box.setAttribute("class","box")


let input =document.createElement("input")
input.setAttribute("type","text")
input.setAttribute("name","display")
input.setAttribute("id","dis")



let btn=document.createElement("button")
btn.setAttribute("type","button")
btn.setAttribute("class","red")
btn.setAttribute("onclick","clear1()")
btn.innerHTML="C"
let btn1=document.createElement("button")
btn1.setAttribute("type","button")
btn1.setAttribute("class","red")
btn1.setAttribute("onclick","mydelete()")
btn1.innerHTML="DEL"
let btn2=document.createElement("button")
btn2.setAttribute("type","button")
btn2.setAttribute("class","green")
btn2.setAttribute("onclick","display('%')")
btn2.innerHTML="%"
let btn3=document.createElement("button")
btn3.setAttribute("type","button")
btn3.setAttribute("class","green")
btn3.setAttribute("onclick","display('/')")
btn3.innerHTML="/"


let btn4=document.createElement("button")
btn4.setAttribute("type","button")
btn4.setAttribute("onclick","display('7')")
btn4.innerHTML="7"
let btn5=document.createElement("button")
btn5.setAttribute("type","button")
btn5.setAttribute("onclick","display('8')")
btn5.innerHTML="8"
let btn6=document.createElement("button")
btn6.setAttribute("type","button")
btn6.setAttribute("onclick","display('9')")
btn6.innerHTML="9"
let btn7=document.createElement("button")
btn7.setAttribute("type","button")
btn7.setAttribute("class","green")
btn7.setAttribute("onclick","display('*')")
btn7.innerHTML="*"



let btn8=document.createElement("button")
btn8.setAttribute("type","button")
btn8.setAttribute("onclick","display('4')")
btn8.innerHTML="4"
let btn9=document.createElement("button")
btn9.setAttribute("type","button")
btn9.setAttribute("onclick","display('5')")
btn9.innerHTML="5"
let btn10=document.createElement("button")
btn10.setAttribute("type","button")
btn10.setAttribute("onclick","display('6')")
btn10.innerHTML="6"
let btn11=document.createElement("button")
btn11.setAttribute("type","button")
btn11.setAttribute("class","green")
btn11.setAttribute("onclick","display('-')")
btn11.innerHTML="-"


let btn12=document.createElement("button")
btn12.setAttribute("type","button")
btn12.setAttribute("onclick","display('1')")
btn12.innerHTML="1"
let btn13=document.createElement("button")
btn13.setAttribute("type","button")
btn13.setAttribute("onclick","display('2')")
btn13.innerHTML="2"
let btn14=document.createElement("button")
btn14.setAttribute("type","button")
btn14.setAttribute("onclick","display('3')")
btn14.innerHTML="3"
let btn15=document.createElement("button")
btn15.setAttribute("type","button")
btn15.setAttribute("class","green")
btn15.setAttribute("onclick","display('+')")
btn15.innerHTML="+"


let btn16=document.createElement("button")
btn16.setAttribute("type","button")
btn16.setAttribute("onclick","display('0')")
btn16.innerHTML="0"
let btn17=document.createElement("button")
btn17.setAttribute("type","button")
btn17.setAttribute("onclick","display('00')")
btn17.innerHTML="00"
let btn18=document.createElement("button")
btn18.setAttribute("type","button")
btn18.setAttribute("onclick","display('.')")
btn18.innerHTML="."
let btn19=document.createElement("button")
btn19.setAttribute("type","button")
btn19.setAttribute("id","eql")
btn19.setAttribute("onclick","calculator()")
btn19.innerHTML="="









document.body.append(container)
container.append(box)
box.append(input,btn,btn1,btn2,btn3,btn4,btn5,btn6,btn7,btn8,btn9,btn10,btn11,btn12,btn13,btn14,btn15,btn16,btn17,btn18,btn19)




let output=document.getElementById("dis")
function display(num){
    output.value += num
}
function calculator(){
    try{
        output.value=eval(output.value)
    }
    catch(err){
        alert("invalid Input")
    }
}
function clear1(){
    output.value="";
}
function mydelete(){
    output.value=output.value.slice(0,-1)
}