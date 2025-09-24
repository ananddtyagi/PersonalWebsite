import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styled from 'styled-components';
import { theme } from '../../styles/theme';
import { Link, useLocation } from 'react-router-dom';

const Nav = styled(motion.nav)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: ${theme.zIndex.navigation};
  padding: ${theme.spacing.md} 0;
  transition: ${theme.transitions.normal};
  
  ${props => props.$scrolled && `
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    box-shadow: ${theme.shadows.glass};
  `}
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
  font-size: ${theme.typography.sizes.h4};
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
  gap: ${theme.spacing.lg};
  align-items: center;
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled.a`
  font-family: ${theme.typography.fonts.body};
  font-size: ${theme.typography.sizes.body};
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

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const location = useLocation();
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      const sections = ['hero', 'about', 'work', 'projects', 'blog', 'stats', 'contact'];
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
    { href: '#work', label: 'Work' },
    { href: '#projects', label: 'Projects' },
    { href: '#blog', label: 'Blog' },
    { href: '#stats', label: 'Stats' },
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
        <NavContainer>
          <Logo to="/">ANAND TYAGI</Logo>
          
          <NavLinks>
            {navItems.map((item) => (
              <NavLink
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                $active={activeSection === item.href.slice(1)}
              >
                {item.label}
              </NavLink>
            ))}
          </NavLinks>
          
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