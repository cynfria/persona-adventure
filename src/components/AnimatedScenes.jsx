import { useState, useEffect, useRef } from 'react';

// Import question-one images
import q1img1 from '../assets/questions/question-one/question-one-1.png';
import q1img2 from '../assets/questions/question-one/question-one-2.png';
import q1img3 from '../assets/questions/question-one/question-one-3.png';
import q1img4 from '../assets/questions/question-one/question-one-4.png';
import q1img5 from '../assets/questions/question-one/question-one-5.png';
import q1img6 from '../assets/questions/question-one/question-one-6.png';
import q1img7 from '../assets/questions/question-one/question-one-7.png';
import q1img8 from '../assets/questions/question-one/question-one-8.png';
import q1img9 from '../assets/questions/question-one/question-one-9.png';
import q1img10 from '../assets/questions/question-one/question-one-10.png';
import q1img11 from '../assets/questions/question-one/question-one-11.png';

// Import question-two images
import q2img1 from '../assets/questions/question-two/question-two-1.png';
import q2img2 from '../assets/questions/question-two/question-two-2.png';
import q2img3 from '../assets/questions/question-two/question-two-3.png';
import q2img4 from '../assets/questions/question-two/question-two-4.png';
import q2img5 from '../assets/questions/question-two/question-two-5.png';
import q2img6 from '../assets/questions/question-two/question-two-6.png';
import q2img7 from '../assets/questions/question-two/question-two-7.png';
import q2img8 from '../assets/questions/question-two/question-two-8.png';

// Import question-three images
import q3img1 from '../assets/questions/question-three/question-three-1.png';
import q3img2 from '../assets/questions/question-three/question-three-2.png';
import q3img3 from '../assets/questions/question-three/question-three-3.png';
import q3img4 from '../assets/questions/question-three/question-three-4.png';

// Import question-four images
import q4img1 from '../assets/questions/question-four/question-four-1.png';
import q4img2 from '../assets/questions/question-four/question-four-2.png';
import q4img3 from '../assets/questions/question-four/question-four-3.png';
import q4img4 from '../assets/questions/question-four/question-four-4.png';
import q4img5 from '../assets/questions/question-four/question-four-5.png';

// Import question-five images
import q5img1 from '../assets/questions/question-five/question-five-1.png';
import q5img2 from '../assets/questions/question-five/question-five-2.png';
import q5img3 from '../assets/questions/question-five/question-five-3.png';
import q5img4 from '../assets/questions/question-five/question-five-4.png';
import q5img5 from '../assets/questions/question-five/question-five-5.png';
import q5img6 from '../assets/questions/question-five/question-five-6.png';
import q5img7 from '../assets/questions/question-five/question-five-7.png';

// Import question-six images
import q6img1 from '../assets/questions/question-six/question-six-1.png';
import q6img2 from '../assets/questions/question-six/question-six-2.png';
import q6img3 from '../assets/questions/question-six/question-six-3.png';
import q6img4 from '../assets/questions/question-six/question-six-4.png';
import q6img5 from '../assets/questions/question-six/question-six-5.png';

// Import question-seven images
import q7img1 from '../assets/questions/question-seven/question-seven-1.png';
import q7img2 from '../assets/questions/question-seven/question-seven-2.png';
import q7img3 from '../assets/questions/question-seven/question-seven-3.png';
import q7img4 from '../assets/questions/question-seven/question-seven-4.png';
import q7img5 from '../assets/questions/question-seven/question-seven-5.png';
import q7img6 from '../assets/questions/question-seven/question-seven-6.png';
import q7img7 from '../assets/questions/question-seven/question-seven-7.png';
import q7img8 from '../assets/questions/question-seven/question-seven-8.png';
import q7img9 from '../assets/questions/question-seven/question-seven-9.png';

// Import question-eight images
import q8img1 from '../assets/questions/question-eight/question-eight-1.png';
import q8img2 from '../assets/questions/question-eight/question-eight-2.png';
import q8img3 from '../assets/questions/question-eight/question-eight-3.png';
import q8img4 from '../assets/questions/question-eight/question-eight-4.png';
import q8img5 from '../assets/questions/question-eight/question-eight-5.png';
import q8img6 from '../assets/questions/question-eight/question-eight-6.png';
import q8img7 from '../assets/questions/question-eight/question-eight-7.png';

// Import question-nine images
import q9img1 from '../assets/questions/question-nine/question-nine-1.png';
import q9img2 from '../assets/questions/question-nine/question-nine-2.png';
import q9img3 from '../assets/questions/question-nine/question-nine-3.png';
import q9img4 from '../assets/questions/question-nine/question-nine-4.png';
import q9img5 from '../assets/questions/question-nine/question-nine-5.png';
import q9img6 from '../assets/questions/question-nine/question-nine-6.png';

// Import question-ten images
import q10img1 from '../assets/questions/question-ten/question-ten-1.png';
import q10img2 from '../assets/questions/question-ten/question-ten-2.png';
import q10img3 from '../assets/questions/question-ten/question-ten-3.png';
import q10img4 from '../assets/questions/question-ten/question-ten-4.png';
import q10img5 from '../assets/questions/question-ten/question-ten-5.png';
import q10img6 from '../assets/questions/question-ten/question-ten-6.png';

// Helper component for parallax scenes
const ParallaxScene = ({ images, layerConfig }) => {
  const [displayPos, setDisplayPos] = useState({ x: 0, y: 40 });
  const targetPos = useRef({ x: 0, y: 40 });
  const hasInteracted = useRef(false);

  useEffect(() => {
    let animationFrameId;

    const smoothUpdate = () => {
      setDisplayPos(current => {
        const dx = targetPos.current.x - current.x;
        const dy = targetPos.current.y - current.y;

        // No easing - instant movement
        const ease = 1;

        return {
          x: current.x + dx * ease,
          y: current.y + dy * ease
        };
      });

      animationFrameId = requestAnimationFrame(smoothUpdate);
    };

    animationFrameId = requestAnimationFrame(smoothUpdate);

    const handleMouseMove = (e) => {
      // Calculate position relative to viewport center
      const x = ((e.clientX - window.innerWidth / 2) / window.innerWidth) * 100;
      const y = ((e.clientY - window.innerHeight / 2) / window.innerHeight) * 100;
      targetPos.current = { x, y };

      if (!hasInteracted.current) {
        hasInteracted.current = true;
      }
    };

    const handleOrientation = (event) => {
      const gamma = event.gamma || 0;
      const beta = event.beta || 0;
      // Reduced sensitivity to 0.3 to keep positioning closer to browser inspector view
      const x = Math.max(-50, Math.min(50, gamma * 0.3));
      const y = Math.max(-50, Math.min(50, (beta - 90) * 0.3));
      targetPos.current = { x, y };

      if (!hasInteracted.current) {
        hasInteracted.current = true;
      }
    };

    // Add mouse tracking
    window.addEventListener('mousemove', handleMouseMove);

    // Add accelerometer support for mobile devices
    if (typeof DeviceOrientationEvent !== 'undefined' && typeof DeviceOrientationEvent.requestPermission === 'function') {
      DeviceOrientationEvent.requestPermission()
        .then(permissionState => {
          if (permissionState === 'granted') {
            window.addEventListener('deviceorientation', handleOrientation);
          }
        })
        .catch(console.error);
    } else {
      window.addEventListener('deviceorientation', handleOrientation);
    }

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('deviceorientation', handleOrientation);
    };
  }, []);

  return (
    <svg
      viewBox="0 0 800 600"
      className="animated-scene"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <style>{`
          @keyframes bounce { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-8px); } }
        `}</style>
      </defs>

      {images.map((img, index) => {
        const config = layerConfig?.[index] || {};
        const multiplier = config.multiplier || (0.1 + index * 0.05);
        const translateX = displayPos.x * multiplier;
        const translateY = displayPos.y * multiplier;

        return (
          <g
            key={index}
            transform={`translate(${translateX}, ${translateY})`}
          >
            <image
              href={img}
              x={config.x || "-30"}
              y={config.y || "-22"}
              width={config.width || "860"}
              height={config.height || "645"}
              preserveAspectRatio={config.preserveAspectRatio || "xMidYMid slice"}
              style={config.bounce ? { animation: 'bounce 2s ease-in-out infinite 1s' } : {}}
            />
          </g>
        );
      })}
    </svg>
  );
};

// Question 1: Wake up in digital world
export const Scene1 = () => {
  const layerConfig = [
    { multiplier: 0.1 },
    { multiplier: 0.12 },
    { multiplier: 0.15 },
    { multiplier: 0.18 },
    { multiplier: 0.21 },
    { multiplier: 0.24 },
    { multiplier: 0.35, x: "68", y: "23", width: "645", height: "484", preserveAspectRatio: "xMidYMid meet" },
    { multiplier: 0.28 },
    { multiplier: 0.31 },
    { multiplier: 0.34 },
    { multiplier: 0.37 }
  ];

  return <ParallaxScene images={[q1img1, q1img2, q1img3, q1img4, q1img5, q1img6, q1img7, q1img8, q1img9, q1img10, q1img11]} layerConfig={layerConfig} />;
};

// Question 2: Creature offers quest
export const Scene2 = () => {
  const layerConfig = [
    { multiplier: 0.1 },
    { multiplier: 0.15 },
    { multiplier: 0.2 },
    { multiplier: 0.25 },
    { multiplier: 0.3 },
    { multiplier: 0.35 },
    { multiplier: 0.45, x: "126", y: "60", width: "548", height: "411", preserveAspectRatio: "xMidYMid meet" },
    { multiplier: 0.5, x: "72", y: "54", width: "658", height: "493" }
  ];

  return <ParallaxScene images={[q2img1, q2img2, q2img3, q2img4, q2img5, q2img6, q2img7, q2img8]} layerConfig={layerConfig} />;
};

// Question 3: Mysterious gadget
export const Scene3 = () => {
  const layerConfig = [
    { multiplier: 0.1 },
    { multiplier: 0.15, x: "72", y: "54", width: "658", height: "493" },
    { multiplier: 0.2, x: "72", y: "54", width: "658", height: "493" },
    { multiplier: 0.25, x: "35", y: "27", width: "731", height: "548" }
  ];

  return <ParallaxScene images={[q3img1, q3img2, q3img3, q3img4]} layerConfig={layerConfig} />;
};

// Question 4: Squad needs leader
export const Scene4 = () => {
  const layerConfig = [
    { multiplier: 0.1 },
    { multiplier: 0.15, x: "35", y: "63", width: "731", height: "548" },
    { multiplier: 0.2, x: "35", y: "63", width: "731", height: "548" },
    { multiplier: 0.25, x: "35", y: "63", width: "731", height: "548" },
    { multiplier: 0.3, x: "35", y: "63", width: "731", height: "548" }
  ];

  return <ParallaxScene images={[q4img1, q4img2, q4img3, q4img4, q4img5]} layerConfig={layerConfig} />;
};

// Question 5: Locked door puzzle
export const Scene5 = () => {
  const layerConfig = [
    { multiplier: 0.1 },
    { multiplier: 0.15, x: "108", y: "81", width: "585", height: "439" },
    { multiplier: 0.2, x: "108", y: "81", width: "585", height: "439" },
    { multiplier: 0.25, x: "108", y: "81", width: "585", height: "439" },
    { multiplier: 0.3, x: "108", y: "81", width: "585", height: "439" },
    { multiplier: 0.35, x: "56", y: "42", width: "688", height: "516" },
    { multiplier: 0.4, x: "56", y: "42", width: "688", height: "516" }
  ];

  return <ParallaxScene images={[q5img1, q5img2, q5img3, q5img4, q5img5, q5img6, q5img7]} layerConfig={layerConfig} />;
};

// Question 6: Chaos alert
export const Scene6 = () => {
  const layerConfig = [
    { multiplier: 0.1 },
    { multiplier: 0.15, x: "91", y: "68", width: "619", height: "464" },
    { multiplier: 0.2, x: "91", y: "68", width: "619", height: "464" },
    { multiplier: 0.25, x: "56", y: "42", width: "688", height: "516" },
    { multiplier: 0.3, x: "56", y: "42", width: "688", height: "516" }
  ];

  return <ParallaxScene images={[q6img1, q6img2, q6img3, q6img4, q6img5]} layerConfig={layerConfig} />;
};

// Question 7: Treasure chest
export const Scene7 = () => {
  const layerConfig = [
    { multiplier: 0.1 },
    { multiplier: 0.15 },
    { multiplier: 0.2 },
    { multiplier: 0.25 },
    { multiplier: 0.3, x: "167", y: "126", width: "466", height: "349" },
    { multiplier: 0.35, x: "167", y: "118", width: "466", height: "349" },
    { multiplier: 0.4, x: "167", y: "118", width: "466", height: "349" },
    { multiplier: 0.45, x: "167", y: "118", width: "466", height: "349" },
    { multiplier: 0.5, x: "167", y: "126", width: "466", height: "349" }
  ];

  return <ParallaxScene images={[q7img1, q7img2, q7img3, q7img4, q7img5, q7img6, q7img7, q7img8, q7img9]} layerConfig={layerConfig} />;
};


// Question 8: Victory celebration
export const Scene8 = () => {
  const layerConfig = [
    { multiplier: 0.1 },
    { multiplier: 0.15, x: "35", y: "27", width: "731", height: "548" },
    { multiplier: 0.2, x: "35", y: "27", width: "731", height: "548" },
    { multiplier: 0.25, x: "35", y: "27", width: "731", height: "548" },
    { multiplier: 0.3, x: "23", y: "55", width: "731", height: "548" },
    { multiplier: 0.35, x: "44", y: "70", width: "688", height: "516" },
    { multiplier: 0.4, x: "44", y: "70", width: "688", height: "516" }
  ];

  return <ParallaxScene images={[q8img1, q8img2, q8img3, q8img4, q8img5, q8img6, q8img7]} layerConfig={layerConfig} />;
};

// Question 9: Help with project
export const Scene9 = () => {
  const layerConfig = [
    { multiplier: 0.1 },
    { multiplier: 0.15, x: "35", y: "27", width: "731", height: "548" },
    { multiplier: 0.2, x: "104", y: "78", width: "592", height: "444" },
    { multiplier: 0.25, x: "104", y: "78", width: "592", height: "444" },
    { multiplier: 0.3, x: "104", y: "78", width: "592", height: "444" },
    { multiplier: 0.35 }
  ];

  return <ParallaxScene images={[q9img1, q9img2, q9img3, q9img4, q9img5, q9img6]} layerConfig={layerConfig} />;
};

// Question 10: The end / legacy
export const Scene10 = () => {
  const layerConfig = [
    { multiplier: 0.1 },
    { multiplier: 0.15, x: "108", y: "73", width: "585", height: "439" },
    { multiplier: 0.2, x: "108", y: "73", width: "585", height: "439" },
    { multiplier: 0.25 },
    { multiplier: 0.3 },
    { multiplier: 0.35 }
  ];

  return <ParallaxScene images={[q10img1, q10img2, q10img3, q10img4, q10img5, q10img6]} layerConfig={layerConfig} />;
};