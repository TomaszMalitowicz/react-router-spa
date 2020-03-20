import React from 'react';
import { Route, Switch } from 'react-router-dom'
import img1 from '../images/header01.jpg';
import img2 from '../images/header02.jpg';
import img3 from '../images/header03.jpg';
import img4 from '../images/header04.jpg';
import img5 from '../images/header05.jpg';
import '../styles/Header.css'
const Header = () => {
    const images = [img1, img2, img3];
    const index = Math.floor(Math.random() * 3)
    const img = images[index]
    return (
        <>
            <Switch>
                <Route path="/" exact render={() => (<img src={img1} alt="space" />)} />
                <Route path="/products" render={() => (<img src={img2} alt="space" />)} />
                <Route path="/contact" render={() => (<img src={img3} alt="space" />)} />
                <Route path="/admin" render={() => (<img src={img5} alt="space" />)} />
                <Route path="/login" render={() => (<img src={img5} alt="space" />)} />
                <Route render={() => (<img src={img4} alt="space" />)} />
            </Switch>
            {/* <img src={img} alt="header" /> */}
        </>
    );
}

export default Header;