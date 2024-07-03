import React from 'react';
import "./About.css";
import aboutImg from "../../images/about-img.jpg";

const About = () => {
  return (
    <section className='about'>
      <div className='container'>
        <div className='section-title'>
          <h2>About</h2>
        </div>

        <div className='about-content grid'>
          <div className='about-img'>
            <img src = {aboutImg} alt = "" />
          </div>
          <div className='about-text'>
            <h2 className='about-title fs-26 ls-1'>About Liber</h2>
            <p className='fs-17'>
            "Welcome to Liber, your ultimate destination for discovering and exploring a vast array of books. Whether you're passionate about classics, fascinated by contemporary literature, or looking to dive into niche genres, our platform offers a seamless search experience tailored to your interests. With an extensive library at your fingertips, finding your next favorite read is simple and enjoyable. Explore recommendations, delve into new releases, and uncover hidden gems that resonate with your unique tastes and preferences.</p>
            <p className='fs-17'>At Liber, we're dedicated to enriching your reading journey. Our user-friendly interface ensures that navigating through our collection is intuitive and efficient. From detailed book descriptions to curated lists and personalized recommendations, we provide the tools you need to discover books that captivate and inspire. Whether you're a seasoned bookworm or just beginning to explore the world of literature, Liber is your trusted companion in the pursuit of knowledge, imagination, and endless literary adventures."</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
