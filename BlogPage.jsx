import React, { useEffect, useState } from 'react';
import BlogCards from './BlogCards';
import Pagination from './pagination';


const BlogPage = () => {
    const [blogs, setBlogs] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 12; 
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [activeCategory, setActiveCategory] = useState(null);

    useEffect(() => {
        async function fetchBlogs() {
            try {
                let url = `http://localhost:5000/blogs?page=${currentPage}&limit=${pageSize}`;

                if (selectedCategory) {
                    url += `&category=${selectedCategory}`;
                }
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setBlogs(data);
            } catch (error) {
                console.error('Error fetching blogs:', error);
            }
        }

        fetchBlogs();
    }, [currentPage, pageSize, selectedCategory]);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
        setCurrentPage(1);
        setActiveCategory(category);
    };

    // Calculate the blogs to display for the current page
    const startIndex = (currentPage - 1) * pageSize;
    const paginatedBlogs = blogs.slice(startIndex, startIndex + pageSize);

    return (
        <div>
            {/* category */}
            <div> 
            Category Selection
            </div>

            {/* blogcard section */}
            <div>
                <BlogCards blogs={paginatedBlogs} currentPage={currentPage} selectedCategory={selectedCategory} pageSize={pageSize} />
            </div>

            {/* pagination section */}
            <div>
                <Pagination onPageChange={handlePageChange} currentPage={currentPage} blogs={blogs} pageSize={pageSize} />
            </div>
        </div>
    );
};

export default BlogPage;

