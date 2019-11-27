import {
    SALES_AFFECTED_VALIDATE,
    SALES_AFFECTED_VALIDATE_SUCCESS,
    SALES_AFFECTED_IMPORT_VALIDATE,
    SALES_AFFECTED_IMPORT_VALIDATE_SUCCESS,
    SALES_AFFECTED_QUANTITY,
    SALES_AFFECTED_QUANTITY_SUCCESS,
    SALES_AFFECTED_SUB_CALCULATION,
    SALES_AFFECTED_SUB_CALCULATION_SUCCESS,
    SALES_AFFECTED_CONFIRM,
    SALES_AFFECTED_CONFIRM_SUCCESS,
    SET_TABLE_DATA_INVOLVEMENT,
    SET_TABLE_DATA_INVOLVEMENT_SUCCESS,
    SALES_AFFECTED_IMPORT,
    SALES_AFFECTED_IMPORT_SUCCESS

} from '../constants/ActionsTypes';


export const salesAffectedValidate = (params) => {
    return {
        type: SALES_AFFECTED_VALIDATE,
        payload: params
    }
};

export const salesAffectedValidateSuccess = (response) => {
    return {
        type: SALES_AFFECTED_VALIDATE_SUCCESS,
        payload: response
    }
};

export const salesAffectedImportValidate = (params) => {
    return {
        type: SALES_AFFECTED_IMPORT_VALIDATE,
        payload: params
    }
};

export const salesAffectedImportValidateSuccess = (response) => {
    return {
        type: SALES_AFFECTED_IMPORT_VALIDATE_SUCCESS,
        payload: response
    }
};

export const salesAffectedCant = (params) => {
    return {
        type: SALES_AFFECTED_QUANTITY,
        payload: params
    }
};

export const salesAffectedCantSuccess = (response) => {
    return {
        type: SALES_AFFECTED_QUANTITY_SUCCESS,
        payload: response
    }
};

export const salesAffectedImport = (params) => {
    return {
        type: SALES_AFFECTED_IMPORT,
        payload: params
    }
};

export const salesAffectedImportSuccess = (response) => {
    return {
        type: SALES_AFFECTED_IMPORT_SUCCESS,
        payload: response
    }
};

export const salesAffectedSubCalculation = (params) => {
    return {
        type: SALES_AFFECTED_SUB_CALCULATION,
        payload: params
    }
};

export const salesAffectedSubCalculationSuccess = (params) => {
    return {
        type: SALES_AFFECTED_SUB_CALCULATION_SUCCESS,
        payload: params
    }
};

export const salesAffectedConfirm = (params) => {
    return {
        type: SALES_AFFECTED_CONFIRM,
        payload: params
    }
};

export const salesAffectedConfirmSuccess = (response) => {
    return {
        type: SALES_AFFECTED_CONFIRM_SUCCESS,
        payload: response
    }
};

export const setTableDataInvolvement = (params) => {
    return {
        type: SET_TABLE_DATA_INVOLVEMENT,
        payload: params
    }
};