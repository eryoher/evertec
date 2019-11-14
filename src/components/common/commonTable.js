import React, { Component } from 'react';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import 'react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter.min.css';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
import paginationFactory from 'react-bootstrap-table2-paginator';
import BootstrapTable from 'react-bootstrap-table-next';
import filterFactory from 'react-bootstrap-table2-filter';


export default class CommonTable extends Component {

    handleOnSelect = (row, isSelect) => {
        //console.log(row, isSelect);
    }

    render() {
        const { columns, wrapperClasses, bordered, rowStyle, rowClasses, headerClasses, data, selectRow, expandRow, defaultSorted, keyField, paginationOptions } = this.props;

        const border = (bordered) ? bordered : false;
        const customkeyField = (keyField) ? keyField : 'id';
        const customPagination = (paginationOptions) ? paginationOptions : {};

        return (
            <BootstrapTable
                keyField={customkeyField}
                data={data}
                columns={columns}
                rowClasses={rowClasses}
                headerClasses={headerClasses}
                rowStyle={rowStyle}
                bordered={border}
                wrapperClasses={wrapperClasses}
                selectRow={selectRow}
                filter={filterFactory()}
                expandRow={expandRow}
                defaultSorted={defaultSorted}
                pagination={paginationFactory(customPagination)}
            />

        )
    }
}
