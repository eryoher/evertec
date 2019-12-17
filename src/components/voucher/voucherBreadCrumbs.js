import React, { Component } from 'react'
import Steps from 'components/common/steps';
import { getBackNextButtons } from '../../lib/BreadCrumbsUtils';

export default class VoucherBreadCrumbs extends Component {

    getCurrentProccess = () => {
        const { crumbs, current } = this.props;
        let result = {}
        crumbs.forEach(crumb => {
            if (crumb.cod_proceso === current) {
                result = crumb;
            }
        });

        return result;
    }


    render() {
        const { crumbs, current, completed, urlParameter } = this.props;
        let ban = true;
        const steps = crumbs.map((crumb, index) => {
            const tmpmain = (current === crumb.cod_proceso) ? true : false;
            ban = (tmpmain) ? false : ban
            return ({ ...crumb, before: ban, position: index, label: crumb.desc_proceso, main: tmpmain });
        })

        const [back, next] = getBackNextButtons(crumbs, current, urlParameter);

        if (steps.length) {
            return (
                <Steps
                    steps={steps}
                    nextButton={next}
                    backButton={back}
                    completed={completed}
                    callBackButton={this.props.callBackButton}
                />
            )
        } else {
            return null;
        }
    }
}
