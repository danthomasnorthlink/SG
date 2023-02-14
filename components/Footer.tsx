"use client";
import React from "react";
import Container from "./Container";

const footerLinks = [
  {
      title: 'Terms & Conditions',
      url: '',
  }, 
  
  {
      title: 'Privacy Policy',
      url: '',
  }, 
  ]

const Footer = () => (
  <section className="bg-alpha ">
    <Container>
      <footer className="flex flex-col bg-alpha text-white gap-8 py-12">
        <img src="/SG-Logo.svg" height={15} width={118} />
        <p className="text-xs font-alpha">
          Ut aliqua sunt magna dolore tempor ex mollit occaecat adipisicing ex
          consectetur culpa.
        </p>
        <ul className="flex flex-col gap-8">
          <li className="font-bold">info@safeguardian.co.uk</li>
          <div className="flex gap-4 text-xs capitalize">
            {footerLinks.map((link) => {
              return(
                <li>{link.title}</li>
              )
            })}
          </div>
          <div className="flex justify-between gap-4 pt-2 text-xs">
            <li className="font-alpha">Copyright SafeGuardian © 2023</li>
            <div className="flex gap-1">
              <li className="font-alpha">Designed and built by </li>
              <li className="text-bravo"> NorthLink Digital</li>
            </div>
          </div>
        </ul>
      </footer>
    </Container>
  </section>
);

export default Footer;
