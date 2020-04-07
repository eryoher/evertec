import React, { Component } from 'react';
import CommonTable from 'components/common/commonTable';
import { Col, Button, Row } from 'react-bootstrap';
import styles from './voucherStateTable.module.css';
import { themr } from 'react-css-themr';
import { connect } from 'react-redux';
import { withTranslation } from 'react-i18next';
import { getConfigVoucher, taxesValidateRow, taxesConfirm } from '../../actions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt, faTrashAlt, faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';
import { selectFilter } from 'react-bootstrap-table2-filter';
import { P_IMP_COMPROB } from 'constants/ConfigProcessNames';
import CollapseBotton from 'components/common/collapseBoton';
import InputText from 'components/form/inputText';



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
            itemsTable: (this.props.taxes) ? this.props.taxes.Impuestos : [],
            ccUpdateValue: null
        }

        this.primarykey = 'cod_imp';
        this.rowErrors = []

        this.columnsProduct = [
            {
                dataField: 'nitem_af',
                text: '#',
                align: 'center',
                headerAlign: 'center',
            },
            {
                dataField: 'desc_item',
                text: 'Detalle Item',
                align: 'center',
                headerAlign: 'center',
            },
            {
                dataField: 'neto_item',
                text: 'Neto',
                align: 'center',
                headerAlign: 'center',
            },
            {
                dataField: 'impuesto_item',
                text: 'Impuesto',
                align: 'center',
                headerAlign: 'center',
            }
        ]
    }

    componentDidMount = () => {
        const { idOperacion } = this.props;
        this.props.getConfigVoucher({ cod_proceso: P_IMP_COMPROB, idOperacion });
    }

    componentDidUpdate = (prevProps) => {

        if (prevProps.accountsUpdate !== this.props.accountsUpdate && this.props.accountsUpdate) {
            this.setState({ itemsTable: this.props.accountsUpdate });
        }

        if (prevProps.accountDetail !== this.props.accountDetail && this.props.accountDetail) {
            this.setState({ accountDetail: this.props.accountDetail });
        }
    }

    handleValidateCell = (row) => {
        const { idOperacion } = this.props;
        //Falta campos validar
        const Item = {
            "cod_imp": row.cod_imp,
            "tasa": row.tasa,
            //"alicuota": row.alicuota,
            "impuesto": row.impuesto,
            "base_calc": row.base_calc,
            //"nro_certif": row.nro_certif,
        }
        this.props.taxesValidateRow({ ...Item, idOperacion });
        this.setState({ editing: false })
    }

    handleCancelCell = () => {
        this.setState({ editing: false })
    }

    handleRemoveCell = (row) => {
        console.log(row)
    }

    getColumns = () => {
        const { config, theme } = this.props;
        const { editing, rowEdit, accountDetail, ccUpdateValue } = this.state;
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
                        if (rowEdit === row[this.primarykey] && editing) {
                            return (
                                <Row>
                                    <Col sm={6} >
                                        <FontAwesomeIcon style={{ cursor: 'pointer' }} icon={faCheck} onClick={() => this.handleValidateCell(row)} />
                                    </Col>
                                    <Col sm={6}>
                                        <FontAwesomeIcon style={{ cursor: 'pointer' }} icon={faTimes} onClick={() => this.handleCancelCell(row)} />

                                    </Col>
                                </Row>
                            )
                        } else if (!editing) {
                            const actions = []

                            actions.push(
                                <Col key={1} sm={6}>
                                    <FontAwesomeIcon style={{ cursor: 'pointer' }} icon={faPencilAlt} onClick={() => this.handleEditCell(row)} />
                                </Col>
                            )

                            if (row.linea_edit === 2) {
                                actions.push(
                                    <Col key={2} sm={6} >
                                        <FontAwesomeIcon style={{ cursor: 'pointer' }} icon={faTrashAlt} onClick={() => this.handleRemoveCell(row)} />
                                    </Col>
                                )
                            }
                            return (
                                <Row>
                                    {actions}
                                </Row>
                            )
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
            id: `${campoId}_${row[this.primarykey]}`,
            name: `${campoId}_${row[this.primarykey]}`,
            colLabel: "col-sm-4",
            colInput: "col-sm-8",
            divStyle: { paddingLeft: '17px' },
            disable: false,
            value: (ccUpdateValue) ? ccUpdateValue : customValue,
            showError: inputError,
            styles: inputStyle,
            rowStyle: { marginBottom: '5px' },
            onChange: (value) => {
                this.handleUpdateItems(row[this.primarykey], field.idCampo, value);
            }

        }

        if (editing && row[this.primarykey] === rowEdit) {
            if (campoId !== 'imp_desc') {
                result = (
                    <InputText
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
        this.setState({ editing: true, rowEdit: row[this.primarykey] });
    }

    handleUpdateItems = (rowId, field, value) => {
        const { itemsTable } = this.state;

        itemsTable.forEach(row => {
            if (row[this.primarykey] === rowId) {
                row[field] = value
            }
        });

        // this.setState({ itemsTable });  //Se comenta por que no se necesita, hace perder el foco del campo.

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


    getExpandRow = (row) => {
        return (
            {
                renderer: row => this.renderExpandRow(row),
                showExpandColumn: true,
                expandByColumnOnly: true,
                expandHeaderColumnRenderer: ({ isAnyExpands }) => {
                    return <CollapseBotton status={isAnyExpands} />
                },
                expandColumnRenderer: ({ expanded, rowKey }) => {
                    return <CollapseBotton status={expanded} />
                },
            }
        )
    }

    renderExpandRow = (row) => {
        const { theme } = this.props
        return (
            <CommonTable
                columns={this.columnsProduct}
                data={row.Items}
                keyField={'nitem_af'}
                rowClasses={theme.tableRow}
                headerClasses={theme.tableHeader}
            />
        )
    }

    render() {
        const { taxes, theme, config } = this.props;
        const tableColumns = (config && taxes) ? this.getColumns() : [];
        const options = {
            pageStartIndex: 1,
            sizePerPage: taxes.page_size,
            page: taxes.page_number,
            totalSize: taxes.total_count,
            onPageChange: (page, sizePerPage) => { }
        }

        return (
            <>
                <Col className={`col-12 pl-0 pr-0`}>
                    {config && this.state.itemsTable &&
                        <CommonTable
                            remote
                            refTable={this.tableRef}
                            columns={tableColumns}
                            keyField={this.primarykey}
                            data={this.state.itemsTable}
                            rowClasses={theme.tableRow}
                            headerClasses={theme.tableHeader}
                            expandRow={this.getExpandRow()}
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
    const config = (voucher.config) ? voucher.config[P_IMP_COMPROB] : null;
    const { authUser } = auth
    const { productsUpdate, accountDetail, accountsUpdate } = accountingSeats;
    const { voucherTypeCancel } = vouchertype;
    return { config, productsUpdate, authUser, accountDetail, accountsUpdate, voucherTypeCancel };
};

const connectForm = connect(mapStateToProps, {
    getConfigVoucher,
    taxesValidateRow,
    taxesConfirm
})(AccountingTable);

export default themr('StateTableStyles', styles)(withTranslation()(connectForm));