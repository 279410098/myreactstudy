import React from "react";
import { NavLink } from 'react-router-dom';
import "./topnav.css";

export default class TopNav extends React.Component {
    render () {
        return (
            <header className="TopNav">
                <nav>
                    <ul>
                        <li><NavLink exact to="/">首页</NavLink></li>
                        <li><NavLink to="/news">新闻</NavLink></li>
                        <li><NavLink to="/error">404</NavLink></li>
                        <li><NavLink to="redirect">重定向（Redirect）</NavLink></li>
                    </ul>
                </nav>
            </header>
        )
    }
}