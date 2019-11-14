import React, { Component } from 'react';
import { themr } from 'react-css-themr';
import styles from './displayLight.module.css';

const mapper = {
    1: 'yellow',
    2: 'green',
    0: 'red',
}

class DisplayLight extends Component {
    render() {
        const { semaforo, theme } = this.props;
        const divClass = ((semaforo in mapper) ? theme[mapper[semaforo]] : theme["grey"]);
        return (
            <div className={`${theme.semaforo} ${divClass}`} />
        )
    }
}


export default themr('DisplayLightStyles', styles)(DisplayLight); 