const Contact = (props) => {
  return (
    <div id="contact">
      <div className="bodycontact">
        <div className="contact-section">
          <div className="contact-form">
            <h2>Contact Us</h2>
            <form className="contact" action="" method="post">
              <input
                type="text"
                name="name"
                className="text-box"
                placeholder="Your Name"
                required
              />
              <input
                type="email"
                name="email"
                className="text-box"
                placeholder="Your Email"
                required
              />
              <textarea
                name="message"
                rows="5"
                placeholder="Your Message"
                required
              ></textarea>
              <input
                type="submit"
                name="submit"
                className="send-btn"
                value="Send"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;
