import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { useInView } from 'react-intersection-observer';
import { theme } from '../../styles/theme';

const ContactContainer = styled.section`
  padding: ${theme.spacing.xxl} 0;
  background: linear-gradient(135deg, ${theme.colors.primary.forestDeep} 0%, ${theme.colors.primary.forestMid} 100%);
  position: relative;
  overflow: hidden;
`;

const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 ${theme.spacing.lg};
  text-align: center;
`;

const SectionTitle = styled(motion.h2)`
  font-family: ${theme.typography.fonts.display};
  font-size: ${theme.typography.sizes.h1};
  font-weight: ${theme.typography.weights.bold};
  color: ${theme.colors.neutral.white};
  margin-bottom: ${theme.spacing.md};
`;

const SectionSubtitle = styled(motion.p)`
  font-family: ${theme.typography.fonts.body};
  font-size: ${theme.typography.sizes.bodyLarge};
  color: ${theme.colors.primary.limeBright};
  margin-bottom: ${theme.spacing.xl};
`;

const ContactContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${theme.spacing.xl};
`;

const ContactCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: ${theme.radii.xl};
  padding: ${theme.spacing.xl};
  max-width: 600px;
  width: 100%;
`;

const CTAGroup = styled.div`
  display: flex;
  gap: ${theme.spacing.lg};
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: ${theme.spacing.xl};
`;

const CTAButton = styled(motion.a)`
  display: inline-flex;
  align-items: center;
  gap: ${theme.spacing.sm};
  padding: ${theme.spacing.md} ${theme.spacing.xl};
  background: ${theme.colors.primary.limeBright};
  color: ${theme.colors.primary.forestDeep};
  border-radius: ${theme.radii.full};
  font-weight: ${theme.typography.weights.bold};
  font-size: ${theme.typography.sizes.body};
  text-decoration: none;
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
    background: ${theme.colors.neutral.white};
    border-radius: 50%;
    transform: translate(-50%, -50%);
    transition: width 0.6s, height 0.6s;
  }
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: ${theme.shadows.xl};
    
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

const EmailButton = styled(CTAButton)`
  background: ${theme.colors.neutral.white};
  color: ${theme.colors.primary.forestDeep};
  
  &::before {
    background: ${theme.colors.primary.limeBright};
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: ${theme.spacing.lg};
  justify-content: center;
  flex-wrap: wrap;
`;

const SocialLink = styled(motion.a)`
  width: 56px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: ${theme.radii.full};
  transition: ${theme.transitions.normal};
  cursor: pointer;
  
  svg {
    width: 24px;
    height: 24px;
    fill: ${theme.colors.neutral.white};
    transition: ${theme.transitions.normal};
  }
  
  &:hover {
    background: ${theme.colors.primary.limeBright};
    border-color: ${theme.colors.primary.limeBright};
    transform: translateY(-4px);
    box-shadow: ${theme.shadows.lg};
    
    svg {
      fill: ${theme.colors.primary.forestDeep};
    }
  }
`;

const CopyToast = styled(motion.div)`
  position: fixed;
  bottom: ${theme.spacing.lg};
  left: 50%;
  transform: translateX(-50%);
  background: ${theme.colors.primary.limeBright};
  color: ${theme.colors.primary.forestDeep};
  padding: ${theme.spacing.md} ${theme.spacing.lg};
  border-radius: ${theme.radii.full};
  font-weight: ${theme.typography.weights.medium};
  box-shadow: ${theme.shadows.xl};
  z-index: 1000;
`;

const FloatingElements = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  overflow: hidden;
`;

const FloatingShape = styled(motion.div)`
  position: absolute;
  background: rgba(168, 232, 144, 0.1);
  border-radius: 50%;
  filter: blur(40px);
`;

const Contact = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  
  const [showToast, setShowToast] = useState(false);
  
  const handleEmailCopy = () => {
    navigator.clipboard.writeText('anand.deep.tyagi@gmail.com');
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };
  
  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/ananddtyagi',
      icon: (
        <svg viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      ),
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/ananddtyagi/',
      icon: (
        <svg viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
    },
    {
      name: 'YouTube',
      url: 'https://www.youtube.com/@ananddtyagi',
      icon: (
        <svg viewBox="0 0 24 24">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
      ),
    },
    {
      name: 'Medium',
      url: 'https://medium.com/@anandtyagi',
      icon: (
        <svg viewBox="0 0 24 24">
          <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
        </svg>
      ),
    },
    {
      name: 'Resume',
      url: '/content/AnandTyagiResume.pdf',
      icon: (
        <svg viewBox="0 0 24 24">
          <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20M10,13L8,13V17L13.5,13.5L8,10V12H10V13M15,15V17H10V19H15A2,2 0 0,0 17,17V15H15Z"/>
        </svg>
      ),
    },
  ];
  
  const floatingShapes = [
    { size: 300, top: '10%', left: '-10%', duration: 20 },
    { size: 200, bottom: '10%', right: '-10%', duration: 25 },
    { size: 150, top: '50%', left: '70%', duration: 30 },
  ];
  
  return (
    <ContactContainer id="contact" ref={ref}>
      <FloatingElements>
        {floatingShapes.map((shape, index) => (
          <FloatingShape
            key={index}
            style={{
              width: shape.size,
              height: shape.size,
              top: shape.top,
              bottom: shape.bottom,
              left: shape.left,
              right: shape.right,
            }}
            animate={{
              x: [0, 50, 0],
              y: [0, -50, 0],
            }}
            transition={{
              duration: shape.duration,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </FloatingElements>
      
      <Container>
        <SectionTitle
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          Let's Connect
        </SectionTitle>
        <SectionSubtitle
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Ready to build something amazing together?
        </SectionSubtitle>
        
        <ContactContent>
          <ContactCard
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <CTAGroup>
              <EmailButton
                onClick={handleEmailCopy}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Copy Email</span>
              </EmailButton>
              
              <CTAButton
                href="https://calendly.com/anandtyagi"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Schedule a Call</span>
              </CTAButton>
            </CTAGroup>
            
            <SocialLinks>
              {socialLinks.map((social, index) => (
                <SocialLink
                  key={social.name}
                  href={social.url}
                  target={social.name !== 'Resume' ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.3, delay: 0.3 + index * 0.05 }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  title={social.name}
                >
                  {social.icon}
                </SocialLink>
              ))}
            </SocialLinks>
          </ContactCard>
        </ContactContent>
      </Container>
      
      {showToast && (
        <CopyToast
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
        >
          Email copied to clipboard!
        </CopyToast>
      )}
    </ContactContainer>
  );
};

export default Contact;