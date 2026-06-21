import React, { useState } from "react";

export default function Header() {
    const [open, setOpen] = useState(false);

    return (
        <header className="site-header">
            <div className="container">
                <div className="logo">WEBSITE SALON</div>

                <nav className={`main-nav ${open ? "open" : ""}`} aria-label="Primary">
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#service">Service</a></li>
                        <li><a href="#price">Price</a></li>
                        <li className="has-dropdown">
                            <button className="pages-toggle" aria-expanded="false">Pages ▾</button>
                            <ul className="dropdown">
                                <li><a href="#gallery">Gallery</a></li>
                                <li><a href="#product-course">Product & Course</a></li>
                            </ul>
                        </li>
                        <li><a href="#contact">Contact Us</a></li>
                    </ul>
                </nav>

                <div className="actions">
                    <a className="btn-book" href="#book">Book Appointment</a>

                    <button
                        className={`hamburger ${open ? "is-active" : ""}`}
                        aria-label="Open menu"
                        aria-expanded={open}
                        onClick={() => setOpen(!open)}
                    >
                        <span />
                        <span />
                        <span />
                    </button>
                </div>
            </div>

            {/* Mobile menu (duplicate nav for easier styling) */}
            <div className={`mobile-menu ${open ? "show" : ""}`}>
                <ul>
                    <li><a href="#home" onClick={() => setOpen(false)}>Home</a></li>
                    <li><a href="#about" onClick={() => setOpen(false)}>About</a></li>
                    <li><a href="#service" onClick={() => setOpen(false)}>Service</a></li>
                    <li><a href="#price" onClick={() => setOpen(false)}>Price</a></li>
                    <li>
                        <details>
                            <summary>Pages</summary>
                            <ul>
                                <li><a href="#gallery" onClick={() => setOpen(false)}>Gallery</a></li>
                                <li><a href="#product-course" onClick={() => setOpen(false)}>Product & Course</a></li>
                            </ul>
                        </details>
                    </li>
                    <li><a href="#contact" onClick={() => setOpen(false)}>Contact</a></li>
                    <li><a className="btn-book mobile" href="#book" onClick={() => setOpen(false)}>Book Appointment</a></li>
                </ul>
            </div>
        </header>
    );
}