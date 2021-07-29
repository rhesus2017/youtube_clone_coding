import { MENU_OPEN_CLOSE } from "../action";
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


const ReducersApp = combineReducers({
    MenuOpenClose
});


export default ReducersApp;
