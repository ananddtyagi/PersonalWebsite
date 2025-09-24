import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { useInView } from 'react-intersection-observer';
import { theme } from '../../styles/theme';
import profilePic from '../../images/prof_pic.png';

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
`;

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  
  const timeline = [
    {
      date: 'Jan 2025 - Present',
      title: 'AI Consultant',
      company: 'Independent Consulting',
      description: 'Providing consulting services to help companies scale AI infrastructure and implement AI in customer-facing products.',
    },
    {
      date: 'Jul 2024 - Present',
      title: 'Founder & CEO',
      company: 'Omnivista',
      description: 'Building AI-powered chat deployment platform supporting voice and text interactions. Running 5 pilots with 2,000+ chats handled.',
    },
    {
      date: 'Jul 2021 - Oct 2023',
      title: 'Software Engineer II',
      company: 'Flexport',
      description: 'Led HTS ML Recommendation project and Restricted Countries Scanning handling 290k+ daily scans.',
    },
    {
      date: 'May 2021',
      title: 'Graduate',
      company: 'New York University',
      description: 'Bachelor of Arts in Computer Science and Data Science.',
    },
  ];
  
  const skills = [
    'React/Next.js', 'TypeScript', 'Python', 'Go', 
    'LLMs/AI', 'Node.js', 'AWS', 'Docker',
    'ML/NLP', 'System Design', 'Leadership', 'Consulting'
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
                I'm a technologist and entrepreneur passionate about building AI-powered solutions 
                that make a real impact. Currently leading Omnivista and helping companies scale 
                their AI infrastructure through consulting.
              </Bio>
              
              <InfoTitle>Skills</InfoTitle>
              <SkillsGrid>
                {skills.map((skill, index) => (
                  <SkillPill
                    key={skill}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: 0.5 + index * 0.05 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    {skill}
                  </SkillPill>
                ))}
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
                    <TimelineDescription>{item.description}</TimelineDescription>
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