import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setLogin, setSignup } from '../../../Services/Redux-Service/counterSlice';
import Login from '../LoginSignupPage/Login';
import Signup from '../LoginSignupPage/Signup';

function Navbar(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem("userId");
    navigate('/');
  };

  const handleWishlist = () => {
    console.log('Wishlist clicked');
  };

  return (
    <>
      <Login setLogin={setLogin} />
      <Signup setSignup={setSignup} />
      
      <div className='fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-amber-900/90 to-amber-900/70 backdrop-blur-sm'>
        <div className='flex items-center justify-between px-8 py-4 max-w-7xl mx-auto'>
          <div className='flex items-center'>
            <Link to="/" className="text-2xl font-serif text-amber-50 hover:text-amber-200 transition-colors">
              ArtisanCraft
            </Link>
          </div>

          <div className='flex items-center space-x-8'>
            <nav>
              <ul className='flex items-center space-x-6 text-amber-50'>
                <li>
                  <Link to="/" className="hover:text-amber-200 transition-colors">Home</Link>
                </li>
                <li>
                  <Link to="/categorie" className="hover:text-amber-200 transition-colors">Categories</Link>
                </li>
                <li>
                  <Link to="/" onClick={props.onJoinUsClick} className="hover:text-amber-200 transition-colors">
                    Sell Your Crafts
                  </Link>
                </li>

                {localStorage.getItem("userId") ? (
                  <li className="relative">
                    <button
                      onClick={toggleDropdown}
                      className="hover:text-amber-200 transition-colors"
                    >
                      <i className="fa-solid fa-user"></i>
                    </button>

                    {isDropdownOpen && (
                      <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                        <div className="py-1" role="menu">
                          <button
                            onClick={handleWishlist}
                            className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-amber-50"
                            role="menuitem"
                          >
                            My Favorites
                          </button>
                          <button
                            onClick={handleLogout}
                            className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-amber-50"
                            role="menuitem"
                          >
                            Sign Out
                          </button>
                        </div>
                      </div>
                    )}
                  </li>
                ) : (
                  <>
                    <li>
                      <button
                        onClick={() => dispatch(setSignup(true))}
                        className="px-4 py-2 rounded-full text-amber-800 bg-amber-50 hover:bg-amber-100 transition-colors font-medium"
                      >
                        Sign Up
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => dispatch(setLogin(true))}
                        className="px-4 py-2 rounded-full bg-amber-700 text-amber-50 hover:bg-amber-800 transition-colors font-medium"
                      >
                        Sign In
                      </button>
                    </li>
                  </>
                )}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar