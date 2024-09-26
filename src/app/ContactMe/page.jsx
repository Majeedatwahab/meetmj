import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaEnvelope } from 'react-icons/fa';

export default function ContactMe() {
  return (
    <section id="contact" className="py-12 px-6 bg-gray-800 text-white text-center">
      <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
      <p className="mb-6">Feel free to reach out through any of the platforms below!</p>

      <div className="flex justify-center space-x-6 mb-6">
        
        <a href="https://twitter.com/majeedahwahab" target="_blank" rel="noopener noreferrer">
          <FaTwitter className="text-3xl hover:text-yellow-500" />
        </a>
        
        <a href="https://www.instagram.com/majeedatwahab" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="text-3xl hover:text-yellow-500" />
        </a>
      </div>

      <div>
        <p className="mb-4">Or email me at:</p>
        <a href="mailto:your-email@example.com" className="text-yellow-500 underline">
          mujeedatabdulwahab@gmail.com
        </a>
      </div>
    </section>
  );
}
