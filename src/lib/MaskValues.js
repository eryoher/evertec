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
        if (maskConfig.usarSeparadorDecimal !== maskConfig.usarSeparadorMil) {
            var masked = IMask.createMask(
                {
                    mask: Number,
                    signed: true,
                    scale: maskConfig.cantDecimales,
                    radix: (maskConfig.usarSeparadorDecimal) ? maskConfig.usarSeparadorDecimal : ",",
                    thousandsSeparator: (maskConfig.usarSeparadorMil) ? maskConfig.usarSeparadorMil : '.'
                }
            );
            result = masked.resolve(value.toString());
        } else {
            result = value;
            console.error('Error al inicializar la máscara: el separador de miles no puede ser igual al de decimales.');
        }
    }

    return result;
}