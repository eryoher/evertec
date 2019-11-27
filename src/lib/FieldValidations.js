import moment from "moment";

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