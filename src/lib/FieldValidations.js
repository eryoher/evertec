import moment from "moment";

export function validateField(value, type) {
    let result = false;
    const today = new moment();
    const customDate = new moment(value);
    console.log(value, type)
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
            if (customDate.diff(today) >= 0) {
                result = true;
            }
            break;
        case 'FEC>H':
            if (customDate.diff(today) > 0) {
                result = true;
            }
            break;
        case 'FEC<=H':
            if (customDate.diff(today) <= 0) {
                result = true;
            }
            break;
        case 'FEC<H':
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