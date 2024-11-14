import aboutData, { objectives, partnersContent, teamContent } from "@/data/about-data";
import { FeatureCard } from "@/widgets/cards";
import { Footer } from "@/widgets/layout";
import { UsersIcon } from "@heroicons/react/24/solid";
import {
    Button,
    Card,
    CardBody,
    Typography
} from "@material-tailwind/react";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "./home.module.css";

export function About() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <div className="relative flex h-fit content-center items-center justify-center bg-[url('/img/about.png')] bg-cover pt-16 pb-32">
                <div className="absolute top-0 h-full w-full bg-black/25" />
                <div className="max-w-8xl container relative mx-auto">
                    <div className="flex flex-wrap items-center pt-10">
                        <div className="opacity-300 ml-auto mr-auto w-full px-4 text-center lg:w-8/12">
                            <Typography
                                variant="h1"
                                className="text-gray-100 mb-6 mt-20 text-6xl font-bold"
                            >
                                ABOUT <span className={styled["home-span"]}>US.</span>
                            </Typography>
                        </div>
                    </div>
                </div>
            </div>
            <section className="-mt-32 bg-gray-100 px-4 pb-20 pt-20">
                <div className="container mx-auto">
                    <div className="ml-36 mr-36 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2">
                        {aboutData.map(({ color, title, icon, description }) => (
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
                    <div className="mb-3 mt-10 ml-10 mr-10 flex flex-col rounded-xl bg-white bg-clip-border shadow-none">
                        <div className="flex flex-col lg:flex-row">
                            <div className="w-full lg:w-1/3 px-5 bg-green-50">
                                <img
                                    className="h-full w-full lg:h-full rounded-t-lg lg:rounded-l-lg lg:rounded-t-none object-contain"
                                    src="/img/badge.png"
                                    alt="card image"
                                />
                            </div>
                            <div className="text-secondary w-full lg:w-2/3 p-6">
                                <Typography
                                    variant="h2"
                                    className="font-sans text-3xl font-semibold text-blue-gray-900 mb-4"
                                >
                                    Our <span className="text-green-500">Objectives</span>
                                </Typography>
                                <ul className="my-6 space-y-4 text-blue-gray-600">
                                    {objectives.map((objective, index) => (
                                        <li key={index} className="flex items-start">
                                            <svg
                                                className="mr-1.5 h-4 w-4 flex-shrink-0 mt-1 text-green-500"
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                            <span>{objective.description}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>

                    <section className="py-8 px-8 lg:py-20">
                        <div id="about-us" className="mt-10 flex flex-wrap items-center pb-10">
                            <div className="mx-auto -mt-8 w-full px-4 md:w-5/12">
                                <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-green-600 p-3 text-center shadow-lg">
                                    <UsersIcon className="h-6 w-6 text-white" />
                                </div>
                                <Typography
                                    variant="h2"
                                    className="mb-3 text-4xl font-bold"
                                    color="blue-gray"
                                >
                                    Our <span className={styled["home-span"]}>Team</span>
                                </Typography>
                                <Typography className="mb-8 font-semibold text-blue-gray-700">
                                    {teamContent.mainDescription}
                                    <br />
                                    <br />
                                    {teamContent.secondaryDescription}
                                </Typography>
                                <Link to="/contact">
                                    <Button
                                        variant="outlined"
                                        className="border-green-600 text-green-600 hover:bg-green-600 hover:text-white focus:ring-gray-200"
                                    >
                                        Contact Us
                                    </Button>
                                </Link>
                            </div>
                            <div className="mx-auto mt-24 flex w-full justify-center px-4 md:w-5/12 lg:mt-0">
                                <div className="grid grid-cols-1 gap-8">
                                    <img
                                        alt="Team Image 1"
                                        src="/img/5.png"
                                        className="h-auto w-full"
                                    />
                                    <img
                                        alt="Team Image 2"
                                        src="/img/6.png"
                                        className="h-auto w-full"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="mx-auto mt-5 mb-14 flex flex-col items-center w-full justify-center">
                            <Typography
                                variant="h2"
                                className="mb-4 text-3xl font-bold text-blue-gray-900"
                            >
                                Organization <span className="text-green-500">Structure</span>
                            </Typography>
                            <img
                                alt="Organization Structure"
                                src="/img/structure.png"
                                className="h-auto w-full max-w-4xl"
                            />
                        </div>

                        <div className="container !mx-auto text-center place-content-center grid">
                            <Typography
                                variant="h1"
                                color="blue-gray"
                                className="my-4 !text-2xl !leading-snug lg:!text-3xl"
                            >
                                {partnersContent.title}
                            </Typography>
                            <Typography
                                variant="lead"
                                className="mx-auto max-w-5xl !text-blue-gray-300 lg:px-8 mb-10 text-lg"
                            >
                                {partnersContent.description}
                            </Typography>
                            <div className="flex flex-col md:flex-row gap-6 max-w-6xl mx-auto">
                                <div className="flex flex-col items-center justify-center gap-6">
                                    {partnersContent.partners.slice(0, 2).map((partner, index) => (
                                        <Card key={index} shadow={false} className="bg-[#FAFAFA] px-10">
                                            <CardBody>
                                                <img
                                                    src={partner.logo}
                                                    alt={`${partner.name} logo`}
                                                    className="w-80"
                                                />
                                                <Typography variant="small" className="font-normal text-gray-500">
                                                    {partner.name}
                                                </Typography>
                                            </CardBody>
                                        </Card>
                                    ))}
                                </div>
                                <Card shadow={false} className="bg-[#FAFAFA] lg:px-10 justify-center max-w-[18rem] lg:max-w-lg">
                                    <CardBody className="text-center">
                                        <img
                                            src={partnersContent.partners[2].logo}
                                            alt={`${partnersContent.partners[2].name} logo`}
                                            className="w-78 mx-auto"
                                        />
                                        <Typography variant="small" className="font-normal text-gray-500 mb-4">
                                            {partnersContent.partners[2].name}
                                        </Typography>
                                    </CardBody>
                                </Card>
                                <div className="flex flex-col items-center justify-center gap-6">
                                    {partnersContent.partners.slice(3).map((partner, index) => (
                                        <Card key={index} shadow={false} className="bg-[#FAFAFA] px-10">
                                            <CardBody>
                                                <img
                                                    src={partner.logo}
                                                    alt={`${partner.name} logo`}
                                                    className="w-80"
                                                />
                                                <Typography variant="small" className="font-normal text-gray-500">
                                                    {partner.name}
                                                </Typography>
                                            </CardBody>
                                        </Card>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <Link to="/programs">
                            <Button className="mt-6 mx-auto flex" variant="outlined">see all projects</Button>
                        </Link>
                    </section>
                </div>
            </section>
            <div id="contact-us" className="bg-black">
                <Footer />
            </div>
        </>
    );
}

export default About;