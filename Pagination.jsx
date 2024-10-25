import React from 'react';

const Pagination = ({ onPageChange, currentPage, blogs, pageSize }) => {
    const totalPage = Math.ceil(blogs.length / pageSize);

    const renderPaginationLinks = () => {
        return Array.from({ length: totalPage }, (_, i) => i + 1).map(pageNumber => (
            <li className={pageNumber === currentPage ? "activePagination" : ""} key={pageNumber}>
                <a href="#" onClick={(e) => {
                    e.preventDefault(); // Prevent the default anchor behavior
                    onPageChange(pageNumber);
                }}>
                    {pageNumber}
                </a>
            </li>
        ));
    };

    const handlePreviousClick = () => {
        if (currentPage > 1) {
            onPageChange(currentPage - 1);
        }
    };

    const handleNextClick = () => {
        if (currentPage < totalPage) {
            onPageChange(currentPage + 1);
        }
    };

    return (
        <ul className='pagination my-8 flex-wrap gap-4 pagination-container'>
            <li>
                <button onClick={handlePreviousClick} disabled={currentPage === 1}>
                    Previous
                </button>
            </li>
            <div className='flex gap-1'>
                {renderPaginationLinks()}
            </div>
            <li>
                <button onClick={handleNextClick} disabled={currentPage === totalPage}>
                    Next
                </button>
            </li>
        </ul>
    );
};

export default Pagination;


