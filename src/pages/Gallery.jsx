import { Footer } from "@/widgets/layout";
import SearchIcon from '@mui/icons-material/Search';
import { Box, Button, Card, CardMedia, Container, Dialog, DialogContent, Grid, Stack, TextField, Typography } from '@mui/material';
import { getDownloadURL, getStorage, listAll, ref } from 'firebase/storage';
import { useEffect, useState } from 'react';
import styled from "./home.module.css";

const Gallery = () => {
    const [open, setOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState("");
    const [images, setImages] = useState([]);
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        console.log("Starting to fetch gallery categories...");
        const storage = getStorage();
        const galleryRef = ref(storage, 'gallery/');

        listAll(galleryRef)
            .then((result) => {
                const fetchedCategories = result.prefixes.map(folderRef => folderRef.name);
                setCategories(fetchedCategories);
                console.log("Fetched categories:", fetchedCategories);

                if (fetchedCategories.length > 0) {
                    // Automatically select the first category if available
                    setSelectedCategory(fetchedCategories[0]);
                }
            })
            .catch((error) => {
                console.error("Error fetching gallery categories:", error);
                setError("Failed to load gallery categories. Please try again later.");
            });
    }, []);

    useEffect(() => {
        if (selectedCategory) {
            fetchImagesForCategory(selectedCategory);
        }
    }, [selectedCategory]);

    const fetchImagesForCategory = async (category) => {
        setLoading(true);
        setImages([]); // Clear images before fetching new ones

        const storage = getStorage();
        const categoryRef = ref(storage, `gallery/${category}/`);

        try {
            const result = await listAll(categoryRef);
            const fetchedImages = await Promise.all(
                result.items.map(itemRef => getDownloadURL(itemRef))
            );

            const imageObjects = fetchedImages.map((url, index) => ({
                src: url,
                title: `Image ${index + 1}`,
            }));

            setImages(imageObjects);
            setLoading(false);
            console.log("Fetched images:", imageObjects);
        } catch (error) {
            console.error("Error fetching images for category:", error);
            setError("Failed to load images. Please try again later.");
            setLoading(false);
        }
    };

    const handleClickOpen = (image) => {
        setSelectedImage(image);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setSelectedImage(null);
    };

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
    };

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const filteredImages = images.filter(image =>
        image.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    if (error) {
        console.log("Error state active:", error);
        return (
            <Box sx={{ textAlign: 'center', padding: 4 }}>
                <Typography variant="h5" color="error">{error}</Typography>
            </Box>
        );
    }

    console.log("Rendering gallery with images:", filteredImages);

    return (
        <div className="bg-white">
            <div className="relative flex h-56 content-center items-center justify-center bg-[url('/img/about.png')] bg-cover pt-20 pb-16 ">
                <div className="max-w-8xl container relative mx-auto">
                    <div className="flex flex-wrap items-center pt-10">
                        <div className="opacity-300 ml-auto mr-auto w-full px-4 text-center lg:w-8/12">
                            <Typography
                                variant="h1"
                                color="white"
                                className="mb-6 mt-20 text-6xl font-black"
                                sx={{ fontWeight: "bold" }}
                            >
                                APSEDEC <span className={styled["home-span"]}>Gallery.</span>
                            </Typography>
                        </div>
                    </div>
                </div>
            </div>
            <section className="mx-0 px-0 pt-10 pb-10">
                <div className="container mx-auto flex justify-center">
                    <Container maxWidth="lg">
                        <Box sx={{ textAlign: 'center', marginTop: 4 }}>
                            <Typography variant="h3" component="h1" sx={{ fontWeight: 'bold', color: '#3f51b5' }}>
                                Photo<span style={{ color: '#000' }}>Gallery</span>
                            </Typography>
                        </Box>

                        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 3 }}>
                            <TextField
                                variant="outlined"
                                placeholder="Search..."
                                value={searchQuery}
                                onChange={handleSearchChange}
                                sx={{ width: '50%' }}
                                InputProps={{
                                    endAdornment: (
                                        <SearchIcon sx={{ color: '#3f51b5' }} />
                                    ),
                                }}
                            />
                        </Box>

                        <Stack direction="row" spacing={2} justifyContent="center" sx={{ marginTop: 4 }}>
                            {categories.map((category, index) => (
                                <Button
                                    key={index}
                                    variant={selectedCategory === category ? "contained" : "outlined"}
                                    onClick={() => handleCategoryChange(category)}
                                >
                                    {category}
                                </Button>
                            ))}
                        </Stack>

                        <Box sx={{ textAlign: 'center', marginTop: 4 }}>
                            <Typography variant="h4" component="h2">
                                {selectedCategory}
                            </Typography>
                        </Box>

                        {loading ? (
                            <Box sx={{ textAlign: 'center', marginTop: 4 }}>
                                <Typography variant="h5">Loading images...</Typography>
                            </Box>
                        ) : (
                            <Grid container spacing={3} sx={{ marginTop: 2 }}>
                                {filteredImages.map((image, index) => (
                                    <Grid item key={index} xs={12} sm={6} md={3}>
                                        <Card sx={{ borderRadius: 2, boxShadow: 3, height: '100%' }}>
                                            <CardMedia
                                                component="img"
                                                image={image.src}
                                                alt={image.title}
                                                sx={{
                                                    aspectRatio: '3/4', // Ensures a consistent aspect ratio
                                                    height: '100%',
                                                    width: '100%',
                                                    objectFit: 'cover', // Ensures the image covers the entire card
                                                    transition: 'transform 0.3s ease',
                                                    cursor: 'pointer',
                                                    '&:hover': {
                                                        transform: 'scale(1.05)',
                                                    },
                                                }}
                                                onClick={() => handleClickOpen(image)}
                                            />
                                        </Card>
                                    </Grid>
                                ))}
                            </Grid>
                        )}
                    </Container>
                </div>
            </section>

            <Dialog
                open={open}
                onClose={handleClose}
                maxWidth="md"
                fullWidth
            >
                <DialogContent sx={{ p: 0 }}>
                    {selectedImage && (
                        <img
                            src={selectedImage.src}
                            alt={selectedImage.title}
                            style={{ width: '100%', height: 'auto' }}
                        />
                    )}
                </DialogContent>
            </Dialog>

            <div id="contact-us" className=" bg-black">
                <Footer />
            </div>
        </div>
    );
};

export default Gallery;
