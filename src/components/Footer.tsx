const Footer = () => {
  return (
    <footer className="flex w-full justify-center items-center gap-4 py-4 px-4 border-b bg-background text-sm">
      <p>&copy; {new Date().getFullYear()} - MarBenz</p>
      <p>||</p>
      <p className="flex items-center gap-2">
        powered by{" "}
        <img src="/VET_Token_Icon.webp" alt="vet-icon" className="w-4 h-4" />
        <img src="/VTHO_Token_Icon.webp" alt="vtho-icon" className="w-4 h-4" />
      </p>
    </footer>
  );
};

export default Footer;
