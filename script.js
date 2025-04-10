let body = document.querySelector("body");
let image = document.querySelector(".image");
let Name = document.querySelector("h1");
let designation = document.querySelector("h2");
let companyName = document.querySelector("h3");
let skills = document.querySelector("h4");
let shortInfo = document.querySelector("h5");


const people = [
  {
    image: "https://randomuser.me/api/portraits/men/45.jpg",
    name: "John Doe",
    designation: "Frontend Developer",
    company: "TechNova Inc.",
    skills: ["JavaScript", "React", "CSS", "HTML"],
    info: "Passionate frontend developer with 4 years of experience in building responsive web applications."
  },
  {
    image: "https://randomuser.me/api/portraits/women/32.jpg",
    name: "Jane Smith",
    designation: "UI/UX Designer",
    company: "Designly",
    skills: ["Figma", "Sketch", "Adobe XD", "User Research"],
    info: "Creative UI/UX designer focused on creating intuitive and engaging digital experiences."
  },
  {
    image: "https://randomuser.me/api/portraits/men/21.jpg",
    name: "Carlos Rivera",
    designation: "Backend Engineer",
    company: "CloudWorks",
    skills: ["Node.js", "MongoDB", "Express", "Docker"],
    info: "Backend engineer with expertise in scalable RESTful APIs and cloud infrastructure."
  },
  {
    image: "https://randomuser.me/api/portraits/women/58.jpg",
    name: "Amina Patel",
    designation: "Data Scientist",
    company: "InsightAI",
    skills: ["Python", "Pandas", "Machine Learning", "Data Visualization"],
    info: "Data scientist with a strong background in predictive analytics and machine learning."
  },
  {
    image: "https://randomuser.me/api/portraits/men/14.jpg",
    name: "Leo Wang",
    designation: "DevOps Engineer",
    company: "DeployHub",
    skills: ["AWS", "Kubernetes", "CI/CD", "Terraform"],
    info: "DevOps specialist focused on automating infrastructure and optimizing deployment pipelines."
  },
  {
    image: "https://randomuser.me/api/portraits/women/67.jpg",
    name: "Emily Zhang",
    designation: "Full Stack Developer",
    company: "CodeCrafters",
    skills: ["JavaScript", "Node.js", "Vue", "SQL"],
    info: "Full stack developer with a love for clean code and scalable systems."
  },
  {
    image: "https://randomuser.me/api/portraits/men/77.jpg",
    name: "Marcus Thompson",
    designation: "Product Manager",
    company: "NextLeap",
    skills: ["Agile", "Scrum", "Roadmapping", "Team Leadership"],
    info: "Product leader with a knack for delivering high-impact digital solutions."
  },
  {
    image: "https://randomuser.me/api/portraits/women/12.jpg",
    name: "Nora Kim",
    designation: "Marketing Specialist",
    company: "BrandHive",
    skills: ["SEO", "Content Strategy", "Google Ads", "Analytics"],
    info: "Digital marketer passionate about building brand presence and engagement."
  },
  {
    image: "https://randomuser.me/api/portraits/men/56.jpg",
    name: "Omar Al-Fayed",
    designation: "Cybersecurity Analyst",
    company: "SecureNet",
    skills: ["Network Security", "Ethical Hacking", "Firewalls", "SIEM"],
    info: "Cybersecurity analyst with expertise in detecting and mitigating threats."
  },
  {
    image: "https://randomuser.me/api/portraits/women/80.jpg",
    name: "Sophia Rossi",
    designation: "Graphic Designer",
    company: "PixelPerfect Studio",
    skills: ["Photoshop", "Illustrator", "InDesign", "Brand Identity"],
    info: "Creative designer focused on bold visuals and brand storytelling."
  },
  {
    image: "https://randomuser.me/api/portraits/men/92.jpg",
    name: "Raj Mehta",
    designation: "AI Engineer",
    company: "NeuralCore",
    skills: ["TensorFlow", "Python", "Deep Learning", "NLP"],
    info: "AI engineer developing intelligent systems and cutting-edge ML models."
  },
  {
    image: "https://randomuser.me/api/portraits/women/26.jpg",
    name: "Hannah Becker",
    designation: "Content Writer",
    company: "InkFlow Media",
    skills: ["Copywriting", "Blogging", "SEO Writing", "Social Media"],
    info: "Storyteller and content creator with a flair for engaging narratives."
  },
  {
    image: "https://randomuser.me/api/portraits/men/19.jpg",
    name: "Takeshi Mori",
    designation: "Mobile App Developer",
    company: "PocketApps",
    skills: ["Flutter", "Kotlin", "Swift", "Firebase"],
    info: "App developer turning ideas into smooth and beautiful mobile apps."
  },
  {
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    name: "Isabelle Lefevre",
    designation: "Data Analyst",
    company: "Vizlytics",
    skills: ["SQL", "Tableau", "Python", "Data Cleaning"],
    info: "Detail-oriented data analyst uncovering insights from complex datasets."
  },
  {
    image: "https://randomuser.me/api/portraits/men/37.jpg",
    name: "Liam Johnson",
    designation: "Cloud Architect",
    company: "SkyStack",
    skills: ["Azure", "GCP", "Microservices", "Infrastructure as Code"],
    info: "Cloud architect building secure and scalable cloud-native environments."
  }
];

people.forEach(function (person) {
    body.innerHTML += `<div class="container">
    <div class="image">
      <img src= ${person.image} alt="">
    </div>
    <h1>${person.name}</h1>
    <h2>${person.designation}</h2>
    <h3>${person.company}</h3>
    <h4>${person.skills}</h4>
    <h5>${person.info}</h5>
  </div>`

})
let containers = document.querySelectorAll(".container");

containers.forEach((container, index)=>{
  container.style.transition = "all 0.3s ease";
  container.addEventListener("mouseover", ()=>{
    container.style.transform = "scale(1.2)";
    container.style.zIndex = "10"
  })
  container.addEventListener("mouseout", ()=>{
    container.style.transform = "scale(1)";
    container.style.zIndex = "0"
  })
})
