import { HEADERBOARD, GENERATE, LOADITEMS, VOUCHER, VOUCHERINVOLVEMENT, VOUCHERAFFECTING, VOUCHERSTATE, ACCOUNTINGSEAT } from '../utils/RoutePath';
import { P_VTACAB, P_SELCLI, P_CARGAITEMVTA, P_AFEC_CANT_VTA, P_FINCOMPROB, P_AFEC_IMPO_VTA, P_AFEC_STADO_VTA, P_ASIEN_CONT } from 'constants/ConfigProcessNames';

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

    const urls = {}
    urls[P_VTACAB] = HEADERBOARD;
    urls[P_SELCLI] = VOUCHER;
    urls[P_CARGAITEMVTA] = LOADITEMS;
    urls[P_AFEC_CANT_VTA] = VOUCHERINVOLVEMENT;
    urls[P_FINCOMPROB] = GENERATE;
    urls[P_AFEC_IMPO_VTA] = VOUCHERAFFECTING;
    urls[P_AFEC_STADO_VTA] = VOUCHERSTATE;
    urls[P_ASIEN_CONT] = ACCOUNTINGSEAT;

    return (urlParameter) ? `${urls[proccess]}/${urlParameter}` : urls[proccess];
}