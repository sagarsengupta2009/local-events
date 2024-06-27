

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-grid">
                    <div className="footer-col">
                        <h3>Events</h3>
                        <ul>
                            <li><a href="#">Music Events</a></li>
                            <li><a href="#">Comedy Shows</a></li>
                            <li><a href="#">Workshops</a></li>
                            <li><a href="#">Conferences</a></li>
                            <li><a href="#">Sports</a></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h3>Experiences</h3>
                        <ul>
                            <li><a href="#">Food & Drink</a></li>
                            <li><a href="#">Travel & Getaways</a></li>
                            <li><a href="#">Adventure</a></li>
                            <li><a href="#">Health & Wellness</a></li>
                            <li><a href="#">Virtual Events</a></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h3>About Us</h3>
                        <ul>
                            <li><a href="#">Contact Us</a></li>
                            <li><a href="#">Careers</a></li>
                            <li><a href="#">Press</a></li>
                            <li><a href="#">Terms of Use</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h3>Follow Us</h3>
                        <ul className="social-links">
                            <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                            <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                            <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                            <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="bottom-bar">
                <div className="footer-container">
                    <p>&copy; 2024 Local Events. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
