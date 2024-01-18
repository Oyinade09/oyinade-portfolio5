import { Link } from "react-scroll";
import React from "react";

function Footer() {
  return (
    <footer className="footer--container">
          <div className="py-1 lg:py-2  flex items-center object-center">
            <div className="flex items-center">
              <p className="text-md mt-1 lg:mt-2 opacity-50 text-center">
                &copy; {new Date().getFullYear()} Oyinade Odogun. All rights
                reserved.
              </p>
            </div>
          </div>
    </footer>
  );
}

export default Footer;
