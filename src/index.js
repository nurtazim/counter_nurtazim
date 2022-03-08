// const decrement_button=document.getElementById("decrement")
// const increment_button=document.getElementById("increment")
// const countDisplay=document.getElementById("count-display")
//
// increment_button.addEventListener("click",()=>{
//    const oldValue=Number(countDisplay.value);
//     countDisplay.value=oldValue+1
// })
//
// decrement_button.addEventListener("click",()=>{
//    const oldValue=Number(countDisplay.value);
//     countDisplay.value=oldValue-1
// })






import {bindActionCreators} from "redux";
import * as actions  from "./actions"
import store from "./store";

const decrement_button = document.getElementById("decrement")
const increment_button = document.getElementById("increment")
const countDisplay = document.getElementById("count-display")



const {inc ,dec}=bindActionCreators(store.dispatch,actions)


increment_button.addEventListener("click",inc)
decrement_button.addEventListener("click",dec)

store.subscribe(()=>countDisplay.value=store.getState())