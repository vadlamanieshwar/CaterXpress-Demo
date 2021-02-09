import React from 'react';

export default function Footer() {

    return(

        <div id="footer">
            <div  className="row">
                <div className="col-sm-6 center-block">
                    <div className="footer-left">
                        <span className="footer-logo">CX</span>
                        <p className="footer-name">Cater Xpress</p>
                    </div>
                </div>
                <div className="col-sm-3">
                    <ul className="footer-ul">
                        <li>About Cater Xpress</li>
                        <li>Read our blog</li>
                        <li>Add your restaurant</li>
                        <li>Gift Card</li>
                        <li>Sign up for delivery</li>
                    </ul>
                </div>
                <div className="col-sm-3">
                    <ul className="footer-ul">
                        <li>View all reataurants</li>
                        <li>View all cities</li>
                        <li>Near by restaurant</li>
                        <li>FAQ</li>
                        <li>Payment issues</li>
                    </ul>
                </div>
            </div>
            <div  className="footer-end">
                <div className="footer-end-top">
                    <div className="margin-right-footer">Privacy Policy</div>
                    <div className="margin-right-footer">Terms</div>
                    <div className="margin-right-footer">Pricing</div>
                </div>
                <hr style={{borderTop: "1px solid rgb(255 255 255)"}}/>
                <span className="footer-end-bottom">@ 2021 CaterXpress</span>
            </div>
        </div>

    );
}