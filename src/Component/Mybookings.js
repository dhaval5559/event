import React from "react";
import Events from "./Events";
import Event from "./Event";
import react from "react";


const bookings = [
  {
    image:
      "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=600&q=80",
    title: "Rock Music Concert",
    date: "25 May 2024, Saturday",
    time: "7:00 PM Onwards",
    location: "City Arena, New York",
    tickets: "2",
    seat: "VIP",
    amount: "₹1,598",
    status: "Confirmed",
    bookingId: "BK12345678",
    bookedOn: "10 May 2024, 10:30 AM",
  },
  {
    image:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=600&q=80",
    title: "Tech Conference 2024",
    date: "02 Jun 2024, Sunday",
    time: "10:00 AM Onwards",
    location: "Tech Park, San Francisco",
    tickets: "1",
    seat: "Standard",
    amount: "₹1,498",
    status: "Confirmed",
    bookingId: "BK12345679",
    bookedOn: "15 May 2024, 02:45 PM",
  },
  {
    image:
      "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=600&q=80",
    title: "Football Championship",
    date: "15 Jun 2024, Saturday",
    time: "5:30 PM Onwards",
    location: "National Stadium, Chicago",
    tickets: "3",
    seat: "Premium",
    amount: "₹2,697",
    status: "Pending",
    bookingId: "BK12345680",
    bookedOn: "20 May 2024, 09:15 AM",
  },
  {
    image:
      "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=600&q=80",
    title: "Color Fest 2024",
    date: "22 Jun 2024, Saturday",
    time: "12:00 PM Onwards",
    location: "Central Park, New York",
    tickets: "2",
    seat: "General",
    amount: "₹998",
    status: "Cancelled",
    bookingId: "BK12345681",
    bookedOn: "18 May 2024, 11:20 AM",
  },
];

const styles = `
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
  background: #f8f8fc;
  color: #171717;
}

.bookings-page {
  min-height: 100vh;
  background: #f8f8fc;
}

/* ================= HEADER ================= */

.top-header {
  height: 62px;
  background: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 5%;
  border-bottom: 1px solid #eeeeee;
}

.logo {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 21px;
  font-weight: 700;
}

.logo-icon {
  color: #5b21d6;
  font-size: 28px;
  transform: rotate(-10deg);
}

.logo-event {
  color: #171717;
}

.logo-book {
  color: #5b21d6;
}

.nav-menu {
  display: flex;
  align-items: center;
  gap: 45px;
  margin-left: 100px;
}

.nav-menu a {
  text-decoration: none;
  color: #151515;
  font-size: 14px;
  font-weight: 600;
  padding: 21px 0 17px;
}

.nav-menu a.active {
  color: #5420c7;
  border-bottom: 3px solid #5420c7;
}

.user-area {
  display: flex;
  align-items: center;
  gap: 15px;
}

.user-info {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  font-weight: 600;
}

.user-icon {
  width: 34px;
  height: 34px;
  border-radius: 50%;
  background: #f3f3f6;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
}

.arrow {
  font-size: 12px;
}

.logout-btn {
  background: #5b20d3;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 22px;
  font-weight: 600;
  cursor: pointer;
}

/* ================= HERO ================= */

.hero {
  height: 142px;
  background:
    linear-gradient(
      90deg,
      rgba(7, 5, 35, 0.97),
      rgba(45, 9, 92, 0.82),
      rgba(7, 5, 35, 0.95)
    ),
    url("https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1600&q=80");
  background-size: cover;
  background-position: center;
  color: white;
  display: flex;
  align-items: center;
  padding: 0 5.5%;
}

.hero h1 {
  margin: 0 0 12px;
  font-size: 30px;
}

.hero p {
  margin: 0;
  font-size: 14px;
  color: #e0ddea;
}

/* ================= CONTENT ================= */

.content {
  width: 90%;
  max-width: 1250px;
  margin: 32px auto;
}

.booking-heading {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.heading-left {
  display: flex;
  align-items: center;
  gap: 12px;
}

.heading-left span {
  font-size: 23px;
}

.heading-left h2 {
  margin: 0;
  font-size: 19px;
}

.total {
  font-size: 14px;
  font-weight: 600;
}

.total-number {
  color: #5520c8;
  margin-left: 4px;
}

/* ================= BOOKING CARD ================= */

.booking-card {
  background: white;
  min-height: 165px;
  border-radius: 10px;
  margin-bottom: 17px;
  padding: 10px 14px;
  display: grid;
  grid-template-columns: 245px 1.5fr 0.9fr 1.05fr;
  gap: 18px;
  align-items: center;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.07);
}

.event-image {
  width: 245px;
  height: 140px;
  border-radius: 7px;
  object-fit: cover;
}

.event-details {
  min-width: 0;
}

.event-details h3 {
  font-size: 18px;
  margin: 0 0 17px;
}

.detail-row {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 13px;
  margin-bottom: 12px;
  color: #292929;
}

.detail-icon {
  width: 17px;
  text-align: center;
  font-size: 15px;
}

.booking-middle {
  border-left: 1px solid #e5e5e5;
  padding-left: 28px;
}

.middle-row {
  display: flex;
  justify-content: space-between;
  gap: 20px;
  font-size: 13px;
  margin-bottom: 19px;
}

.middle-label {
  display: flex;
  gap: 10px;
  align-items: center;
}

.middle-value {
  font-weight: 700;
  white-space: nowrap;
}

/* ================= RIGHT SIDE ================= */

.booking-right {
  border-left: 1px solid #e5e5e5;
  padding-left: 28px;
}

.status {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  padding: 7px 10px;
  border-radius: 6px;
  font-size: 12px;
  font-weight: 600;
  margin-bottom: 15px;
}

.status.confirmed {
  background: #e9f8ef;
  color: #30965b;
}

.status.pending {
  background: #fff4d9;
  color: #d89b16;
}

.status.cancelled {
  background: #fdecec;
  color: #c93737;
}

.right-row {
  display: flex;
  justify-content: space-between;
  gap: 15px;
  font-size: 12px;
  margin-bottom: 12px;
}

.right-value {
  font-weight: 600;
  white-space: nowrap;
}

.cancel-btn {
  width: 100%;
  background: white;
  color: #c84a4a;
  border: 1px solid #d68a8a;
  border-radius: 6px;
  padding: 8px 12px;
  margin-top: 3px;
  cursor: pointer;
  font-weight: 600;
  font-size: 12px;
}

.cancel-btn:hover {
  background: #fff2f2;
}

/* ================= HELP ================= */

.help-box {
  min-height: 77px;
  margin-top: 22px;
  background: #f7f3ff;
  border: 1px solid #e7defc;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 23px;
}

.help-left {
  display: flex;
  align-items: center;
  gap: 20px;
}

.help-icon {
  font-size: 31px;
  color: #5b20d3;
}

.help-title {
  font-weight: 700;
  margin-bottom: 7px;
}

.help-text {
  font-size: 12px;
  color: #666;
}

.support-btn {
  background: white;
  border: 1px solid #a98bdc;
  color: #5b20d3;
  padding: 9px 32px;
  border-radius: 5px;
  font-weight: 600;
  cursor: pointer;
}

/* ================= RESPONSIVE ================= */

@media (max-width: 1000px) {

  .nav-menu {
    gap: 20px;
    margin-left: 20px;
  }

  .booking-card {
    grid-template-columns: 190px 1fr;
  }

  .event-image {
    width: 190px;
  }

  .booking-middle,
  .booking-right {
    border-left: none;
    padding-left: 0;
  }
}

@media (max-width: 700px) {

  .top-header {
    height: auto;
    min-height: 65px;
    padding: 12px 20px;
    flex-wrap: wrap;
    gap: 12px;
  }

  .nav-menu {
    order: 3;
    width: 100%;
    justify-content: center;
    margin: 0;
  }

  .user-area {
    margin-left: auto;
  }

  .user-info {
    display: none;
  }

  .hero {
    height: 125px;
    padding: 0 25px;
  }

  .hero h1 {
    font-size: 25px;
  }

  .content {
    width: 94%;
    margin-top: 22px;
  }

  .booking-heading {
    align-items: flex-start;
  }

  .booking-card {
    display: block;
    padding: 12px;
  }

  .event-image {
    width: 100%;
    height: 190px;
    margin-bottom: 15px;
  }

  .event-details h3 {
    font-size: 18px;
  }

  .booking-middle,
  .booking-right {
    margin-top: 20px;
    padding: 15px 0 0;
    border-top: 1px solid #e5e5e5;
  }

  .help-box {
    flex-direction: column;
    align-items: flex-start;
    gap: 15px;
  }

  .support-btn {
    width: 100%;
  }
}
`;

function BookingCard({ booking }) {
  const statusClass = booking.status.toLowerCase();

  return React.createElement(
    "div",
    { className: "booking-card" },

    React.createElement("img", {
      className: "event-image",
      src: booking.image,
      alt: booking.title,
    }),

    React.createElement(
      "div",
      { className: "event-details" },

      React.createElement("h3", null, booking.title),

      React.createElement(
        "div",
        { className: "detail-row" },
        React.createElement("span", { className: "detail-icon" }, "▣"),
        React.createElement("span", null, booking.date)
      ),

      React.createElement(
        "div",
        { className: "detail-row" },
        React.createElement("span", { className: "detail-icon" }, "◷"),
        React.createElement("span", null, booking.time)
      ),

      React.createElement(
        "div",
        { className: "detail-row" },
        React.createElement("span", { className: "detail-icon" }, "⌖"),
        React.createElement("span", null, booking.location)
      )
    ),

    React.createElement(
      "div",
      { className: "booking-middle" },

      React.createElement(
        "div",
        { className: "middle-row" },
        React.createElement(
          "span",
          { className: "middle-label" },
          React.createElement("span", null, "🎟"),
          "Tickets"
        ),
        React.createElement(
          "span",
          { className: "middle-value" },
          booking.tickets
        )
      ),

      React.createElement(
        "div",
        { className: "middle-row" },
        React.createElement(
          "span",
          { className: "middle-label" },
          React.createElement("span", null, "◉"),
          "Seat Type"
        ),
        React.createElement(
          "span",
          { className: "middle-value" },
          booking.seat
        )
      ),

      React.createElement(
        "div",
        { className: "middle-row" },
        React.createElement(
          "span",
          { className: "middle-label" },
          React.createElement("span", null, "◉"),
          "Total Amount"
        ),
        React.createElement(
          "span",
          { className: "middle-value" },
          booking.amount
        )
      )
    ),

    React.createElement(
      "div",
      { className: "booking-right" },

      React.createElement(
        "div",
        { className: `status ${statusClass}` },
        booking.status === "Confirmed"
          ? "●"
          : booking.status === "Pending"
          ? "●"
          : "●",
        " ",
        booking.status
      ),

      React.createElement(
        "div",
        { className: "right-row" },
        React.createElement("span", null, "Booking ID"),
        React.createElement(
          "span",
          { className: "right-value" },
          booking.bookingId
        )
      ),

      React.createElement(
        "div",
        { className: "right-row" },
        React.createElement("span", null, "Booked on"),
        React.createElement(
          "span",
          { className: "right-value" },
          booking.bookedOn
        )
      ),

      booking.status !== "Cancelled" &&
        React.createElement(
          "button",
          {
            className: "cancel-btn",
            onClick: () => alert("Cancel Booking: " + booking.bookingId),
          },
          "🗑 Cancel Booking"
        )
    )
  );
}

export default function MyBookings({goHome, goEvents }) {
  return React.createElement(
    React.Fragment,
    null,

    React.createElement("style", null, styles),

    React.createElement(
      "div",
      { className: "bookings-page" },

      /* HEADER */

      React.createElement(
        "header",
        { className: "top-header" },

        React.createElement(
          "div",
          { className: "logo" },
          React.createElement(
            "span",
            { className: "logo-icon" },
            "◆"
          ),
          React.createElement(
            "span",
            { className: "logo-event" },
            "Event"
          ),
          React.createElement(
            "span",
            { className: "logo-book" },
            "Book"
          )
        ),

        React.createElement(
          "nav",
          { className: "nav-menu" }
        ),
        React.createElement(
            "button",{
                onClick: goHome, 
                style:{
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    fontSize: "14px",
                    fontWeight: "600",
                    padding: "21px 0 17px",
                    color: "#151515",
                },
            },
            "Home"
        ),
        React.createElement(
            "button",
            {
                onClick: goEvents,
                style:{
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    fontSize: "14px",
                    fontWeight: "600",
                    padding: "21px 0 17px",
                    color: "#151515",
                },
            },
            "Events"
        ),
        React.createElement(
            "button",
            {
                onClick: goEvents,
                style:{
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    fontSize: "14px",
                    fontWeight: "600",
                    padding: "21px  17px",
                    color: "#151515",
                    borderBottom: "3px solid #5420c7",
                },
            },
            "My Bookings"
        ),
        


        React.createElement(
          "div",
          { className: "user-area" },

          React.createElement(
            "div",
            { className: "user-info" },
            React.createElement(
              "span",
              { className: "user-icon" },
              "♙"
            ),
            React.createElement("span", null, "Hello,"),
            React.createElement(
              "span",
              { className: "arrow" },
              "⌄"
            )
          ),

          React.createElement(
            "button",
            { className: "logout-btn" },
            "Logout"
          )
        )
      ),

      /* HERO */

      React.createElement(
        "section",
        { className: "hero" },
        React.createElement(
          "div",
          null,
          React.createElement("h1", null, "My Bookings"),
          React.createElement(
            "p",
            null,
            "View and manage your all event bookings in one place."
          )
        )
      ),

      /* CONTENT */

      React.createElement(
        "main",
        { className: "content" },

        React.createElement(
          "div",
          { className: "booking-heading" },

          React.createElement(
            "div",
            { className: "heading-left" },
            React.createElement("span", null, "▣"),
            React.createElement("h2", null, "Your Bookings")
          ),

          React.createElement(
            "div",
            { className: "total" },
            "Total Bookings:",
            React.createElement(
              "span",
              { className: "total-number" },
              bookings.length
            )
          )
        ),

        bookings.map((booking, index) =>
          React.createElement(BookingCard, {
            booking: booking,
            key: index,
          })
        ),

        /* HELP BOX */

        React.createElement(
          "div",
          { className: "help-box" },

          React.createElement(
            "div",
            { className: "help-left" },

            React.createElement(
              "div",
              { className: "help-icon" },
              "♧"
            ),

            React.createElement(
              "div",
              null,
              React.createElement(
                "div",
                { className: "help-title" },
                "Need Help?"
              ),
              React.createElement(
                "div",
                { className: "help-text" },
                "If you have any queries regarding your booking, contact our support."
              )
            )
          ),

          React.createElement(
            "button",
            { className: "support-btn" },
            "Contact Support"
          )
        )
      )
    )
  );
}