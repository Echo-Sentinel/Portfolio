import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../../features/auth/authSlice'; // Logout işlemi için redux
import { useState } from 'react';

const Navbar = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dispatch = useDispatch();

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleLogout = () => {
    dispatch(logout());
    setIsDropdownOpen(false);
  };

  return (
    <nav style={{ padding: '10px', backgroundColor: '#f4f4f4', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <div>
        <Link to="/" style={{ textDecoration: 'none', fontWeight: 'bold', marginRight: '15px' }}>
          Home
        </Link>
        <Link to="/wishlist" style={{ textDecoration: 'none', fontWeight: 'bold', marginRight: '15px' }}>
          Wishlist
        </Link>
        <Link to="/basket" style={{ textDecoration: 'none', fontWeight: 'bold', marginRight: '15px' }}>
          Basket
        </Link>
      </div>

      <div style={{ position: 'relative' }}>
        {isAuthenticated ? (
          <div>
            <button onClick={toggleDropdown} style={{ padding: '5px 10px', cursor: 'pointer' }}>
              Profile
            </button>
            {isDropdownOpen && (
              <div
                style={{
                  position: 'absolute',
                  top: '30px',
                  right: '0',
                  backgroundColor: '#fff',
                  boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
                  padding: '10px',
                  borderRadius: '5px',
                  zIndex: '1000',
                }}
              >
                <button onClick={handleLogout} style={{ padding: '5px 10px', marginBottom: '10px', width: '100%' }}>
                  Logout
                </button>
              </div>
            )}
          </div>
        ) : (
          <div>
            <Link to="/auth" style={{ textDecoration: 'none' }}>
              <button style={{ padding: '5px 10px', marginRight: '10px' }}>Login</button>
            </Link>
            <Link to="/auth" style={{ textDecoration: 'none' }}>
              <button style={{ padding: '5px 10px' }}>Register</button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
