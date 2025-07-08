import React from 'react';
import { useLocation } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const location = useLocation();
  const hideFooterRoutes = ['/login', '/banner']; // Routes to hide footer
  if (hideFooterRoutes.includes(location.pathname)) return null;

  const fullWidthRoutes = ['/dashboard'];
  const isFullWidth = fullWidthRoutes.includes(location.pathname);

  return (
    <footer className={`custom-footer ${isFullWidth ? 'full-width' : ''}`}>
      <p>
        © 2025 <strong>bni-india.in</strong> All rights reserved. Designed & Developed by <strong><a style={{ color: "white" }} href='https://www.digiworq.com/' target='_blank' rel="noreferrer">DIGIWORQ</a></strong>
      </p>
    </footer>
  );
};

export default Footer;
