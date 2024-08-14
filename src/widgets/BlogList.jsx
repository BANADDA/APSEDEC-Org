import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid, Typography } from '@mui/material';
import { collection, deleteDoc, doc, onSnapshot, query } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { db } from '../pages/firebase-config';
import BlogCard from './BlogCard';

const BlogList = ({ onView }) => { // Accept onView as a prop
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedBlog, setSelectedBlog] = useState(null);
    const [isDeleteDialogOpen, setDeleteDialogOpen] = useState(false);

    useEffect(() => {
        const q = query(collection(db, "blogs"));
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            const blogsArray = [];
            querySnapshot.forEach((doc) => {
                blogsArray.push({ id: doc.id, ...doc.data() });
            });
            setBlogs(blogsArray);
            setLoading(false); // Set loading to false after fetching data
        });

        return () => unsubscribe();
    }, []);
    
    const handleDeleteClick = (blog) => {
        setSelectedBlog(blog);
        setDeleteDialogOpen(true);
    };

    const handleConfirmDelete = async () => {
        if (selectedBlog) {
            try {
                await deleteDoc(doc(db, "blogs", selectedBlog.id));
                alert("Blog post deleted successfully!");
            } catch (error) {
                console.error("Error deleting blog post: ", error);
                alert("Failed to delete blog post. Please try again.");
            } finally {
                setDeleteDialogOpen(false);
                setSelectedBlog(null);
            }
        }
    };

    const handleCancelDelete = () => {
        setDeleteDialogOpen(false);
        setSelectedBlog(null);
    };

    if (loading) {
        return (
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '80vh' }}>
                <Typography variant="h6">Loading...</Typography>
            </Box>
        );
    }

    if (blogs.length === 0) {
        return (
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '80vh' }}>
                <ErrorOutlineIcon sx={{ color: 'red', fontSize: '4rem' }} />
                <Typography variant="h6" sx={{ mt: 2 }}>
                    No Blogs Found
                </Typography>
            </Box>
        );
    }

    return (
        <>            
            <Grid container spacing={3}>
                {blogs.map((blog) => (
                    <Grid item xs={12} sm={6} md={4} lg={3} key={blog.id}>
                        <BlogCard
                            imageUrl={blog.captionImageUrl}
                            title={blog.title}
                            createdAt={blog.createdAt}
                            caption={blog.caption}
                            onView={() => onView(blog)} // Call the onView function with the blog data
                            onDelete={() => handleDeleteClick(blog)}
                        />
                    </Grid>
                ))}
            </Grid>

            <Dialog
                open={isDeleteDialogOpen}
                onClose={handleCancelDelete}
            >
                <DialogTitle>Delete Blog Post</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Are you sure you want to delete the blog post titled "{selectedBlog?.title}"? This action cannot be undone.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCancelDelete} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={handleConfirmDelete} color="error">
                        Delete
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
};

export default BlogList;
