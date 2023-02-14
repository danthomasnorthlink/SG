"use client";
import React from "react";
import Container from "../Container";
import { ChevronsDown } from 'lucide-react';

const SignIn = () => (
  <section className="bg-alphaLight">
    <Container maxWidth="max-w-2xl ">
      <div className="flex flex-col items-center text-white gap-6 text-center">
        <img src="/SG-Shield-Logo.svg" />
        <h1 className="text-bravo font-heading font-bold text-4xl  leading-heading">
          Adipiscing sit ipsum aute tempor culpa minim adipiscing do quis.
        </h1>
        <div className="flex gap-6">
        <button className="[ sgButton ] uppercase">
          Sign In
        </button>
        <button className="[ sgButton ] uppercase">
          Register
        </button>
        </div>
            <ChevronsDown color="#FFFDD4"/>
      </div>
  
    </Container>
  </section>
);

export default SignIn;
