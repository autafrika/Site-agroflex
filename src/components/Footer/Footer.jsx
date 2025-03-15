import React from "react";
import "./Footer.css";
import agroflex from "../../assets/agroflex.png";

function Footer() {
  return (
    <div>
      <footer className="footer sm:footer-horizontal bg-base-200 text-base-content p-10">
        <aside>
          <img src={agroflex} className="w-24" alt="agroflex" />
          <p className="text-base/6">
            Agro flex Lorem ipsum dolor sit amet consectetur adipisicing.
            <br />
            Providing reliable tech since 2025
          </p>
        </aside>
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
      </footer>
      <footer className="w-full text-center py-4 text-sm">
        Designed & provided by{" "}
        <a
          href="https://www.autafrika.com"
          className="hover:text-[#f016fe] font-semibold "
        >
          Autafrika
        </a>
      </footer>
    </div>
  );
}

export default Footer;
