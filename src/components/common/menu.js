import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faSearch, faPlus, faBell, faCog, faUserCircle, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import { themr } from 'react-css-themr';
import styles from './menu.module.css';
import { SELECTTYPE, LOGIN } from 'utils/RoutePath';
import { connect } from 'react-redux';
import { userSignOut } from '../../actions';
import { isLoggedIn } from 'lib/AuthUtils';
import { Image } from 'react-bootstrap';


class Menu extends Component {

    handleSingOut = () => {
        this.props.userSignOut();
    }

    componentDidUpdate = (prevProps) => {
        const { auth } = this.props;
        if (prevProps.auth !== auth && !isLoggedIn(auth)) {
            this.props.history.push(LOGIN) //Accion para cuando deslogea
        }
    }

    componentDidMount = () => {
        const { auth } = this.props
        if (!isLoggedIn(auth)) {
            this.props.history.push(LOGIN) //Accion para cuando se carga el form y se encuentra logeado
        }
    }


    render() {
        const { theme } = this.props;

        return (
            <div className={theme.menuContainer} >
                <div className={`d-flex align-items-start flex-column bd-highlight mb-3 ${theme.subContainer}`}>
                    <div className="p-2 bd-highlight" style={{ margin: "0px auto" }} >
                        <Image className={theme.imgLogo} src="/assets/images/menu_logo.png" />
                    </div>
                    <div className="p-2 bd-highlight" style={{ margin: "0px auto" }} >
                        <FontAwesomeIcon icon={faStar} />
                    </div>
                    <div className="p-2 bd-highlight" style={{ margin: "0px auto" }}>
                        <FontAwesomeIcon icon={faSearch} />
                    </div>
                    <div className="mb-auto p-2 bd-highlight" style={{ margin: "0px auto" }}>
                        <a style={{ textDecoration: 'none', color: '#fff' }} href={SELECTTYPE}>
                            <FontAwesomeIcon icon={faPlus} />
                        </a>
                    </div>
                    <div className="p-2 bd-highlight" style={{ margin: "0px auto" }}>
                        <FontAwesomeIcon icon={faBell} />
                    </div>
                    <div className="p-2 bd-highlight" style={{ margin: "0px auto" }}>
                        <FontAwesomeIcon icon={faCog} />
                    </div>
                    <div className="p-2 bd-highlight" style={{ margin: "0px auto" }}>
                        <FontAwesomeIcon icon={faUserCircle} />
                    </div>
                    <div className="p-2 bd-highlight" style={{ margin: "0px auto" }}>
                        <a style={{ textDecoration: 'none', color: '#fff' }} href={'#'} onClick={this.handleSingOut} >
                            <FontAwesomeIcon icon={faSignOutAlt} />
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = ({ auth }) => {
    return { auth };
};



export default connect(mapStateToProps, { userSignOut })(themr('MenuTheme', styles)(Menu));