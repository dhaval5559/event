import React, { useState } from "react";
import footballImage from "../WhatsApp Image 2026-08-08 at 2.12.33 PM.jpeg";
import Events from "./Events";
import MyBookings from "./Mybookings";



const events = [
  {
    id: 1,
    title: "Rock Music Concert",
    category: "Music",
    date: "25 MAY",
    location: "City Arena, New York",
    time: "7:00 PM Onwards",
    price: 799,
    image:
      "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 2,
    title: "Tech Conference 2024",
    category: "Conference",
    date: "02 JUN",
    location: "Tech Park, San Francisco",
    time: "10:00 AM Onwards",
    price: 1499,
    image:
      "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 3,
    title: "Football Championship",
    category: "Sports",
    date: "15 JUN",
    location: "National Stadium, Chicago",
    time: "5:30 PM Onwards",
    price: 899,
    image: footballImage,
  },
  {
    id: 4,
    title: "Color Fest 2024",
    category: "Festivals",
    date: "22 JUN",
    location: "Central Park, New York",
    time: "12:00 PM Onwards",
    price: 499,
    image:
      "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&w=900&q=80",
  },
];

const categories = [
  {
    name: "Music",
    icon: "♫",
    color: "#5733d5",
  },
  {
    name: "Theatre",
    icon: "🎭",
    color: "#f59e0b",
  },
  {
    name: "Sports",
    icon: "⚽",
    color: "#20a765",
  },
  {
    name: "Conference",
    icon: "♟",
    color: "#e84c5c",
  },
  {
    name: "Festivals",
    icon: "✦",
    color: "#2689ca",
  },
  {
    name: "More",
    icon: "•••",
    color: "#5733d5",
  },
];

function Event() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [bookings, setBookings] = useState([]);
  const [page, setPage] = useState("home");
  const [activeNav, setActiveNav] = useState("home");  

  if (page=== "events"){
    return React.createElement(Events,{
      goHome: ()=> setPage("home"),
      goBookings: ()=> setPage("bookings")
    });
  }

  if (page=== "bookings"){
    return React.createElement(MyBookings,{
      goHome: ()=> setPage("home"),
      goEvents: ()=> setPage("events")
    });
  }

  function bookEvent(event) {
    const alreadyBooked = bookings.some(
      (booking) => booking.id === event.id
    );

    if (alreadyBooked) {
      alert("You have already booked this event!");
      return;
    }

    setBookings([...bookings, event]);

    alert(
      event.title +
        " booked successfully!"
    );
  }
   function callEvents(){
    return <Events />;
   }

  function goToEvents() {
    setPage("home");
    setActiveNav("events")

    setTimeout(() => {
      const element =
        document.getElementById("events");

      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
        });
      }
    }, 100);
  }

  function selectCategory(name) {
    setCategory(name);
    setPage("home");

    setTimeout(() => {
      const element =
        document.getElementById("events");

      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
        });
      }
    }, 100);
  }

  const filteredEvents = events.filter(
    (event) => {
      const searchText =
        search.toLowerCase();

      const matchesSearch =
        event.title
          .toLowerCase()
          .includes(searchText) ||
        event.category
          .toLowerCase()
          .includes(searchText) ||
        event.location
          .toLowerCase()
          .includes(searchText);

      const matchesCategory =
        category === "All" ||
        event.category === category;

      return (
        matchesSearch &&
        matchesCategory
      );
    }
  );

  const styles = {
    body: {
      margin: 0,
      fontFamily:
        "Arial, Helvetica, sans-serif",
      background: "#ffffff",
      color: "#171717",
    },

    navbar: {
      height: "74px",
      padding: "0 4%",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      background: "#ffffff",
      borderBottom:
        "1px solid #eeeeee",
      position: "sticky",
      top: 0,
      zIndex: 100,
    },

    logo: {
      display: "flex",
      alignItems: "center",
      gap: "10px",
      fontSize: "23px",
      fontWeight: "700",
    },

    logoIcon: {
      width: "36px",
      height: "36px",
      background: "#5733d5",
      color: "#ffffff",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "8px",
      transform: "rotate(-12deg)",
    },

    eventText: {
      color: "#222222",
    },

    bookText: {
      color: "#5733d5",
    },

    navLinks: {
      display: "flex",
      alignItems: "center",
      gap: "42px",
    },

    navButton: {
      background: "transparent",
      border: "none",
      padding: "25px 5px",
      fontSize: "16px",
      fontWeight: "600",
      cursor: "pointer",
    },

    activeNav: {
      color: "#5733d5",
      borderBottom:
        "3px solid #5733d5",
    },

    account: {
      display: "flex",
      alignItems: "center",
      gap: "15px",
    },

    accountIcon: {
      fontSize: "28px",
    },

    login: {
      border: "none",
      background: "#5733d5",
      color: "white",
      padding: "13px 25px",
      borderRadius: "7px",
      fontWeight: "600",
      fontSize: "15px",
      cursor: "pointer",
    },

    hero: {
      minHeight: "345px",
      padding: "0 4%",
      display: "flex",
      alignItems: "center",
      color: "white",
      background:
        "linear-gradient(90deg, rgba(3,4,18,0.98), rgba(7,6,35,0.82), rgba(10,5,40,0.35)), url('https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=1800&q=85') center/cover",
    },

    heroContent: {
      maxWidth: "620px",
    },

    heroTitle: {
      fontSize: "40px",
      lineHeight: "1.25",
      margin: "0 0 15px",
      fontWeight: "750",
    },

    heroDescription: {
      fontSize: "18px",
      lineHeight: "1.6",
      color: "#eeeeee",
      marginBottom: "25px",
    },

    searchBox: {
      width: "515px",
      maxWidth: "100%",
      height: "55px",
      display: "flex",
      background: "white",
      borderRadius: "8px",
      overflow: "hidden",
    },

    searchInput: {
      flex: 1,
      border: "none",
      outline: "none",
      padding: "0 18px",
      fontSize: "15px",
    },

    searchButton: {
      width: "115px",
      border: "none",
      background: "#5733d5",
      color: "white",
      fontWeight: "600",
      cursor: "pointer",
    },

    section: {
      padding: "30px 4%",
    },

    heading: {
      fontSize: "20px",
      marginBottom: "18px",
    },

    categoryGrid: {
      display: "grid",
      gridTemplateColumns:
        "repeat(6, 1fr)",
      gap: "20px",
    },

    categoryCard: {
      height: "55px",
      display: "flex",
      alignItems: "center",
      gap: "12px",
      padding: "0 15px",
      borderRadius: "9px",
      background: "#ffffff",
      border: "1px solid #eeeeee",
      boxShadow:
        "0 3px 12px rgba(0,0,0,0.07)",
      cursor: "pointer",
      fontWeight: "600",
    },

    categoryIcon: {
      width: "38px",
      height: "38px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "7px",
      color: "white",
      fontSize: "18px",
    },

    eventsHeader: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },

    viewAll: {
      color: "#5733d5",
      fontWeight: "600",
      cursor: "pointer",
    },

    eventGrid: {
      display: "grid",
      gridTemplateColumns:
        "repeat(4, 1fr)",
      gap: "24px",
    },

    eventCard: {
      background: "#ffffff",
      border: "1px solid #eeeeee",
      borderRadius: "10px",
      overflow: "hidden",
      boxShadow:
        "0 4px 15px rgba(0,0,0,0.08)",
    },

    imageContainer: {
      height: "180px",
      position: "relative",
    },

    eventImage: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
    },

    date: {
      position: "absolute",
      top: "13px",
      left: "13px",
      background: "white",
      color: "#5733d5",
      padding: "9px 11px",
      borderRadius: "8px",
      fontWeight: "700",
      boxShadow:
        "0 2px 8px rgba(0,0,0,0.15)",
    },

    eventBody: {
      padding: "16px",
    },

    eventTitle: {
      margin: "0 0 14px",
      fontSize: "18px",
    },

    eventInfo: {
      color: "#555555",
      fontSize: "14px",
      margin: "9px 0",
    },

    eventBottom: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginTop: "18px",
    },

    price: {
      color: "#5733d5",
      fontSize: "18px",
      fontWeight: "700",
    },

    bookButton: {
      border: "none",
      background: "#5733d5",
      color: "white",
      padding: "10px 17px",
      borderRadius: "6px",
      cursor: "pointer",
      fontWeight: "600",
    },

    features: {
      margin: "5px 4% 35px",
      padding: "25px",
      background: "#f7f4ff",
      borderRadius: "10px",
      display: "grid",
      gridTemplateColumns:
        "repeat(4, 1fr)",
      gap: "20px",
    },

    feature: {
      display: "flex",
      alignItems: "center",
      gap: "14px",
    },

    featureIcon: {
      width: "43px",
      height: "43px",
      borderRadius: "8px",
      background: "#5733d5",
      color: "white",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      fontSize: "20px",
    },

    featureTitle: {
      margin: "0 0 4px",
      fontSize: "15px",
    },

    featureText: {
      margin: 0,
      fontSize: "13px",
      color: "#666666",
    },

    bookings: {
      margin: "20px 4%",
      padding: "25px",
      background: "#f7f4ff",
      borderRadius: "10px",
    },

    bookingItem: {
      background: "white",
      padding: "15px",
      marginTop: "10px",
      borderRadius: "7px",
    },
  };

  return React.createElement(
    "div",
    { style: styles.body },

    /* ================= NAVBAR ================= */

    React.createElement(
      "nav",
      { style: styles.navbar },

      React.createElement(
        "div",
        { style: styles.logo },

        React.createElement(
          "div",
          { style: styles.logoIcon },
          "★"
        ),

        React.createElement(
          "span",
          null,

          React.createElement(
            "span",
            { style: styles.eventText },
            "Event"
          ),

          React.createElement(
            "span",
            { style: styles.bookText },
            "Book"
          )
        )
      ),

      React.createElement(
        "div",
        { style: styles.navLinks },

        React.createElement(
          "button",
          {
            style: {
              ...styles.navButton,
              ...(activeNav === "home"
                ? styles.activeNav
                : {}),
            },

            onClick: () => {
              setPage("home");
              setActiveNav("home")
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
            },
          },
          "Home"
        ),

        React.createElement(
          "button",
          {
             style: {
              ...styles.navButton,
              ...(activeNav === "events"
                ? styles.activeNav
                : {}),
            },
            onClick: ()=>{
                setActiveNav("events");
                setPage("events");
            },
          },
          "Events"
        ),

        React.createElement(
          "button",
          {
            style:{
            ...styles.navButton,
            ...(activeNav === "bookings" 
                ? styles.activeNav:{}),
            },
            onClick: () =>{
              setPage("bookings");
              setActiveNav("bookings");

              window.scrollTo({
                  behavior: "smooth",
              });
            },   
          },
          "My Bookings"
        )
      ),

      React.createElement(
        "div",
        { style: styles.account },

        React.createElement(
          "span",
          { style: styles.accountIcon },
          "♙"
        ),

        React.createElement(
          "button",
          { style: styles.login },
          "Login"
        )
      )
    ),

    /* ================= HERO ================= */

    React.createElement(
      "section",
      { style: styles.hero },

      React.createElement(
        "div",
        { style: styles.heroContent },

        React.createElement(
          "h1",
          { style: styles.heroTitle },

          "Discover Amazing Events",

          React.createElement(
            "br"
          ),

          "Book Tickets Easily"
        ),

        React.createElement(
          "p",
          {
            style:
              styles.heroDescription,
          },

          "Find the best events, book your tickets",

          React.createElement(
            "br"
          ),

          "and enjoy unforgettable experiences."
        ),

        React.createElement(
          "div",
          { style: styles.searchBox },

          React.createElement(
            "input",
            {
              style:
                styles.searchInput,

              placeholder:
                "🔍  Search events, concerts, sports...",

              value: search,

              onChange: (e) =>
                setSearch(
                  e.target.value
                ),
            }
          ),

          React.createElement(
            "button",
            {
              style:
                styles.searchButton,

              onClick: goToEvents,
            },
            "Search"
          )
        )
      )
    ),

    /* ================= CATEGORIES ================= */

    React.createElement(
      "section",
      { style: styles.section },

      React.createElement(
        "h2",
        { style: styles.heading },
        "Browse Categories"
      ),

      React.createElement(
        "div",
        {
          style:
            styles.categoryGrid,
        },

        categories.map(
          (item) =>
            React.createElement(
              "div",
              {
                key: item.name,

                style:
                  styles.categoryCard,

                onClick: () =>
                  selectCategory(
                    item.name
                  ),
              },

              React.createElement(
                "div",
                {
                  style: {
                    ...styles.categoryIcon,
                    background:
                      item.color,
                  },
                },
                item.icon
              ),

              item.name
            )
        )
      )
    ),

    /* ================= BOOKINGS ================= */

    page === "bookings" &&
      React.createElement(
        "section",
        { style: styles.bookings },

        React.createElement(
          "h2",
          null,
          "My Bookings"
        ),

        bookings.length === 0
          ? React.createElement(
              "p",
              null,
              "You haven't booked any events yet."
            )
          : bookings.map(
              (event) =>
                React.createElement(
                  "div",
                  {
                    key: event.id,
                    style:
                      styles.bookingItem,
                  },

                  React.createElement(
                    "strong",
                    null,
                    event.title
                  ),

                  React.createElement(
                    "p",
                    null,
                    "📍 ",
                    event.location
                  ),

                  React.createElement(
                    "p",
                    null,
                    "₹",
                    event.price
                  )
                )
            )
      ),

    /* ================= EVENTS ================= */

    page === "home" &&
      React.createElement(
        "section",
        {
          id: "events",
          style: styles.section,
        },

        React.createElement(
          "div",
          {
            style:
              styles.eventsHeader,
          },

          React.createElement(
            "h2",
            { style: styles.heading },

            category === "All"
              ? "Featured Events"
              : category +
                  " Events"
          ),

          React.createElement(
            "span",
            {
              style: styles.viewAll,

              onClick: () =>
                setCategory("All"),
            },
            "View All Events"
          )
        ),

        React.createElement(
          "div",
          {
            style:
              styles.eventGrid,
          },

          filteredEvents.length ===
            0 &&

            React.createElement(
              "p",
              null,
              "No events found."
            ),

          filteredEvents.map(
            (event) =>
              React.createElement(
                "div",
                {
                  key: event.id,
                  style:
                    styles.eventCard,
                },

                React.createElement(
                  "div",
                  {
                    style:
                      styles.imageContainer,
                  },

                  React.createElement(
                    "img",
                    {
                      src: event.image,
                      alt: event.title,
                      style:
                        styles.eventImage,
                    }
                  ),

                  React.createElement(
                    "div",
                    {
                      style:
                        styles.date,
                    },
                    event.date
                  )
                ),

                React.createElement(
                  "div",
                  {
                    style:
                      styles.eventBody,
                  },

                  React.createElement(
                    "h3",
                    {
                      style:
                        styles.eventTitle,
                    },
                    event.title
                  ),

                  React.createElement(
                    "p",
                    {
                      style:
                        styles.eventInfo,
                    },
                    "📍 ",
                    event.location
                  ),

                  React.createElement(
                    "p",
                    {
                      style:
                        styles.eventInfo,
                    },
                    "◷ ",
                    event.time
                  ),

                  React.createElement(
                    "div",
                    {
                      style:
                        styles.eventBottom,
                    },

                    React.createElement(
                      "span",
                      {
                        style:
                          styles.price,
                      },
                      "₹",
                      event.price
                    ),

                    React.createElement(
                      "button",
                      {
                        style:
                          styles.bookButton,

                        onClick: () =>
                          bookEvent(
                            event
                          ),
                      },
                      "Book Now"
                    )
                  )
                )
              )
          )
        )
      ),

    /* ================= FEATURES ================= */

    React.createElement(
      "section",
      { style: styles.features },

      [
        [
          "🛡️",
          "Secure Booking",
          "100% secure payment",
        ],

        [
          "🎟️",
          "Instant Tickets",
          "Get e-tickets instantly",
        ],

        [
          "🎧",
          "24/7 Support",
          "We're here to help",
        ],

        [
          "💲",
          "Easy Refunds",
          "Hassle-free refunds",
        ],
      ].map(
        (item) =>
          React.createElement(
            "div",
            {
              key: item[1],
              style: styles.feature,
            },

            React.createElement(
              "div",
              {
                style:
                  styles.featureIcon,
              },
              item[0]
            ),

            React.createElement(
              "div",
              null,

              React.createElement(
                "h3",
                {
                  style:
                    styles.featureTitle,
                },
                item[1]
              ),

              React.createElement(
                "p",
                {
                  style:
                    styles.featureText,
                },
                item[2]
              )
            )
          )
      )
    )
  );
}

/* ================= START REACT ================= */

export default Event;