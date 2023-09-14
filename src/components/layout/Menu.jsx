import './Menu.css'
import React from "react";
import {Link} from 'react-router-dom'
 
const Menu = props => (
    <aside className="Menu">
        <nav>
            <ul>
                <li>
                    <Link to="/"> inicio </Link>
                </li>
                <li>
                    <Link to="/param/123"> parametro 1 </Link>
                </li>
                <li>
                    <Link to="/param/456"> parametro 2 </Link>
                </li>
                <li>
                    <Link to="/about"> Sobre </Link>
                </li>
                <li>
                    <Link to="/noexists"> vai não </Link>
                </li>
                

            </ul>
        </nav>
    </aside>
)
export default Menu