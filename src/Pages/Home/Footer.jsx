import { Link } from "react-scroll";
import React from "react";

function Footer() {
  return (
    <footer className="footer--container">
      <div className="footer--link--container">
        <div className="footer--content--container">
         <div className="py-5 text-center">

            <p className="text-md mt-2 opacity-50">
                &copy; {new Date().getFullYear()} Oyinade Odogun. All rights reserved.
            </p>
         </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
