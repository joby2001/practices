function numberclick(num){
    document.getElementById("display-text").value+=num
}
function clearDisplay(){
    document.getElementById("display-text").value=""
}
function result(){
    let text=document.getElementById("display-text").value
    let result=eval(text)
    document.getElementById("display-text").value=result
}