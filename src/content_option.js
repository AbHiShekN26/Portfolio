import profile from "../src/assets/images/profile.jpg";
import Viralon from "../src/assets/images/Viralon images.png";
import Ochi from "../src/assets/images/ochi.PNG";
import ReactVids from "../src/assets/images/videoSteam.jpg";
import CssWebsite from "../src/assets/images/CSSweb.PNG";

const logotext = "Abhishek";
const meta = {
    title: "Abhishek",
    description: "I’m Abhishek MERN STACK Devloper ,currently working in Delhi",
};

const introdata = {
    title: "I’m Abhishek",
    animated: {
        first: "I Love Coding",
        second: "I Code Cool Websites",
        third: "I am MERN Developer",
    },
    description: "I am a results-oriented MERN Stack Developer with nearly 3 years of professional experience in developing and deploying modern, scalable, and user-friendly web applications. Proficient in MongoDB, Express.js, React.js, and Node.js, I bring expertise in: Designing and implementing end-to-end full-stack solutions, Working with advanced tools like Redux, OpenLayers (for interactive maps)"
    
    ,
    your_img_url: profile,
};

const dataabout = {
    title: "A Bit About Myself",
    intro:
      "I’m a passionate MERN Stack Developer with 2.9 years of experience, specializing in creating modern, dynamic, and scalable web applications.",
    points: [
      "Proficient in MongoDB, Express.js, React.js, and Node.js",
      "Strong understanding of both frontend and backend development",
      "Skilled in building responsive, user-friendly interfaces",
      "Experienced in RESTful APIs, Redux, and state management",
      "Worked with advanced tools like OpenLayers (interactive maps) and Ant Design",
    ],
  };
  
  
const worktimeline = [{
        jobtitle: "MERN STACK DEVELOPER",
        where: "UJR Corporate Solutions Pvt Ltd.",
        date: "DEC 2021 - NOV 2023",
    },
    {
        jobtitle: "MERN STACK DEVELOPER",
        where: "Jithvar Consultancy Services",
        date: "NOV 2023 - MAR 2024",
    },
    {
        jobtitle: "React Developer",
        where: "Trident Teclabs Pvt Ltd.",
        date: "MAR 2024 - PRESENT",
    },
];

const skills = [{
        name: "REACT",
        value: 70,
    },
    {
        name: "NODE JS",
        value: 85,
    },
    {
        name: "MONGO DB",
        value: 85,
    },
    {
        name: "EXPRESS",
        value: 80,
    },
    {
        name: "Javascript",
        value: 70,
    },
    {
        name: "Jquery",
        value: 65,
    },
 
    {
        name: "Css",
        value: 65,
    },
    {
        name: "Redux",
        value: 85,
    },
    {
        name: "Ant Design",
        value: 85,
    },
    {
        name: "Github",
        value: 75,
    },
    
    
    
];

const services = [
    {
        title: "Frontend Development (React.js)",
        description: [
            "✅ Custom UI development with React.js & Next.js",
            "✅ State management using Redux, Context API, or Zustand",
            "✅ UI/UX enhancements with Ant Design, Material-UI, Tailwind CSS",
            "✅ Responsive, pixel-perfect designs for web & mobile views",
            "✅ API integration & real-time updates with Axios, WebSockets"
        ],
    },
    {
        title: "Backend Development (Node.js)",
        description: [
            "✅ Node.js server setup & API development",
            "✅ Database integration with MongoDB",
            "✅ API design & implementation",
            "✅ RESTful API development",
            "✅ API testing & documentation"
        ],
    },
    {
        title: "WordPress Design",
        description: [
            "✅ Custom WordPress theme development",
            "✅ Responsive WordPress website design",
            "✅ Plugin integration & customization",
            "✅ SEO-friendly website setup",
            "✅ Website maintenance & support"
        ],
    },
];



const dataportfolio = [{
        img: Viralon,
        description: "Viralon is the  digital marketing agency . Elevate the online presence with our expert strategies and innovative solutions.",
        link: "https://viralon.in/",
    },
    {
        img: Ochi,
        description: "This Project have Cool css animation and also have cool ui",
        link: "https://ochi-design-clone-react.netlify.app/",
    },
    {
        img: "https://picsum.photos/400/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/600/?grayscale",
        description: "The wisdom of life consists in the elimination of .",
        link: "#",
    },
    {
        img: ReactVids,
        description: " This is a video streaming website",
        link: "https://reactvids.netlify.app/",
    },
    {
        img: "https://picsum.photos/400/700/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },

    {
        img: "https://picsum.photos/400/600/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/300/?grayscale",
        description: "The wisdom  in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: CssWebsite,
        description: "This website have cool ui and also have cool animation",
        link: "https://toshi-avicii.github.io/duo-studio-clone/",
    },
    {
        img: "https://picsum.photos/400/550/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/700/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
];

const contactConfig = {
    YOUR_EMAIL: "abhisheky87555@gmail.com",
    YOUR_FONE: "9335408773",
    description: "I'd love to hear from you! Whether it's a project idea, a collaboration opportunity, or just a tech discussion, feel free to reach out!",
    YOUR_SERVICE_ID: process.env.REACT_APP_EMAILJS_SERVICE_ID,
    YOUR_TEMPLATE_ID: process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
    YOUR_PUBLIC_KEY: process.env.REACT_APP_EMAILJS_PUBLIC_KEY,
};

console.log(process.env.REACT_APP_EMAILJS_SERVICE_ID);
console.log(process.env.REACT_APP_EMAILJS_TEMPLATE_ID);
console.log(process.env.REACT_APP_EMAILJS_PUBLIC_KEY);

const socialprofils = {
    github: "https://github.com/AbHiShekN26",
    facebook: "https://facebook.com",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
};
export {
    meta,
    dataabout,
    dataportfolio,
    worktimeline,
    skills,
    services,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};