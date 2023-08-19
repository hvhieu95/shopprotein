import React from "react";
import Facebook from "../image/facebook.png";
import Youtube from "../image/youtube.png";
import Twitter from "../image/twitter.png";
import Instagram from "../image/instagram.png";

import "../style/footer.css";

export function Footer() {
  return (
    <footer>
      <div className="footer">
        <div className="footer-container">
          <div className="sections">
            <div className="section">
              <h4>OVERVIEW</h4>
              <a href="#">Company Profile</a>
              <a href="#">New! Shop Review</a>
              <a href="#">Referral program</a>
              <a href="#">affiliate program</a>
              <a href="#">New! social return project</a>
            </div>
            <div className="section">
              <h4>COMPANY</h4>
              <a href="#">Company Profile</a>
              <a href="#">press room</a>
              <a href="#">Partner with iHerb</a>
            </div>
            <div className="section">
              <h4>SOURCE OF INFORMATION</h4>
              <a href="#">community</a>
              <a href="#">New! Influencer</a>
              <a href="#">Sale & Campaign</a>
            </div>
            <div className="section">
              <h4>CUSTOMER SERVICE</h4>
              <a href="#">inquiry</a>
              <a href="#">New! Influence</a>
              <a href="#">Order status</a>
              <a href="#">Regarding delivery</a>
              <a href="#">Notification settings</a>
            </div>
            <div className="section">
              <h4>MOBILE APP</h4>
              <img
                src="https://api.qrserver.com/v1/create-qr-code/?size=100x100&data=https://example.com"
                alt="QR code app"
              />
              <p>
                <a href="https://play.google.com/store">
                  <img
                    src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
                    alt="Google Play Store"
                  />
                </a>
              </p>
              <p>
                <a href="https://apps.apple.com/app">
                  <img
                    src="https://developer.apple.com/app-store/marketing/guidelines/images/badge-download-on-the-app-store.svg"
                    alt="Apple iTunes Store"
                  />
                </a>
              </p>
            </div>
          </div>
          <div className="email-section">
            <p>
              RECEIVE EMAIL NOTIFICATIONS ABOUT PROMOTIONAL SALES AND CAMPAIGNS
            </p>
            <input type="email" placeholder="Enter your email address" />
            <p>
              We will use your email address to send you health newsletters and
              information about iHerb products, services, promotions and special
              offers. If you no longer wish to receive communications from us,
              you may unsubscribe at any time by clicking the unsubscribe link
              provided in each email. For more information on iHerb's use of
              your personal information and your rights, please see our Privacy
              Policy.
            </p>
            <p>
              This site is protected by reCAPTCHA and is subject to Google's
              Privacy Policy and Terms of Service.
            </p>
          </div>
          <div className="social-icons">
            <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
              <img src={Facebook} alt="Facebook" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
              <img src={Twitter} alt="Twitter" />
            </a>
            <a href="https://www.youtube.com" target="_blank" rel="noreferrer">
              <img src={Youtube} alt="YouTube" />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noreferrer"
            >
              <img src={Instagram} alt="Instagram" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
