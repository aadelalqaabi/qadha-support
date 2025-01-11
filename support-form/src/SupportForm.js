import React, { useState } from "react";
import ourImage from "./ourImage.png"; // Import the image
import supportStore from "./stores/supportStore";

const SupportForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    issue: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = supportStore.createSupport(formData);
      if (response) {
        setSubmitted(true);
      }
    } catch (error) {
      console.error("Error submitting support request:", error);
    }
  };

  if (submitted) {
    return (
      <div style={styles.container}>
        <h2 style={styles.thankYouMessage}>
          شكراً! تم إرسال طلب الدعم الخاص بك.
        </h2>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      <div style={styles.formWrapper}>
        <img
          src={ourImage} // Replace with your actual image path
          alt="Logo"
          style={styles.logo}
        />
        <h1 style={styles.heading}>تواصل معنا</h1>
        <form style={styles.form} onSubmit={handleSubmit}>
          <div style={styles.inputGroup}>
            <label htmlFor="name" style={styles.label}>
              الاسم:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              style={styles.input}
              placeholder="أدخل اسمك"
            />
          </div>
          <div style={styles.inputGroup}>
            <label htmlFor="email" style={styles.label}>
              البريد الإلكتروني:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              style={styles.input}
              placeholder="أدخل بريدك الإلكتروني"
            />
          </div>
          <div style={styles.inputGroup}>
            <label htmlFor="phone" style={styles.label}>
              رقم الهاتف (اختياري):
            </label>
            <input
              type="text"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              style={styles.input}
              placeholder="أدخل رقم هاتفك"
            />
          </div>
          <div style={styles.inputGroup}>
            <label htmlFor="issue" style={styles.label}>
              المشكلة:
            </label>
            <textarea
              id="issue"
              name="issue"
              value={formData.issue}
              onChange={handleChange}
              required
              style={styles.textarea}
              placeholder="صف مشكلتك بالتفصيل"
            ></textarea>
          </div>
          <button type="submit" style={styles.button}>
            إرسال
          </button>
        </form>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
    backgroundColor: "#FFFFFF",
    padding: "20px",
    fontFamily: "'Cairo', sans-serif", // A modern Arabic-friendly font
    direction: "rtl", // Ensure the layout follows right-to-left flow
  },
  formWrapper: {
    width: "100%",
    maxWidth: "450px", // Adjusted to make it responsive
    backgroundColor: "#FFF",
    borderRadius: "10px",
    padding: "30px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
    textAlign: "right", // Align content to the right
  },
  heading: {
    fontSize: "2rem",
    fontWeight: "bold",
    color: "#000",
    marginBottom: "20px",
    textAlign: "center",
  },
  form: {
    width: "100%",
  },
  inputGroup: {
    marginBottom: "20px",
  },
  label: {
    display: "block",
    marginBottom: "8px",
    fontWeight: "bold",
    fontSize: "1rem",
    color: "#000",
  },
  input: {
    width: "95%",
    padding: "12px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    fontSize: "1rem",
    outline: "none",
    textAlign: "right", // Align text to the right for RTL
  },
  textarea: {
    width: "95%",
    padding: "12px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    fontSize: "1rem",
    outline: "none",
    minHeight: "100px",
    textAlign: "right", // Align text to the right for RTL
  },
  button: {
    width: "100%",
    padding: "12px",
    backgroundColor: "#FF5722", // Orange button
    color: "#FFF",
    border: "none",
    borderRadius: "5px",
    fontSize: "1rem",
    cursor: "pointer",
    fontWeight: "bold",
    transition: "background-color 0.3s ease",
  },
  logo: {
    width: "100px", // Adjust size as needed
    height: "auto",
    display: "block",
    margin: "0 auto 20px", // Center image and add spacing below
  },
  thankYouMessage: {
    fontSize: "1.5rem",
    fontWeight: "bold",
    color: "#000",
    textAlign: "center",
  },
};

export default SupportForm;
