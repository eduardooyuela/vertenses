import React from "react";
import "../files/css/Footer.css";
import "../files/img/logounah.png";

function Footer() {
  return (
    <div class="footer-clean">
        <footer>
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-sm-4 col-md-3 item">
                        <h3>VerbTenses.edu</h3>
                        
                    </div>
                    <div class="col-sm-4 col-md-3 item">
                        <h3>About</h3>
                        <ul>
                            <p>This application was developed for the English III class of the National Autonomous University of Honduras.</p>
                        </ul>
                    </div>
                    <div class="col-sm-4 col-md-3 item">
                        <h3>Developer</h3>
                        <ul>
                            <p>Yahir eduardo Oyuela diaz</p>
                            <hr />
                            <p>I am a fan of programming and in my spare time I enjoy reading a good book.</p>
                        </ul>
                    </div>
                    
                </div>
            </div>
        </footer>
        <hr />
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-sm-4 col-md-3 item">
                    <h3>UNAH-CURLP 2023</h3>
                </div>
            </div>    
        </div>
    </div>
  );
}

export default Footer;