import moment from "moment";
import IMask from 'imask';


export const getValueMask = (value, mascara, props) => {
    const { authUser } = props;
    const maskConfig = authUser.configApp.mascaras[mascara];
    let result = '';

    if (maskConfig.tipo === 'fecha') {
        const date = new moment(value)
        result = date.format(maskConfig.valor);
    } else if (maskConfig.tipo === 'personalizado') {
        result = value;
    } else {
        console.log(maskConfig)
        var masked = IMask.createMask(
            {
                mask: Number,
                scale: maskConfig.cantDecimales,
                radix: ".",
                thousandsSeparator: (maskConfig.usarSeparadorMil) ? '.' : ''
            }
        );
        result = masked.resolve(value.toString());
    }

    return result;
}