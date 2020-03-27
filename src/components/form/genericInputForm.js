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
        const { idOperacion, config } = this.props
        this.props.voucherHeadAuto({ dato: value, idOperacion, cod_atributo: config.cod_atrib });
        this.setState({ loadingSearch: true });
    }

    handleSelect = (selected) => {
        const { config } = this.props;
        const value = selected[0];
        if (value) {
            this.props.handleChange({
                cod_atributo: config.cod_atrib,
                desc_dato: value.id.trim(),
                //desc_dato: value.label
            })
        }
    }


    render() {
        const { config, autodata } = this.props;

        const optionsSync = (autodata) ? autodata.map((opt) => {
            return ({ id: opt.cod_dato, label: opt.desc_dato.trim() });
        }) : [];

        const inputConfig = [{ idCampo: (config.cod_atrib) ? config.cod_atrib.trim() : '', label: config.descripcion, visible: config.visible, requerido: 0, editable: config.editable }]
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
                    disable={!config.editable}
                    styles={{ width: '100%' }}
                    handleSearch={this.handleSearch}
                    auoptions={optionsSync}
                    handleLoading={this.state.loadingSearch}
                    handleSelect={this.handleSelect}
                    onChange={() => { }}
                    labelKey={"label"}
                />
            )

        } else if (config.valores && config.valores.length) {

            const optionsConditions = config.valores.map((opt) => {
                return ({ id: opt.cod_valor, label: opt.desc_valor })
            });

            return (
                <InputDropdown
                    options={optionsConditions}
                    onChange={(data) => {
                        let text = ''

                        optionsConditions.forEach(field => {
                            if (field.id === data.target.value) {
                                text = field.label;
                            }
                        });

                        this.props.handleChange({
                            cod_atributo: config.cod_atrib,
                            cod_dato: data.target.value,
                            desc_dato: text
                        })
                    }}
                    {...properties}
                />
            )
        } else {
            return (
                <InputText
                    {...properties}
                    onChange={data => {
                        this.props.handleChange({
                            cod_atributo: config.cod_atrib,
                            desc_dato: data,
                        })
                    }}
                />
            )
        }

    }
}


const mapStateToProps = ({ voucher, vouchertype }) => {
    const { autodata } = voucher;
    const { idOperacion } = (vouchertype.voucherType) ? vouchertype.voucherType : { idOperacion: null };
    return { autodata, idOperacion };

};

export default connect(mapStateToProps, { voucherHeadAuto })(withTranslation()(GenericInputForm));