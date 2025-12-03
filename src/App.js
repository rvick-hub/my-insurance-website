import React from "react";

export default function AltaMDWebsite() {
  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <div style={styles.logo}>🏢</div>
        <div>
          <h1 style={styles.title}>AltaMD Insurance Agency</h1>
          <p style={styles.tagline}>Protecting What Matters Most.</p>
        </div>
      </header>

      <section style={styles.hero}>
        <h2>All Your Insurance Needs Under One Roof</h2>
        <p>At AltaMD Insurance Agency, we provide comprehensive insurance solutions tailored to protect your life, assets, and future.</p>
      </section>

      <section style={styles.services}>
        <h2>Our Services</h2>
        <div style={styles.servicesGrid}>
          {["Life Insurance", "Health Insurance", "Motor Insurance", "Home Insurance", "Travel Insurance", "Business Insurance"].map((service) => (
            <div key={service} style={styles.serviceCard}>
              <h3>{service}</h3>
              <p>Comprehensive coverage for peace of mind.</p>
            </div>
          ))}
        </div>
      </section>

      <section style={styles.contact}>
        <h2>Contact Us</h2>
        <p><strong>Name:</strong> Maryline</p>
        <p><strong>Phone:</strong> 0715973790</p>
      </section>

      <footer style={styles.footer}>
        © 2024 AltaMD Insurance Agency. All Rights Reserved.
      </footer>
    </div>
  );
}

const styles = {
  container: { fontFamily: "Arial, sans-serif" },
  header: { 
    display: "flex", 
    alignItems: "center", 
    padding: "20px", 
    backgroundColor: "#f8f9fa",
    borderBottom: "1px solid #ddd"
  },
  logo: { fontSize: "40px", marginRight: "20px" },
  title: { margin: "0", fontSize: "24px" },
  tagline: { margin: "5px 0 0", color: "#007bff", fontStyle: "italic" },
  hero: { 
    padding: "40px 20px", 
    textAlign: "center", 
    backgroundColor: "#e3f2fd"
  },
  services: { padding: "40px 20px" },
  servicesGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "20px",
    marginTop: "20px"
  },
  serviceCard: {
    border: "1px solid #ddd",
    borderRadius: "8px",
    padding: "20px",
    backgroundColor: "white"
  },
  contact: {
    padding: "40px 20px",
    backgroundColor: "#bbdefb",
    textAlign: "center"
  },
  footer: {
    padding: "20px",
    textAlign: "center",
    borderTop: "1px solid #ddd",
    color: "#666"
  }
};
