"use client";

import React from "react";
import StartSteps from "../StartSteps";
import InsightCard from "../InsightCard";
import Container from "../Container";

const About = () => (
  <section className="bg-body pt-24 pb-12">
    <Container>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-24">
        <StartSteps></StartSteps>
        <InsightCard></InsightCard>
      </div>
    </Container>
  </section>
);

export default About;
