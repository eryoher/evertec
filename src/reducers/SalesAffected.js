import {
    SALES_AFFECTED_VALIDATE,
    SALES_AFFECTED_VALIDATE_SUCCESS,
    SALES_AFFECTED_QUANTITY,
    SALES_AFFECTED_QUANTITY_SUCCESS,
    SALES_AFFECTED_SUB_CALCULATION,
    SALES_AFFECTED_SUB_CALCULATION_SUCCESS,
    SALES_AFFECTED_CONFIRM,
    SALES_AFFECTED_CONFIRM_SUCCESS,
    SET_TABLE_DATA_INVOLVEMENT,
    SALES_AFFECTED_IMPORT,
    SALES_AFFECTED_IMPORT_SUCCESS,
    SALES_AFFECTED_IMPORT_VALIDATE,
    SALES_AFFECTED_IMPORT_VALIDATE_SUCCESS,
    SALES_AFFECTED_IMPORT_CONFIRM,
    SALES_AFFECTED_IMPORT_CONFIRM_SUCCESS,
    SALES_AFFECTED_STATE,
    SALES_AFFECTED_STATE_SUCCESS,
    SALES_AFFECTED_STATE_VALIDATE,
    SALES_AFFECTED_STATE_VALIDATE_SUCCESS,
    SALES_AFFECTED_STATE_CONFIRM,
    SALES_AFFECTED_STATE_CONFIRM_SUCCESS
} from 'constants/ActionsTypes'

const initialState = {
    cantValidate: null,
    productsInvol: null,
    productsImport: null,
    subCalculations: null,
    productsUpdate: null,
    salesImportconfirm: null,
    salesconfirm: null,
    productsState: null,
    stateConfirm: null
}

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case SALES_AFFECTED_VALIDATE:
            return { ...state, cantValidate: null }
        case SALES_AFFECTED_VALIDATE_SUCCESS:
            const validateItems = action.payload.data.Items;
            let updateState = {
                ...state,
                productsUpdate: [
                    ...state.productsInvol.Items,
                ],
                cantValidate: action.payload.data
            }

            if (updateState.productsUpdate) {
                updateState.productsUpdate.forEach(prd => {
                    validateItems.forEach(item => {
                        if (prd.nimovcli === item.nimovcli && item.ind_stock === 0) {
                            prd.cant_afec = item.cant_afec;
                            prd.neto = item.neto;
                            prd.precio_unit = item.prod_pcio_vta;
                            prd.cant_saldo = parseFloat(prd.cant_pend) - parseFloat(item.cant_afec);
                        } else if (prd.nimovcli === item.nimovcli && item.ind_stock !== 0) {
                            prd['error'] = true;
                            prd['type_error'] = item.ind_stock;
                        }
                    });
                });
            }
            return updateState;
        case SALES_AFFECTED_IMPORT_VALIDATE:
            return { ...state, cantValidate: null }
        case SALES_AFFECTED_IMPORT_VALIDATE_SUCCESS:
            const importItems = action.payload.Items;
            let updateImportState = {
                ...state,
                productsUpdate: [
                    ...state.productsImport.Items,
                ],
                cantValidate: action.payload
            }

            if (updateImportState.productsUpdate) {
                updateImportState.productsUpdate.forEach(prd => {
                    importItems.forEach(item => {
                        if (prd.nimovcli === item.nimovcli) {
                            prd.imp_afec = item.imp_afec;
                            //prd.neto = item.neto;
                            //prd.saldo = item.saldo;
                            // prd.cant_saldo = parseFloat(prd.cant_pend) - parseFloat(item.cant_afec);
                        } else if (prd.nimovcli === item.nimovcli && item.ind_stock !== 0) {
                            prd['error'] = true;
                            prd['type_error'] = item.ind_stock;
                        }
                    });
                });
            }
            //console.log(updateImportState)
            return updateImportState;
        case SALES_AFFECTED_QUANTITY:
            return { ...state, productsInvol: null, paramsProductsInvol: action.payload }
        case SALES_AFFECTED_QUANTITY_SUCCESS:
            return { ...state, productsInvol: action.payload }
        case SALES_AFFECTED_IMPORT:
            return { ...state, productsImport: null }
        case SALES_AFFECTED_IMPORT_SUCCESS:
            return { ...state, productsImport: action.payload }
        case SALES_AFFECTED_SUB_CALCULATION:
            return { ...state, subCalculations: null }
        case SALES_AFFECTED_SUB_CALCULATION_SUCCESS:
            const updateItem = action.payload;
            let updateCalsub = {
                ...state,
                productsUpdate: [
                    ...state.productsInvol.Items,
                ],
                subCalculations: action.payload
            }
            if (updateCalsub.productsUpdate) {

                updateCalsub.productsUpdate.forEach(prd => {
                    if (prd.nimovcli === updateItem.nimovcli) {
                        prd.neto = updateItem.neto;
                        prd.precio_unit = updateItem.precio_unit;
                        // prd.cant_saldo = parseFloat(prd.cant_pend) - parseFloat(updateItem.cant_afec);
                    }
                });

            }

            return updateCalsub;
        case SALES_AFFECTED_CONFIRM:
            return { ...state, salesconfirm: null, productsUpdate: null }
        case SALES_AFFECTED_CONFIRM_SUCCESS:
            return { ...state, salesconfirm: action.payload }
        case SALES_AFFECTED_IMPORT_CONFIRM:
            return { ...state, salesImportconfirm: null, productsUpdate: null }
        case SALES_AFFECTED_IMPORT_CONFIRM_SUCCESS:
            return { ...state, salesImportconfirm: action.payload }
        case SET_TABLE_DATA_INVOLVEMENT:
            const paramsArray = action.payload;
            ///console.log(paramsArray, 'respuesta')
            let createState = {
                ...state,
                productsUpdate: [
                    ...state.productsInvol.Items,
                ]
            }
            if (createState.productsUpdate) {
                createState.productsUpdate.forEach(prd => {
                    paramsArray.forEach(params => {
                        if (prd.niprod === params.niprod) {
                            prd[params.idcampo] = params.value
                        }
                    });
                });
            }

            return createState;

        case SALES_AFFECTED_STATE:
            return { ...state, productsState: null }
        case SALES_AFFECTED_STATE_SUCCESS:
            return { ...state, productsState: action.payload }
        case SALES_AFFECTED_STATE_VALIDATE:
            return { ...state, stateValidate: null }
        case SALES_AFFECTED_STATE_VALIDATE_SUCCESS:
            const stateValidateItems = action.payload.Items;
            let updateStateValidate = {
                ...state,
                productsUpdate: [
                    ...state.productsState.Items,
                ],
                stateValidate: action.payload
            }

            if (updateStateValidate.productsUpdate) {
                updateStateValidate.productsUpdate.forEach(prd => {
                    stateValidateItems.forEach(item => {
                        if (prd.nimovcli === item.nimovcli) {
                            prd.nItem = item.nItem;
                            //prd.estado_afec = item.estado_afec; //Temporal 
                        } else if (prd.nimovcli === item.nimovcli && item.ind_stock !== 0) {
                            prd['error'] = true;
                            prd['type_error'] = item.ind_stock;
                        }
                    });
                });
            }
            return updateStateValidate;
        case SALES_AFFECTED_STATE_CONFIRM:
            return { ...state, stateConfirm: null, productsUpdate: null }
        case SALES_AFFECTED_STATE_CONFIRM_SUCCESS:
            return { ...state, stateConfirm: action.payload }
        default:
            return state
    }

}

export default rootReducer