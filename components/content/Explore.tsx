"use client";
import { ShieldCheck } from "lucide-react";
import React from "react";
import ExploreCard from "../../components/ExploreCard";
import Container from "../Container";

const exploreCards = [
  {
      title: 'Adipisicing sit ipsum aute tempor culpa minim adipisicing',
      text: 'Ut aliqua sunt magna dolore tempor ex mollit occaecat adipisicing ex consectetur culpa. Officia ut veniam consectetur aute dolor magna in ad nulla anim sit mollit cillum dolor.',
  }, 
  
  {
      title: 'Aliquip ut dolore consequat dolore amet aliqua commodo anim',
      text: 'Ut veniam esse elit exercitation nulla Lorem. Nisi cupidatat magna nisi incididunt proident Lorem dolor veniam consectetur. Veniam adipisicing mollit ipsum qui cupidatat ad culpa officia aliqua ullamco.',
  }, 
  
  {
      title: 'Velit veniam laboris ipsum laboris amet ex',
      text: 'Aliqua nostrud ullamco amet. Aute velit sint culpa deserunt cupidatat quis anim veniam exercitation eu aute est ex. Veniam anim mollit qui laboris. Voluptate proident sit magna ea.',
  }
  ]

const Explore = () => (
  <section className="bg-body py-24 ">
    <Container>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
      {exploreCards.map((card) => {
        return(
          <div className="flex flex-col p-8 h-full bg-white text-black border-t-4 border-orange-900 rounded-lg items-center gap-6 text-center">

          <svg
            width="75"
            height="83"
            viewBox="0 0 75 83"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M7.51487e-06 12.45L37.35 0L74.7 12.45V33.6565C74.7043 41.1776 72.8503 48.5833 69.3027 55.2152C65.755 61.8471 60.6238 67.4997 54.365 71.6705L37.35 83L20.335 71.6705C14.0763 67.4997 8.94501 61.8471 5.39738 55.2152C1.84976 48.5833 -0.00430758 41.1776 7.51487e-06 33.6565V12.45ZM3.20144 14.6732L37.35 3.20143L71.4986 14.6732V34.2135C71.5025 41.1437 69.8074 47.9675 66.5638 54.0783C63.3203 60.1891 58.6289 65.3976 52.9066 69.2407L37.35 79.68L21.7934 69.2407C16.0712 65.3976 11.3797 60.1891 8.13618 54.0783C4.89264 47.9675 3.19749 41.1437 3.20144 34.2135V14.6732Z"
              fill="#78350C"
            />     <ShieldCheck/>
       
          </svg>

          <h1 className="text-bold text-2xl font-heading font-semibold">{card.title}</h1>
          <p className="">
           {card.text}
          </p>
          <button className="border-2 px-6 py-4 rounded-xl border-alpha text-alpha font-bold uppercase">
      find out more
          </button>
        </div>
        )
      })}      </div>
    </Container>
  </section>
);

export default Explore;
