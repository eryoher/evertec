import React, { Component } from 'react'
import withMenu from '../../components/common/withMenu'
import Steps from '../../components/common/steps';
import { withTranslation } from 'react-i18next';
import { Row, Col } from 'react-bootstrap';
import HeadboardForm from 'components/headboard/headboardForm';

class Headboard extends Component {
    render() {
        const {t} = this.props
        
        const nextButton = {
            url:'/loaditems',
        }
        
        const backButton = {
            url:'/voucher',

        }
        const steps = [
            {
                label:t('voucher.step.select_client'),                
                before:true,
            },
            {
                label:t('voucher.step.load_headboard'),
                main:true
            },
            {
                label:t('voucher.step.load_items'),
            },
            {
                label:t('voucher.step.affectation_vouchers'),
            },
            {
                label:t('voucher.step.generate'),
            },            
            
        ]
        return (
            <Row className="" >
                <Col sm={12} className={"title mt-3 "} style={{fontSize:'14pt'}} >
                    {t("voucher.title")}
                </Col>
                <Steps 
                    steps={steps} 
                    nextButton={nextButton}
                    backButton={backButton}
                />
                <HeadboardForm />
            </Row>
        )
    }
}

export default (withTranslation()(withMenu( Headboard )));