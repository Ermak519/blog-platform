import React from "react";
import { Button } from "antd";

import './Navigation.scss';
import Logo from './logo.svg'

export const Navigation = () => (
    <div className="navigation">
        <ul className="navigation__list">
            <li className="navigation__item"><img src={Logo} alt="logo main" /> Real World Blog</li>
            <div className="navigation__registry">
                <li className="navigation__item"><Button type="text">Sign In</Button></li>
                <li className="navigation__item"><Button>Sign Up</Button></li>
            </div>
        </ul>
    </div>
)
