import React, { Component } from 'react';
import CommonTable from 'components/common/commonTable';
import { Col, Button, Row } from 'react-bootstrap';
import styles from './voucherStateTable.module.css';
import { themr } from 'react-css-themr';
import { connect } from 'react-redux';
import { withTranslation } from 'react-i18next';
import { getConfigVoucher, accountValidate, accountConfirm } from '../../actions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt, faSave, faBan } from '@fortawesome/free-solid-svg-icons';
import { selectFilter } from 'react-bootstrap-table2-filter';
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
            accountDetail: null,
            itemsTable: (this.props.products) ? this.props.products.Items : [],
            ccUpdateValue: null
        }

        this.rowErrors = []

    }

    componentDidMount = () => {
        const { idOperacion } = this.props;
        this.props.getConfigVoucher({ cod_proceso: P_ASIEN_CONT, idOperacion });
    }

    componentDidUpdate = (prevProps) => {

        if (prevProps.accountsUpdate !== this.props.accountsUpdate && this.props.accountsUpdate) {
            this.setState({ itemsTable: this.props.accountsUpdate });
        }

        if (prevProps.accountDetail !== this.props.accountDetail && this.props.accountDetail) {
            this.setState({ accountDetail: this.props.accountDetail });
        }
    }

    componentWillUnmount = () => {
        const { idOperacion, voucherTypeCancel } = this.props;
        if (voucherTypeCancel === null) {
            this.props.accountConfirm({ idOperacion })
        }
    }

    handleValidateCell = (row) => {
        //console.log(row, 'esto es lo que se envia a validar...')
        const { idOperacion } = this.props;
        const Items = [{
            "niasto": row.niasto,
            "nitem": row.nitem,
            "nicodcta": row.nicodcta,
            "nicc": row.nicc,
            "nicodctacc": row.nicodctacc
        }]

        this.props.accountValidate({ Items, idOperacion });
        this.setState({ editing: false })
    }

    handleCancelCell = () => {
        this.setState({ editing: false })
    }

    getColumns = () => {
        const { config, theme } = this.props;
        const { editing, rowEdit, accountDetail, ccUpdateValue } = this.state;
        const rows = config.campos.map((field) => {
            const campoId = field.idCampo.trim()
            return {
                dataField: campoId,
                text: (field.label) ? ((campoId === 'cuenta') ? '' : field.label) : '',
                align: (campoId === 'debe' || campoId === 'haber') ? 'right' : 'center',
                headerAlign: (campoId === 'debe' || campoId === 'haber') ? 'right' : 'center',
                headerStyle: this.getStyleColumn(field),
                hidden: !field.visible,
                filter: (campoId === 'cuenta') ? selectFilter({
                    options: this.getFilterOptions(campoId, field),
                    className: `${theme.inputFilter} mt-2`,
                    onFilter: filterVal => this.setState({ filterVal }),
                    placeholder: field.label,
                }) : null,
                formatter: (cell, row, rowIndex, extraData) => this.renderFormat(field, cell, row, extraData),
                formatExtraData: { editing, rowEdit, accountDetail, ccUpdateValue }
            }

        });

        rows.push(
            {
                dataField: 'error',
                text: '',
                align: 'center',
                headerAlign: 'center',
                headerStyle: { width: '3%', 'textAlign': 'center' },
                formatExtraData: { editing, rowEdit },
                formatter: ((cell, row, rowIndex, extraData) => {
                    if (row.linea_edit) {
                        if (rowEdit === row.nitem && editing) {
                            return (
                                <Row>
                                    <Col sm={6} >
                                        <FontAwesomeIcon style={{ cursor: 'pointer' }} icon={faSave} onClick={() => this.handleValidateCell(row)} />
                                    </Col>
                                    <Col sm={6}>
                                        <FontAwesomeIcon style={{ cursor: 'pointer' }} icon={faBan} onClick={() => this.handleCancelCell(row)} />

                                    </Col>
                                </Row>
                            )
                        } else if (!editing) {
                            return <FontAwesomeIcon style={{ cursor: 'pointer' }} icon={faPencilAlt} onClick={() => this.handleEditCell(row)} />
                        } else {
                            return null;
                        }
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
        const { idOperacion } = this.props;
        const { rowEdit, editing, accountDetail, ccUpdateValue } = editProperties;
        const campoId = field.idCampo.trim();
        const inputError = (value === 'error_input') ? true : false;
        const customValue = (value === 'error_input') ? '' : !Array.isArray(value) ? value : value[0].cod_estado;
        const inputStyle = (campoId === 'cant_afec' || campoId === 'precio_unit' || campoId === 'neto') ? { textAlign: 'right' } : {};
        let result = null;

        const optionsCC = (accountDetail) ? accountDetail.cc.map(opt => {
            return { id: opt.cod_cc, label: opt.centrocosto }
        }) : [];

        const optionsInput = {
            inputFormCol: { sm: 12 },
            fields: [{ ...field, label: false }],
            label: false,
            inputId: `${campoId}`,
            id: `${campoId}_${row.nitem}`,
            name: `${campoId}_${row.nitem}`,
            colLabel: "col-sm-4",
            colInput: "col-sm-8",
            divStyle: { paddingLeft: '17px' },
            disable: false,
            value: (ccUpdateValue) ? ccUpdateValue : customValue,
            showError: inputError,
            styles: inputStyle,
            rowStyle: { marginBottom: '5px' },
            //            options: (accountDetail && accountDetail.nicodcta === row.nicodcta) ? optionsCC : [],
            options: (accountDetail) ? optionsCC : [],
            onChange: (data) => {
                const value = data.target.value;
                this.setState({ ccUpdateValue: value })
                accountDetail.cc.forEach(account => {
                    if (account.cod_cc === value) {
                        this.updateCCRow({ rowId: row.nitem, value, text: account.centrocosto })
                    }
                });
            }
        }

        if (editing && row.nitem === rowEdit) {
            if (campoId === 'cuenta') {
                result = (
                    <AccountField
                        idOperacion={idOperacion}
                        placeholder={customValue}
                        handleUpdateAccount={this.updateAccountRow}
                        row={row}
                    />
                );
            } else if (campoId === 'centrocosto') {
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
            case 'debe':
            case 'haber':
                style = { width: '5%', textAlign: 'right' }
                break;
            case 'cuenta':
            case 'detalle':
                style = { width: '20%' }
                break;
            case 'nitem':
                style = { width: '3%' }
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

    updateAccountRow = (account) => {
        const { itemsTable } = this.state;

        itemsTable.forEach(item => {
            if (item.nitem === account.rowId) {
                item.cuenta = account.label;
                item.nicodcta = account.id;
            }
        });

        this.setState({ itemsTable });

    }

    updateCCRow = ({ rowId, value, text }) => {
        const { itemsTable } = this.state;
        itemsTable.forEach(item => {
            if (item.nitem === rowId) {
                item.nicc = value;
                item.centrocosto = text;
            }
        });

        this.setState({ itemsTable });
    }

    render() {
        const { products, theme, config } = this.props;
        const tableColumns = (config && products) ? this.getColumns() : [];

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
                    {config && this.state.itemsTable &&
                        <CommonTable
                            remote
                            refTable={this.tableRef}
                            columns={tableColumns}
                            keyField={'nitem'}
                            data={this.state.itemsTable}
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

const mapStateToProps = ({ voucher, accountingSeats, auth, vouchertype }) => {
    const config = (voucher.config) ? voucher.config[P_ASIEN_CONT] : null;
    const { authUser } = auth
    const { productsUpdate, accountDetail, accountsUpdate } = accountingSeats;
    const { voucherTypeCancel } = vouchertype;
    return { config, productsUpdate, authUser, accountDetail, accountsUpdate, voucherTypeCancel };
};

const connectForm = connect(mapStateToProps, {
    getConfigVoucher,
    accountValidate,
    accountConfirm
})(AccountingTable);

export default themr('StateTableStyles', styles)(withTranslation()(connectForm));