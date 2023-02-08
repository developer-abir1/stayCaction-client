import React from 'react';

const Footer = () => {
  return (
    <div className=" border-t-2">
      <footer className="footer p-10 bg-neutral text-neutral-content">
        <div>
          <span className="  text-2xl font-semibold text-accent">
            <span className="  text-primary">Stay</span>
            <span>cation</span>
          </span>
          <a className="link link-hover">
            We kaboom your beauty holiday instantly and memorable.
          </a>
        </div>
        <div>
          <span className="  text-2xl font-semibold text-accent">
            For Beginners
          </span>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </div>
        <div>
          <span className="  text-2xl font-semibold text-accent">
            Explore Us
          </span>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </div>
        <div>
          <span className="  text-2xl font-semibold text-accent">
            Connect Us
          </span>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </div>
      </footer>
      <div>
        <div className="  flex justify-center items-center bg-neutral text-neutral-content">
          Copyright 2019 • All rights reserved • Staycation
        </div>
      </div>
    </div>
  );
};

export default Footer;
