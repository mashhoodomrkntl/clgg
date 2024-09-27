import React from "react";
import { useState } from "react";
import "./Contact.css";
import msg_icon from "../../assets/msg-icon.png";
import mail_icon from "../../assets/mail-icon.png";
import phone_icon from "../../assets/phone-icon.png";
import location_icon from "../../assets/location-icon.png";
import white_arrow from "../../assets/white-arrow.png";
const Contact = () => {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "221fcb68-9a87-41cc-a177-dc99e3ce69b4");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData,
        });

        const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully");
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };

    return (
        <div className="contact">
            <div className="contact-col">
                <h3>
                    Send us a message <img src={msg_icon} alt="" />
                </h3>
                <p>
                    Feel free to reach out through contact form or find our contact information below. Your feedback,
                    questions, and suggestions are important to us as we strive to provide exceptional service to our
                    university community.
                </p>
                <ul>
                    <li>
                        <img src={mail_icon} alt="" />
                        Contact@jjj
                    </li>
                    <li>
                        <img src={phone_icon} alt="" />
                        5454545454545
                    </li>
                    <li>
                        <img src={location_icon} alt="" />
                        77 suuiii bridge <br /> Ma 12121 us
                    </li>
                </ul>
            </div>
            
            <div className="contact-col">
                <form onSubmit={onSubmit}>
                    <label>Your Name</label>
                    <input type="text" name="Name:" placeholder="Enter Your Name" required />
                    <label>Phone Nmber</label>
                    <input name="phone NO:" type="number" placeholder="Enter Your phone number" required />
                    <label> write your message here</label>
                    <textarea name="message:" id="" cols="30" rows="10" placeholder="enter your msg" required></textarea>
                    <button type="submit" className="btn dark-btn">
                        Submit Now <img src={white_arrow} alt="" />
                    </button>
                </form>
                <span>{result}</span>
            </div>
        </div>
    );
};

export default Contact;
