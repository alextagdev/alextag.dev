import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-800 py-6 mt-12">
      <div className="container mx-auto px-4">
        <div className="text-center text-white">
          <h2 className="text-xl font-semibold mb-2">Connect with me</h2>
          <ul className="flex justify-center space-x-4 mb-4">
            <li>
              <a href="#" className="text-gray-300 hover:text-white" target="_blank">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-300 hover:text-white" target="_blank">
                <i className="fab fa-github"></i>
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-300 hover:text-white" target="_blank">
                <i className="fab fa-twitter"></i>
              </a>
            </li>
          </ul>
          <p className="text-gray-300">&copy; 2023 AlexTag.dev All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
