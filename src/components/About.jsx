export default function About() {
  return (
    <section id="about" className="bg-black text-white py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6 text-[#F9E8E2]">About Me</h2>
        <p className="text-lg mb-10 text-gray-300">
          I'm Lydia Neema, a passionate full-stack developer dedicated to building beautiful and functional web experiences.
          I enjoy solving problems and turning ideas into code using modern tools like React, Node.js, and more.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm text-gray-200">
          <span className="bg-[#7D3F30] px-3 py-1 rounded-full inline-block">HTML</span>
          <span className="bg-[#7D3F30] px-3 py-1 rounded-full inline-block">CSS</span>
          <span className="bg-[#7D3F30] px-3 py-1 rounded-full inline-block">JavaScript</span>
          <span className="bg-[#7D3F30] px-3 py-1 rounded-full inline-block">React</span>
          <span className="bg-[#7D3F30] px-3 py-1 rounded-full inline-block">Node.js</span>
          <span className="bg-[#7D3F30] px-3 py-1 rounded-full inline-block">MongoDB</span>
          <span className="bg-[#7D3F30] px-3 py-1 rounded-full inline-block">Git</span>
          <span className="bg-[#7D3F30] px-3 py-1 rounded-full inline-block">Vite</span>
          <span className="bg-[#7D3F30] px-3 py-1 rounded-full inline-block">Postman</span>
        </div>
      </div>
    </section>
  );
}
