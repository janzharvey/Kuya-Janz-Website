import experienceIcon from '../assets/img/work-experience-icon.png'
import skillsetIcon from '../assets/img/skillset-icon.png'
import worksIcon from '../assets/img/works-icon.png'
import { useState } from 'react'

type IconProps = {
  onExperienceClick: () => void;
  onSkillsetClick: () => void;
  onWorksClick: () => void;
};

const iconDict = {
  folderIcon: [experienceIcon, skillsetIcon, worksIcon],
  folderName: ['Work Experience', 'Skillset', 'Works']
};

const Icon = ({
  onExperienceClick,
  onSkillsetClick,
  onWorksClick
}: IconProps) => {

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const clickHandlers = [
    onExperienceClick,
    onSkillsetClick,
    onWorksClick
  ];

  return (
    <div style={{ width: '120px' }} className="position-relative d-flex flex-column m-2 z-0">
      {iconDict.folderName.map((name, index) => (
        <span
          key={index}
          style={{ height: '120px' }}
          className={`d-flex flex-column justify-content-center align-items-center cursor-pointer p-2 rounded-2 ${
            hoveredIndex === index ? 'hovered' : ''
          }`}
          onClick={clickHandlers[index]}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <img
            style={{ width: '60px', height: '60px', marginBottom: '10px' }}
            src={iconDict.folderIcon[index]}
            alt={name}
          />
          <span className="text-white text-center color-white">{name}</span>
        </span>
      ))}
    </div>
  );
};

export default Icon;
