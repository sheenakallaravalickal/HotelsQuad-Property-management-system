import React from 'react';
import { Grid, Button } from '@material-ui/core'
import './style.scss'
const Footer = ({ className }) => {
    return (
        <footer className={`footerArea ${className}`}>
            <ul className="footerLeft">
                {/* <li>
                    <Button className="btn bg-default btn-radius" component="a" href="#">Buy Now</Button>
                </li>
                <li>
                    <Button className="btn bg-success btn-radius" component="a" target="_blank" href="https://themeforest.net/user/itechtheme/portfolio">Feedback</Button>
                </li> */}
            </ul>
            {/* <p>© 2019 Nimmu Admin All rights reserved</p> */}
        </footer>
    )
}
export default Footer;
