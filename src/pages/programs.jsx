import materialData from "@/data/material-data";
import MaterialCard from "@/widgets/cards/materialCrad";
import { Footer } from "@/widgets/layout";
import {
    Typography
} from "@material-tailwind/react";
import { useEffect } from "react";
import styled from "./home.module.css";

export function Programs() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
  return (
    <div className="bg-light-green-50">
    <div className="relative flex h-56 content-center items-center justify-center bg-[url('/img/about.png')] bg-cover pt-14 pb-16 ">
        <div className="max-w-8xl container relative mx-auto">
            <div className="flex flex-wrap items-center pt-10">
                <div className="opacity-300 ml-auto mr-auto w-full px-4 text-center lg:w-8/12">
                    <Typography
                        variant="h1"
                        color="white"
                        className="mb-6 mt-20 text-6xl font-black"
                    >
                        Our <span className={styled["home-span"]}>Programs.</span>
                    </Typography>
                </div>
            </div>
        </div>
    </div>
      <section className="mx-0 px-0 pt-10 pb-10">
        <div className="container mx-auto flex justify-center ">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-1 lg:grid-cols-1">
            {materialData.map(({img, title, description }) => (
              <MaterialCard
                img={img}
                alt={title}
                title={title}
                description={description}
              />
            ))}
          </div>
        </div>
        {/* <div  className=' mx-auto max-w-6xl bg-red-100'>
        <Carousel/>
        </div> */}
      </section>
      <div id="contact-us" className=" bg-black">
        <Footer />
      </div>
    </div>
  );
}

export default Programs;