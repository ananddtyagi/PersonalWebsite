import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { useInView } from 'react-intersection-observer';
import { theme } from '../../styles/theme';

const BlogContainer = styled.section`
  padding: ${theme.spacing.xxl} 0;
  background: ${theme.colors.neutral.offWhite};
`;

const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 ${theme.spacing.lg};
`;

const SectionTitle = styled(motion.h2)`
  font-family: ${theme.typography.fonts.display};
  font-size: ${theme.typography.sizes.h1};
  font-weight: ${theme.typography.weights.bold};
  color: ${theme.colors.primary.forestDeep};
  text-align: center;
  margin-bottom: ${theme.spacing.md};
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 4px;
    background: ${theme.colors.primary.limeBright};
    border-radius: ${theme.radii.full};
  }
`;

const ComingSoon = styled(motion.div)`
  text-align: center;
  padding: ${theme.spacing.xxl} 0;
`;

const ComingSoonText = styled.p`
  font-family: ${theme.typography.fonts.body};
  font-size: ${theme.typography.sizes.bodyLarge};
  color: ${theme.colors.neutral.stone};
  margin-bottom: ${theme.spacing.lg};
`;

const NotifyButton = styled(motion.button)`
  padding: ${theme.spacing.md} ${theme.spacing.xl};
  background: ${theme.colors.primary.forestDeep};
  color: ${theme.colors.neutral.white};
  border: none;
  border-radius: ${theme.radii.full};
  font-weight: ${theme.typography.weights.medium};
  font-size: ${theme.typography.sizes.body};
  cursor: pointer;
  transition: ${theme.transitions.normal};
  
  &:hover {
    background: ${theme.colors.primary.limeBright};
    color: ${theme.colors.primary.forestDeep};
    transform: translateY(-2px);
    box-shadow: ${theme.shadows.md};
  }
`;

const Blog = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  
  return (
    <BlogContainer id="blog" ref={ref}>
      <Container>
        <SectionTitle
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          Blog
        </SectionTitle>
        
        <ComingSoon
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <ComingSoonText>
            Blog posts coming soon! I'll be sharing insights on AI, startups, and engineering.
          </ComingSoonText>
          <NotifyButton
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.location.href = '#contact'}
          >
            Get Notified
          </NotifyButton>
        </ComingSoon>
      </Container>
    </BlogContainer>
  );
};

export default Blog;