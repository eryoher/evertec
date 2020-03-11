import {
    GET_CLIENT_HEADBOARD,
    GET_CLIENT_HEADBOARD_SUCCESS,
    GET_GENERATE_ITEMS,
    GET_GENERATE_ITEMS_SUCCESS,
    GET_GENERATE_SALES_AFFECTED,
    GET_GENERATE_SALES_AFFECTED_SUCCESS,
    FINISH_GENERATE,
    FINISH_GENERATE_SUCCESS,
    PRINT_GENERATE,
    PRINT_GENERATE_SUCCESS,
    CHANGE_TABLE_ITEMS,
    CHANGE_TABLE_ITEMS_SUCCESS,
    CHANGE_TABLE_AFFECT,
    CHANGE_TABLE_AFFECT_SUCCESS
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

export const changeTableItems = (params) => {
    return {
        type: CHANGE_TABLE_ITEMS,
        payload: params
    }
};

export const changeTableItemsSuccess = (response) => {
    return {
        type: CHANGE_TABLE_ITEMS_SUCCESS,
        payload: response
    }
};

export const changeTableAffect = (params) => {
    return {
        type: CHANGE_TABLE_AFFECT,
        payload: params
    }
};

export const changeTableAffectSuccess = (response) => {
    return {
        type: CHANGE_TABLE_AFFECT_SUCCESS,
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

export const finishGenerate = (params) => {
    return {
        type: FINISH_GENERATE,
        payload: params
    }
};

export const finishGenerateSuccess = (response) => {
    return {
        type: FINISH_GENERATE_SUCCESS,
        payload: response
    }
};

export const printGenerate = (params) => {
    return {
        type: PRINT_GENERATE,
        payload: params
    }
};

export const printGenerateSuccess = (response) => {
    return {
        type: PRINT_GENERATE_SUCCESS,
        payload: response
    }
};