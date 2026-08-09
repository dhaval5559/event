import React from "react";
import Event from "./Event";
import MyBookings from "./Mybookings";

const events = [
  {
    title: "Rock Music Concert",
    category: "Music",
    date: "25 May 2024",
    location: "City Arena, New York",
    price: "₹799",
    image:
      "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?w=800",
    color: "#5b21d8",
  },
  {
    title: "Tech Conference 2024",
    category: "Conference",
    date: "02 Jun 2024",
    location: "Tech Park, San Francisco",
    price: "₹1499",
    image:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800",
    color: "#f97316",
  },
  {
    title: "Football Championship",
    category: "Sports",
    date: "15 Jun 2024",
    location: "National Stadium, Chicago",
    price: "₹899",
    image:
      "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=800",
    color: "#10b981",
  },
  {
    title: "Color Fest 2024",
    category: "Festival",
    date: "22 Jun 2024",
    location: "Central Park, New York",
    price: "₹499",
    image:
      "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800",
    color: "#ec4899",
  },
  {
    title: "Drama Play: The Legacy",
    category: "Theatre",
    date: "05 Jul 2024",
    location: "Grand Theatre, Boston",
    price: "₹699",
    image:
      "https://images.unsplash.com/photo-1503095396549-807759245b35?w=800",
    color: "#f59e0b",
  },
  {
    title: "DJ Night Party",
    category: "Music",
    date: "12 Jul 2024",
    location: "Club H2O, Miami",
    price: "₹899",
    image:
      "https://images.unsplash.com/photo-1571266028243-d220c19c4c4c?w=800",
    color: "#5b21d8",
  },
  {
    title: "Business Summit 2024",
    category: "Conference",
    date: "18 Jul 2024",
    location: "Convention Center, Austin",
    price: "₹1299",
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800",
    color: "#f97316",
  },
  {
    title: "Food Festival",
    category: "Festival",
    date: "28 Jul 2024",
    location: "Riverfront Park, Chicago",
    price: "₹399",
    image:
      "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800",
    color: "#ec4899",
  },
];

function Events({goHome, goBookings}) {
  return (
    <div style={styles.page}>
      {/* NAVBAR */}
      <nav style={styles.navbar}>
        <div style={styles.logoSection}>
          <div style={styles.logoIcon}>◆</div>
          <div style={styles.logoText}>EventBook</div>
        </div>

        <div style={styles.navLinks}>
          <button
            onClick={goHome}
            style={{
                ...styles.navLink,
                background: "none",
                border: "none",
                cursor: "pointer",
            }}
            >
                Home
            </button>
          <a
            href="/events"
            style={{
              ...styles.navLink,
              ...styles.activeNav,
            }}
          >
            Events
          </a>

          <button
            onClick={goBookings}
            style={{
                ...styles.navLink,
                background: "none",
                border: "none",
                cursor: "pointer",
            }}
            >
                My bookings
            </button>
        </div>

        <div style={styles.rightNav}>
          <div style={styles.userIcon}>♙</div>

          <button style={styles.loginButton}>
            Login
          </button>
        </div>
      </nav>

      {/* HERO */}
      <section style={styles.hero}>
        <div style={styles.heroOverlay}>
          <h1 style={styles.heroTitle}>All Events</h1>

          <p style={styles.heroText}>
            Explore and book tickets for amazing events near you.
          </p>
        </div>
      </section>

      {/* EVENTS */}
      <main style={styles.content}>
        <h2 style={styles.sectionTitle}>Upcoming Events</h2>

        <div style={styles.eventGrid}>
          {events.map((event, index) => (
            <div style={styles.card} key={index}>
              {/* IMAGE */}
              <div style={styles.imageContainer}>
                <img
                  src={event.image}
                  alt={event.title}
                  style={styles.eventImage}
                />

                {/* CATEGORY */}
                <span
                  style={{
                    ...styles.category,
                    backgroundColor: event.color,
                  }}
                >
                  {event.category}
                </span>

                {/* HEART */}
                <button style={styles.heartButton}>♡</button>
              </div>

              {/* CARD BODY */}
              <div style={styles.cardBody}>
                <h3 style={styles.eventTitle}>{event.title}</h3>

                <div style={styles.info}>
                  <span style={styles.icon}>▣</span>
                  <span>{event.date}</span>
                </div>

                <div style={styles.info}>
                  <span style={styles.icon}>⌖</span>
                  <span>{event.location}</span>
                </div>

                {/* PRICE + BUTTON */}
                <div style={styles.bottomRow}>
                  <span style={styles.price}>{event.price}</span>

                  <button style={styles.bookButton}>
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* BOTTOM MESSAGE */}
        <div style={styles.moreEvents}>
          <div style={styles.calendarIcon}>▣</div>

          <h3 style={styles.moreTitle}>
            More amazing events coming soon!
          </h3>

          <p style={styles.moreText}>
            Stay tuned and check back later.
          </p>
        </div>
      </main>
    </div>
  );
}

/* ============================= */
/* INLINE CSS */
/* ============================= */

const styles = {
  page: {
    minHeight: "100vh",
    backgroundColor: "#f8f8fa",
    fontFamily:
      "Arial, Helvetica, sans-serif",
    color: "#111827",
  },

  /* NAVBAR */
  navbar: {
    height: "64px",
    backgroundColor: "#ffffff",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 32px",
    boxSizing: "border-box",
    borderBottom: "1px solid #eeeeee",
  },

  logoSection: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },

  logoIcon: {
    width: "27px",
    height: "27px",
    backgroundColor: "#5b21d8",
    color: "#ffffff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "15px",
    transform: "rotate(-25deg)",
    borderRadius: "4px",
  },

  logoText: {
    fontSize: "22px",
    fontWeight: "700",
    color: "#5121d7",
  },

  navLinks: {
    display: "flex",
    alignItems: "center",
    gap: "55px",
    height: "100%",
  },

  navLink: {
    height: "100%",
    display: "flex",
    alignItems: "center",
    textDecoration: "none",
    color: "#111111",
    fontSize: "15px",
    fontWeight: "500",
    position: "relative",
  },

  activeNav: {
    color: "#5420d5",
    fontWeight: "600",
    borderBottom: "3px solid #5420d5",
  },

  rightNav: {
    display: "flex",
    alignItems: "center",
    gap: "22px",
  },

  userIcon: {
    fontSize: "28px",
    color: "#111111",
    transform: "rotate(180deg)",
  },

  loginButton: {
    backgroundColor: "#5420d5",
    color: "#ffffff",
    border: "none",
    borderRadius: "6px",
    padding: "11px 25px",
    fontSize: "14px",
    fontWeight: "600",
    cursor: "pointer",
  },

  /* HERO */
  hero: {
    height: "155px",
    backgroundImage:
      "linear-gradient(90deg, rgba(0,0,0,0.88), rgba(20,0,55,0.55)), url('https://images.unsplash.com/photo-1506157786151-b8491531f063?w=1600')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    alignItems: "center",
  },

  heroOverlay: {
    paddingLeft: "48px",
  },

  heroTitle: {
    color: "#ffffff",
    fontSize: "36px",
    margin: "0 0 8px 0",
    fontWeight: "700",
  },

  heroText: {
    color: "#ffffff",
    fontSize: "15px",
    margin: "0",
  },

  /* CONTENT */
  content: {
    padding: "25px 30px 35px 30px",
    maxWidth: "1400px",
    margin: "0 auto",
    boxSizing: "border-box",
  },

  sectionTitle: {
    fontSize: "23px",
    margin: "0 0 18px 0",
    fontWeight: "700",
  },

  /* GRID */
  eventGrid: {
    display: "grid",
    gridTemplateColumns:
      "repeat(4, minmax(0, 1fr))",
    gap: "24px",
  },

  /* CARD */
  card: {
    backgroundColor: "#ffffff",
    borderRadius: "10px",
    overflow: "hidden",
    boxShadow:
      "0 2px 8px rgba(0,0,0,0.12)",
    border: "1px solid #eeeeee",
  },

  imageContainer: {
    height: "170px",
    position: "relative",
    overflow: "hidden",
  },

  eventImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    display: "block",
  },

  category: {
    position: "absolute",
    top: "15px",
    left: "15px",
    color: "#ffffff",
    padding: "7px 13px",
    borderRadius: "18px",
    fontSize: "11px",
    fontWeight: "600",
  },

  heartButton: {
    position: "absolute",
    top: "13px",
    right: "13px",
    width: "32px",
    height: "32px",
    borderRadius: "50%",
    border: "none",
    backgroundColor: "rgba(0,0,0,0.25)",
    color: "#ffffff",
    fontSize: "25px",
    lineHeight: "30px",
    cursor: "pointer",
  },

  cardBody: {
    padding: "15px",
  },

  eventTitle: {
    fontSize: "16px",
    margin: "0 0 15px 0",
    fontWeight: "700",
    color: "#111111",
  },

  info: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    fontSize: "12px",
    color: "#333333",
    marginBottom: "10px",
  },

  icon: {
    fontSize: "15px",
    color: "#333333",
  },

  bottomRow: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: "15px",
  },

  price: {
    color: "#5121d7",
    fontSize: "18px",
    fontWeight: "700",
  },

  bookButton: {
    backgroundColor: "#5420d5",
    color: "#ffffff",
    border: "none",
    borderRadius: "5px",
    padding: "9px 17px",
    fontSize: "12px",
    fontWeight: "600",
    cursor: "pointer",
  },

  /* BOTTOM */
  moreEvents: {
    textAlign: "center",
    marginTop: "35px",
    paddingBottom: "10px",
  },

  calendarIcon: {
    fontSize: "32px",
    color: "#8b929d",
    marginBottom: "8px",
  },

  moreTitle: {
    fontSize: "15px",
    color: "#444444",
    margin: "0 0 7px 0",
  },

  moreText: {
    fontSize: "13px",
    color: "#777777",
    margin: "0",
  },
};

export default Events;