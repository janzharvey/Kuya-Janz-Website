import { ReactNode, useEffect } from "react";
import pixarPicture from '../assets/img/pixar-picture.png';
import TypeWriter from 'typewriter-effect';
 

type ScreenProps = {
  children: ReactNode;
  onClick?: () => void;
};

const Screen = ({ children, onClick }: ScreenProps) => {
   

  return (
    <div className="screen bg-charcoal" onClick={onClick}>
      {children}
      <div style={{ top: '50px', right: '50px', zIndex: '-1'}} className="d-flex flex-column position-absolute">
       <TypeWriter
          options={{
            delay: 60,
          }}
          onInit={(typewriter) => {
            typewriter
              .typeString(
                `<span class="fs-1 fw-bold text-white">Hi <span class="fs-1 fw-light">my friend</span></span>,`)
                .pauseFor(500)
                .typeString(`<span class="fs-1 fw-light  text-white"> I'm <span class="fs-1 fw-bold">Kuya Janz.</span></span>` )            
                .pauseFor(1000)
                .typeString(`<br/><span class="fs-2 fw-light  text-white">Welcome to my <span class="fs-2 fw-bold">Website.</span></span>`)
                .pauseFor(500)
                .typeString(`<br/><span class="fs-4 fw-light  text-white">This is where I share my work, ideas, and things </br> I’m passionate about.</span>`)
                .pauseFor(500)
                .typeString(`<span class="fs-4 fw-light  text-white"> Feel free to explore and </br>  get to know me better.</span>`)
                .start();
          }}
        />     
      </div>
      <div className="position-absolute end-0 bottom-0 z-0">
        <img
          style={{ width: '600px' }}
          src={pixarPicture}
          alt="pixar picture"
        />
      </div>
      </div>

  

  );
};

export default Screen;
