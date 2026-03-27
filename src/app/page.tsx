
"use client";

import { useState } from "react";

export default function Home() {
  const [selectedPreview, setSelectedPreview] = useState<{ url: string; type: "image" | "site" } | null>(null);

  const projects = [
    {
      name: "resumeai",
      permissions: "-rwxr-xr-x",
      size: "8.5k",
      date: "Nov 12",
      description: "AI-powered resume optimizer built with Spring Boot that tailors CVs using LLMs.",
      imageUrl: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=800&auto=format&fit=crop",
      projectUrl: "https://github.com/typedefuser/resumeai",
      liveUrl: "https://resumeai-weld.vercel.app/"
    },
    {
      name: "ecommerce-mernapp",
      permissions: "-rw-r--r--",
      size: "45k",
      date: "Oct 05",
      description: "Full-stack e-commerce platform with search, cart, and payment integration using the MERN stack.",
      imageUrl: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=800&auto=format&fit=crop",
      projectUrl: "https://github.com/typedefuser/ecommerce-mernapp",
      liveUrl: "https://mern-shop-demo.vercel.app"
    },
    {
      name: "cmds",
      permissions: "-rwxr--r--",
      size: "2.1k",
      date: "Jan 20",
      description: "A collection of custom Go-based CLI tools for streamlining developer workflows.",
      imageUrl: "https://images.unsplash.com/photo-1629654297299-c8506221ca97?q=80&w=800&auto=format&fit=crop",
      projectUrl: "https://github.com/typedefuser/cmds",
      liveUrl: null
    },
    {
      name: "solarsystem",
      permissions: "-rwxr-xr-x",
      size: "12k",
      date: "Mar 10",
      description: "Interactive 3D solar system simulation featuring planetary orbits and detailed celestial data.",
      imageUrl: "https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?q=80&w=800&auto=format&fit=crop",
      projectUrl: "https://github.com/typedefuser/solarsystem",
      liveUrl: "https://typedefuser.github.io/solarsystem/"
    }
  ];

  return (
    <main className="max-w-3xl mx-auto items-center justify-between p-4 font-mono min-h-screen">
      <header className="mb-8">
        <h1 className="text-2xl text-green-600 font-bold">typedefuser@portfolio</h1>
        <div className="flex items-center">
          <p className="text-blue-400">~$ whoami</p>
        </div>
        <p className="mt-2 leading-relaxed">
          Hello, I am Nikhilesh Majhi. I am a B.Tech graduate in CSE.
          I am a passionate software developer specializing in **Spring Boot** and full-stack development.
          <span className="cursor-blink"></span>
        </p>
      </header>

      <section className="mb-8 border-b border-green-900 pb-6">
        <p className="text-blue-400 mb-2">~$ cat contact.txt</p>
        <div className="ml-4 text-sm sm:text-base">
          <p>Email: <a href="mailto:majhinikhilesh23@gmail.com" className="text-green-600 hover:underline">majhinikhilesh23@gmail.com</a></p>
          <p className="mt-2 flex items-center">
            Resume:
            <a
              href="https://drive.google.com/file/d/1fXEj58kHXso7luyzMmDFA6WXLTBEFPEr/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 text-blue-400 hover:text-blue-300 font-bold border border-blue-900/50 px-2 py-0.5 rounded text-xs"
            >
              [DOWNLOAD_CV.PDF]
            </a>
          </p>

          <div className="flex flex-wrap gap-6 mt-6">
            <a href="https://www.linkedin.com/in/nikhilesh-majhi-280882233/" target="_blank" className="flex items-center group">
              <i className="fab fa-linkedin fa-lg text-blue-500 group-hover:text-blue-400 transition-colors" />
              <span className="ml-2 group-hover:underline text-xs sm:text-sm">LinkedIn</span>
            </a>
            <a href="https://github.com/typedefuser" target="_blank" className="flex items-center group">
              <i className="fab fa-github fa-lg text-slate-400 group-hover:text-slate-200 transition-colors" />
              <span className="ml-2 group-hover:underline text-xs sm:text-sm">GitHub</span>
            </a>
            <a href="https://leetcode.com/u/nikhileshmajhi/" target="_blank" className="flex items-center group">
              <img width="20" height="20" src="https://img.icons8.com/external-tal-revivo-color-tal-revivo/24/external-level-up-your-coding-skills-and-quickly-land-a-job-logo-color-tal-revivo.png" alt="LeetCode" className="grayscale group-hover:grayscale-0 transition-all" />
              <span className="ml-2 group-hover:underline text-xs sm:text-sm">LeetCode</span>
            </a>
            <a href="https://codeforces.com/profile/watidoink" target="_blank" className="flex items-center group">
              <img width="20" height="20" src="https://img.icons8.com/external-tal-revivo-filled-tal-revivo/24/external-codeforces-programming-competitions-and-contests-programming-community-logo-filled-tal-revivo.png" alt="Codeforces" className="grayscale group-hover:grayscale-0 transition-all" />
              <span className="ml-2 group-hover:underline text-xs sm:text-sm">Codeforces</span>
            </a>
          </div>
        </div>
      </section>

      <section className="mb-8 bg-green-950/20 p-4 border border-green-900/30 rounded">
        <p className="text-blue-400 mb-4">~$ ls -F skills/</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-4 gap-x-8 text-xs sm:text-sm">
          <div>
            <p className="text-slate-500 mb-1">Frontend/</p>
            <ul className="text-green-500 space-y-1">
              <li>React.js*</li>
              <li>TailwindCSS*</li>
              <li>TypeScript*</li>
            </ul>
          </div>
          <div>
            <p className="text-slate-500 mb-1">Backend/</p>
            <ul className="text-green-500 space-y-1">
              <li>Java / Spring Boot*</li>
              <li>Node.js / Express*</li>
              <li>MongoDB*</li>
              <li>PostgreSQL*</li>
            </ul>
          </div>
          <div>
            <p className="text-slate-500 mb-1">Tools/</p>
            <ul className="text-green-500 space-y-1">
              <li>Git/</li>
              <li>Docker/</li>
              <li>Linux/</li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <p className="text-blue-400 mb-2">~$ ls -l projects/</p>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs sm:text-sm whitespace-nowrap">
            <thead>
              <tr className="text-slate-500 border-b border-slate-800">
                <th className="pb-2 font-normal">Date</th>
                <th className="pb-2 font-normal">Name & Description</th>
                <th className="pb-2 font-normal text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="mt-2">
              {projects.map((project, index) => (
                <tr key={index} className="group hover:bg-green-900/10 transition-colors border-b border-slate-900/50 last:border-0">
                  <td className="py-4 text-slate-500">{project.date}</td>
                  <td className="py-4 min-w-[200px]">
                    <span className="text-green-500 font-bold block">{project.name}</span>
                    <p className="text-xs text-slate-400 group-hover:text-slate-300 transition-colors mt-1 whitespace-normal max-w-xs">
                      {project.description}
                    </p>
                  </td>
                  <td className="py-4 text-right">
                    <button
                      onClick={() => setSelectedPreview({ url: project.liveUrl || project.imageUrl, type: project.liveUrl ? "site" : "image" })}
                      className="text-blue-400 hover:text-blue-300 mr-4 font-bold"
                    >
                      [SITE]
                    </button>
                    <a
                      href={project.projectUrl}
                      target="_blank"
                      className="text-green-600 hover:text-green-400 font-bold"
                    >
                      [CODE]
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>


      {selectedPreview && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 terminal-modal-overlay" onClick={() => setSelectedPreview(null)}>
          <div className="bg-black terminal-modal-border max-w-5xl w-full h-[80vh] flex flex-col overflow-hidden" onClick={e => e.stopPropagation()}>
            <div className="bg-green-900/20 px-4 py-2 border-b border-green-800 flex justify-between items-center">
              <span className="text-green-500 text-xs font-bold">
                {selectedPreview.type === "site" ? "Live Preview" : "Image Viewer"} - {selectedPreview.url.split('/').pop()?.split('?')[0] || 'view'}
              </span>
              <div className="flex items-center gap-4">
                {selectedPreview.type === "site" && (
                  <a href={selectedPreview.url} target="_blank" className="text-blue-400 hover:text-blue-300 text-xs font-bold underline">
                    Open in new tab
                  </a>
                )}
                <button
                  onClick={() => setSelectedPreview(null)}
                  className="text-red-500 hover:text-red-400 font-bold text-lg leading-none"
                >
                  ×
                </button>
              </div>
            </div>
            <div className="flex-1 bg-slate-900 flex items-center justify-center relative overflow-hidden">
              {selectedPreview.type === "site" ? (
                <iframe
                  src={selectedPreview.url}
                  className="w-full h-full border-0 bg-white"
                  title="Live Project Preview"
                />
              ) : (
                <img
                  src={selectedPreview.url}
                  alt="Project Preview"
                  className="max-h-full max-w-full object-contain border border-green-900"
                />
              )}
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
