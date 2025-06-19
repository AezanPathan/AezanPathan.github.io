import { useRef } from 'react';
import VariableProximity from './VariableProximity';
import ShinyText from './ShinyText';
import Orb from './Orb';
import GlassIcons from './GlassIcons'
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from 'react-icons/hi'; // or use FaEnvelope from FontAwesome
import Beams from './Beams'; // Add this import
import GlassNavbar from './GlassNavbar'
import GlareHover from './GlareHover'
import GradientText from './animations/text/GradientText'

const Hero = () => {
  const containerRef = useRef(null);
  const currentPath = '/docs'

  // update with your own icons and colors
  const items = [
    { icon: <FaGithub />, color: 'blue', label: 'Files' },
    { icon: <FaLinkedin />, color: 'purple', label: 'Books' },
    { icon: <HiOutlineMail />, color: 'red', label: 'Health' }
  ];

  return (
    <>
   
    <GlassNavbar className="absolute top-4 left-1/2 transform -translate-x-1/2 z-10" />
    <div className="min-h-screen bg-[#0d0d0d] flex items-center justify-start pl-[5vw]">
      
       {/* Background Beams */}
      <div className="absolute top-0 left-0 w-full h-full z-0">

        <Beams
          beamWidth={2}
          beamHeight={25}
          beamNumber={12}
          lightColor="#5729ff"
          speed={2}
          noiseIntensity={0}
          scale={0.2}
          rotation={230}
        />
      </div>

      <div className="max-w-[600px] space-y-4">
        {/* both VariableProximity calls share the same ref for proximity calculations */}
        <div ref={containerRef} style={{ position: 'relative' }}>
          {/* Main Title */}
          <VariableProximity
            label="Software Developer"
            className="text-[clamp(2.5rem,6vw,4rem)] text-white font-sans leading-tight tracking-wide"
            fromFontVariationSettings="'wght' 400, 'opsz' 9"
            toFontVariationSettings="'wght' 1000, 'opsz' 40"
            containerRef={containerRef}
            radius={180}
            falloff="linear"
          />
          <div className="h-4" /> {/* Spacer */}
          {/* Subtitle */}
          <ShinyText text="Hi, my name is Aezan. I'm always eager to learn, focused on improving myself little by little, and passionate about turning ideas into something real." disabled={false} speed={3} className='custom-class' />

        </div>
        <GlassIcons  />
      </div>
      <div style={{ width: '100%', height: '600px', position: 'relative' }}>
        <Orb
          hoverIntensity={0.5}
          rotateOnHover={true}
          hue={0}
          forceHoverState={false}
        />


      </div>
    </div>
    </>
  );
};

export default Hero;
