import { motion } from 'framer-motion';
import React from 'react';
import { useInView } from 'react-intersection-observer';
import styled from 'styled-components';
import profilePic from '../../images/prof_pic.png';
import { theme } from '../../styles/theme';

const AboutContainer = styled.section`
  padding: ${theme.spacing.xxl} 0;
  background: ${theme.colors.neutral.white};
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: -50%;
    right: -20%;
    width: 600px;
    height: 600px;
    background: ${theme.gradients.mesh};
    border-radius: 50%;
    opacity: 0.3;
    filter: blur(100px);
  }
`;

const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 ${theme.spacing.lg};
  position: relative;
  z-index: 1;
`;

const SectionTitle = styled(motion.h2)`
  font-family: ${theme.typography.fonts.display};
  font-size: ${theme.typography.sizes.h1};
  font-weight: ${theme.typography.weights.bold};
  color: ${theme.colors.primary.forestDeep};
  text-align: center;
  margin-bottom: ${theme.spacing.xl};
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

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${theme.spacing.xl};
  align-items: start;
  
  @media (max-width: 968px) {
    grid-template-columns: 1fr;
  }
`;

const LeftColumn = styled.div`
  position: relative;
`;

const ProfileImageWrapper = styled(motion.div)`
  position: relative;
  max-width: 500px;
  margin: 0 auto;
  
  &::before {
    content: '';
    position: absolute;
    top: -20px;
    left: -20px;
    right: 20px;
    bottom: 20px;
    background: ${theme.colors.primary.limeBright};
    border-radius: ${theme.radii.xl};
    opacity: 0.2;
    z-index: -1;
  }
`;

const ProfileImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: ${theme.radii.xl};
  box-shadow: ${theme.shadows.xl};
`;

const InfoCard = styled(motion.div)`
  background: ${theme.colors.glass.white};
  backdrop-filter: blur(10px);
  border: 1px solid ${theme.colors.glass.border};
  border-radius: ${theme.radii.lg};
  padding: ${theme.spacing.lg};
  margin-top: ${theme.spacing.lg};
`;

const InfoTitle = styled.h3`
  font-family: ${theme.typography.fonts.display};
  font-size: ${theme.typography.sizes.h4};
  font-weight: ${theme.typography.weights.bold};
  color: ${theme.colors.primary.forestDeep};
  margin-bottom: ${theme.spacing.md};
`;

const Bio = styled.p`
  font-family: ${theme.typography.fonts.body};
  font-size: ${theme.typography.sizes.bodyLarge};
  line-height: ${theme.typography.lineHeights.relaxed};
  color: ${theme.colors.neutral.stone};
  margin-bottom: ${theme.spacing.lg};
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: ${theme.spacing.sm};
`;

const SkillPill = styled(motion.div)`
  background: ${theme.colors.primary.forestDeep};
  color: ${theme.colors.neutral.white};
  padding: ${theme.spacing.sm} ${theme.spacing.md};
  border-radius: ${theme.radii.full};
  text-align: center;
  font-size: ${theme.typography.sizes.small};
  font-weight: ${theme.typography.weights.medium};
  transition: ${theme.transitions.normal};
  cursor: default;
  
  &:hover {
    background: ${theme.colors.primary.limeBright};
    color: ${theme.colors.primary.forestDeep};
    transform: translateY(-2px);
    box-shadow: ${theme.shadows.md};
  }
`;

const RightColumn = styled.div``;

const TimelineContainer = styled.div`
  position: relative;
  padding-left: ${theme.spacing.xl};
  
  &::before {
    content: '';
    position: absolute;
    left: 20px;
    top: 0;
    bottom: 0;
    width: 2px;
    background: linear-gradient(
      to bottom,
      ${theme.colors.primary.limeBright},
      ${theme.colors.primary.forestDeep}
    );
  }
`;

const TimelineItem = styled(motion.div)`
  position: relative;
  margin-bottom: ${theme.spacing.xl};
  
  &::before {
    content: '';
    position: absolute;
    left: -44px;
    top: 8px;
    width: 16px;
    height: 16px;
    background: ${theme.colors.primary.limeBright};
    border: 3px solid ${theme.colors.neutral.white};
    border-radius: 50%;
    box-shadow: ${theme.shadows.md};
  }
`;

const TimelineDate = styled.div`
  font-family: ${theme.typography.fonts.mono};
  font-size: ${theme.typography.sizes.small};
  font-weight: ${theme.typography.weights.bold};
  color: ${theme.colors.primary.limeBright};
  margin-bottom: ${theme.spacing.xs};
`;

const TimelineTitle = styled.h3`
  font-family: ${theme.typography.fonts.display};
  font-size: ${theme.typography.sizes.h4};
  font-weight: ${theme.typography.weights.bold};
  color: ${theme.colors.primary.forestDeep};
  margin-bottom: ${theme.spacing.xs};
`;

const TimelineCompany = styled.div`
  font-family: ${theme.typography.fonts.body};
  font-size: ${theme.typography.sizes.body};
  color: ${theme.colors.neutral.stone};
  margin-bottom: ${theme.spacing.sm};
  font-style: italic;
`;

const TimelineDescription = styled.p`
  font-family: ${theme.typography.fonts.body};
  font-size: ${theme.typography.sizes.body};
  line-height: ${theme.typography.lineHeights.normal};
  color: ${theme.colors.neutral.charcoal};
  
  & a {
    color: ${theme.colors.primary.limeBright};
    text-decoration: underline;
  }
`;

// Renders plain-text URLs as clickable links while preserving other text
const renderWithLinks = (text) => {
  if (!text) return text;
  const urlRegex = /(https?:\/\/[^\s)]+|www\.[^\s)]+)/gi;
  return text.split(urlRegex).map((part, index) => {
    if (part && part.match(urlRegex)) {
      const href = part.startsWith('http') ? part : `https://${part}`;
      return (
        <a key={index} href={href} target="_blank" rel="noopener noreferrer">
          {part}
        </a>
      );
    }
    return part;
  });
};

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  
  const timeline = [
    {
      date: 'Jul 2024 - Present',
      title: 'Founder & CEO',
      company: 'Omnivista (omnivista.ai)',
      description: 'Created one-click AI chatbot platform with voice/text interactions, memory, and personalization. Fully bootstrapped. Learn more at https://omnivista.ai',
    },
    {
      date: 'Jan 2025 - Present',
      title: 'AI Consultant',
      company: 'Independent Consulting',
      description: 'Providing consulting services to multiple companies for scaling AI infrastructure and strategizing implementation of AI in customer-facing products. Delivered solutions for memory, prompt iteration, and evaluation pipelines.',
    },
    {
      date: 'Jul 2021 - Oct 2023',
      title: 'Software Engineer II',
      company: 'Flexport',
      description: 'Led HTS ML Recommendation project as project lead and scrum master. Built Restricted Countries Scanning handling 290k+ daily scans. Managed 3 engineers through complete project lifecycle.',
    },
    {
      date: 'Jan 2021 - Apr 2021',
      title: 'Software Engineer Intern',
      company: 'Klarity',
      description: 'Used Python and AWS Textract for PDF table extraction. Built handwritten signature detection using OpenCV and synthetic dataset creation.',
    },
    {
      date: 'May 2021',
      title: 'Graduate',
      company: 'New York University',
      description: 'Bachelor of Arts in Computer Science and Data Science.',
    },
  ];
  
  const skills = [
    'AI Product Development', 'Voice AI', 'React', 'TypeScript',  'Project Management', 'Javascript', 'Python', 'JavaScript', 'Java',
    'Node.js', 'AWS', 'GCP',
    'ML/NLP', 'MCP', 
    'Consulting', 'Startups', 'Low Latency System Design',
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
    <AboutContainer id="about">
      <Container>
        <SectionTitle
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          About Me
        </SectionTitle>
        
        <ContentGrid ref={ref}>
          <LeftColumn>
            <ProfileImageWrapper
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <ProfileImage src={profilePic} alt="Anand Tyagi" />
            </ProfileImageWrapper>
            
            <InfoCard
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <InfoTitle>Quick Facts</InfoTitle>
              <Bio>
                I'm a technologist and entrepreneur specializing in building AI products and full-stack development. 
                After graduating from NYU with a CS & Data Science degree, I started my CS career at Flexport and eventually
                led two projects before I moved on to starting my first startup.
                Now I'm building Omnivista to help any company add the latest developments in voice technology to their products.
                I also consult from time to time for companies wanting to add AI to their products.
              </Bio>
              
              <InfoTitle>Skills</InfoTitle>
              <SkillsGrid>
                {skills.map((skill, index) => {
                  // Calculate how many pill widths this skill needs
                  const estimatedWidth = skill.length * 8; // rough character width estimate
                  const pillWidth = 120; // base pill width
                  const spanCount = Math.ceil(estimatedWidth / pillWidth);
                  
                  return (
                    <SkillPill
                      key={skill}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.3, delay: 0.5 + index * 0.05 }}
                      whileHover={{ scale: 1.05 }}
                      style={{ 
                        gridColumn: `span ${spanCount}`,
                        minWidth: `${pillWidth}px`,
                        whiteSpace: 'nowrap',
                        overflow: 'visible'
                      }}
                    >
                      {skill}
                    </SkillPill>
                  );
                })}
              </SkillsGrid>
            </InfoCard>
          </LeftColumn>
          
          <RightColumn>
            <TimelineContainer>
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
              >
                {timeline.map((item, index) => (
                  <TimelineItem
                    key={index}
                    variants={itemVariants}
                    custom={index}
                  >
                    <TimelineDate>{item.date}</TimelineDate>
                    <TimelineTitle>{item.title}</TimelineTitle>
                    <TimelineCompany>{item.company}</TimelineCompany>
                    <TimelineDescription>{renderWithLinks(item.description)}</TimelineDescription>
                  </TimelineItem>
                ))}
              </motion.div>
            </TimelineContainer>
          </RightColumn>
        </ContentGrid>
      </Container>
    </AboutContainer>
  );
};

export default About;