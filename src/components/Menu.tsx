import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faIdCard, faCableCar, faChain, faEllipsisVertical, faBars } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import profilePicture from '../assets/img/pixar-icon.png'
import aboutMe from '../assets/img/about.png'
import hobby from '../assets/img/hobby.png'
import connectWithMe from '../assets/img/connect.png'

type MenuProps = {
  isHidden: boolean;
  onAboutMeClick: () => void;
  onHobbiesClick: () => void;
  onConnectWithMeClick: () => void;
}

const menuDict = {
  menuName: ["About Me", , "Connect With Me"],
  menuIcon: [aboutMe, , connectWithMe]
};

const profileDict = {
  profileName: "Janz Harvey Ortega",
  role: "Software Engineer"
}

const Menu = ({ isHidden, onAboutMeClick, onHobbiesClick ,onConnectWithMeClick}: MenuProps) => {

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
   const clickHandlers = [
    onAboutMeClick,
    onHobbiesClick,
    onConnectWithMeClick
  ];

  return (
      <div style={{ width: '380px', height: '0', bottom: '-10px', left: '8px',  transition: 'height 0.3s ease, bottom 0.3s ease', zIndex: '99' }} className={`d-flex bg-midnight-gray flex-column position-absolute rounded-2 overflow-hidden justify-content-between ${isHidden ? '' : 'visible'}`} onClick={(e) => e.stopPropagation()}>
        <span className='p-relative px-2 py-3'>
          <div className='d-flex flex-row mb-3 align-items-center '>
              <FontAwesomeIcon style={{ width: '20px', height: '20px', padding: '10px'}} className='color-white' icon={faBars}></FontAwesomeIcon>
              <div className="fw-bold color-white">Menu</div>
          </div>
          { menuDict.menuName.map((name, index) => (
              <span className={`d-flex align-items-center justify-content-between w-100 rounded-2 p-2 ps-4 pe-2 cursor-pointer ${ hoveredIndex === index ? 'hovered' : ''}`} key={index} onClick={clickHandlers[index]}  onMouseEnter={() => setHoveredIndex(index)} onMouseLeave={() => setHoveredIndex(null)}>            
                <div className='d-flex align-items-center'>
                  <img style={{ width: '50px', height: '50px', padding: '5px', color: '#fff' , borderRadius: '4px'}} className='me-2' src={menuDict.menuIcon[index]} alt={ name }></img>
                  <span className='color-white'>{ name } </span>
                </div>
                <FontAwesomeIcon style={{ width: '20px', height: '20px', padding: '5px', color: 'rgb(210,210,210)'}} icon={faEllipsisVertical}></FontAwesomeIcon>
          </span>
        ))};
        </span>
        <div className='d-flex bg-midnight-gray flex-row p-3 border-top border-secondary'>
          <img style={{width: '25%'}} className="rounded-circle border border-secondary" src={ profilePicture } alt='profile-picture'></img>
          <span className='d-flex flex-column align-items-start justify-content-start px-3 overflow-hidden'>
            <span style={{ fontSize: '24px', maxWidth: '245px'}} className='fw-bold color-white text-truncate'>{ profileDict.profileName }</span>
            <span style={{ fontSize: '16px', maxWidth: '245px'}} className='text-truncate color-mocha'>{"< "}{ profileDict.role }{" />"}</span>
          </span>
        </div>
      </div>
     
    );
  };

export default Menu;
