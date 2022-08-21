import React from "react";
import "./ContactUs.css";

function ContactUs() {
  return (
    <div className="container-contact">
      <div className="container-column">
        <div className="first-column">
          <h2>Contact</h2>

          <p>
            Congreso 1233 We often personally meet with clients, and speak at
            for sellings events
          </p>
          <p>
            <strong>Email:</strong> ecommerce@gmail.com
          </p>
          <p>
            <strong>Phone:</strong>1222233333444
          </p>
          <p>
            <strong>Fax:</strong>
            11112223334444
          </p>
          <p>
            <strong>Adress:</strong>Congreso 1233 Saint Vaille of Congrations
          </p>

          <h3>What You Get When Asking Your Question</h3>
        </div>
        <div className="second-column">
          <div className="phone">
            <p>
              Call us at: <strong>0800-111-222</strong>
            </p>
          </div>

          <img
            className="img"
            src="https://i.guim.co.uk/img/media/afc049c13d0f9a82d7f8fc3b19e2886b3c09bb37/0_273_6448_3869/master/6448.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=77c50b29406f859cbc43b2af7a2f13e0"
            alt="ImageNotFound"
          ></img>
          <div className="phone">
            <p>
              Call us <strong>M-F 8:00 am to 6:00 pm EST</strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
