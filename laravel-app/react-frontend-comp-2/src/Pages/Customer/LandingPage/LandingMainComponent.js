import React, { useRef } from 'react';
import Landing2ndComp from './Landing2ndComp';
import JoinUs from './JoinUs';
import Navbar from '../HeaderFooter/Navbar';
import Footer from '../HeaderFooter/Footer';

function LandingMainComponent() {
  const joinUsRef = useRef(null);

  const scrollToJoinUs = () => {
    joinUsRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Navbar onJoinUsClick={scrollToJoinUs}/>
      <div className='relative h-screen w-full overflow-hidden'>
        {/* Background gradient instead of video for reliability */}
        <div className='absolute inset-0 bg-gradient-to-br from-amber-900 via-orange-800 to-brown-900 opacity-90'></div>
        
        <div className='content h-screen relative z-10'>
          <div className="h-[100vh] flex-col">
            <div className="flex flex-col gap-4 items-center justify-center h-full">
              <h1 className="text-4xl text-white font-serif mb-4">Discover Handcrafted Excellence</h1>
              <div className='flex items-center'>
                <input 
                  className='bg-[#fbfafa41] outline-none pl-4 text-white rounded-xl w-[640px] h-[50px] placeholder-white'
                  type="text"
                  placeholder="Search for pottery, textiles, woodwork..."
                />
                <button className='bg-[#e77e46] text-white px-6 py-3 rounded-xl -ml-[120px] hover:bg-[#d16835] transition-colors'>
                  <i className='fa fa-search mr-2'></i>
                  Search
                </button>
              </div>
              <p className='text-white text-lg mt-2'>Explore our collection of authentic handmade treasures</p>
            </div>
          </div>

          {/* Branding Section */}
          <div className='absolute bottom-20 left-0 right-0'>
            <div className='flex flex-col items-center text-center'>
              <div className='text-white text-4xl font-serif mb-4'>🎨</div>
              <p className='text-white text-2xl font-serif'>
                Crafted with passion, made for you
              </p>
              <div className='flex gap-6 mt-8'>
                <div className='text-white text-center'>
                  <p className='text-3xl font-bold'>1000+</p>
                  <p className='text-sm'>Artisans</p>
                </div>
                <div className='text-white text-center'>
                  <p className='text-3xl font-bold'>5000+</p>
                  <p className='text-sm'>Products</p>
                </div>
                <div className='text-white text-center'>
                  <p className='text-3xl font-bold'>50+</p>
                  <p className='text-sm'>Categories</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Landing2ndComp/>
      <div ref={joinUsRef}><JoinUs /></div>
      <Footer/>
    </>
  );
}

export default LandingMainComponent;