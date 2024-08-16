const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 mt-96 py-5 text-center border-t border-gray-200">
      <div className="max-w-screen-lg mx-auto px-5">
        <p className="text-sm m-0">
          &copy; {new Date().getFullYear()} Your Company. All rights reserved.
        </p>
        <nav className="mt-2 m-auto flex flex-col justify-center gap-10 sm:flex-row">
          <a
            href="/privacy-policy"
            className="text-blue-500 text-sm hover:underline"
          >
            Privacy Policy
          </a>
          <a
            href="/terms-of-service"
            className="text-blue-500 text-sm hover:underline"
          >
            Terms of Service
          </a>
          <a href="/contact" className="text-blue-500 text-sm hover:underline">
            Contact Us
          </a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
