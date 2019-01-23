import React from 'react';
import classes from './Menu.css';

import burgerLogo from '../../assets/images/burger-logo.png';

const menu = (props) => (
    <div className={classes.Menu}>
        <img src={burgerLogo} alt="MyBurger" onClick={props.open}/>
    </div>
);

export default menu;