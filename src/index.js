const decrement_button=document.getElementById("decrement")
const increment_button=document.getElementById("increment")
const countDisplay=document.getElementById("count-display")

increment_button.addEventListener("click",()=>{
   const oldValue=Number(countDisplay.value);
    countDisplay.value=oldValue+1
})

decrement_button.addEventListener("click",()=>{
   const oldValue=Number(countDisplay.value);
    countDisplay.value=oldValue-1
})
