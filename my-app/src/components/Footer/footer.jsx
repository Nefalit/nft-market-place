import css from '../Footer/Footer.module.css';
import React from "react";
import instagram from '../../img/instagram.svg';
import facebook from '../../img/facebook.svg';
import Linkedin from '../../img/Linkedin.svg';
import Twitter from '../../img/Twitter.svg';
import logo from '../../img/logo.svg';

export const Footer = (props) => {
    return (
        <footer>
            <div className={css.wrapper}>
                <div className={css.topLine}>
                    <div className={css.companyDesc}>
                        <img src={logo} alt="logo"/>
                        <p>The world’s first and largest digital marketplace for crypto collectibles and non-fungible tokens (NFTs). Buy, sell, and discover exclusive digital items.</p>
                    </div>
                    <div className={css.links}>
                        <h3>Marketplace</h3>
                        <a href="">All NFTs</a>
                        <a href="">Art</a>
                        <a href="">Collectibles</a>
                        <a href="">Domain Names</a>
                        <a href="">Music</a>
                        <a href="">Photography</a>
                        <a href="">Sports</a>
                        <a href="">Trading cards</a>
                        <a href="">Utility</a>
                        <a href="">Virtual Words</a>
                    </div>
                    <div className={css.links}>
                        <h3>My Account</h3>
                        <a href="">Profile</a>
                        <a href="">Favorites</a>
                        <a href="">Watchlist</a>
                        <a href="">My Collections</a>
                        <a href="">Settings</a>
                        <h3>Stats</h3>
                        <a href="">Rankings</a>
                        <a href="">Activity</a>
                    </div>
                    <div className={css.links}>
                        <h3>Resources</h3>
                        <a href="">Help Center</a>
                        <a href="">Platform Status</a>
                        <a href="">Partners</a>
                        <a href="">Gas-Free Marketplace</a>
                        <a href="">Taxes</a>
                        <a href="">Blog</a>
                        <a href="">Docs</a>
                        <a href="">Newsletter</a>
                    </div>
                    <div className={css.links}>
                        <h3>Company</h3>
                        <a href="">About</a>
                        <a href="">Careers</a>
                        <a href="">Ventures</a>
                        <a href="">Grants</a>
                        <h3>Policy</h3>
                        <a href="">Privacy Policy</a>
                        <a href="">Terms of Service</a>
                    </div>
                </div>
                <div className={css.bottomLine}>
                    <div className={css.copywrite}>
                        <p>2022 - All rights Reserved © APYNIF</p>
                    </div>
                    <div className={css.socials}>
                       <a href=""><img src={instagram} alt="instagram" /></a> 
                       <a href=""><img src={facebook} alt="facebook" /></a> 
                       <a href=""><img src={Linkedin} alt="Linkedin" /></a> 
                       <a href=""><img src={Twitter} alt="Twitter" /></a> 
                    </div>
                </div>
            </div>
        </footer>
        );
    }