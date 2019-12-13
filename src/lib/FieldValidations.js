import moment from "moment";
import * as Yup from 'yup';

export function validateField(value, type) {
    let result = false;
    const today = new moment();
    let customDate = new moment();

    switch (type) {
        case 'VAL>0':
            if (parseFloat(value) > 0) {
                result = true;
            }
            break;
        case 'VAL>=0':
            if (parseFloat(value) >= 0) {
                result = true;
            }
            break;
        case 'VAL<=0':
            if (parseFloat(value) <= 0) {
                result = true;
            }
            break;
        case 'VAL<0':
            if (parseFloat(value) < 0) {
                result = true;
            }
            break;
        case 'FEC>=H':
            customDate = new moment(value);
            if (customDate.diff(today) >= 0) {
                result = true;
            }
            break;
        case 'FEC>H':
            customDate = new moment(value);
            if (customDate.diff(today) > 0) {
                result = true;
            }
            break;
        case 'FEC<=H':
            customDate = new moment(value);
            if (customDate.diff(today) <= 0) {
                result = true;
            }
            break;
        case 'FEC<H':
            customDate = new moment(value);
            if (customDate.diff(today) < 0) {
                result = true;
            }
            break;

        default:
            if (value) {
                result = true;  //Default se valida campos vacios
            }
            break;
    }

    return result;
}

export function getValidationSchema(campos, t) {
    const validations = {}
    campos.forEach(field => {
        if (field.requerido) {
            const idField = field.idCampo.trim();
            validations[idField] = Yup.string().required(t('validation-required', { field: field.label }));
        }
    });

    return Yup.object().shape(validations);
}