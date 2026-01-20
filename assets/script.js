const projectsData = [
  {
    title: "scrib",
    github: "https://github.com/kimaita/scrib",
    live: null,
    thumbnail: "./assets/images/placeholder.jpg", // Replace with real path
    screenshots: ["./assets/images/placeholder.jpg"],
    description:
      "A tool designed to simplify note-taking and documentation for developers.",
    techStack: [
      { name: "Python", icon: "fab fa-python" },
      { name: "Django", icon: "fas fa-server" },
    ],
  },
  {
    title: "Stylazar",
    github: "https://github.com/kimaita/stylazar",
    live: null,
    thumbnail: "./assets/images/placeholder.jpg",
    screenshots: ["./assets/images/placeholder.jpg"],
    description:
      "Style transfer application using deep learning models to apply artistic styles to images.",
    techStack: [
      { name: "Python", icon: "fab fa-python" },
      { name: "TensorFlow", icon: "fas fa-brain" },
    ],
  },
  {
    title: "Word-a-Day",
    github: "https://github.com/kimaita/word-a-day",
    live: null,
    thumbnail: "./assets/images/placeholder.jpg",
    screenshots: ["./assets/images/placeholder.jpg"],
    description:
      "An automated service that sends a new vocabulary word via SMS/Email daily.",
    techStack: [
      { name: "Node.js", icon: "fab fa-node" },
      { name: "AWS Lambda", icon: "fab fa-aws" },
    ],
  },
];

function createProjectCard(project, index) {
  const techChips = project.techStack
    .map(
      (tech) => `
        <span class="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium bg-white/10 text-azure border border-white/20">
            <i class="${tech.icon}"></i> ${tech.name}
        </span>
    `
    )
    .join("");

  const liveLinkBtn = project.live
    ? `<a href="${project.live}" target="_blank" class="hover:text-white transition"><i class="fas fa-external-link-alt"></i></a>`
    : "";

  return `
    <article class="glass-card rounded-xl overflow-hidden flex flex-col md:flex-row fade-in-up" style="animation-delay: ${
      index * 100
    }ms">
        <!-- Thumbnail -->
        <div class="relative w-full md:w-2/5 h-48 md:h-auto group cursor-pointer overflow-hidden bg-black/50" 
             onclick="openLightbox('${project.thumbnail}')">
            <img src="${project.thumbnail}" alt="${
    project.title
  }" loading="lazy" 
                 class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-80 group-hover:opacity-100">
            <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40">
                <span class="text-white font-semibold"><i class="fas fa-expand mr-2"></i>View</span>
            </div>
        </div>

        <!-- Content -->
        <div class="p-6 flex flex-col w-full md:w-3/5">
            <div class="flex justify-between items-start mb-3">
                <h3 class="text-2xl font-bold font-comfortaa text-white">${
                  project.title
                }</h3>
                <div class="flex gap-4 text-xl text-gray-300">
                    <a href="${
                      project.github
                    }" target="_blank" class="hover:text-white transition"><i class="fab fa-github"></i></a>
                    ${liveLinkBtn}
                </div>
            </div>
            
            <p class="text-gray-200 text-sm leading-relaxed mb-6 flex-grow font-work">
                ${project.description}
            </p>

            <div class="flex flex-wrap gap-2 mt-auto">
                ${techChips}
            </div>
        </div>
    </article>
    `;
}

const container = document.getElementById("projects-container");
if (container) {
  container.innerHTML = projectsData
    .map((p, i) => createProjectCard(p, i))
    .join("");
}

const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");

window.openLightbox = (src) => {
  if (!lightbox) return;
  lightboxImg.src = src;
  lightbox.classList.remove("hidden");
  setTimeout(() => lightbox.classList.remove("opacity-0"), 10);
};

window.closeLightbox = () => {
  if (!lightbox) return;
  lightbox.classList.add("opacity-0");
  setTimeout(() => {
    lightbox.classList.add("hidden");
    lightboxImg.src = "";
  }, 300);
};
