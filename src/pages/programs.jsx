import BlogList from "@/widgets/BlogList";
import BlogView from "@/widgets/BlogView";
import { Footer } from "@/widgets/layout";
import { Typography } from "@material-tailwind/react";
import { Button } from '@mui/material';
import { useEffect, useState } from 'react';
import styled from "./home.module.css";

export function Programs() {
    const [selectedBlog, setSelectedBlog] = useState(null);
    const [currentScreen, setCurrentScreen] = useState('BlogPosts');

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleBlogClick = (blog) => {
        setSelectedBlog(blog);
        setCurrentScreen('BlogView'); // Switch to the blog view screen
    };

    const handleCloseModal = () => {
        setCurrentScreen('BlogPosts'); // Switch back to the blog list screen
        setSelectedBlog(null);
    };

    return (
        <div className="bg-light-green-50">
            <div className="relative flex h-56 content-center items-center justify-center bg-[url('/img/about.png')] bg-cover pt-14 pb-16">
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
                <div className="container mx-auto flex justify-center">
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-1 lg:grid-cols-1">
                        {currentScreen === 'BlogPosts' ? (
                            <BlogList onView={handleBlogClick} /> // Pass handleBlogClick as onView
                        ) : (
                            <>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={handleCloseModal}
                                    sx={{ marginBottom: 2 }}
                                >
                                    Back to Blog List
                                </Button>
                                <BlogView blog={selectedBlog} />
                            </>
                        )}
                    </div>
                </div>
            </section>
            <div id="contact-us" className="bg-black">
                <Footer />
            </div>
        </div>
    );
}

export default Programs;
