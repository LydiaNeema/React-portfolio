export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen bg-[#7D3F30] text-[#F9E8E2] flex flex-col justify-center items-center text-center px-6 dark bg-black text-white"
    >
      <h2 className="text-5xl font-bold mb-4">Your Vision In Code</h2>
      <p className="max-w-xl text-lg">
        Explore my portfolio to see my work as a full-stack developer. I’m committed to building high-quality, user-friendly web applications.
      </p>
      <a
        href="#contact"
        className="mt-8 bg-[#F9E8E2] text-[#7D3F30] font-semibold px-6 py-3 rounded hover:bg-[#f4d7cc] transition"
      >
        Get in Touch
      </a>
    </section>
  );
}
