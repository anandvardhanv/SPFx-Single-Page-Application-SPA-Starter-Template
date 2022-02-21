import { NavLink, useParams, useLocation } from "react-router-dom";
import * as React from 'react';
import styles from './Navigation.module.scss';
import HomeLogo from '../Assets/home.svg';
import NavLinks from './NavigationLinks';

function Navigation(){
    const sideMenu = NavLinks.map((sideNavItem) => {
        return (
            <div className={styles.items}>
                <NavLink to={sideNavItem.link} activeClassName={styles.activeNavLinkItem} className={styles.NavLinkItem} exact>
                    <div className={styles.itemIcon}>
                        <img src={HomeLogo}></img>
                    </div>
                    <div className={styles.itemLabel}>
                        {sideNavItem.title}
                    </div>
                </NavLink>
            </div>
        );
    });
    return(
        <div className={styles.Navigation}>
            {sideMenu}
        </div>
    );
}

export default Navigation;