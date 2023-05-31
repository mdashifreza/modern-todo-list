import { ADD_TODO } from "../actions/actionTypes";
import { DEL_TODO } from "../actions/actionTypes";
import { EDIT_TODO } from "../actions/actionTypes";
const initialState = {
    list : []
};
export const AddtodoReducers = (state = initialState, action)=>{
    switch(action.type){
        case ADD_TODO:
            const { id, data } = action.payload;
                return{
                    ...state,
                    list : [
                        ...state.list,
                        {
                            id: id,
                            data: data,
                        }       
                    ]
                }
        case DEL_TODO : 
                return {
                    ...state,
                    list : state.list.filter((items)=>items.id !== action.payload.id)
                }
        case EDIT_TODO : 
                return {
                    ...state,
                    list: state.list.map((item) =>
                        item.id === action.payload.id ? { ...item, data: action.payload.data } : item
                    ),
                }
        default:
                return state;   
    }
}