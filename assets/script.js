const projectsData = [
  {
    title: "scrib",
    github: "https://github.com/kimaita/scrib",
    live: null,
    thumbnail: "./assets/images/scrib/scrib-detail.png",
    screenshots: ["./assets/images/placeholder.jpg"],
    description:
      "A web application for converting YouTube channels to audio podcasts.",
    techStack: [
      { name: "Python", icon: "fab fa-python" },
      { name: "NodeJS", icon: "fab fa-node" },
      { name: "ffmpeg", icon: "assets/icons/ffmpeg.svg" },
      { name: "Svelte", icon: "assets/icons/svelte.svg" },
      { name: "Cloudflare", icon: "fab fa-cloudflare" },
      { name: "Google Cloud", icon: "assets/icons/googlecloud.svg" },
    ],
  },
  {
    title: "Stylazar",
    github: "https://github.com/kimaita/stylazar",
    live: null,
    thumbnail: "./assets/images/placeholder.jpg",
    screenshots: ["./assets/images/placeholder.jpg"],
    description: "A multi-user blogging platform.",
    techStack: [
      { name: "Python", icon: "fab fa-python" },
      { name: "FastAPI", icon: "./assets/icons/fastapi.svg" },
      { name: "Postgres", icon: "./assets/icons/postgresql.svg" },
      { name: "React", icon: "assets/icons/react.svg" },
    ],
  },
  {
    title: "Harambee",
    github: "https://github.com/kimaita/harambee",
    live: null,
    thumbnail: "./assets/images/placeholder.jpg",
    screenshots: ["./assets/images/placeholder.jpg"],
    description: "Desktop Java application for managing donations.",
    techStack: [
      { name: "Java", icon: "fab fa-java" },
      { name: "Docker", icon: "fab fa-docker" },
      { name: "Postgres", icon: "./assets/icons/postgresql.svg" },
    ],
  },
  {
    title: "Monies",
    github: "https://github.com/kimaita/monies-v2",
    live: null,
    thumbnail: "./assets/images/placeholder.jpg",
    screenshots: ["./assets/images/placeholder.jpg"],
    description: "Android application for analysing M-PESA transactions.",
    techStack: [
      { name: "Kotlin", icon: "./assets/icons/kotlin.svg" },
      { name: "Jetpack Compose", icon: "./assets/icons/jetpackcompose.svg" },
    ],
  },
];

function createProjectCard(project, index) {
  const techChips = project.techStack
    .map((tech) =>
      `
        <span class="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs md:text-sm font-medium bg-white/10 text-azure border border-white/20">`
        .concat(
          tech.icon.startsWith("fab")
            ? `<i class="${tech.icon}"></i>`
            : `<img src="${tech.icon}" class="w-4 h-4 object-contain invert" />`,
        )
        .concat(`${tech.name}</span>`),
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

const interestsData = {
  manga: {
    title: "Manga & Anime",
    icon: "fas fa-book-open",
    colorClass: "text-purple-400",
    bgClass: "bg-purple-500/20",
    items: [
      "One Piece",
      "Vagabond",
      "Jujutsu Kaisen",
      "Vinland Saga",
      "Attack on Titan",
      "Great Teacher Onizuka",
      "Haikyuu",
    ],
  },
  music: {
    title: "EDM & Rap",
    icon: "fas fa-headphones-simple",
    colorClass: "text-green-400",
    bgClass: "bg-green-500/20",
    items: [
      "Kendrick Lamar",
      "J. Cole",
      "Tyler, The Creator",
      "Zedd",
      "Fred again..",
      "Martin Garrix",
      "Calvin Harris",
    ],
  },
  movies: {
    title: "Action & Thrillers",
    icon: "fas fa-film",
    colorClass: "text-red-400",
    bgClass: "bg-red-500/20",
    items: [
      "Avengers: Infinity War",
      "The Dark Knight",
      "Inception",
      "John Wick",
      "Spider-Man",
    ],
  },
  tv: {
    title: "Shows & Series",
    icon: "fas fa-masks-theater",
    colorClass: "text-yellow-400",
    bgClass: "bg-yellow-500/20",
    items: ["Fleabag", "South Park", "Rick and Morty"],
  },
};

const modal = document.getElementById("interest-modal");
const modalContent = document.getElementById("modal-content");

window.openInterest = (category) => {
  const data = interestsData[category];
  if (!data) return;

  document.getElementById("modal-title").innerText = data.title;

  const iconEl = document.getElementById("modal-icon");
  const iconContainer = document.getElementById("modal-icon-container");

  iconEl.className = `${data.icon} text-3xl ${data.colorClass}`;
  iconContainer.className = `w-16 h-16 rounded-full mx-auto flex items-center justify-center mb-4 ${data.bgClass}`;

  const listContainer = document.getElementById("modal-list");
  listContainer.innerHTML = data.items
    .map(
      (item) => `
        <span class="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-gray-200 text-sm">
            ${item}
        </span>
    `,
    )
    .join("");

  modal.classList.remove("hidden");
  setTimeout(() => {
    modal.classList.remove("opacity-0");
    modalContent.classList.remove("scale-95");
    modalContent.classList.add("scale-100");
  }, 10);
};

window.closeInterest = () => {
  modal.classList.add("opacity-0");
  modalContent.classList.remove("scale-100");
  modalContent.classList.add("scale-95");

  setTimeout(() => {
    modal.classList.add("hidden");
  }, 300);
};
