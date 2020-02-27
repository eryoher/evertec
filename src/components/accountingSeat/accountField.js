import React, { Component } from 'react'
import InputAutocomplete from 'components/form/inputAutocomplete';
import { connect } from 'react-redux';
import { withTranslation } from 'react-i18next';
import { searchAccount, getAccountDetail } from '../../actions';

class AccountField extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: false,
        }
    }


    handleSearch = (query) => {
        const { idOperacion } = this.props;
        this.props.searchAccount({ criterio_cuenta: query, idOperacion })
    }

    handleSelect = (account) => {
        const { idOperacion, row } = this.props;
        this.props.getAccountDetail({ nicodcta: account[0].id, idOperacion })
        this.props.handleUpdateAccount({ rowId: row.nitem, ...account[0] });
    }

    handleChange = (selected) => {
        // console.log(selected, 'en el change')
    }

    render() {
        const { value, searchItems, placeholder } = this.props;
        const optionsSync = (searchItems) ? searchItems.map((opt) => {
            return ({ id: opt.nicodcta, label: opt.Cuenta });
        }) : [];

        return (
            <InputAutocomplete
                inputFormCol={{ sm: 11 }}
                label={false}
                inputId={'account'}
                name={'account'}
                placeholder={placeholder}
                styles={{ width: '100%' }}
                colLabel={"col-sm-2"}
                colInput={"col-sm-10"}
                handleSearch={this.handleSearch}
                auoptions={optionsSync}
                handleLoading={this.state.loading}
                handleSelect={this.handleSelect}
                onBlur={this.handleBlur}
                onChange={this.handleChange}
                labelKey={"label"}
            />
        )
    }
}

const mapStateToProps = ({ accountingSeats }) => {
    const { searchItems } = accountingSeats;
    return { searchItems };
};

export default connect(mapStateToProps, { searchAccount, getAccountDetail })(withTranslation()(AccountField));
