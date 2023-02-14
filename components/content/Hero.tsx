"use client";
import React from "react";
import Container from "../Container";
import { ChevronsDown } from 'lucide-react';

const Hero = () => (
  <section className="bg-alphaLight py-24">
    <Container maxWidth="max-w-2xl">
      <div className="flex flex-col items-center text-white gap-6 text-center">
        <img src="/SG-Shield-Logo.svg" />
        <h1 className="text-bravo font-heading font-bold text-4xl  leading-heading">
          Adipiscing sit ipsum aute tempor culpa minim adipiscing do quis.
        </h1>
        <p>
          Labore minim culpa aute fugiat dolor prodient. Aliqua dolore ex ut non
          excepteur elit est nisi deserunt. Sunt aliquip nisi ea exceptur dolor
          adipiscing commodo ipsum do minim aute irure labore. Nisi sunt anim
          deserunt anim nisi laborum tempor quis ut minim occaecat exceptur.
          Laboris excepteur anim mollit enim qui veniam.
        </p>
        <button className="[ sgButton ] uppercase">
          Find out more
        </button>
            <ChevronsDown color="#FFFDD4"/>
            <img src='/menu.svg' alt='menu' className='w-[24px] h-[24px] object-contain md:hidden' />
      </div>
  
    </Container>
  </section>
);

export default Hero;
