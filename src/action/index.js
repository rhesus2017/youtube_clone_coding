export const MENU_OPEN_CLOSE = 'MENU_OPEN_CLOSE';
export const SET_TEXT = 'SET_TEXT';

export function MenuOpenClose () {
    return {
        type: MENU_OPEN_CLOSE
    };
};

export function SetText (text) {
    return {
        type: SET_TEXT,
        payload: text
    };
};
