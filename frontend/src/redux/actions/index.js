import { ADD_TODO } from "./actionTypes";
import { DEL_TODO } from "./actionTypes";
import { EDIT_TODO } from "./actionTypes";
let ids = 1;
export const addtodo = (input)=>({
    type : ADD_TODO,
    payload : {
        id : ids++,
        data : input,
    }
})
export const deltodo = (id)=>({
    type : DEL_TODO,
    payload : {
        id,
    }
})
export const edittodo = (id,input)=>({
    type : EDIT_TODO,
    payload : {
        id : id,
        data : input,
    }
})