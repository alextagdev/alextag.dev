import React from 'react';
import './App.css';

const aboutText = `Hello! I am <strong>Alexandru G Tugui</strong>.
I am a Web Design Freelancer from <strong>Craiova</strong>, specialized in creating websites. Young and ambitious, I seek to learn and develop every day with each project I complete. I have experience in HTML, CSS, JavaScript, and TailwindCSS, WordPress and I am always eager to learn and apply new technologies. I thrive in collaborative environments and am passionate about creating user-friendly and accessible web applications.`;
  
  const experienceData = [
  {
    title: 'Job Title 1',
    company: 'Company Name 1',
    duration: 'Start Date - End Date',
  },
  {
    title: 'Job Title 2',
    company: 'Company Name 2',
    duration: 'Start Date - End Date',
  },
];


const educationData = [
  {
    degree: 'Master - Information Systems for e-Business',
    institution: 'Faculty of Computer Science Craiova',
    duration: '2022 - 2024',

  },
  {
    degree: 'Info - License',
    institution: 'Faculty of Sciences - University of Craiova',
    duration: '2019 - 2022',
  },
]
const portofolioData = [
  {
    name: 'Project Name',
    description: 'Description',
    duration: 'Start Date - End Date',
    link: 'link',
  },
  {
    name: 'Project Name',
    description: 'Description',
    duration: 'Start Date - End Date',
    link: 'link',
  },
];



const skillsData = [
  { name: 'HTML', icon: 'fab fa-html5', progress: 100 },
  { name: 'CSS', icon: 'fab fa-css3-alt', progress: 100 },
  { name: 'JavaScript', icon: 'fab fa-js', progress: 80 },
  { name: 'TailwindCSS', icon: 'fas fa-wind', progress: 70 },
  { name: 'WordPress', icon: 'fab fa-wordpress', progress: 100 },
];

function createAboutContent(text) {
  return ` <h2 id="about-heading" class="text-2xl font-semibold mt-8 mb-4">About Me</h2>
    <p class="text-gray-700">${text}</p>
  `;
}

function createExperienceCard(data) {
  const card = `
    <div class="bg-white p-4 mb-4 rounded shadow">
      <h3 class="text-xl font-semibold mb-2">${data.title}</h3>
      <p class="text-gray-700">${data.company}</p>
      <p class="text-gray-700">${data.duration}</p>
    </div>
  `;
  return card;
}


function createPortofolioCard(data) {
  const card = `
    <div class="bg-white p-4 mb-4 rounded shadow">
      <h3 class="text-xl font-semibold mb-2">${data.name}</h3>
      <p class="text-gray-700">${data.description}</p>
      <p class="text-gray-700">${data.duration}</p>
      <p class="text-gray-700">${data.link}</p>
    </div>
  `;
  return card;
}


function createEducationCard(data) {
  const card = `
    <div class="bg-white p-4 mb-4 rounded shadow">
      <h3 class="text-xl font-semibold mb-2">${data.degree}</h3>
      <p class="text-gray-700">${data.institution}</p>
      <p class="text-gray-700">${data.duration}</p>
    </div>
  `;
  return card;
}

function createSkillChip(skill) {
  const progressBarWidth = skill.progress + '%';
  return `
    <div class="bg-white p-4 mb-4 p-4 rounded shadow">
      <div class="skill-chip flex items-center justify-between">
        <div>
          <i class="${skill.icon}"></i>
          <span>${skill.name}</span>
        </div>
        <div class="w-full h-2 bg-gray-200 rounded-full mx-4 overflow-hidden">
          <div class="h-full bg-green-500 rounded-full progress-bar" style="--progress-width: ${progressBarWidth};"></div>
        </div>
      </div>
    </div>
  `;
}





document.addEventListener("DOMContentLoaded", () => {
  const experienceSection = document.getElementById("experience");
  const educationSection = document.getElementById("education");
  const skillsSection = document.getElementById("skills");
  const portofolioSection = document.getElementById("portofolio");
  const aboutSection = document.getElementById("about");

  // Populate the About Me section on page load
  aboutSection.innerHTML = createAboutContent(aboutText);

toggleSection("experience-toggle", "experience", "Experience", (sectionName) => {
  experienceSection.innerHTML = "";
  experienceSection.innerHTML += `<h2 class="text-2xl font-semibold mt-8 mb-4">${sectionName}</h2>`;
  experienceData.forEach((exp) => {
    experienceSection.innerHTML += createExperienceCard(exp);
  });
});

toggleSection("education-toggle", "education", "Education", (sectionName) => {
  educationSection.innerHTML = "";
  educationSection.innerHTML += `<h2 class="text-2xl font-semibold mt-8 mb-4">${sectionName}</h2>`;
  educationData.forEach((edu) => {
    educationSection.innerHTML += createEducationCard(edu);
  });
});

 toggleSection("portofolio-toggle", "portofolio", "Portofolio", (sectionName) => {
  portofolioSection.innerHTML = "";
  portofolioSection.innerHTML += `<h2 class="text-2xl font-semibold mt-8 mb-4">${sectionName}</h2>`;
  portofolioData.forEach((por) => {
    portofolioSection.innerHTML += createPortofolioCard(por);
  });
});

toggleSection("skills-toggle", "skills", "Skills", (sectionName) => {
  skillsSection.innerHTML = "";
  skillsSection.innerHTML += `<h2 class="text-2xl font-semibold mt-8 mb-4">${sectionName}</h2>`;
  skillsData.forEach((skill) => {
    skillsSection.innerHTML += createSkillChip(skill);
  });
});


const imageElement = document.querySelector(".rounded-full");
  imageElement.addEventListener("click", showAboutSection);
});


function showAboutSection() {
  const aboutSection = document.getElementById("about");
  const aboutHeading = document.getElementById("about-heading");
  const allSections = [
    "experience",
    "education",
    "skills",
    "portofolio",
  ];

  allSections.forEach((secId) => {
    const section = document.getElementById(secId);
    section.classList.add("hidden");
  });

  aboutSection.classList.remove("hidden");
  aboutHeading.classList.remove("hidden");
}


function toggleSection(buttonId, sectionId, sectionName, populateFn) {
  const button = document.getElementById(buttonId);
  const section = document.getElementById(sectionId);
  const aboutSection = document.getElementById("about");
  const aboutHeading = document.getElementById("about-heading");

  button.addEventListener("click", () => {
    const allSections = [
      "experience",
      "education",
      "skills",
      "portofolio",
    ];

    allSections.forEach((secId) => {
      if (secId !== sectionId) {
        const otherSection = document.getElementById(secId);
        otherSection.classList.add("hidden");
      }
    });

    if (section.classList.contains("hidden")) {
      populateFn(sectionName);
      aboutSection.classList.add("hidden");
      aboutHeading.classList.add("hidden");
      section.classList.toggle("hidden");
    }
  });
}




// Update the class name to use 'block' instead of 'hidden'

const buttons = document.querySelectorAll(".btn-desktop");

  // Add a click event listener to each button
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      // Remove the 'bg-blue-400' class and add the 'bg-blue-500' class for all buttons
      buttons.forEach((btn) => {
        btn.classList.remove("bg-blue-500");
        btn.classList.add("bg-blue-400");
      });

      // Remove the 'bg-blue-500' class and add the 'bg-blue-400' class to the clicked button
      button.classList.remove("bg-blue-400");
      button.classList.add("bg-blue-500");
    });
  });

const avatarurl = 'https://alextag.ro/wp-content/uploads/2021/02/60251212_452404538859017_1129506120298135552_o-removebg-preview.png.webp';

function App() {
  return (
    <div class="container newcointainersize mx-auto max-w-screen-md px-4 mx-1.50 py-2 flex justify-center md:justify-between">
    <div class="bg-gray-100 min-h-screen">
      <header class="">
    <div class="container newcointainersize mx-auto px-4 mx-1.50 py-2 flex justify-center md:justify-between">
      <button
        id="experience-toggle"
        class="bg-blue-400  text-white font-bold py-1 px-3 rounded shadow-md mx-1 text-sm btn-desktop"
      >
        Experience 
      </button>
      <button
        id="education-toggle"
        class="bg-blue-400  text-white font-bold py-1 px-3 rounded shadow-md mx-1 text-sm btn-desktop"
      >
        Education
      </button>
      <button
        id="skills-toggle"
        class="bg-blue-400  text-white font-bold py-1 px-3 rounded shadow-md mx-1 text-sm btn-desktop"
      >
        Skills
      </button>
      <button
        id="portofolio-toggle"
        class="bg-blue-400  text-white font-bold py-1 px-3 rounded shadow-md mx-1 text-sm btn-desktop"
      >
        Portofolio
      </button>
      <span class="hidden md:block md:text-lg md:font-semibold md:text-gray-900 py-2 md:mr-6 texspace-left whitespace-nowrap ml-auto">Ai nevoie de ajutor ?</span>
   <button class="hidden md:block contact-me-btn bg-green-500 text-white font-semibold text-lg py-2 px-6 rounded-lg hover:bg-green-600 transform hover:-translate-y-1 transition-all duration-200 ml-auto">
  Contact
</button>

    </div>
  </header>

  <div class="bg-blue-100 mx-5 p-4 md:p-8 px-4 mb-5 mt-5 flex rounded shadow-md">
  <div>
    <h1 class="text-4xl font-bold mb-4">Alex Tag</h1>
    <p class="text-gray-700">Web Developer</p>
    <p class="text-gray-700">Email: contact@alextag.dev</p>
    <p class="text-gray-700">Phone: +40 728390955</p>
  </div>
  
 <div class="flex flex-col items-center">
  <img src={avatarurl} alt="Avatar Pic" class="w-32 h-32 mx-auto mb-4 rounded-full shadow-lg border-4 border-white" />
  <button class="block md:hidden contact-me-btn bg-green-500 text-white font-semibold text-lg py-2 px-6 rounded-lg hover:bg-green-600 transform hover:-translate-y-1 transition-all duration-200">
    Contact
  </button>
</div>
  
</div>
<div id="about" class="bg-blue-200 text-blue-900 mx-5 p-4 md:p-8 rounded shadow-md"></div>
  <div id="experience" class="hidden bg-blue-200 mx-5 text-blue-900  p-4 md:p-8 rounded shadow-md"></div>
  <div id="education" class="hidden bg-blue-200 mx-5 text-blue-900  p-4 md:p-8 rounded shadow-md"></div>
  <div id="skills" class="hidden bg-blue-200 mx-5 text-blue-900  p-4 md:p-8 rounded shadow-md"></div>
  <div id="portofolio" class="hidden bg-blue-200 mx-5 text-blue-900  p-4 md:p-8 rounded shadow-md"></div>

      </div>
    </div>
  );
}

export default App;
