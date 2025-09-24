import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { useInView } from 'react-intersection-observer';
import { theme } from '../../styles/theme';
import useSWR from 'swr';

const ProjectsContainer = styled.section`
  padding: ${theme.spacing.xxl} 0;
  background: ${theme.colors.neutral.white};
  position: relative;
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

const SectionSubtitle = styled(motion.p)`
  font-family: ${theme.typography.fonts.body};
  font-size: ${theme.typography.sizes.bodyLarge};
  color: ${theme.colors.neutral.stone};
  text-align: center;
  margin-bottom: ${theme.spacing.xl};
`;

const BentoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: minmax(200px, auto);
  gap: ${theme.spacing.lg};
  
  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

const ProjectCard = styled(motion.div)`
  background: linear-gradient(135deg, ${theme.colors.neutral.white}, ${theme.colors.neutral.offWhite});
  border: 1px solid ${theme.colors.neutral.concrete};
  border-radius: ${theme.radii.xl};
  padding: ${theme.spacing.lg};
  position: relative;
  overflow: hidden;
  cursor: pointer;
  transition: ${theme.transitions.normal};
  display: flex;
  flex-direction: column;
  
  ${props => props.$size === 'large' && `
    grid-column: span 2;
    grid-row: span 2;
  `}
  
  ${props => props.$size === 'wide' && `
    grid-column: span 2;
  `}
  
  ${props => props.$size === 'tall' && `
    grid-row: span 2;
  `}
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: ${props => props.$featured 
      ? `linear-gradient(90deg, ${theme.colors.primary.limeBright}, ${theme.colors.primary.forestDeep})`
      : theme.colors.primary.forestDeep};
    transform: scaleX(0);
    transform-origin: left;
    transition: transform ${theme.transitions.normal};
  }
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: ${theme.shadows.xl};
    border-color: ${theme.colors.primary.limeBright};
    
    &::before {
      transform: scaleX(1);
    }
    
    .project-description {
      opacity: 1;
      transform: translateY(0);
    }
    
    .project-stats {
      opacity: 1;
    }
  }
`;

const ProjectHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: ${theme.spacing.md};
`;

const ProjectTitle = styled.h3`
  font-family: ${theme.typography.fonts.display};
  font-size: ${props => props.$large ? theme.typography.sizes.h3 : theme.typography.sizes.h4};
  font-weight: ${theme.typography.weights.bold};
  color: ${theme.colors.primary.forestDeep};
  margin-bottom: ${theme.spacing.xs};
`;

const ProjectBadge = styled.span`
  background: ${theme.colors.primary.limeBright};
  color: ${theme.colors.primary.forestDeep};
  padding: ${theme.spacing.xs} ${theme.spacing.sm};
  border-radius: ${theme.radii.full};
  font-size: ${theme.typography.sizes.tiny};
  font-weight: ${theme.typography.weights.bold};
  text-transform: uppercase;
`;

const ProjectDescription = styled.p`
  font-family: ${theme.typography.fonts.body};
  font-size: ${theme.typography.sizes.body};
  color: ${theme.colors.neutral.stone};
  line-height: ${theme.typography.lineHeights.normal};
  margin-bottom: ${theme.spacing.md};
  flex: 1;
  opacity: 0.8;
  transform: translateY(10px);
  transition: ${theme.transitions.normal};
`;

const ProjectStats = styled.div`
  display: flex;
  gap: ${theme.spacing.md};
  margin-top: auto;
  padding-top: ${theme.spacing.md};
  border-top: 1px solid ${theme.colors.neutral.concrete};
  opacity: 0.6;
  transition: ${theme.transitions.normal};
`;

const Stat = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.xs};
  font-family: ${theme.typography.fonts.mono};
  font-size: ${theme.typography.sizes.small};
  color: ${theme.colors.neutral.stone};
  
  svg {
    width: 16px;
    height: 16px;
    fill: currentColor;
  }
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${theme.spacing.xs};
  margin-top: ${theme.spacing.md};
`;

const TechPill = styled.span`
  background: ${theme.colors.glass.white};
  backdrop-filter: blur(10px);
  border: 1px solid ${theme.colors.glass.border};
  color: ${theme.colors.neutral.charcoal};
  padding: ${theme.spacing.xs} ${theme.spacing.sm};
  border-radius: ${theme.radii.full};
  font-size: ${theme.typography.sizes.tiny};
  font-weight: ${theme.typography.weights.medium};
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: ${theme.spacing.sm};
  margin-top: ${theme.spacing.md};
`;

const ProjectLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: ${theme.spacing.xs};
  padding: ${theme.spacing.xs} ${theme.spacing.md};
  background: ${theme.colors.primary.forestDeep};
  color: ${theme.colors.neutral.white};
  border-radius: ${theme.radii.full};
  font-size: ${theme.typography.sizes.small};
  font-weight: ${theme.typography.weights.medium};
  text-decoration: none;
  transition: ${theme.transitions.normal};
  
  &:hover {
    background: ${theme.colors.primary.limeBright};
    color: ${theme.colors.primary.forestDeep};
    transform: scale(1.05);
  }
  
  svg {
    width: 14px;
    height: 14px;
    fill: currentColor;
  }
`;

const fetcher = (url) => fetch(url).then((res) => res.json());

const Projects = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  
  const { data: reposData } = useSWR(
    'https://api.github.com/users/ananddtyagi/repos?per_page=10&sort=updated',
    fetcher,
    {
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
      refreshInterval: 3600000
    }
  );
  
  const featuredProjects = [
    {
      id: 'omnivista',
      title: 'Omnivista',
      description: 'AI-powered chat deployment platform supporting voice and text interactions with memory and personalization.',
      size: 'large',
      featured: true,
      tech: ['React', 'TypeScript', 'Node.js', 'AI/LLMs', 'WebRTC'],
      github: null,
      demo: 'https://omnivista.ai',
      stats: { stars: 45, forks: 12 },
    },
    {
      id: 'claude-code-editor',
      title: 'Claude Code Editor',
      description: 'VS Code extension to enhance file search in Claude Code.',
      size: 'normal',
      tech: ['TypeScript', 'VS Code API'],
      github: 'https://github.com/ananddtyagi/claude-code-editor',
      stats: { stars: 234, downloads: '200+' },
    },
    {
      id: 'mcp-tools',
      title: 'MCP Tool Suite',
      description: 'Collection of Model Context Protocol tools for enhanced AI interactions.',
      size: 'wide',
      tech: ['Python', 'MCP', 'AI'],
      github: 'https://github.com/ananddtyagi/mcp-tools',
      stats: { stars: 89, forks: 23 },
    },
    {
      id: 'credit-card',
      title: 'Credit Card Suggester',
      description: 'AI chatbot to help choose the best credit card based on spending habits.',
      size: 'normal',
      tech: ['React', 'Python', 'LLMs'],
      github: 'https://github.com/ananddtyagi/credit-card-suggester',
      stats: { stars: 18, forks: 5 },
    },
    {
      id: 'context-manager',
      title: 'Context File Manager',
      description: 'CLI tool for prompt storage and reuse across projects.',
      size: 'normal',
      tech: ['Python', 'CLI'],
      github: 'https://github.com/ananddtyagi/context-manager',
      stats: { stars: 32, forks: 8 },
    },
  ];
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };
  
  return (
    <ProjectsContainer id="projects" ref={ref}>
      <Container>
        <SectionTitle
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          Featured Projects
        </SectionTitle>
        <SectionSubtitle
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Building tools and products that make a difference
        </SectionSubtitle>
        
        <BentoGrid>
          {featuredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              $size={project.size}
              $featured={project.featured}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <ProjectHeader>
                <ProjectTitle $large={project.size === 'large'}>
                  {project.title}
                </ProjectTitle>
                {project.featured && <ProjectBadge>Featured</ProjectBadge>}
              </ProjectHeader>
              
              <ProjectDescription className="project-description">
                {project.description}
              </ProjectDescription>
              
              <TechStack>
                {project.tech.map((tech) => (
                  <TechPill key={tech}>{tech}</TechPill>
                ))}
              </TechStack>
              
              <ProjectStats className="project-stats">
                {project.stats.stars && (
                  <Stat>
                    <svg viewBox="0 0 16 16">
                      <path d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25z"/>
                    </svg>
                    {project.stats.stars}
                  </Stat>
                )}
                {project.stats.forks && (
                  <Stat>
                    <svg viewBox="0 0 16 16">
                      <path d="M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878zm3.75 7.378a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3-8.75a.75.75 0 100-1.5.75.75 0 000 1.5z"/>
                    </svg>
                    {project.stats.forks}
                  </Stat>
                )}
                {project.stats.downloads && (
                  <Stat>
                    <svg viewBox="0 0 16 16">
                      <path d="M8 2a5.53 5.53 0 00-3.594 1.342c-.766.66-1.321 1.52-1.464 2.383C1.266 6.095 0 7.555 0 9.318 0 11.366 1.708 13 3.781 13h8.906C14.502 13 16 11.57 16 9.773c0-1.636-1.242-2.969-2.834-3.194C12.923 3.999 10.69 2 8 2zm2.354 6.854l-2 2a.5.5 0 01-.708 0l-2-2a.5.5 0 11.708-.708L7.5 9.293V5.5a.5.5 0 011 0v3.793l1.146-1.147a.5.5 0 01.708.708z"/>
                    </svg>
                    {project.stats.downloads}
                  </Stat>
                )}
              </ProjectStats>
              
              <ProjectLinks>
                {project.github && (
                  <ProjectLink 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <svg viewBox="0 0 16 16">
                      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>
                    </svg>
                    Code
                  </ProjectLink>
                )}
                {project.demo && (
                  <ProjectLink 
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <svg viewBox="0 0 16 16">
                      <path d="M4.715 6.542L3.343 7.914a3 3 0 104.243 4.243l1.828-1.829A3 3 0 008.586 5.5L8 6.086a1.001 1.001 0 00-.154.199 2 2 0 01.861 3.337L6.88 11.45a2 2 0 11-2.83-2.83l.793-.792a4.018 4.018 0 01-.128-1.287z"/>
                      <path d="M6.586 4.672A3 3 0 007.414 9.5l.775-.776a2 2 0 01-.896-3.346L9.12 3.55a2 2 0 112.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 10-4.243-4.243L6.586 4.672z"/>
                    </svg>
                    Demo
                  </ProjectLink>
                )}
              </ProjectLinks>
            </ProjectCard>
          ))}
        </BentoGrid>
      </Container>
    </ProjectsContainer>
  );
};

export default Projects;