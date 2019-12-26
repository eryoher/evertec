import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import styles from "./inputButton.module.css";
import { themr } from "react-css-themr";
import { Button } from "react-bootstrap";

class InputButton extends Component {

  handleOnclick = () => {
    const { onClick } = this.props
    if (onClick) {
      onClick()
    }
  }

  render() {
    const { theme, backButton, nextButton, valueButton, urlForm, type, customStyle } = this.props;
    const withStyle = (nextButton || backButton) ? null : { minWidth: '100px' };

    let labelButton =
      nextButton || backButton ? (
        nextButton ? (
          <FontAwesomeIcon icon={faAngleRight} />
        ) : backButton ? (
          <FontAwesomeIcon icon={faAngleLeft} />
        ) : (
              "Button"
            )
      ) : (
          valueButton
        );

    return (
      <>
        {!type &&
          <Link onClick={this.handleOnclick} className={theme.linkClass} to={{ pathname: urlForm, }}>
            <div className={`btn btn-primary ${theme.formButton}`} style={withStyle}>
              {labelButton}
            </div>
          </Link>
        }
        {type === 'primary' &&
          <Button type="primary" style={customStyle} className={`btn btn-primary ${theme.formButton}`} onClick={() => this.props.onClick()}  >
            {labelButton}
          </Button>
        }
      </>
    );
  }
}

export default themr("InputButtonStyles", styles)(InputButton);
