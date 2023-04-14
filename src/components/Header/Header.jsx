import React from 'react';
import Navigation from '../Navigation/Navigation'

export default function Header({ currentPage, handlePageChange }) {
    // console.log("Header. " + currentPage + ". " + handlePageChange);
    return (
        <header>
            <h1><a href="#about" onClick={() => handlePageChange('About')}>
                MarkJNap
            </a></h1>
            <Navigation currentPage={currentPage} handlePageChange={handlePageChange}/>
        </header>
    )
}