import { MENU_OPEN_CLOSE } from "../action";
import { SET_TEXT } from "../action";
import { combineReducers } from 'redux';


let MenuOpenCloseInit = {
    open: true 
};
const MenuOpenClose = (state = MenuOpenCloseInit, action) => {
    switch(action.type) {
        case MENU_OPEN_CLOSE:
            return {
                ...state, open: !state.open
            };
        default:
            return state;
    }
}

let SetTextInit = {
    text: ''
};
const SetText = (state = SetTextInit, action) => {
    switch(action.type) {
        case SET_TEXT:
            return {
                ...state, text: action.payload
            };
        default:
            return state;
    }
}


const ReducersApp = combineReducers({
    MenuOpenClose, SetText
});


export default ReducersApp;
