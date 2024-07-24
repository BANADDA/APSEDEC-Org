import aboutData from "@/data/about-data";
import { FeatureCard } from "@/widgets/cards";
import { Footer } from "@/widgets/layout";
import { UsersIcon } from "@heroicons/react/24/solid";
import {
    Button,
    Card,
    CardBody,
    Typography
} from "@material-tailwind/react";
import Image from 'next/image';
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "./home.module.css";

export function About() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <div className="relative flex h-fit content-center items-center justify-center bg-[url('/img/about.png')] bg-cover pt-16 pb-32 ">
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
                        <div className="flex">
                            <div className="w-1/3 px-5 bg-green-50">
                                <img
                                    className="h-full rounded-l-lg object-contain"
                                    src="/img/badge.png"
                                    alt="card image"
                                />
                            </div>
                            <div className="text-secondary w-2/3 p-6 pr-0 pl-10">
                                <Typography
                                    variant="h2"
                                    className="font-sans text-3xl font-semibold text-blue-gray-900 mb-4"
                                >
                                    Our <span className="text-green-500">Objectives</span>
                                </Typography>
                                <ul className="my-10 mt-0 w-full space-y-1 text-blue-gray-600 dark:text-blue-gray-600">
                                    <li className="mr-0 flex">
                                        <svg
                                            className="mr-1.5 h-4 w-4 flex-shrink-0 text-green-500 dark:text-green-400"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                                clipRule="evenodd"
                                            ></path>
                                        </svg>
                                        Offer Business Development Services to various enterprises and organizations across the public and private sectors, aimed at enhancing income, livelihoods, and competitiveness.
                                    </li>
                                    <li className="flex items-center">
                                        <svg
                                            className="mr-1.5 h-4 w-4 flex-shrink-0 text-green-500 dark:text-green-400"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                                clipRule="evenodd"
                                            ></path>
                                        </svg>
                                        Support and promote entrepreneurship among informal, micro, small, and medium enterprises through specialized services.
                                    </li>
                                    <li className="flex items-center">
                                        <svg
                                            className="mr-1.5 h-4 w-4 flex-shrink-0 text-green-500 dark:text-green-400"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                                clipRule="evenodd"
                                            ></path>
                                        </svg>
                                        Provide microfinance support, including training, technical guidance, and advocacy for institutions like Village Savings and Loan Associations (VSLA), Savings and Credit Cooperatives (SACCOs), and microfinance institutions (MFIs), focusing on governance, operations, and system development.
                                    </li>
                                    <li className="flex items-center">
                                        <svg
                                            className="mr-1.5 h-4 w-4 flex-shrink-0 text-green-500 dark:text-green-400"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                                clipRule="evenodd"
                                            ></path>
                                        </svg>
                                        Conduct research and development to bolster our business objectives.
                                    </li>
                                    <li className="flex items-center">
                                        <svg
                                            className="mr-1.5 h-4 w-4 flex-shrink-0 text-green-500 dark:text-green-400"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                                clipRule="evenodd"
                                            ></path>
                                        </svg>
                                        Develop strategic linkages, partnerships, and institutional development with various entities to foster income generation and sustainable livelihoods.
                                    </li>
                                    <li className="flex items-center">
                                        <svg
                                            className="mr-1.5 h-4 w-4 flex-shrink-0 text-green-500 dark:text-green-400"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                                clipRule="evenodd"
                                            ></path>
                                        </svg>
                                        Promote advanced agricultural post-harvest techniques, improved methods, and value addition technologies.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <section className="py-8 px-8 lg:py-20">
                        <div
                            id="about-us"
                            className="mt-10 flex flex-wrap items-center pb-10"
                        >
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
                                    The APSEDEC team operates within a meticulously defined organizational structure,
                                    ensuring each member's role optimally utilizes their unique skills and expertise.
                                    From strategic leaders guiding direction to operational staff executing grassroots initiatives,
                                    every individual contributes to a cohesive environment fostering growth and development.
                                    Clear communication channels facilitate seamless coordination, enabling rapid adaptation to
                                    changing circumstances.
                                    <br />
                                    <br />
                                    Central to APSEDEC's organizational principles is a dedication to inclusivity and sustainability.
                                    Regular engagement and feedback mechanisms cultivate a culture of openness and mutual respect, facilitating
                                    the exchange of ideas and informed decision-making. Guided by a shared vision, the team leverages partnerships
                                    with governmental bodies, international donors, and local stakeholders to combine resources and knowledge for impactful
                                    change. United in their mission, they work towards poverty alleviation, economic resilience, and the prosperity of every
                                    member of the Acholi community
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
                                    <Image
                                        alt="Image 1"
                                        src="/img/5.png"
                                        width={500}
                                        height={500}
                                        className="h-auto w-full"
                                    />
                                    <Image
                                        alt="Image 2"
                                        src="/img/6.png"
                                        width={500}
                                        height={500}
                                        className="h-auto w-full"
                                    />
                                </div>
                            </div>
                        </div>
                        {/* START Add title and centered organization structure image here */}
                        <div className="mx-auto mt-5 mb-14 flex flex-col items-center w-full justify-center">
                            <Typography
                                variant="h2"
                                className="mb-4 text-3xl font-bold text-blue-gray-900"
                            >
                                Organization <span className="text-green-500">Structure</span>
                            </Typography>
                            <Image
                                alt="Organization Structure"
                                src="/img/structure.png"
                                width={800}
                                height={600}
                                className="h-auto w-full max-w-4xl"
                            />
                        </div>
                        {/* END */}
                        <div className="container !mx-auto text-center place-content-center grid">
                            <Typography
                                variant="h1"
                                color="blue-gray"
                                className="my-4 !text-2xl !leading-snug lg:!text-3xl"
                            >
                                Our <span className="text-green-500">Trusted</span> Partners
                            </Typography>
                            <Typography
                                variant="lead"
                                className="mx-auto max-w-5xl !text-blue-gray-300 lg:px-8 mb-10 text-lg"
                            >
                                In fulfilling our mission, APSEDEC partners with local,
                                national and international organisations/institutions
                                to provide subsidised and sustainable services to the
                                vulnerable communities in the region and also
                                promotes participatory approaches while adopting
                                private sector approaches of enhancing
                                competiveness and ownership as a strategy. These
                                include; Civil Society Organisations, Government and NonGovernment
                                Organisation to implementdevelopment programmes in Acholi sub region.
                            </Typography>
                            <div className="flex flex-col md:flex-row gap-6 max-w-6xl mx-auto">
                                <div className="flex flex-col items-center justify-center gap-6">
                                    <Card shadow={false} className="bg-[#FAFAFA] px-10">
                                        <CardBody>
                                            <Image
                                                src="/img/maaif.png"
                                                alt="Makerere AI Research Lab logo"
                                                width={160}
                                                height={160}
                                                className="w-40"
                                            />
                                            <Typography variant="small" className="p-2 font-normal text-gray-500">
                                                Ministry of Agriculture
                                            </Typography>
                                        </CardBody>
                                    </Card>
                                    <Card shadow={false} className="bg-[#FAFAFA] px-10">
                                        <CardBody>
                                            <Image
                                                src="/img/maaif.png"
                                                alt="Veterinarians logo"
                                                width={160}
                                                height={160}
                                                className="w-40"
                                            />
                                            <Typography variant="small" className="p-2 font-normal text-gray-500">
                                                AFDB
                                            </Typography>
                                        </CardBody>
                                    </Card>
                                </div>
                                <Card shadow={false} className="bg-[#FAFAFA] lg:px-10 justify-center max-w-[18rem] lg:max-w-lg">
                                    <CardBody className="text-center">
                                        <Image
                                            src="/img/gov.png"
                                            alt="Ministry of Agriculture logo"
                                            width={176}
                                            height={176}
                                            className="w-44 mx-auto"
                                        />
                                        <Typography variant="small" className="p-2 font-normal text-gray-500 mb-4">
                                            Government of Uganda
                                        </Typography>
                                    </CardBody>
                                </Card>
                                <div className="flex flex-col items-center justify-center gap-6">
                                    <Card shadow={false} className="bg-[#FAFAFA] px-10">
                                        <CardBody>
                                            <Image
                                                src="/img/iirr.png"
                                                alt="UVAs logo"
                                                width={160}
                                                height={160}
                                                className="w-40"
                                            />
                                            <Typography variant="small" className="p-2 font-normal text-gray-500">
                                                IIRR
                                            </Typography>
                                        </CardBody>
                                    </Card>
                                    <Card shadow={false} className="bg-[#FAFAFA] px-10">
                                        <CardBody>
                                            <Image
                                                src="/img/ifad.png"
                                                alt="NARRO logo"
                                                width={160}
                                                height={160}
                                                className="w-40"
                                            />
                                            <Typography variant="small" className="p-2 font-normal text-gray-500">
                                                IFAD
                                            </Typography>
                                        </CardBody>
                                    </Card>
                                </div>
                            </div>
                        </div>
                        <Link to="/programs">
                            <Button className="mt-6 mx-auto flex" variant="outlined">see all projects</Button>
                        </Link>
                    </section>
                </div>
            </section>
            <div id="contact-us" className=" bg-black">
                <Footer />
            </div>
        </>
    );
}

export default About;
