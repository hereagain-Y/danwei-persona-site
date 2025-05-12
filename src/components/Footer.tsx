
const Footer = () => {
  return (
    <footer className="py-8">
      <div className="container max-w-2xl mx-auto px-4 md:px-6 text-center">
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} Shan Chen. Last updated May 2025.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
