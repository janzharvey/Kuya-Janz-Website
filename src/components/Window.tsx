import React, { useEffect, useState } from 'react';
import Draggable from 'react-draggable';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

import {
  kubotaImg,
  notableAward,
  progressiveAward,
  facebookIcon,
  instagramIcon,
  tiktokIcon,
  linkedinIcon,
  githubIcon,
  emailIcon,
  pythonIcon,
  sqlIcon,
  nodejsIcon,
  gitIcon,
  htmlIcon,
  cssIcon,
  javascriptIcon,
  typescriptIcon,
  bootstrapIcon,
  reactIcon,
  mssqlIcon,
  mysqlIcon,
  postgreIcon,
  sapIcon,
  ms365Icon,
  wordIcon,
  excelIcon,
  powerpointIcon,
  ubuntuIcon,
  windowIcon,
  desktopWebsite,
  secondWebsite,
  fourcornerWebsite,
  christmasCarolWebsite,
  firstWebsite,
  profilePicture
} from '../assets';

const introduction = "This is my first company that I joined in after I graduated from college, great environment, amazing people, and many social fun activities."

const accomplishmentList = [
  "Led and successfully delivered 2 major projects end-to-end as a Subject Matter Expert.",
  "Built and implemented a web-system.",
  "Created optimized SQL queries handling over 50,000 records.",
  "Performed end-user application support via on-site and remotely.",
  "Performed database backup and restoration."
]

const awardList = [notableAward, progressiveAward]

type WindowProps = {
  type: 'experience' | 'skillset' | 'works' | 'about' | 'hobbies' | 'connect';
  isActive: boolean;
  onFocus: () => void;
  onClose?: () => void;
  position: { x: number; y: number };
  onDragStop: (x: number, y: number) => void;
};

const connectList = {
  connectIcon: [ facebookIcon, instagramIcon, tiktokIcon, linkedinIcon, githubIcon, emailIcon ],
  connectName: ["Facebook", "Instagram", "Tiktok", "Linkedin", "Github", "Email"],
  connectUrl: ["https://www.facebook.com/wolfkingserpent888", "https://www.instagram.com/wolfkingserpent888/", "https://www.tiktok.com/@iamkuyajanz", "https://www.linkedin.com/in/janzortega/", "https://github.com/janzharvey", "https://mail.google.com/mail/?view=cm&fs=1&to=janzsacdalan.ortega@gmail.com&su=Inquire+From+Website&body=Hi, Kuya Janz"]
}

const windowTitles: Record<string, string> = {
  experience: 'Work Experience',
  skillset: 'Skillset',
  works: 'Works',
  about: 'About Me',
  hobbies: 'Hobbies',
  connect: 'Connect With Me'
};

type SkillItem = {
  name: string;
  icon: string;
};

type SkillCategory = {
  title: string;
  items: SkillItem[];
  iconSize?: number;
  textMaxWidth?: number;
};

const skillCategories: SkillCategory[] = [
  {
    title: "Programming",
    items: [
      { name: "Python", icon: pythonIcon },
      { name: "SQL Query", icon: sqlIcon },
      { name: "Node.js", icon: nodejsIcon },
      { name: "Git", icon: gitIcon },
    ],
  },
  {
    title: "Web Development",
    items: [
      { name: "HTML", icon: htmlIcon },
      { name: "CSS", icon: cssIcon },
      { name: "Javascript", icon: javascriptIcon },
      { name: "TypeScript", icon: typescriptIcon },
      { name: "Bootstrap", icon: bootstrapIcon },
      { name: "React", icon: reactIcon },
    ],
  },
  {
    title: "Database",
    items: [
      { name: "SQL Server", icon: mssqlIcon },
      { name: "MySQL", icon: mysqlIcon },
      { name: "PostgreSQL", icon: postgreIcon },
    ],
  },
  {
    title: "ERP System",
    iconSize: 70,
    textMaxWidth: 75,
    items: [{ name: "SAP FI, SD, MM", icon: sapIcon }],
  },
  {
    title: "Productivity Tools",
    items: [
      { name: "MS 365", icon: ms365Icon },
      { name: "Word", icon: wordIcon },
      { name: "Excel", icon: excelIcon },
      { name: "PowerPoint", icon: powerpointIcon },
    ],
  },
  {
    title: "Operating System / Server",
    items: [
      { name: "Ubuntu Linux", icon: ubuntuIcon },
      { name: "Windows Server", icon: windowIcon },
    ],
  },
];

const SkillLevelDots = () => (
  <span style={{ display: "flex", gap: "6px" }}>
    <span className="rounded-circle" style={{ width: 10, height: 10, backgroundColor: "red" }} />
    <span className="rounded-circle" style={{ width: 10, height: 10, backgroundColor: "orange" }} />
    <span className="rounded-circle" style={{ width: 10, height: 10, backgroundColor: "green" }} />
  </span>
);

const SkillItemCard = ({
  item,
  iconSize = 70,
  textMaxWidth,
}: {
  item: SkillItem;
  iconSize?: number;
  textMaxWidth?: number;
}) => (
  <div className="d-flex flex-column align-items-center justify-content-center me-2">
    <img
      src={item.icon}
      alt={item.name}
      style={{ height: iconSize, width: iconSize }}
      className="p-2 bg-midnight-gray rounded-2"
    />
    <span
      style={{ fontSize: "16px", maxWidth: textMaxWidth }}
      className="text-center color-white two-line-truncate"
    >
      {item.name}
    </span>
  </div>
);

type WorkTool = {
  name: string;
  icon: string;
};

type WorkItem = {
  image: string;
  link?: string;
  description: string;
  tools: WorkTool[];
};

const worksList: WorkItem[] = [
  {
    image: desktopWebsite,
    description:
      "This is my most recent website portfolio, built as a hands-on project to re-learn and strengthen my skills in React and TypeScript. It focuses on modern component-based architecture, type safety, and clean, maintainable code.",
    tools: [
      { name: "HTML", icon: htmlIcon },
      { name: "CSS", icon: cssIcon },
      { name: "TypeScript", icon: typescriptIcon },
      { name: "Bootstrap", icon: bootstrapIcon },
      { name: "React", icon: reactIcon },
    ],
  },
  {
    image: secondWebsite,
    link: "https://janzharvey.github.io/janz-react-portfolio/",
    description:
      "This is my second website portfolio, built while I was first learning React. It was designed to help me understand the basics of component-based architecture, state management, and responsive design.",
    tools: [
      { name: "HTML", icon: htmlIcon },
      { name: "CSS", icon: cssIcon },
      { name: "JavaScript", icon: javascriptIcon },
      { name: "React", icon: reactIcon },
    ],
  },
  {
    image: firstWebsite,
    link: "https://janzharvey.github.io/e-portfolio/",
    description:
      "This is my first website portfolio, created using HTML, CSS, and JavaScript during my late college days. It represents the beginning of my journey into web development and my first experience building a full website from scratch.",
    tools: [
      { name: "HTML", icon: htmlIcon },
      { name: "CSS", icon: cssIcon },
      { name: "JavaScript", icon: javascriptIcon },
    ],
  },
  {
    image: christmasCarolWebsite,
    link: "https://janzharvey.github.io/christmas-carolling/",
    description:
      "To innovate a christmas carolling via simple webpage. I made this during quarantine days just for fun, where there's no physical contact allowed.",
    tools: [
      { name: "HTML", icon: htmlIcon },
      { name: "CSS", icon: cssIcon },
      { name: "JavaScript", icon: javascriptIcon },
    ],
  },
  {
    image: fourcornerWebsite,
    link: "https://janzharvey.github.io/fourcourners-project/",
    description:
      "I made my cousins a simple webpage just for fun on their newly establish tutorial center.",
    tools: [
      { name: "HTML", icon: htmlIcon },
      { name: "CSS", icon: cssIcon },
      { name: "JavaScript", icon: javascriptIcon },
    ],
  },
];

const WorkToolIcon = ({ tool }: { tool: WorkTool }) => (
  <div
    style={{ height: "45px", width: "30px" }}
    className="d-flex flex-column align-items-center justify-content-center me-3"
  >
    <img style={{ height: "30px" }} src={tool.icon} />
    <span
      style={{ fontSize: "8px", maxWidth: "75px" }}
      className="text-center color-white mt-1"
    >
      {tool.name}
    </span>
  </div>
);

const WorkCard = ({ work }: { work: WorkItem }) => {
  const ImageWrapper = work.link ? "a" : "div";

  return (
    <div
      style={{ height: "230px" }}
      className="d-flex flex-row w-100 rounded-2 bg-midnight-gray p-2 mt-2"
    >
      <div className="bg-charcoal d-flex justify-content-center align-items-center rounded-2 w-75 overflow-hidden">
        <ImageWrapper
          {...(work.link && { href: work.link, target: "_blank" })}
        >
          <img
            style={{ width: "100%" }}
            className="cursor-pointer"
            src={work.image}
          />
        </ImageWrapper>
      </div>

      <div className="d-flex flex-column justify-content-between w-100 ms-2">
        <span style={{ fontSize: "16px" }} className="py-1 px-4 color-white ">
          {work.description}
        </span>

        <div className="d-flex flex-column">
          <label
            style={{ fontSize: "14px", maxWidth: "75px" }}
            className="text-white"
          >
            Tools:
          </label>

          <div className="d-flex w-100 rounded-2 bg-charcoal p-2">
            {work.tools.map((tool) => (
              <WorkToolIcon key={tool.name} tool={tool} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const faqItems = [
  {
    question: "What school did you graduated from?",
    answer:
      "I graduated from Baliuag University (2019–2023) with a degree in Information Technology and was a CHED scholar.",
  },
  {
    question: "What do you mean by handy-man?",
    answer:
      "I’m the household’s go-to fixer. If something’s broken or hard to do, they always call me.",
  },
  {
    question: "What do you do outside of coding?",
    answer:
      "I enjoy DIY projects, fixing things around the house, playing computer games, and reading Manhwa/Manga.",
  },
   {
    question: "Do you prefer solo work or group work?",
    answer:
      "I like doing things alone, but I also enjoy doing things with other people.",
  },
];


const FAQ = ({ items }: { items: typeof faqItems }) => (
  <div className="p-4 bg-charcoal m-2 rounded-2">
    <h3 className="text-center mb-3 fw-bold color-white">FAQ</h3>

    <div style={{ width: '500px'}} className='mx-auto'>
       {items.map((item, idx) => (
      <details className="mb-2" key={idx}>
        <summary className="fw-bold cursor-pointer bg-midnight-gray rounded-2 p-2 px-4 color-white">{item.question}</summary>
        <p className="answer mt-2 bg-mocha p-2 px-3 rounded-2 color-white">{item.answer}</p>
      </details>
    ))}
    </div>
   
  </div>
);


const ExperienceContent = () => (
  <div style={{ border: '2px solid' }}className="d-block w-100 h-100 border-midnight-gray rounded-bottom-2 overflow-auto">
    <h1 className='p-3 w-100 text-center color-white fw-bold bg-charcoal'>{ "< "} Work Experience { " />"}</h1>
    <div className='mx-2 mb-2 bg-mocha rounded-2 overflow-hidden p-2'>
      <div style={{ backgroundColor: 'rgba(107, 90, 74, 0.8)'}} className='d-flex flex-row p-5 rounded-2'>
          <a href='https://kubota.com.ph' target='_blank'><img style={{width: '150px'}} className="work-img rounded-circle cursor-pointer p-3" src={ kubotaImg } alt='profile-picture'></img></a>                
          <span className='d-flex flex-column align-items-start justify-content-center px-3 ms-2 overflow-hidden'>
              <span style={{ fontSize: '32px'}} className='fw-bolder color-beige'>Kubota Philippines Inc</span>
              <span style={{ fontSize: '16px', lineHeight: '14px'}} className='color-midnight-gray'>Baesa, Quezon City</span>
              <span style={{ fontSize: '24px'}} className='fw-medium color-beige mt-2'>Programmer Analyst</span>
              <span style={{ fontSize: '16px', lineHeight: '14px'}} className='color-midnight-gray'>{"("} 2023 - 2025 {")"}</span>
          </span>                   
      </div>             
      <div className='px-5 py-3'>
          <label style={{ fontSize: '16px'}} className='text-center color-midnight-gray'>{ introduction }</label>
          <span className='d-flex flex-column mt-3'>
          <span style={{ fontSize: '24px'}} className='fw-medium color-midnight-gray mt-3'>Accomplishment</span>
            <ul>
              { accomplishmentList.map((accomplishment, index) => (
                  <li style={{ fontSize: '16px'}} className="color-midnight-gray" key={index}>{ accomplishment }</li>
              ))}                           
            </ul>
            <label style={{ fontSize: '16px'}} className='text-center color-midnight-gray mt-3'>I was awarded and recognized by the company with two awards over two consecutive years.</label> 
            <div className='d-flex flex-row justify-content-evenly mt-3'>                           
              {awardList.map((award, index) => (
                <img style={{ width: '300px'}} className='rounded-2' src={award} key={index}></img>
              ))}  
            </div>
          </span>                     
      </div>
    </div>
  </div>
);

const SkillsetContent = () => (
  <div
    style={{ border: "2px solid" }}
    className="d-block w-100 h-100 border-midnight-gray rounded-bottom-2 overflow-auto"
  >
    <h1 className="p-3 w-100 text-center color-white fw-bold bg-charcoal">
      {"< "}Skillset{" />"}
    </h1>

    <div className="px-3 py-2">
      {skillCategories.map((category) => (
        <div
          key={category.title}
          className="d-flex flex-column w-100 rounded-2 bg-midnight-gray p-2 mt-2"
        >
          <div className="d-flex flex-row justify-content-between w-100">
            <label style={{ fontSize: "20px" }} className="fw-bold color-white">
              {category.title}
            </label>
            <SkillLevelDots />
          </div>

          <div className="d-flex flex-row bg-charcoal p-2 rounded-2 mt-2">
            {category.items.map((item) => (
              <SkillItemCard
                key={item.name}
                item={item}
                iconSize={category.iconSize}
                textMaxWidth={category.textMaxWidth}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  </div>
);

const WorksContent = () => (
  <div
    style={{ border: "2px solid" }}
    className="d-block w-100 h-100 border-midnight-gray rounded-bottom-2 overflow-auto"
  >
    <h1 className="p-3 w-100 text-center color-white fw-bold bg-charcoal">
      {"< "} Works {" />"}
    </h1>

    <div className="px-3 py-2">
      {worksList.map((work, index) => (
        <WorkCard key={index} work={work} />
      ))}
    </div>
  </div>
);

const AboutMeContent = () => (
  <div style={{ border: '2px solid' }}className="d-block w-100 h-100 overflow-auto border-midnight-gray rounded-bottom-2 custom">
    <h1 className='p-3 w-100 text-center color-white fw-bold bg-charcoal'>{ "< "} About Me { " />"}</h1>
      <div style={{ width: '420px'}} className='d-flex flex-row align-items-center justify-content-center p-3 w-100 bg-mocha'>
          <img style={{ width: '180px'}}  className="rounded-circle"src={profilePicture}></img>
          <span style={{ width: '290px', fontSize: '18px'}} className='color-beige ms-3 text-center'>"A software engineer by profession, and a <span className='fw-bold'>handy-man</span> at home.  <br></br>If something breaks, it somehow becomes my responsibility."</span>
      </div>

      {/* FAQ Section */}
      <FAQ items={faqItems} />
  </div>
);

const HobbiesContent = () => (
   <div style={{ border: '2px solid' }}className="d-block w-100 h-100 overflow-hidden border-midnight-gray rounded-bottom-2">
     <h1 className='p-5 w-100 text-center color-white fw-bold bg-charcoal'>{ "< "} Hobbies { " />"}</h1>
  </div>
);

const ConnectWithMeContent = () => (
  <div style={{ border: '2px solid' }}className="d-block w-100 h-100 overflow-hidden border-midnight-gray rounded-bottom-2">
    <h1 className='p-3 w-100 text-center color-white fw-bold bg-charcoal'>{ "< "} Connect With Me { " />"}</h1>

    <div style={{ width: '470px'}} className="border-midnight-gray bg-charcoal rounded-4 p-4 mx-auto mt-4">
      <div className="d-flex flex-wrap gap-2 w-100">
        {connectList.connectName.map((name, index) => (
          <div className="box" key={index}>
              <a className='d-flex flex-column justify-content-center align-items-center text-decoration-none' href={connectList.connectUrl[index]} target='_blank'>
                <img style={{ width: '95px', height: '95px'}} className="icon border-beige rounded-4 p-3 cursor-pointer" src={connectList.connectIcon[index]}></img>
                <span className='mt-1 color-white'>{name}</span>
              </a>          
          </div>
        ))}
      </div>
    </div>
    <label style={{fontSize: '18px'}} className='p-4 w-100  text-center color-charcoal'><span className='fw-semibold'>Disclaimer:</span> You will be redirected to a new tab when clicking external links.</label>
  </div>
);

const Window = ({
  type,
  isActive,
  onFocus,
  onClose,
  position,
  onDragStop
}: WindowProps) => {

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(true);
  }, []);

  return (
    <div
      className="position-fixed top-0 start-0"
      style={{ zIndex: isActive ? 10 : 5 }}
      onMouseDown={onFocus}
    >
      <Draggable
        handle=".window-header"
        position={position}
        onStop={(e, data) => onDragStop(data.x, data.y)}
      >
        <div className="position-absolute">
          <div
            style={{ width: '850px', height: '660px' }}
            className={`
              d-flex flex-column position-absolute rounded-3 bg-beige box-shadow
              popup-window ${isOpen ? 'open' : ''}
            `}
          >
            <div className="window-header d-flex flex-row w-100 bg-midnight-gray rounded-top-2 justify-content-between align-items-center p-2">
              <span className="ms-2 color-white fw-medium">
                {windowTitles[type]}
              </span>
              <FontAwesomeIcon
                className="color-white cursor-pointer"
                icon={faXmark}
                onClick={onClose}
              />
            </div>

            {type === 'experience' && <ExperienceContent />}
            {type === 'skillset' && <SkillsetContent />}
            {type === 'works' && <WorksContent />}
            {type === 'about' && <AboutMeContent />}
            {type === 'hobbies' && <HobbiesContent />}
            {type === 'connect' && <ConnectWithMeContent />}
          </div>
        </div>
      </Draggable>
    </div>
  );
};

export default Window;
