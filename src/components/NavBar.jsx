export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-[#F9E8E2] shadow-md z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
        <h1 className="text-[#7D3F30] font-bold text-xl">Lydia Neema</h1>
        <ul className="flex gap-6 text-[#7D3F30] font-medium">
          <li><a href="#hero" className="hover:underline">Home</a></li>
          <li><a href="#about" className="hover:underline">About</a></li>
          <li><a href="#projects" className="hover:underline">Projects</a></li>
          <li><a href="#contact" className="hover:underline">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}
