import {
    GET_CLIENT_HEADBOARD,
    GET_CLIENT_HEADBOARD_SUCCESS,
    GET_GENERATE_ITEMS,
    GET_GENERATE_ITEMS_SUCCESS,
    GET_GENERATE_SALES_AFFECTED,
    GET_GENERATE_SALES_AFFECTED_SUCCESS
} from '../constants/ActionsTypes';


export const getClientHeadboard = (params) => {
    return {
        type: GET_CLIENT_HEADBOARD,
        payload: params
    }
};

export const getClientHeadboardSuccess = (response) => {
    return {
        type: GET_CLIENT_HEADBOARD_SUCCESS,
        payload: response
    }
};

export const getGenerateItems = (params) => {
    return {
        type: GET_GENERATE_ITEMS,
        payload: params
    }
};

export const getGenerateItemsSuccess = (response) => {
    return {
        type: GET_GENERATE_ITEMS_SUCCESS,
        payload: response
    }
};

export const getGeneratesalesAffected = (params) => {
    return {
        type: GET_GENERATE_SALES_AFFECTED,
        payload: params
    }
};

export const getGeneratesalesAffectedSuccess = (response) => {
    return {
        type: GET_GENERATE_SALES_AFFECTED_SUCCESS,
        payload: response
    }
};