import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-gradient-to-b from-amber-900 to-amber-950 text-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        {/* Decorative pottery wheel pattern */}
        <div className="flex justify-center mb-8">
          <svg
            width="64"
            height="64"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-amber-500"
          >
            <path
              d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"
              fill="currentColor"
            />
          </svg>
        </div>

        <div className="text-center mb-8">
          <Link to="/" className="text-3xl font-serif text-amber-50 hover:text-amber-200 transition-colors">
            ArtisanCraft
          </Link>
        </div>

        <hr className="border-t-2 border-amber-800/50 mb-8" />

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Newsletter Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium mb-4">Stay Connected</h3>
            <p className="text-amber-200/80 mb-4">Subscribe to our newsletter for artisan updates</p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 bg-amber-900/50 border border-amber-700 rounded-l-lg px-4 py-2 text-amber-50 placeholder-amber-400/60 focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
              <button className="bg-amber-600 hover:bg-amber-700 px-4 py-2 rounded-r-lg transition-colors">
                <i className="fa-solid fa-paper-plane"></i>
              </button>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-medium mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-amber-200/80 hover:text-amber-200 transition-colors">Custom Orders</a></li>
              <li><a href="#" className="text-amber-200/80 hover:text-amber-200 transition-colors">Artisan Support</a></li>
              <li><a href="#" className="text-amber-200/80 hover:text-amber-200 transition-colors">Shipping</a></li>
              <li><a href="#" className="text-amber-200/80 hover:text-amber-200 transition-colors">Gift Cards</a></li>
            </ul>
          </div>

          {/* About */}
          <div>
            <h3 className="text-lg font-medium mb-4">About</h3>
            <ul className="space-y-2">
              <li><Link to="/aboutus" className="text-amber-200/80 hover:text-amber-200 transition-colors">Our Story</Link></li>
              <li><a href="#" className="text-amber-200/80 hover:text-amber-200 transition-colors">Artisan Community</a></li>
              <li><a href="#" className="text-amber-200/80 hover:text-amber-200 transition-colors">Sustainability</a></li>
              <li><a href="#" className="text-amber-200/80 hover:text-amber-200 transition-colors">Careers</a></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h3 className="text-lg font-medium mb-4">Help</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-amber-200/80 hover:text-amber-200 transition-colors">FAQs</a></li>
              <li><Link to="/contactus" className="text-amber-200/80 hover:text-amber-200 transition-colors">Contact Us</Link></li>
              <li><a href="#" className="text-amber-200/80 hover:text-amber-200 transition-colors">Shipping Info</a></li>
              <li><a href="#" className="text-amber-200/80 hover:text-amber-200 transition-colors">Returns</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-amber-800/50 text-center text-amber-200/60">
          <p>&copy; {new Date().getFullYear()} ArtisanCraft. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;