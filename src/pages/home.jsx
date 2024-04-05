import { contactData, featuresData, teamData } from "@/data";
import { FeatureCard, TeamCard } from "@/widgets/cards";
import { Footer, PageTitle } from "@/widgets/layout";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Typography
} from "@material-tailwind/react";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "./home.module.css";
const backgrounds = [
  '/img/background-1.jpg',
  '/img/background-2.jpg',
  '/img/background-3.jpg',
  '/img/background-4.jpg',
  '/img/background-5.jpg',
  '/img/background-6.jpg',
];

export function Home() {
  const [currentBackground, setCurrentBackground] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBackground((current) => (current + 1) % backgrounds.length);
    }, 3000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <div className="relative flex h-screen content-start items-center justify-center pt-16 pb-32">
        {backgrounds.map((background, index) => (
          <div
            key={background}
            className={`absolute top-0 h-full w-full bg-cover bg-center transition-opacity duration-1000 ${index === currentBackground ? 'opacity-100' : 'opacity-0'
              }`}
            style={{ backgroundImage: `url(${background})` }}
          />
        ))}
        <div className="absolute top-0 h-full w-full bg-gray-900/70" />

        <div className="max-w-8xl container relative mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="opacity-300 ml-auto mr-auto w-full px-1 text-center lg:w-8/12">
              <Typography
                variant="h1"
                className="mb-6 font-black text-gray-300"
              >
                ACHOLI <span className="text-green-500">PRIVATE</span>{" "}
                SECTOR DEVELOPMENT COMPANY LIMITED.
                <br />
                (<span className="text-green-500" style={{ textDecoration: 'underline' }}>APSEDEC</span>)
              </Typography>
              <Typography
                variant="lead"
                color="white"
                className="opacity-400 inline-block text-center pt-5 text-2xl font-bold text-gray-300"
              >
                Empowering local communities through sustainable private sector
                development since 1999, APSEDEC stands as a beacon of progress.
                With a steadfast commitment to driving economic growth, we work
                tirelessly to uplift and empower communities across Uganda. Join
                us in building a brighter future for all
              </Typography>

              {/* <div className=" flex items-center justify-center gap-5 pt-20">
                <IconButton color="blue" variant="text">
                  <i className={`fa-brands fa-facebook text-4xl`} />
                </IconButton>
                <IconButton color="blue" variant="text">
                  <i className={`fa-brands fa-twitter text-4xl`} />
                </IconButton>
                <IconButton color="pink" variant="text">
                  <i className={`fa-brands fa-instagram text-4xl`} />
                </IconButton>
                <IconButton color="green" variant="text">
                  <i className={`fa-brands fa-youtube text-4xl`} />
                </IconButton>
              </div> */}
            </div>
          </div>
        </div>
      </div>
      <section className="-mt-32 bg-gray-200 px-4 pb-20 pt-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuresData.map(({ color, title, icon, description }) => (
              <FeatureCard
                key={title}
                color={color}
                title={title}
                icon={React.createElement(icon, {
                  className: "w-5 h-5 text-white",
                })}
                description={description}
              />
            ))}
          </div>
          <div className="mt-32 flex flex-wrap items-center">
            <div className="mx-auto -mt-8 w-full px-4 md:w-5/12">
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-green-600 p-2 text-center shadow-lg">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="text-white w-6 h-6">
                  <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                </svg>
              </div>
              <Typography
                variant="h3"
                className="mb-3 font-bold"
                color="green"
              >
                Who We Are
              </Typography>
              <Typography className="mb-20 font-normal text-blue-gray-500">
                The Acholi Private Sector Development Company Limited (APSEDEC) is an organization
                dedicated to fostering business excellence and supporting the growth and development
                of the private sector.
                <br />
                <br />
                Our focus is on greenucing poverty, enhancing income generation,
                and ensuring sustainable livelihoods through various programs including financial
                inclusion, agricultural productivity improvement, and youth empowerment.
                Collaborating with government bodies, international donors, and communities, we aim
                to strengthen the economic fabric of the Acholi Sub-region and beyond.
              </Typography>
              <Link to="/">
                <Button
                  variant="outlined"
                  className="border-green-600 text-green-600 hover:bg-green-600 hover:text-white focus:ring-gray-200"
                >
                  Read More
                </Button>
              </Link>
            </div>
            <div className="mx-auto mt-24 flex w-full justify-center px-4 md:w-5/12 lg:mt-0">
              <Card className="shadow-gray-1000/10 shadow-lg">
                <CardHeader className="relative h-56 bg-transparent">
                  <img
                    alt="Card Image"
                    src="/img/aps.png"
                    className=" h-30 w-full"
                  />
                </CardHeader>
                <CardBody>
                  <Typography
                    variant="h5"
                    color="blue-gray"
                    className="mb-3 font-bold"
                  >
                    Top <span className={styled["home-span"]}>Community </span>
                    Development
                  </Typography>
                  <Typography className="font-sans font-bold text-blue-gray-800">
                    At APSEDEC, we drive change by empowering communities, enhancing agricultural productivity,
                    and advancing financial inclusivity. Our mission is to uplift socio-economic standards through
                    focused initiatives and strong partnerships, aiming for a future where prosperity and growth are
                    accessible to all in the Acholi Sub-region. Join our journey towards a thriving economy.
                  </Typography>
                </CardBody>
              </Card>
            </div>
          </div>
        </div>
      </section>
      <section className="px-1 pt-1 pb-20">
        <div className="container mx-auto">
          <PageTitle section="Our Management" heading="Ownership and Governance">
            The organization comprises 26 member entities from the private, public, and civil sectors,
            governed by a Board of Directors elected from these members. This Board ensures the company
            adheres to its vision, mission, and objectives.
          </PageTitle>
          <div className="mt-10 mx-auto grid grid-cols-1 gap-12 gap-x-24 md:grid-cols-2 xl:grid-cols-3">
            {teamData.map(({ img, name, position, contact }) => (
              <TeamCard
                key={name}
                img={img}
                name={name}
                position={position}
                contact={contact}
              />
            ))}
          </div>
        </div>
      </section>
      <section className="relative bg-gray-300 py-3 px-4">
        <div className="container mx-auto">
          <PageTitle section="Our Services" heading="Fostering Growth">
            At APSEDEC, we are committed to fostering economic growth and development
            through targeted interventions in the private, public, and civil sectors.
            Our comprehensive range of services is designed to enhance agricultural productivity,
            promote financial inclusivity, and empower vulnerable communities towards sustainable
            livelihoods.
          </PageTitle>
          <div className="mx-auto mt-20 mb-20 grid max-w-7xl grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
            {contactData.map(({ title, icon, description }) => (
              <Card
                color="transparent"
                className="bg-white mt-6 w-96 transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
              >
                <CardBody>
                  <div className="mx-auto mb-6 grid h-14 w-14 place-items-center rounded-full bg-green-700 shadow-lg hover:bg-green-600 shadow-gray-500/20">
                    {React.createElement(icon, {
                      className: "w-5 h-5 text-white",
                    })}
                  </div>
                  <Typography variant="h5" color="blue-gray" className="mb-5 text-center">
                    {title}
                  </Typography>
                  <hr className="my-2 border-b-1 border-blue-gray-300" />
                  <Typography className="font-medium">
                    {description}
                  </Typography>
                </CardBody>
                {/* <CardFooter className="pt-0">
                  <a href="#" className="inline-block">
                    <Button size="sm" variant="text" className="flex items-center gap-2">
                      Learn More
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="h-4 w-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                        />
                      </svg>
                    </Button>
                  </a>
                </CardFooter> */}
              </Card>
            ))}
          </div>
          {/* <PageTitle section="Contact Us" heading="Want to work with us?">
            Complete this form and we will get back to you in 24 hours.
          </PageTitle>
          <form className="mx-auto w-full mt-12 lg:w-5/12">
            <div className="mb-8 flex gap-8">
              <Input variant="outlined" size="lg" label="Full Name" />
              <Input variant="outlined" size="lg" label="Email Address" />
            </div>
            <Textarea variant="outlined" size="lg" label="Message" rows={8} />
            <Checkbox
              label={
                <Typography
                  variant="small"
                  color="gray"
                  className="flex items-center font-normal"
                >
                  I agree the
                  <a
                    href="#"
                    className="font-medium transition-colors hover:text-green-900"
                  >
                    &nbsp;Terms and Conditions
                  </a>
                </Typography>
              }
              containerProps={{ className: "-ml-2.5" }}
            />
            <Button variant="filled" size="lg" className="mt-8 bg-green-800" fullWidth>
              Send Message
            </Button>
          </form> */}
        </div>
      </section>
      <div className="bg-black">
        <Footer />
      </div>
    </>
  );
}

export default Home;
