import React from 'react';
import Hero from '../components/Hero';
import Experience from '../components/Experience';
import About from '../components/About';
import Contact from '../components/Contact';
import Layout from '../components/Layout';

const Home = () => {
    return (
        <Layout>
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
                <Hero />
                <Experience />
                <About />
                <Contact />
            </div>
        </Layout>
    );
};

export default Home;
