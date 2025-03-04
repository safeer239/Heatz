import React from "react";
import { BsSend } from "react-icons/bs";
function Footer() {
  return (
    <footer className="bg-black text-white py-12 px-8 pl-19">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h1 className="text-3xl font-bold text-green-500 mb-4">HEATZ</h1>
          <p className="text-sm mb-6">
            Heatz is a registered brand of Ashtel group. It is registered in
            different countries including Saudi Arabia and UAE, especially in
            the middle east. Heatz is well known for its variety and quality of
            products launched in every season.
          </p>

          <div className="mb-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-transparent border-b border-gray-600 text-sm p-1 w-2/3 focus:outline-none"
            />
            <button className="text-green-500 text-xl ml-2">
              <BsSend />
            </button>
          </div>
          <div className="flex items-center text-sm">
            <input type="checkbox" className="mr-2" />
            <span>
              I confirm acceptance of the{" "}
              <a href="#" className="text-green-500 underline">
                Privacy Policy
              </a>{" "}
              and consent to its terms, including the use of cookies.
            </span>
          </div>
        </div>

        <div>
          <h2 className="text-lg font-bold mb-4">Mob Acc</h2>
          <ul className="text-sm space-y-2">
            <li>Earphones</li>
            <li>Cables</li>
            <li>Adapters</li>
            <li>Power Bank</li>
            <li>Batteries</li>
            <li>Car Charger</li>
            <li>Holders</li>
            <li>Speakers</li>
            <li>Smartwatches</li>
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-bold mb-4">Com Acc</h2>
          <ul className="text-sm space-y-2">
            <li>Earphones</li>
            <li>Cables</li>
            <li>Adapters</li>
            <li>Power Bank</li>
            <li>Batteries</li>
            <li>Car Charger</li>
            <li>Holders</li>
            <li>Speakers</li>
            <li>Smartwatches</li>
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-bold mb-4">Help</h2>
          <ul className="text-sm space-y-2">
            <li>Contact Us</li>
            <li>FAQs</li>
            <li>Shipping & Returns</li>
            <li>Payment Methods</li>
            <li>Track Your Order</li>
            <li>About Us</li>
            <li>Delivery Policy</li>
            <li>Cancellation Policy</li>
            <li>Return Policy</li>
            <li>Privacy Policy</li>
            <li>Terms and Conditions</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-700 my-8"></div>

      <div className="text-center text-sm text-gray-500">
        <p>
          Copyright © 2024 Heatz - All rights reserved. | Developed by{" "}
          <a href="#" className="text-white underline">
            AdAgency | Technologies
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
