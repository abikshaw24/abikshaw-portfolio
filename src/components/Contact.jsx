import "./../styles/contact.css";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaPaperPlane,
} from "react-icons/fa";

function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="section-title">
          <h2>Let's Work Together</h2>
          <div className="title-line"></div>
          <p>Have a project or opportunity? I'd love to hear from you.</p>
        </div>

        <motion.div
          className="contact-container"
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Left Side */}
          <div className="contact-info">
            <motion.div
              className="contact-card"
              whileHover={{ y: -6, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <FaEnvelope />
              <div>
                <h3>Email</h3>
                <p>abikshaw24@gmail.com</p>
              </div>
            </motion.div>

            <motion.div
              className="contact-card"
              whileHover={{ y: -6, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <FaPhoneAlt />
              <div>
                <h3>Phone</h3>
                <p>+91 7825992001</p>
              </div>
            </motion.div>

            <motion.div
              className="contact-card"
              whileHover={{ y: -6, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <FaMapMarkerAlt />
              <div>
                <h3>Location</h3>
                <p>Chennai, Tamil Nadu</p>
              </div>
            </motion.div>
          </div>

          {/* Right Side */}
          <motion.form
            action="https://api.web3forms.com/submit"
            method="POST"
            className="contact-form"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            whileHover={{ y: -5 }}
          >
            {/* Replace YOUR_ACCESS_KEY with your Web3Forms key */}
            <input
              type="hidden"
              name="access_key"
              value="ca90ac4d-0388-4249-8246-09c4c3189d49"
            />

            <input
              type="hidden"
              name="subject"
              value="New Portfolio Contact Message"
            />

            <input
              type="hidden"
              name="redirect"
              value="http://localhost:5173"
            />

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
            />

            <input
              type="text"
              name="topic"
              placeholder="Subject"
              required
            />

            <textarea
              name="message"
              placeholder="Your Message"
              rows="6"
              required
            ></textarea>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaPaperPlane />
              Send Message
            </motion.button>
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;