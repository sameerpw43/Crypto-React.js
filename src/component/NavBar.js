import React from 'react';

const NavBar = () => {
  return (
    <>
     <nav className="navbar navbar-expand-lg bg-dark" >
        <div className="container-fluid">
          <img
            src='https://cdn.vectorstock.com/i/preview-1x/23/77/digital-e-wallet-crypto-cryptocurrency-logo-vector-24042377.webp'
            alt='logo'
            className='rounded-circle'
            style={{ maxWidth: "50px", maxHeight: 50 }}
          />
          <button className="navbar-toggler bg-success" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav mx-auto">
              <a className="nav-link font-weight-bold active" aria-current="page" href="/">Trade</a>
              <a className="nav-link font-weight-bold" href="/">Earn</a>
              <a className="nav-link font-weight-bold" href="/">Support</a>
              <a className="nav-link font-weight-bold" href="/">About</a>
            </div>
          </div>
        </div>
      </nav>
      <style>{`
        .navbar-nav .nav-link {
          color: white;
        }
        
        .navbar-nav .nav-link:hover {
          color: green;
        }
        
        .navbar-nav .nav-link.active {
          color: green;
        }
      `}</style>
    </>
  );
};

export default NavBar;
