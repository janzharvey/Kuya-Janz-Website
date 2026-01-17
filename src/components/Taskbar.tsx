import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWindows } from '@fortawesome/free-brands-svg-icons';
import { faVolumeHigh, faVolumeXmark } from '@fortawesome/free-solid-svg-icons';
import { faMoon, faSun} from '@fortawesome/free-regular-svg-icons'
import { useState, useEffect, useRef } from 'react';
import midnightWhisperByMatrika from "../assets/music/midnight-whisper-matrika.mp3";
import eveningHazeByYasumu from "../assets/music/evening-haze-yasumu.mp3";
import windowIcon from '../assets/img/windows.png'
import skillsetIcon from '../assets/img/skillset-icon.png'
import WorksIcon from '../assets/img/works-icon.png'

import experienceIcon from '../assets/img/work-experience-icon.png'

type TaskbarProps = {
  onMenuClick: () => void;
  activeWindow: 'experience' | 'skillset' | 'works' | 'about' | 'hobbies' | 'connect' | null;

  isExperienceOpen: boolean;
  onExperienceClick: () => void;

  isSkillsetOpen: boolean;
  onSkillsetClick: () => void;

  isWorksOpen: boolean;
  onWorksClick: () => void;

  isAboutMeOpen: boolean;
  onAboutMeClick: () => void;

  isHobbiesOpen: boolean;
  onHobbiesClick: () => void;

  isConnectWithMeOpen: boolean;
  onConnectWithMeClick: () => void;
};
const Taskbar = ({ onMenuClick, activeWindow, isExperienceOpen, onExperienceClick, isSkillsetOpen, onSkillsetClick, isWorksOpen, onWorksClick, isAboutMeOpen, onAboutMeClick, isHobbiesOpen, onHobbiesClick, isConnectWithMeOpen, onConnectWithMeClick }: TaskbarProps) => {

  const [isHovered, setIsHovered] = useState(false);

  const [isDarkMode, setIsDarkMode] = useState(false);
  const handleToggleTheme = () => {
    setIsDarkMode(prev => !prev);
  };

  const [currentTime, setCurrentTime] = useState('');
  const [currentDate, setCurrentDate] = useState('');
  
      useEffect(() => {
        const updateTime = () => {
          const now = new Date();
          setCurrentTime(
            now.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' })
          );
          setCurrentDate(now.toLocaleDateString('en-US'));
        };

        updateTime();
        const interval = setInterval(updateTime, 1000); 
        return () => clearInterval(interval);
      }, []);

  const [isMuted, setIsMutedMode] = useState(true);
  const audioRef = useRef<HTMLAudioElement | null>(null);

      useEffect(() => {
        const tracks = [midnightWhisperByMatrika, eveningHazeByYasumu];
        const randomTrack = tracks[Math.floor(Math.random() * tracks.length)];
        audioRef.current = new Audio(randomTrack);
        audioRef.current.loop = true;
        audioRef.current.volume = 0.5; 
        return () => {
          audioRef.current?.pause();
          audioRef.current = null;
        };
      }, []);

      const handleToggleSound = () => {
        if (!audioRef.current) return;

        setIsMutedMode(prev => {
          const next = !prev;

          if (next) {
            audioRef.current!.pause();
          } else {
      
            audioRef.current!.play().catch(err => {
              console.error("Audio play blocked by browser:", err);
            });
          }
          return next;
        });
      };

  return ( 
      <div style={{ padding: '10px', zIndex: '99'}} className="d-flex bg-midnight-gray position-absolute bottom-0 start-0 w-100 justify-content-between align-items-center" onClick={(e) => e.stopPropagation()}>
        <img style={{ width: '60px', height: '60px', padding: '10px', color: '#A3A3FF'}} className={`rounded-2 cursor-pointer ${ isHovered ? 'hovered' : ''}`} src={windowIcon} onClick={onMenuClick} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}></img>
        <div style={{ height: '60px'}}className="d-flex flex-row bg-charcoal w-100 rounded-2 mx-1 p-1">
          {isExperienceOpen && (
              <span
                style={{ height: '100%', width: '180px', marginRight: '6px' }}
                className={`taskbar-item d-flex flex-row align-items-center p-2 rounded-2 color-mocha cursor-pointer overflow-hidden ${activeWindow === 'experience' ? 'active-window' : ''}`} 
                onClick={onExperienceClick}
                >
                <img style={{ maxWidth: '20px' }} className="ms-1" src={experienceIcon} />
                <span style={{ fontSize: '14px' }} className="ms-2 color-white">
                  Work Experience
                </span>
              </span>
            )}

            {isSkillsetOpen && (
                <span
                  style={{ height: '100%', width: '180px', marginRight: '6px' }}
                  className={`taskbar-item d-flex flex-row align-items-center p-2 rounded-2 color-mocha cursor-pointer overflow-hidden ${activeWindow === 'skillset' ? 'active-window' : ''}`}
                  onClick={onSkillsetClick}
                  >
                  <img style={{ maxWidth: '20px' }} className="ms-1" src={skillsetIcon} />
                  <span style={{ fontSize: '14px' }} className="ms-2 color-white">
                    Skillset
                  </span>
                </span>
              )}

               {isWorksOpen && (
                <span
                  style={{ height: '100%', width: '180px', marginRight: '6px' }}
                  className={`taskbar-item d-flex flex-row align-items-center p-2 rounded-2 color-mocha cursor-pointer overflow-hidden ${activeWindow === 'works'? 'active-window': ''}`}
                  onClick={onWorksClick}
                >
                  <img style={{ maxWidth: '20px' }} className="ms-1" src={WorksIcon} />
                  <span style={{ fontSize: '14px' }} className="ms-2 color-white">
                    Works
                  </span>
                </span>
              )}

              {isAboutMeOpen && (
                <span
                  style={{ height: '100%', width: '180px', marginRight: '6px' }}
                  className={`taskbar-item d-flex flex-row align-items-center p-2 rounded-2 color-mocha cursor-pointer overflow-hidden ${activeWindow === 'about' ? 'active-window' : ''}`}
                  onClick={onAboutMeClick}
                >
                  <img style={{ maxWidth: '20px' }} className="ms-1" src={WorksIcon} />
                  <span style={{ fontSize: '14px' }} className="ms-2 color-white">
                    About Me
                  </span>
                </span>
              )}

              {isHobbiesOpen && (
                <span
                  style={{ height: '100%', width: '180px', marginRight: '6px' }}
                  className={`taskbar-item d-flex flex-row align-items-center p-2 rounded-2 color-mocha cursor-pointer overflow-hidden ${activeWindow === 'hobbies' ? 'active-window' : ''} `}
                  onClick={onHobbiesClick}
                >
                  <img style={{ maxWidth: '20px' }} className="ms-1" src={WorksIcon} />
                  <span style={{ fontSize: '14px' }} className="ms-2 color-white">
                    Hobbies
                  </span>
                </span>
              )}

                {isConnectWithMeOpen && (
                <span
                  style={{ height: '100%', width: '180px', marginRight: '6px' }}
                  className={`taskbar-item d-flex flex-row align-items-center p-2 rounded-2 color-mocha cursor-pointer overflow-hidden ${activeWindow === 'connect' ? 'active-window' : ''}`}
                  onClick={onConnectWithMeClick}
                >
                  <img style={{ maxWidth: '20px' }} className="ms-1" src={WorksIcon} />
                  <span style={{ fontSize: '14px' }} className="ms-2 color-white">
                    Connect With Me
                  </span>
                </span>
              )}
        </div>
        <div className='d-flex flex-row ps-2 pe-3 align-items-center'>
            {/* <FontAwesomeIcon style={{ width: '30px', height: '20px', color: '#fff'}} className="pe-3 cursor-pointer"  icon={isDarkMode ? faMoon : faSun} onClick={handleToggleTheme}></FontAwesomeIcon> */}
            <FontAwesomeIcon style={{ width: '30px', height: '20px', color: '#fff'}} className="pe-3 cursor-pointer"  icon={isMuted ? faVolumeXmark : faVolumeHigh} onClick={handleToggleSound}></FontAwesomeIcon>
          <div className='d-flex flex-column align-items-end'>
            <span style={{ fontSize: '14px'}} className='color-white'>{ currentTime }</span>
            <span style={{ fontSize: '14px'}} className='color-white'>{ currentDate }</span>
          </div>   
        </div>
      </div>
  );
};


export default Taskbar;
