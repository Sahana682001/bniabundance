import React, { useRef, useContext } from 'react';
import { FiLock } from 'react-icons/fi';
import logo from '../../asset/logo.png';
import adminlogo from '../../asset/adminlogo.png';
import './Header.css';
import { useNavigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

const Header = () => {
  const { admin, logout, isAuthenticated } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const profileModalRef = useRef(null);

  const fullWidthRoutes = ['/login', '/dashboard'];
  const isFullWidth = fullWidthRoutes.includes(location.pathname);

  const handleLogout = () => {
    profileModalRef.current?.close();
    logout();
    navigate('/login');
  };

  if (location.pathname === '/dashboard') {
    return (
      <header className={`header dashboard-header ${isFullWidth ? 'full-width' : ''}`}>
        <img src={adminlogo} alt="BNI Logo" className="logo" />
        <div className="admin-info">
          {admin && (
            <>
              <img
                src={admin.profileImage || '/default-avatar.png'}
                alt="Profile"
                className="admin-avatar"
                onClick={() => profileModalRef.current?.showModal()}
              />
              <span className="admin-name" onClick={() => profileModalRef.current?.showModal()}>
                {admin.firstName} {admin.lastName} <br />Admin
              </span>
            </>
          )}
        </div>

        {/* Profile Modal */}
        <dialog ref={profileModalRef} className="modal">
          <div className="modal-box">
            <h3 className="font-bold text-lg mb-4">Admin Profile</h3>
            <img src={admin?.profileImage || '/default-avatar.png'} alt="Admin Profile" />
            <p><strong>Name:</strong> {admin?.firstName} {admin?.lastName}</p>
            <p><strong>Email:</strong> {admin?.email}</p>
            <p><strong>Phone:</strong> {admin?.phone}</p>
            <p><strong>Company:</strong> {admin?.companyName}</p>
            <p><strong>Category:</strong> {admin?.businessCategory}</p>
            <p><strong>Date of Birth:</strong> {admin?.dob?.slice(0, 10)}</p>
            <p><strong>Website:</strong> <a href={admin?.website} target="_blank" rel="noreferrer">{admin?.website}</a></p>
            <p><strong>Description:</strong> {admin?.description}</p>

            <form method="dialog" className="mt-4">
              <button className="btn" onClick={handleLogout}>Logout</button>
            </form>
            <form method="dialog" className="mt-4">
              <button className="btn">Close</button>
            </form>
          </div>
        </dialog>
      </header>
    );
  }

  return (
    <header className="header container">
      <div className="left">
        <img src={logo} alt="BNI Logo" className="logo" />
      </div>

      <div className="right">
        {isAuthenticated && admin ? (
          <div className="admin-info">
            <span className="admin-name">
              {admin.firstName} {admin.lastName}
            </span>
            <img
              src={admin.profileImage || '/default-avatar.png'}
              alt="Profile"
              className="admin-avatar"
              onClick={() => profileModalRef.current?.showModal()}
            />
          </div>
        ) : (
          <>
            <button className="login-btn grey-color" onClick={() => navigate('/login')}>
              <FiLock className="icon" />
              Login
            </button>
            <button className="signup-btn">
              Sign up for Members
            </button>
          </>
        )}
      </div>

      {/* Profile Modal */}
      <dialog ref={profileModalRef} className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg mb-4">Admin Profile</h3>
          <p><strong>Name:</strong> {admin?.firstName} {admin?.lastName}</p>
          <p><strong>Email:</strong> {admin?.email}</p>
          <p><strong>Phone:</strong> {admin?.phone}</p>
          <p><strong>Company:</strong> {admin?.companyName}</p>
          <p><strong>Category:</strong> {admin?.businessCategory}</p>
          <p><strong>Date of Birth:</strong> {admin?.dob?.slice(0, 10)}</p>
          <p><strong>Website:</strong> <a href={admin?.website} target="_blank" rel="noreferrer">{admin?.website}</a></p>
          <p><strong>Description:</strong> {admin?.description}</p>

          <form method="dialog" className="modal-backdrop mt-4">
            <button className="btn">Close</button>
          </form>
        </div>
      </dialog>
    </header>
  );
};

export default Header;
