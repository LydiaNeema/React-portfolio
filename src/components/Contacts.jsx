import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function Contacts() {
  return (
    <section id="contact" className="bg-black text-white py-20 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-[#F9E8E2] mb-6">Contact Me</h2>
        <p className="text-gray-400 text-lg mb-8">
          Let's connect! I'm always open to new opportunities, collaborations, or a friendly chat.
        </p>

        <div className="flex justify-center gap-10 text-3xl">
          <a
            href="mailto:lydianeema25@gmail.com"
            className="hover:text-[#F9E8E2] transition"
            aria-label="Email"
          >
            <FaEnvelope />
          </a>
          <a
            href="https://github.com/LydiaNeema"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#F9E8E2] transition"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/lydia-neema-1551a5167/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3B2kgIPCdWRCOn8xZwV95j0g%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#F9E8E2] transition"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </section>
  );
}
