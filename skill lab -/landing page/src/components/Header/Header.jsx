import React from 'react';
import Navbar from "../Navbar/Navbar";
import SearchForm from "../SearchForm/SearchForm";
import "./Header.css";

const Header = () => {
  return (
    <div className='holder'>
        <header className='header'>
            <Navbar />
            <div className='header-content flex flex-c text-center text-white'>
                <h2 className='header-title text-capitalize'>find your book of choice.</h2><br />
                <p className='header-text fs-18 fw-3'>""Books are timeless portals to knowledge and imagination, offering profound insights, untold histories, and perspectives that shape our understanding of the world. They provide solace, inspiration, and endless wisdom, guiding us through life's complexities and sparking curiosity about human existence.""</p>
                <SearchForm />
            </div>
        </header>
    </div>
  )
}

export default Header