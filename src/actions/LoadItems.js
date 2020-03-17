import {
    GET_LOAD_ITEMS,
    GET_LOAD_ITEMS_SUCCESS,
    CONFIRM_LOAD_ITEMS,
    CONFIRM_LOAD_ITEMS_SUCCESS,
    CONFIRM_TABLE_ITEMS,
    CONFIRM_TABLE_ITEMS_SUCCESS
} from '../constants/ActionsTypes';

export const getLoadItems = (params) => {
    return {
        type: GET_LOAD_ITEMS,
        payload: params
    }
};

export const getLoadItemsSuccess = (response) => {
    return {
        type: GET_LOAD_ITEMS_SUCCESS,
        payload: response
    }
};


export const confirmLoadItems = (params) => {
    return {
        type: CONFIRM_LOAD_ITEMS,
        payload: params
    }
};

export const confirmLoadItemsSuccess = (response) => {
    return {
        type: CONFIRM_LOAD_ITEMS_SUCCESS,
        payload: response
    }
};
export const confirmTableItems = (params) => {
    return {
        type: CONFIRM_TABLE_ITEMS,
        payload: params
    }
};

export const confirmTableItemsSuccess = (response) => {
    return {
        type: CONFIRM_TABLE_ITEMS_SUCCESS,
        payload: response
    }
};

