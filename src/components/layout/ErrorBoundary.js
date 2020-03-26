import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';

import { connect } from 'react-redux';

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    componentDidCatch(error, info) {
        console.log(error, info)
        this.setState({ hasError: true, error: error, info: info });
    }

    render() {
        const { t } = this.props;

        if (this.state.hasError) {
            return <div>
                {t("An unexpected error has ocurred")}<br />
                {t("Please, reload and try again")}<br />
                <div>
                    <div><b>URL:</b> {window.location.href}</div>
                    <div><b>Error:</b> {this.state.error.message}</div>
                    <div><b>Stacktrace:</b> <pre>{this.state.error.stack}</pre></div>
                </div>
            </div>
        } else {
            return this.props.children;
        }
    }
}

const mapStateToProps = ({ auth }) => {
    const { userId } = auth;
    return { userId };
};

export default connect(mapStateToProps, {})(withTranslation()(ErrorBoundary));