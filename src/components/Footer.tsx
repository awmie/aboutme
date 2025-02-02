// Removed unused React import for JSX Transform

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-800 p-4 mt-8">
      <div className="container mx-auto flex flex-col items-center">
        <div className="flex gap-4 mb-2">
          <a href="mailto:amritavakole@gmail.com" className="text-gray-600 hover:text-orange-500">Email</a>
          <a href="https://www.youtube.com/@editsyoriichi" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-orange-500">YouTube</a>
          <a href="https://www.instagram.com/oyi.zoro" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-orange-500">Instagram</a>
          <a href="https://www.linkedin.com/in/amritava-kole-521bb0229/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-orange-500">LinkedIn</a>
          <a href="https://github.com/awmie" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-orange-500">GitHub</a>
        </div>
        <p className="text-xs text-gray-500">
          © {new Date().getFullYear()} Your Company. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
