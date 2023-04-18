import React from 'react';
import Navigation from '../Navigation/Navigation'

export default function Header({ currentPage, handlePageChange }) {
    return (
        <header>
            <Navigation currentPage={currentPage} handlePageChange={handlePageChange}/>
        </header>
    )
}