import { useEffect, useState } from 'react';
import Screen from './components/Screen';
import Taskbar from './components/Taskbar';
import Icon from './components/Icon';
import Menu from './components/Menu';
import Window from './components/Window';
import Mobile from './components/Mobile';

type WindowType = 'experience' | 'skillset' | 'works' | 'about' | 'hobbies' | 'connect';
type ActiveWindow = WindowType | null;

const initialPositions = {
  experience: { x: 300, y: 80 },
  skillset: { x: 310, y: 100 },
  works: { x: 320, y: 120 },
  about: { x: 330, y: 140 },
  hobbies: { x: 340, y: 160 },
  connect: { x: 350, y: 200 },
};

function App() {
  // 🔹 Media query state
  const [isDesktop, setIsDesktop] = useState(
    window.matchMedia('(min-width: 900px)').matches
  );

  useEffect(() => {
    const media = window.matchMedia('(min-width: 900px)');
    const listener = () => setIsDesktop(media.matches);

    media.addEventListener('change', listener);
    return () => media.removeEventListener('change', listener);
  }, []);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeWindow, setActiveWindow] = useState<ActiveWindow>(null);
  const [windowsState, setWindowsState] = useState<Record<WindowType, boolean>>({
    experience: false,
    skillset: false,
    works: false,
    about: false,
    hobbies: false,
    connect: false,
  });

  const [positions, setPositions] = useState(initialPositions);

  const openWindow = (type: WindowType) => {
    setWindowsState(prev => ({ ...prev, [type]: true }));
    setActiveWindow(type);
  };

  const closeWindow = (type: WindowType) => {
    setWindowsState(prev => ({ ...prev, [type]: false }));
    setActiveWindow(null);
  };

  const windows: WindowType[] = [
    'experience',
    'skillset',
    'works',
    'about',
    'hobbies',
    'connect',
  ];

  // ❌ Do NOT render Screen on mobile/tablet
   if (!isDesktop) {
    return <Mobile />; // ✔ no children needed
  }

  return (
    <Screen onClick={() => setIsMenuOpen(false)}>
      <Icon
        onExperienceClick={() => openWindow('experience')}
        onSkillsetClick={() => openWindow('skillset')}
        onWorksClick={() => openWindow('works')}
      />

      {windows.map(type =>
        windowsState[type] ? (
          <Window
            key={type}
            type={type}
            isActive={activeWindow === type}
            onFocus={() => setActiveWindow(type)}
            onClose={() => closeWindow(type)}
            position={positions[type]}
            onDragStop={(x, y) =>
              setPositions(prev => ({ ...prev, [type]: { x, y } }))
            }
          />
        ) : null
      )}

      <Menu
        isHidden={!isMenuOpen}
        onAboutMeClick={() => openWindow('about')}
        onHobbiesClick={() => openWindow('hobbies')}
        onConnectWithMeClick={() => openWindow('connect')}
      />

      <Taskbar
        onMenuClick={() => setIsMenuOpen(prev => !prev)}
        activeWindow={activeWindow}

        isExperienceOpen={windowsState.experience}
        onExperienceClick={() => openWindow('experience')}

        isSkillsetOpen={windowsState.skillset}
        onSkillsetClick={() => openWindow('skillset')}

        isWorksOpen={windowsState.works}
        onWorksClick={() => openWindow('works')}

        isAboutMeOpen={windowsState.about}
        onAboutMeClick={() => openWindow('about')}

        isHobbiesOpen={windowsState.hobbies}
        onHobbiesClick={() => openWindow('hobbies')}

        isConnectWithMeOpen={windowsState.connect}
        onConnectWithMeClick={() => openWindow('connect')}
      />
    </Screen>
  );
}

export default App;
