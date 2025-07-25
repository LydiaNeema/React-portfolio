export default function Projects() {
  const projects = [
    {
      title: 'Smart Goal Planner',
      description: 'A goal-tracking app with savings and progress analytics.',
      tech: ['React', 'JSON Server', 'Chart.js'],
      github: 'https://github.com/LydiaNeema/Smart-goal-planner',
      live: 'https://smart-goal-planner-chi.vercel.app/',
    },
    {
      title: 'ShopStack Inventory',
      description: 'A product manager dashboard with search, filter, and CRUD.',
      tech: ['React', 'Tailwind', 'Node.js'],
      github: 'https://github.com/LydiaNeema/ShopStack',
      live: 'https://shop-stack-tau.vercel.app/',
    },
  ];

  return (
    <section id="projects" className="bg-neutral-900 text-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-[#F9E8E2] mb-10 text-center">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-black p-6 rounded-lg shadow-lg hover:scale-105 transition">
              <h3 className="text-2xl font-semibold text-[#F9E8E2] mb-2">{project.title}</h3>
              <p className="text-gray-400 mb-3">{project.description}</p>
              <div className="flex flex-wrap gap-2 text-sm text-[#F9E8E2] mb-4">
                {project.tech.map((tech, i) => (
                  <span key={i} className="bg-[#7D3F30] px-3 py-1 rounded-full">{tech}</span>
                ))}
              </div>
              <div className="flex gap-4 text-sm">
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
                  GitHub
                </a>
                <a href={project.live} target="_blank" rel="noopener noreferrer" className="text-green-400 hover:underline">
                  Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
