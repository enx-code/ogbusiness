const Navbar = () => {
  return (
    <nav className="site-nav" aria-label="Main navigation">
      <a className="brand-mark" href="#top" aria-label="OG home">
        <img src={`${import.meta.env.BASE_URL}og-icon.svg`} alt="" />
      </a>

      <ul className="nav-links">
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#packages">Packages</a>
        </li>
        <li>
          <a href="#booking">Booking</a>
        </li>
        <li>
          <a className="nav-cta" href="tel:+447590261585">
            Call
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
