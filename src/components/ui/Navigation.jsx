import { AnimatePresence, motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { theme } from '../../styles/theme';

const Nav = styled(motion.nav)`
  position: fixed;
  top: ${props => props.$scrolled ? '0' : theme.spacing.lg};
  left: 0;
  right: 0;
  z-index: ${theme.zIndex.navigation};
  transition: ${theme.transitions.slow};
`;

const NavSurface = styled(motion.div)`
  margin: 0 auto;
  width: ${props => props.$scrolled ? '100%' : 'min(1000px, calc(100% - 32px))'};
  border-radius: ${props => props.$scrolled ? '0' : theme.radii.full};
  padding: ${props => props.$scrolled ? `${theme.spacing.sm} ${theme.spacing.lg}` : `${theme.spacing.md} ${theme.spacing.lg}`};
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: ${theme.shadows.glass};
  ${props => props.$scrolled && `
    border-left: none;
    border-right: none;
    border-top: none;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  `}
  transition: ${theme.transitions.slow};
`;

const NavContainer = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 ${theme.spacing.lg};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled(Link)`
  font-family: ${theme.typography.fonts.display};
  font-size: ${props => props.$expanded ? theme.typography.sizes.h3 : theme.typography.sizes.h4};
  font-weight: ${theme.typography.weights.bold};
  color: ${theme.colors.primary.forestDeep};
  text-decoration: none;
  position: relative;
  z-index: 1001;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 0;
    height: 2px;
    background: ${theme.colors.primary.limeBright};
    transition: width ${theme.transitions.normal};
  }
  
  &:hover::after {
    width: 100%;
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: ${props => props.$expanded ? `calc(${theme.spacing.xl} + 8px)` : `calc(${theme.spacing.lg} + 8px)`};
  align-items: center;
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled.a`
  font-family: ${theme.typography.fonts.body};
  font-size: ${props => props.$expanded ? theme.typography.sizes.bodyLarge : theme.typography.sizes.body};
  font-weight: ${theme.typography.weights.medium};
  color: ${props => props.$active ? theme.colors.primary.limeBright : theme.colors.primary.forestDeep};
  text-decoration: none;
  position: relative;
  cursor: pointer;
  transition: ${theme.transitions.fast};
  
  &::before {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 50%;
    width: ${props => props.$active ? '100%' : '0'};
    height: 2px;
    background: ${theme.colors.primary.limeBright};
    transform: translateX(-50%);
    transition: width ${theme.transitions.normal};
  }
  
  &:hover {
    color: ${theme.colors.primary.limeBright};
    
    &::before {
      width: 100%;
    }
  }
`;

const MobileMenuButton = styled(motion.button)`
  display: none;
  flex-direction: column;
  gap: 4px;
  background: none;
  border: none;
  cursor: pointer;
  padding: ${theme.spacing.sm};
  z-index: 1001;
  
  @media (max-width: 768px) {
    display: flex;
  }
  
  span {
    width: 24px;
    height: 2px;
    background: ${theme.colors.primary.forestDeep};
    transition: ${theme.transitions.normal};
    transform-origin: center;
  }
  
  ${props => props.$open && `
    span:nth-child(1) {
      transform: rotate(45deg) translateY(6px);
    }
    span:nth-child(2) {
      opacity: 0;
    }
    span:nth-child(3) {
      transform: rotate(-45deg) translateY(-6px);
    }
  `}
`;

const MobileMenu = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: ${theme.colors.neutral.offWhite};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: ${theme.spacing.xl};
  z-index: 1000;
`;

const MobileNavLink = styled(motion.a)`
  font-family: ${theme.typography.fonts.display};
  font-size: ${theme.typography.sizes.h2};
  font-weight: ${theme.typography.weights.bold};
  color: ${theme.colors.primary.forestDeep};
  text-decoration: none;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 0;
    width: 0;
    height: 4px;
    background: ${theme.colors.primary.limeBright};
    transition: width ${theme.transitions.normal};
  }
  
  &:hover::after {
    width: 100%;
  }
`;

const ResumeButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: ${theme.spacing.xs} ${theme.spacing.md};
  border-radius: ${theme.radii.full};
  background: ${theme.colors.primary.forestDeep};
  color: ${theme.colors.neutral.white};
  text-decoration: none;
  font-family: ${theme.typography.fonts.body};
  font-size: ${theme.typography.sizes.body};
  font-weight: ${theme.typography.weights.medium};
  transition: ${theme.transitions.normal};
  border: 1px solid transparent;
  
  &:hover {
    background: ${theme.colors.primary.limeBright};
    color: ${theme.colors.primary.forestDeep};
    transform: translateY(-1px);
    border-color: ${theme.colors.primary.limeBright};
  }
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      const sections = ['hero', 'about', 'projects', 'blog', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);
  
  const handleNavClick = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };
  
  const navItems = [
    { href: '#about', label: 'About' },
    { href: '#projects', label: 'Projects' },
    { href: '#blog', label: 'Blog' },
    { href: '#contact', label: 'Contact' },
  ];
  
  return (
    <>
      <Nav
        $scrolled={scrolled}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <NavSurface
          $scrolled={scrolled}
          layout
          transition={{ duration: 0.8, ease: 'easeInOut' }}
        >
        <NavContainer>
          <Logo to="/" $expanded={scrolled}>ANAND TYAGI</Logo>
          
          <NavLinks $expanded={scrolled}>
            {navItems.map((item) => (
              <NavLink
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                $expanded={scrolled}
                $active={activeSection === item.href.slice(1)}
              >
                {item.label}
              </NavLink>
            ))}
          </NavLinks>
          <ResumeButton href="content/AnandTyagiResume.pdf" download>
            Resume
          </ResumeButton>
          
          <MobileMenuButton
            $open={mobileMenuOpen}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            whileTap={{ scale: 0.95 }}
          >
            <span />
            <span />
            <span />
          </MobileMenuButton>
        </NavContainer>
        </NavSurface>
      </Nav>
      
      <AnimatePresence>
        {mobileMenuOpen && (
          <MobileMenu
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3 }}
          >
            {navItems.map((item, index) => (
              <MobileNavLink
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {item.label}
              </MobileNavLink>
            ))}
          </MobileMenu>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;