import React, { Component, Fragment } from 'react'
import InputDropdown from 'components/form/inputDropdown';
import { Col } from 'react-bootstrap';

export default class FiltersTable extends Component {

    constructor(props) {
        super(props)
        this.optionsInput = [
            {
                id: 0,
                label: 'Todos'
            },
            {
                id: 1,
                label: 'Solo comprob. afectados'
            },
            {
                id: 2,
                label: 'Solo comprob. sin afectar'
            }
        ]
    }

    render() {
        const { t, handleGetCant, inputConfig, handleChangeSelect } = this.props
        return (
            <Fragment>
                <Col className={"pl-4"} sm={3}>
                    <input type="checkbox" className={"form-check-input"} onChange={handleGetCant} value="1" />

                    <label className={"form-check-label pt-1"}>
                        {t('voucherInvolvement.form.checkbox')}
                    </label>
                </Col>
                <Col sm={3} style={{ textAlign: 'center' }} >
                    <InputDropdown
                        inputFormCol={{ sm: 12 }}
                        fields={inputConfig}
                        label={t('voucherInvolvement.form.sample')}
                        inputId={'checkComprobAvencer'}
                        name={'checkComprobAvencer'}
                        placeholder={t('client.form.select_sample')}
                        styles={{ width: '100%' }}
                        styleLabel={{ textAlign: 'right' }}
                        colLabel={"col-sm-3"}
                        colInput={"col-sm-9"}
                        options={this.optionsInput}
                        tooltip
                        onChange={(data) => {
                            handleChangeSelect(data.target.value);
                        }}
                    />
                </Col>
            </Fragment>
        )
    }
}
