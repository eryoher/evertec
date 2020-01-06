import React, { Component } from 'react'
import withMenu from '../../components/common/withMenu'
import { withTranslation } from 'react-i18next';
import { Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import { getVoucherTypeByUser } from '../../actions';
import SelectForm from 'components/selectType/selectForm';


class SelectType extends Component {

    constructor(props) {
        super(props)
        this.state = {
            type: null
        }
    }

    componentDidMount = () => {
        this.props.getVoucherTypeByUser()
    }

    render() {
        const { t, theme, userVoucherType } = this.props
        const voucherOptions = (userVoucherType) ? userVoucherType.map((voucher) => {
            return (
                {
                    id: voucher.nioperacion,
                    label: voucher.descrip_comprob
                }
            )
        }) : [];
        return (
            <Row>
                <Col sm={12} className={theme.Title} >
                    {t("selectType.title")}
                </Col>
                <Col sm={12} className={theme.Title} >
                    <SelectForm
                        optionsSelect={voucherOptions}
                    />
                </Col>

            </Row>
        )
    }
}

const mapStateToProps = ({ vouchertype }) => {
    const { userVoucherType } = vouchertype;
    return { userVoucherType };
};

export default connect(mapStateToProps, { getVoucherTypeByUser })(withTranslation()(withMenu(SelectType)));