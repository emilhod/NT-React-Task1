import { ActionTypes } from "../constants/action-types"

export const setData = (datas) => {
    return {
        type: ActionTypes.SET_DATA,
        payload: datas,
    };
};

export const selectedData = (data) => {
    return {
        type: ActionTypes.SELECTED_DATA,
        payload: data,
    };
};