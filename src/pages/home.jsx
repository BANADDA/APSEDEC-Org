import { backgrounds, contactData, featuresData, headerData, managementData, servicesData, whoWeAreData } from "@/data/contentData";
import { FeatureCard } from "@/widgets/cards";
import { Footer, PageTitle } from "@/widgets/layout";
import { Button, Card, CardBody, CardHeader, Typography } from "@material-tailwind/react";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export function Home() {
  const [currentBackground, setCurrentBackground] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBackground((current) => (current + 1) % backgrounds.length);
    }, 3000); // Change image every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Background and Header Section */}
      <div className="relative flex h-screen content-start items-center justify-center pt-16 pb-32">
        {backgrounds.map((background, index) => (
          <div
            key={background}
            className={`absolute top-0 h-full w-full bg-cover bg-center transition-opacity duration-1000 ${index === currentBackground ? 'opacity-100' : 'opacity-0'}`}
            style={{ backgroundImage: `url(${background})` }}
          />
        ))}
        <div className="absolute top-0 h-full w-full bg-gray-900/70" />

        <div className="max-w-8xl container relative mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="opacity-300 ml-auto mr-auto w-full px-1 text-center lg:w-8/12">
              <Typography variant="h1" className="mb-6 font-black text-gray-300">
                {headerData.title} <span className={headerData.highlight}>{headerData.acronym}</span>
              </Typography>
              <Typography variant="lead" color="white" className="opacity-400 inline-block text-center pt-5 text-2xl font-bold text-gray-300">
                {headerData.description}
              </Typography>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section className="-mt-32 bg-gray-50 px-4 pb-20 pt-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuresData.map(({ color, icon, title, description }) => (
              <FeatureCard
                key={title}
                icon={React.createElement(icon, { className: "w-5 h-5 text-white" })} // Create icon as a React element
                color={color}
                title={title}
                description={description}
              />
            ))}
          </div>
          <div className="mt-32 flex flex-wrap items-center">
            <div className="mx-auto -mt-8 w-full px-4 md:w-5/12">
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-green-600 p-2 text-center shadow-lg">
                {/* Placeholder for icon */}
              </div>
              <Typography variant="h3" className="mb-3 font-bold" color="green">
                {whoWeAreData.title}
              </Typography>
              <Typography className="mb-20 font-normal text-blue-gray-500">
                {whoWeAreData.description}
              </Typography>
              <Link to={whoWeAreData.buttonLink}>
                <Button variant="outlined" className="border-green-600 text-green-600 hover:bg-green-600 hover:text-white focus:ring-gray-200">
                  {whoWeAreData.buttonText}
                </Button>
              </Link>
            </div>
            <div className="mx-auto mt-24 flex w-full justify-center px-4 md:w-5/12 lg:mt-0">
              <Card className="shadow-gray-1000/10 shadow-lg">
                <CardHeader className="relative h-56 bg-transparent">
                  <img alt="Card Image" src={whoWeAreData.cardImage} className=" h-30 w-full" />
                </CardHeader>
                <CardBody>
                  <Typography variant="h5" color="blue-gray" className="mb-3 font-bold">
                    {whoWeAreData.cardTitle}
                  </Typography>
                  <Typography className="font-sans font-bold text-blue-gray-800">
                    {whoWeAreData.cardDescription}
                  </Typography>
                </CardBody>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Management Section */}
      <section className="bg-green-50 px-1 pt-20 pb-20">
        <div className="container mx-auto">
          <PageTitle section={managementData.title} heading={managementData.heading}>
            <div className="text-center">
              <p className="text-lg text-gray-700">{managementData.description}</p>
            </div>
          </PageTitle>
          <div className="flex flex-col md:flex-row items-center justify-between my-10">
            <div className="bg-white md:w-1/3 mx-auto mb-6 md:mb-0">
              <img src={managementData.ceoMessage.image} alt="CEO" className="w-full rounded-lg shadow-lg" />
            </div>
            <div className="md:w-2/3 md:ml-10">
              <div className="bg-gradient-to-br from-blue-200 to-blue-500 rounded-lg shadow-lg p-6">
                <p className="text-lg font-semibold mb-4 text-white">{managementData.ceoMessage.title}</p>
                <p className="text-gray-100 leading-relaxed">{managementData.ceoMessage.message}</p>
                <p className="text-gray-100 mt-4">{managementData.ceoMessage.thanks}</p>
                <p className="text-gray-100 mt-4">{managementData.ceoMessage.ceoName} <br /> {managementData.ceoMessage.ceoPosition}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="relative bg-gray-100 pt-20 py-3 px-4">
        <div className="container mx-auto">
          <PageTitle section={servicesData.title} heading={servicesData.heading}>
            {servicesData.description}
          </PageTitle>
          <div className="mx-auto mt-20 mb-20 grid max-w-7xl grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
            {contactData.map(({ title, description }) => (
              <Card key={title} color="transparent" className="bg-white mt-6 w-96 transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">
                <CardBody>
                  <Typography variant="h5" color="blue-gray" className="mb-5 text-center">
                    {title}
                  </Typography>
                  <hr className="my-2 border-b-1 border-blue-gray-300" />
                  <Typography className="font-medium">{description}</Typography>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <div className="bg-black">
        <Footer />
      </div>
    </>
  );
}

export default Home;
