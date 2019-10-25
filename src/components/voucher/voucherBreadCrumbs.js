import React, { Component } from 'react'
import Steps from 'components/common/steps';
import { HEADERBOARD, GENERATE, LOADITEMS, VOUCHER, VOUCHERINVOLVEMENT } from '../../utils/RoutePath';

export default class VoucherBreadCrumbs extends Component {

    getCurrentProccess = () => {
        const { crumbs, current } = this.props;
        let result = {}
        crumbs.forEach(crumb => {
            if (crumb.cod_proceso == current) {
                result = crumb;
            }
        });

        return result;
    }

    getButtons = (crumbs) => {
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
                url: this.getUrl(next.cod_proceso)
            }
        }

        if (back) {
            backButton = {
                url: this.getUrl(back.cod_proceso)
            }
        }

        return [backButton, nextButton];
    }

    getUrl = (proccess) => {
        const { urlParameter } = this.props;
        const urls = {
            p_vtacab: HEADERBOARD,
            p_selcli: VOUCHER,
            p_cargaitemvta: LOADITEMS,
            p_afectcomprob: VOUCHERINVOLVEMENT,
            p_fincomprob: GENERATE
        }

        return (urlParameter) ? `${urls[proccess]}/${urlParameter}` : urls[proccess];
    }


    render() {
        const { crumbs, current, completed } = this.props;
        let ban = true;
        const steps = crumbs.map((crumb, index) => {
            const tmpmain = (current === crumb.cod_proceso) ? true : false;
            ban = (tmpmain) ? false : ban
            return ({ ...crumb, before: ban, position: index, label: crumb.desc_proceso, main: tmpmain });
        })

        const [back, next] = this.getButtons(steps);

        if (steps.length) {
            return (
                <Steps
                    steps={steps}
                    nextButton={next}
                    backButton={back}
                    completed={completed}
                />
            )
        } else {
            return null;
        }
    }
}
