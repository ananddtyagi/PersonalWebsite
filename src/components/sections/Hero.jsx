import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styled from 'styled-components';
import { theme } from '../../styles/theme';

const HeroContainer = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  background: ${theme.colors.neutral.offWhite};
`;

const BackgroundElements = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  z-index: 0;
`;

const FloatingShape = styled(motion.div)`
  position: absolute;
  background: ${props => props.gradient || theme.gradients.card};
  backdrop-filter: blur(10px);
  border: 1px solid ${theme.colors.glass.border};
  border-radius: ${props => props.shape === 'circle' ? '50%' : props.shape === 'triangle' ? '0' : theme.radii.xl};
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  ${props => props.shape === 'triangle' && `
    background: transparent;
    width: 0;
    height: 0;
    border-left: ${props.size/2}px solid transparent;
    border-right: ${props.size/2}px solid transparent;
    border-bottom: ${props.size}px solid ${theme.colors.glass.white};
  `}
`;

const ContentWrapper = styled.div`
  position: relative;
  z-index: 10;
  text-align: center;
  padding: ${theme.spacing.xl};
`;

const MainTitle = styled(motion.h1)`
  font-family: ${theme.typography.fonts.display};
  font-size: ${theme.typography.sizes.hero};
  font-weight: ${theme.typography.weights.black};
  color: ${theme.colors.primary.forestDeep};
  letter-spacing: -0.05em;
  line-height: 0.9;
  margin-bottom: ${theme.spacing.lg};
  position: relative;
  
  span {
    display: inline-block;
    position: relative;
  }
  
  .first-name {
    margin-right: 0.2em;
  }
  
  &::before {
    content: 'ANAND TYAGI';
    position: absolute;
    top: 2px;
    left: 2px;
    color: ${theme.colors.primary.limeBright};
    opacity: 0.3;
    z-index: -1;
    animation: glitch 10s infinite;
  }
  
  @keyframes glitch {
    0%, 90%, 100% { transform: translate(0); }
    92% { transform: translate(-2px, 2px); }
    94% { transform: translate(2px, -2px); }
    96% { transform: translate(-2px, -2px); }
    98% { transform: translate(2px, 2px); }
  }
`;

const RoleText = styled(motion.div)`
  font-family: ${theme.typography.fonts.body};
  font-size: ${theme.typography.sizes.h3};
  font-weight: ${theme.typography.weights.light};
  color: ${theme.colors.neutral.stone};
  min-height: 40px;
  margin-bottom: ${theme.spacing.xl};
  
  .cursor {
    display: inline-block;
    width: 3px;
    height: 1.2em;
    background: ${theme.colors.primary.limeBright};
    margin-left: 2px;
    animation: blink 1s infinite;
  }
  
  @keyframes blink {
    0%, 50% { opacity: 1; }
    51%, 100% { opacity: 0; }
  }
`;

const CTAButton = styled(motion.a)`
  display: inline-flex;
  align-items: center;
  gap: ${theme.spacing.sm};
  padding: ${theme.spacing.md} ${theme.spacing.lg};
  background: ${theme.colors.primary.forestDeep};
  color: ${theme.colors.neutral.white};
  border-radius: ${theme.radii.full};
  font-weight: ${theme.typography.weights.medium};
  font-size: ${theme.typography.sizes.body};
  transition: ${theme.transitions.normal};
  cursor: pointer;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    background: ${theme.colors.primary.limeBright};
    border-radius: 50%;
    transform: translate(-50%, -50%);
    transition: width 0.6s, height 0.6s;
  }
  
  &:hover {
    color: ${theme.colors.primary.forestDeep};
    transform: translateY(-2px);
    box-shadow: ${theme.shadows.lg};
    
    &::before {
      width: 300px;
      height: 300px;
    }
  }
  
  span {
    position: relative;
    z-index: 1;
  }
`;

const ScrollIndicator = styled(motion.div)`
  position: absolute;
  bottom: ${theme.spacing.lg};
  left: 50%;
  transform: translateX(-50%);
  width: 30px;
  height: 50px;
  border: 2px solid ${theme.colors.primary.forestDeep};
  border-radius: 25px;
  cursor: pointer;
  
  &::after {
    content: '';
    position: absolute;
    top: 8px;
    left: 50%;
    width: 6px;
    height: 6px;
    background: ${theme.colors.primary.forestDeep};
    border-radius: 50%;
    transform: translateX(-50%);
    animation: scroll 2s infinite;
  }
  
  @keyframes scroll {
    0% { transform: translateX(-50%) translateY(0); opacity: 1; }
    50% { opacity: 0.5; }
    100% { transform: translateX(-50%) translateY(20px); opacity: 0; }
  }
`;

const Hero = () => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayedRole, setDisplayedRole] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const containerRef = useRef(null);
  
  useEffect(() => {
    const roles = [
      'Founder & CEO',
      'AI Consultant',
      'Full-Stack Engineer',
      'ML Specialist',
      'Creative Technologist'
    ];
    const currentRole = roles[currentRoleIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting && displayedRole !== currentRole) {
        setDisplayedRole(currentRole.slice(0, displayedRole.length + 1));
      } else if (!isDeleting && displayedRole === currentRole) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && displayedRole !== '') {
        setDisplayedRole(displayedRole.slice(0, -1));
      } else if (isDeleting && displayedRole === '') {
        setIsDeleting(false);
        setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
      }
    }, isDeleting ? 50 : 100);
    
    return () => clearTimeout(timeout);
  }, [displayedRole, isDeleting, currentRoleIndex]);
  
  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const { clientX, clientY } = e;
    const { width, height } = containerRef.current.getBoundingClientRect();
    const x = (clientX / width - 0.5) * 20;
    const y = (clientY / height - 0.5) * 20;
    
    const shapes = containerRef.current.querySelectorAll('.floating-shape');
    shapes.forEach((shape, index) => {
      const speed = 0.1 * (index + 1);
      shape.style.transform = `translate(${x * speed}px, ${y * speed}px)`;
    });
  };
  
  const letterVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.05,
        duration: 0.5,
        ease: [0.215, 0.610, 0.355, 1.000]
      }
    })
  };
  
  const floatingShapes = [
    { shape: 'circle', size: 200, top: '10%', left: '10%', duration: 20 },
    { shape: 'square', size: 150, top: '60%', right: '15%', duration: 25 },
    { shape: 'triangle', size: 120, bottom: '20%', left: '20%', duration: 30 },
    { shape: 'circle', size: 100, top: '40%', right: '10%', duration: 22 },
    { shape: 'square', size: 80, bottom: '30%', right: '40%', duration: 28 },
  ];
  
  return (
    <HeroContainer ref={containerRef} onMouseMove={handleMouseMove}>
      <BackgroundElements>
        {floatingShapes.map((shape, index) => (
          <FloatingShape
            key={index}
            className="floating-shape"
            shape={shape.shape}
            size={shape.size}
            style={{
              top: shape.top,
              bottom: shape.bottom,
              left: shape.left,
              right: shape.right,
            }}
            animate={{
              y: [0, -30, 0],
              rotate: shape.shape === 'square' ? [0, 90, 0] : 0,
            }}
            transition={{
              duration: shape.duration,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </BackgroundElements>
      
      <ContentWrapper>
        <MainTitle>
          <motion.span
            className="first-name"
            initial="hidden"
            animate="visible"
            custom={0}
            variants={letterVariants}
          >
            ANAND
          </motion.span>
          <motion.span
            initial="hidden"
            animate="visible"
            custom={5}
            variants={letterVariants}
          >
            TYAGI
          </motion.span>
        </MainTitle>
        
        <RoleText>
          <AnimatePresence mode="wait">
            <motion.span
              key={displayedRole}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {displayedRole}
              <span className="cursor" />
            </motion.span>
          </AnimatePresence>
        </RoleText>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <CTAButton href="#contact">
            <span>Let's Build Something Amazing</span>
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.span>
          </CTAButton>
        </motion.div>
      </ContentWrapper>
      
      <ScrollIndicator
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
      />
    </HeroContainer>
  );
};

export default Hero;