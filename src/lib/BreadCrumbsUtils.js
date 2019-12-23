import { HEADERBOARD, GENERATE, LOADITEMS, VOUCHER, VOUCHERINVOLVEMENT, VOUCHERAFFECTING, VOUCHERSTATE } from '../utils/RoutePath';

export function getBackNextButtons(crumbs, current, urlParameter) {
    let ban = true;

    const steps = crumbs.map((crumb, index) => {
        const tmpmain = (current === crumb.cod_proceso) ? true : false;
        ban = (tmpmain) ? false : ban
        return ({ ...crumb, before: ban, position: index, label: crumb.desc_proceso, main: tmpmain });
    });

    return getButtons(steps, urlParameter);
}


const getButtons = (crumbs, urlParameter) => {
    let next, back, nextButton, backButton = false;
    let mainIndex = null;

    crumbs.forEach((crumb, index) => {
        if (crumb.main) {
            mainIndex = index
        }
    });

    next = (crumbs[mainIndex + 1]) ? crumbs[mainIndex + 1] : false;
    back = (crumbs[mainIndex - 1]) ? crumbs[mainIndex - 1] : false;

    if (next) {
        nextButton = {
            url: getUrl(next.cod_proceso, urlParameter)
        }
    }

    if (back) {
        backButton = {
            url: getUrl(back.cod_proceso, urlParameter)
        }
    }

    return [backButton, nextButton];
}

const getUrl = (proccess, urlParameter) => {

    const urls = {
        p_vtacab: HEADERBOARD,
        p_selcli: VOUCHER,
        p_cargaitemvta: LOADITEMS,
        p_afec_cant_vta: VOUCHERINVOLVEMENT,
        p_fincomprob: GENERATE,
        p_afec_impo_vta: VOUCHERAFFECTING,
        p_afec_stado_vta: VOUCHERSTATE

    }

    return (urlParameter) ? `${urls[proccess]}/${urlParameter}` : urls[proccess];
}