import React, { Component, Fragment } from 'react';
import CommonTable from 'components/common/commonTable';
import { Col, Button, Row } from 'react-bootstrap';
import styles from './voucherStateTable.module.css';
import { themr } from 'react-css-themr';
import { connect } from 'react-redux';
import { withTranslation } from 'react-i18next';
import { getConfigVoucher, setTableDataInvolvement, salesAffectedStateValidate, salesAffectedSubCalculation, salesAffectedStateConfirm } from '../../actions';
import InputText from 'components/form/inputText';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import NotificationMessage from 'components/common/notificationMessage';
import { selectFilter } from 'react-bootstrap-table2-filter';
import { validateField } from 'lib/FieldValidations';
import moment from 'moment';
import { P_ASIEN_CONT } from 'constants/ConfigProcessNames';
import AccountField from './accountField';
import InputDropdown from 'components/form/inputDropdown';


class AccountingTable extends Component {

    constructor(props) {
        super(props);
        this.inputRefs = {};
        this.state = {
            showError: false,
            errorMessage: '',
            editRow: null,
            editing: false,
            accountDetail: null
        }
        this.tableRef = React.createRef();

        this.rowErrors = []

    }

    componentDidMount = () => {
        const { idOperacion } = this.props
        this.props.getConfigVoucher({ cod_proceso: P_ASIEN_CONT, idOperacion });
    }

    componentDidUpdate = (prevProps) => {

        if (prevProps.accountDetail !== this.props.accountDetail && this.props.accountDetail) {
            this.setState({ accountDetail: this.props.accountDetail })
        }
    }


    componentWillUnmount = () => {
        //const items = this.getSelectedCheck();
        const { idOperacion } = this.props;
    }


    getColumns = () => {
        const { config, theme } = this.props;
        const { editing, rowEdit, accountDetail } = this.state;
        const rows = config.campos.map((field) => {
            const campoId = field.idCampo.trim()
            return {
                dataField: campoId,
                text: (field.label) ? ((campoId === 'cuenta') ? '' : field.label) : '',
                align: 'center',
                headerAlign: 'center',
                headerStyle: this.getStyleColumn(field),
                hidden: !field.visible,
                filter: (campoId === 'cuenta') ? selectFilter({
                    options: this.getFilterOptions(campoId, field),
                    className: `${theme.inputFilter} mt-2`,
                    onFilter: filterVal => this.setState({ filterVal }),
                    placeholder: field.label,
                }) : null,
                formatter: (cell, row, rowIndex, extraData) => this.renderFormat(field, cell, row, extraData),
                formatExtraData: { editing, rowEdit, accountDetail }
            }

        });

        rows.push(
            {
                dataField: 'error',
                text: '',
                align: 'center',
                headerAlign: 'center',
                headerStyle: { width: '3%', 'textAlign': 'center' },
                formatter: ((cell, row, rowIndex) => {
                    if (row.linea_edit) {
                        return <FontAwesomeIcon style={{ cursor: 'pointer' }} icon={faPencilAlt} onClick={() => this.handleEditCell(row)} />
                    } else {
                        return null
                    }
                }),
                editable: false

            }
        );

        return rows;
    }

    renderFormat = (field, value, row, editProperties) => {
        const { rowEdit, editing, accountDetail } = editProperties;
        const campoId = field.idCampo.trim();
        const inputError = (value === 'error_input') ? true : false;
        const customValue = (value === 'error_input') ? '' : !Array.isArray(value) ? value : value[0].cod_estado;
        const inputStyle = (campoId === 'cant_afec' || campoId === 'precio_unit' || campoId === 'neto') ? { textAlign: 'right' } : {};
        let result = null;

        const optionsCC = (accountDetail) ? accountDetail.cc.map(opt => {
            return { id: opt.cod_cc, label: opt.centrocosto }
        }) : [];

        if (field.editable && !this.inputRefs[campoId]) {
            this.inputRefs[campoId] = {}
        }

        if (field.editable && !this.inputRefs[campoId][row.nimovcli]) {
            const customRef = React.createRef();
            this.inputRefs[campoId][row.nimovcli] = customRef
        }

        const optionsInput = {
            fwRef: (field.editable) ? this.inputRefs[campoId][row.id] : null,
            inputFormCol: { sm: 12 },
            fields: [{ ...field, label: false }],
            label: false,
            inputId: `${campoId}`,
            id: `${campoId}_${row.nimovcli}`,
            name: `${campoId}_${row.nimovcli}`,
            colLabel: "col-sm-4",
            colInput: "col-sm-8",
            divStyle: { paddingLeft: '17px' },
            disable: false,
            value: customValue,
            showError: inputError,
            styles: inputStyle,
            rowStyle: { marginBottom: '5px' },
            options: (accountDetail && accountDetail.nicodcta === row.nicodcta) ? optionsCC : [],
            onChange: (data) => {
                const value = data.target.value;
                console.log(value)
            }
        }

        if (editing && row.nitem === rowEdit) {
            if (campoId === 'cuenta') {
                result = (
                    <AccountField />
                );
            } else if (campoId === 'centrocosto') {
                console.log('Editando....', editing, rowEdit, campoId, field)

                result = (
                    <InputDropdown
                        {...optionsInput}
                    />
                );
            } else {
                result = (
                    <span> {customValue} </span>
                )
            }

        } else {
            result = (
                <span> {customValue} </span>
            )
        }


        return result;
    }

    handleEditCell = (row) => {
        this.setState({ editing: true, rowEdit: row.nitem });
    }

    getFilterOptions = (idField, field) => {
        const { products } = this.props;
        const optionsExits = [];
        const result = [];
        products.Items.forEach(row => {
            if (row[idField] && !optionsExits[row[idField]]) {
                const labelValue = (field.mascara) ? this.getValueMask(row[idField], field.mascara) : row[idField];
                optionsExits[row[idField]] = true;
                result.push({ value: row[idField], label: labelValue })
            }
        });
        return result
    }

    handleCloseError = () => {
        this.setState({ showError: false })
    }

    getStyleColumn = (field) => {
        const idField = field.idCampo.trim();
        let style = {};

        switch (idField) {
            case 'fec_emis':
            case 'fec_vto':
                style = { width: '12%' }
                break;
            case 'estado_orig':
            case 'cod_unid':
                style = { width: '8%' }
                break;
            case 'estado_afec':
                style = { width: '170px' }
                break;
            default:
                style = { width: '10%' }
                break;

        }

        if (field.requerido === '1') {
            style.color = 'red';
        }

        return style;
    }

    render() {
        const { products, theme, config, productsUpdate, readOnly, accountDetail } = this.props;
        const tableColumns = (config && products) ? this.getColumns() : [];
        console.log(accountDetail, 'detalle')

        const rowData = (products) ? products.Items.map((prod) => {
            let result = {};
            if (productsUpdate) {
                productsUpdate.forEach(update => {
                    if (update.nimovcli === prod.nimovcli) {
                        result = {
                            ...update,
                        }
                    }
                });

            } else {
                result = {
                    ...prod,
                }
            }

            return result;

        }) : null;


        const options = {
            pageStartIndex: 1,
            sizePerPage: products.page_size,
            page: products.page_number,
            totalSize: products.total_count,
            onPageChange: (page, sizePerPage) => {
                const items = this.getSelectedCheck();
                if (items.length) {

                }
            }
        }

        return (
            <>
                <Col className={`col-12 pl-0 pr-0`}>
                    {config &&
                        <CommonTable
                            remote
                            refTable={this.tableRef}
                            columns={tableColumns}
                            keyField={'nitem'}
                            data={rowData}
                            rowClasses={theme.tableRow}
                            headerClasses={theme.tableHeader}
                            paginationOptions={options}
                            onTableChange={this.props.handleChangeTable}
                        />
                    }
                </Col>
            </>
        )
    }
}

const mapStateToProps = ({ voucher, accountingSeats, auth }) => {
    const config = (voucher.config) ? voucher.config[P_ASIEN_CONT] : null;
    const { authUser } = auth
    const { productsUpdate, accountDetail } = accountingSeats;
    return { config, productsUpdate, authUser, accountDetail };
};

const connectForm = connect(mapStateToProps, {
    getConfigVoucher,
    setTableDataInvolvement,
    salesAffectedStateValidate,
    salesAffectedSubCalculation,
    salesAffectedStateConfirm
})(AccountingTable);

export default themr('StateTableStyles', styles)(withTranslation()(connectForm));