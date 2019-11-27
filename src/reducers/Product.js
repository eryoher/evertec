import {
    SEARCH_PRODUCTS,
    SEARCH_PRODUCTS_SUCCESS,
    GET_PRICE_BY_PRODUCT,
    GET_PRICE_BY_PRODUCT_SUCCESS,
    CHECK_ITEM_BY_PRODUCT,
    CHECK_ITEM_BY_PRODUCT_SUCCESS,
    SET_TABLE_DATA_PRODUCTS,
    GET_PRODUCTS_CART,
    GET_PRODUCTS_CART_SUCCESS,
    SET_INPUT_FOCUS,
    SET_INPUT_FOCUS_SUCCESS,
    GET_PRODUCTS_INVOLVEMENT,
    GET_PRODUCTS_INVOLVEMENT_SUCCESS
} from 'constants/ActionsTypes'

const initialState = {
    search: [],
    price: null,
    productsUpdate: null,
    paramsPrice: null,
    productsCart: null,
    focusInput: null,
    updateCant: false,
    productsInvol: null,
    searchParameters: null
}

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case SEARCH_PRODUCTS:
            return { ...state, searchParameters: action.payload, search: [], productsUpdate: null }
        case SEARCH_PRODUCTS_SUCCESS:
            return { ...state, search: action.payload }
        case GET_PRICE_BY_PRODUCT:
            return { ...state, price: null, paramsPrice: action.payload, updateCant: false }
        case GET_PRICE_BY_PRODUCT_SUCCESS:
            const price = action.payload;
            const { paramsPrice } = state;

            let updateState = {
                ...state,
                productsUpdate: [
                    ...state.search.productos,
                ],
                price,
                updateCant: true
            }

            if (updateState.productsUpdate) {
                updateState.productsUpdate.forEach(prd => {
                    if (prd.niprod === paramsPrice.Idproducto) {
                        prd.pcio_unit = price.prod_pcio_vta
                        if (paramsPrice.cantidad && parseInt(paramsPrice.cantidad) > 0) {
                            prd.neto = (parseFloat(price.prod_pcio_vta) * parseInt(paramsPrice.cantidad)).toString();
                            prd.cantidad = parseInt(paramsPrice.cantidad);
                        } else {
                            prd.neto = '0';
                            prd.cantidad = '0';
                        }

                    }
                });
            }

            return updateState;
        case CHECK_ITEM_BY_PRODUCT:
            return { ...state, itemTable: null }
        case CHECK_ITEM_BY_PRODUCT_SUCCESS:
            return { ...state, itemTable: action.payload.data }
        case SET_TABLE_DATA_PRODUCTS:
            const paramsArray = action.payload;
            let createState = {
                ...state,
                productsUpdate: [
                    ...state.search.productos,
                ]
            }

            if (createState.productsUpdate) {
                createState.productsUpdate.forEach(prd => {
                    paramsArray.forEach(params => {
                        if (prd.niprod === params.niprod) {
                            prd[params.idCampo] = params.value
                        }
                    });
                });
            }

            return createState;
        case GET_PRODUCTS_CART:
            return { ...state, productsCart: null }
        case GET_PRODUCTS_CART_SUCCESS:
            return { ...state, productsCart: action.payload }
        case GET_PRODUCTS_INVOLVEMENT:
            return { ...state, productsInvol: null }
        case GET_PRODUCTS_INVOLVEMENT_SUCCESS:
            return { ...state, productsInvol: action.payload.data }
        case SET_INPUT_FOCUS:
            return { ...state, focusInput: null }
        case SET_INPUT_FOCUS_SUCCESS:
            return { ...state, focusInput: action.payload }
        default:
            return state
    }
}

export default rootReducer