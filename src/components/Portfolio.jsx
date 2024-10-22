import React from "react";
//import api from "../assets/portfolio/api.jpg";
import amazon from "../assets/portfolio/amazon.png"
import webpostman from "../assets/portfolio/webpostman.png";
import restaurant from "../assets/portfolio/restaurant.png";
import portfolio from "../assets/portfolio/portfolio.png";
import qrcode from "../assets/portfolio/qrcode.png";
import expense from "../assets/portfolio/expense.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: webpostman,
      link: 'https://postman-website.vercel.app/',
      repo: 'https://github.com/vinodpanzade/postman-website'
    },
    {
      id: 2,
      src: amazon,
      link: 'https://amazon-clone-one-umber.vercel.app/',
      repo: 'https://github.com/vinodpanzade/amazon-clone'
    },
    {
      id: 3,
      src: restaurant,
      link: 'https://restaurant-website-delta-two.vercel.app/',
      repo: 'https://github.com/vinodpanzade/Restaurant-website'
    },
   
    {
      id: 4,
      src: portfolio,
      link: 'https://portfolio-website-alpha-henna-17.vercel.app/',
      repo: 'https://github.com/vinodpanzade/Portfolio-Website'
    },
    {
      id: 5,
      src: qrcode,
      link: 'https://github.com/vinodpanzade/qrcodegenerator',
      repo: 'https://github.com/vinodpanzade/qrcodegenerator'
    },
    {
      id: 6,
      src: expense,
      link: 'https://github.com/vinodpanzade/CoinCraft',
      repo: 'https://github.com/vinodpanzade/CoinCraft'
    },
   
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen portfolio"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, link, repo }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt="projects"
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105" onClick={ () => window.open(link, '_blank')}>
                  Demo
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105" onClick={ () => window.open(repo, '_blank')}>
                  GitHub
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
