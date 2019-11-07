import React, { Component } from 'react';
import InputText from './inputText';
import InputDropdown from './inputDropdown';
import InputAutocomplete from './inputAutocomplete';
import { connect } from 'react-redux';
import { voucherHeadAuto } from '../../actions';
import { withTranslation } from 'react-i18next';


class GenericInputForm extends Component {

    constructor(props) {
        super(props)
        this.state = {
            loadingSearch: false
        }
    }

    componentDidUpdate = (prevProps) => {
        if (this.props.autodata !== prevProps.autodata && this.props.autodata.length) {
            this.setState({ loadingSearch: false });
        }
    }

    handleSearch = (value) => {
        this.props.voucherHeadAuto({ criterio_cliente: value, idOperacion: 1 });
        this.setState({ loadingSearch: true });
    }

    handleSelect = (selected) => { }

    render() {
        const { config, autodata } = this.props;

        const optionsSync = (autodata) ? autodata.map((opt) => {
            return ({ id: opt.cod_dato, label: opt.desc_dato });
        }) : [];

        const inputConfig = [{ idCampo: config.cod_atrib.trim(), label: config.descripcion, visible: 1, requerido: 0, editable: 1 }]
        const properties = {
            inputFormCol: { sm: 11 },
            fields: inputConfig,
            inputId: config.cod_atrib,
            name: config.cod_atrib,
            placeholder: config.descripcion,
            label: config.descripcion,
            colLabel: "col-sm-2",
            colInput: "col-sm-10",
            divStyle: { paddingLeft: '17px' }
        }

        if (config.tipo === 'autocomp') {
            return (
                <InputAutocomplete
                    {...properties}
                    styles={{ width: '100%' }}
                    handleSearch={this.handleSearch}
                    auoptions={optionsSync}
                    handleLoading={this.state.loadingSearch}
                    handleSelect={this.handleSelect}
                    labelKey={"label"}

                />
            )

        } else if (config.valores.length) {

            const optionsConditions = config.valores.map((opt) => {
                return ({ id: opt.cod_valor, label: opt.desc_valor })
            });

            return (
                <InputDropdown
                    options={optionsConditions}
                    onChange={() => { }}
                    {...properties}
                />
            )
        } else {
            return (
                <InputText
                    {...properties}
                />
            )
        }

    }
}


const mapStateToProps = ({ voucher }) => {
    const { autodata } = voucher;
    return { autodata };

};

export default connect(mapStateToProps, { voucherHeadAuto })(withTranslation()(GenericInputForm));