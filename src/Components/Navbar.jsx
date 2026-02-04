const Navbar = () => {
  const Item = ({ href, label }) => (
    <a href={href} className="text-sm opacity-80 hover:underline">
      {label}
    </a>
  );

  return (
    <nav className="flex gap-6">
      <Item href="#home" label="Home" />
      <Item href="#about" label="About" />
      <Item href="#projects" label="Projects" />
      <Item href="#contact" label="Contact" />
    </nav>
  );
};

export default Navbar;
