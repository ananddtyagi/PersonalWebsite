import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';
import { theme } from '../../styles/theme';

const PlatformContainer = styled.section`
  padding: ${theme.spacing.xxl} 0;
  background: ${theme.colors.neutral.offWhite};
  position: relative;
  overflow: hidden;
`;

const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 ${theme.spacing.lg};
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: ${theme.spacing.xl};
`;

const SectionTitle = styled(motion.h2)`
  font-family: ${theme.typography.fonts.display};
  font-size: ${theme.typography.sizes.h1};
  font-weight: ${theme.typography.weights.bold};
  color: ${theme.colors.primary.forestDeep};
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
`;

const YouTubeSection = styled(motion.div)`
  background: ${theme.colors.neutral.white};
  border-radius: ${theme.radii.xl};
  padding: ${theme.spacing.xl};
  margin-bottom: ${theme.spacing.xl};
  box-shadow: ${theme.shadows.lg};
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, #FF0000, #CC0000);
  }
`;

const YouTubeHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${theme.spacing.lg};
  flex-wrap: wrap;
  gap: ${theme.spacing.md};
`;

const YouTubeTitle = styled.h3`
  font-family: ${theme.typography.fonts.display};
  font-size: ${theme.typography.sizes.h3};
  font-weight: ${theme.typography.weights.bold};
  color: ${theme.colors.primary.forestDeep};
  display: flex;
  align-items: center;
  gap: ${theme.spacing.sm};
  
  svg {
    width: 32px;
    height: 32px;
    fill: #FF0000;
  }
`;

const SubscribeButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: ${theme.spacing.sm};
  padding: ${theme.spacing.sm} ${theme.spacing.lg};
  background: #FF0000;
  color: white;
  border-radius: ${theme.radii.full};
  font-weight: ${theme.typography.weights.medium};
  text-decoration: none;
  transition: ${theme.transitions.normal};
  
  &:hover {
    background: #CC0000;
    transform: translateY(-2px);
    box-shadow: ${theme.shadows.md};
    color: white;
  }
`;

const VideoPreview = styled.div`
  background: ${theme.colors.neutral.concrete};
  border-radius: ${theme.radii.lg};
  aspect-ratio: 16/9;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  margin-bottom: ${theme.spacing.lg};
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(255,0,0,0.1), rgba(0,0,0,0.2));
  }
`;

const ComingSoonText = styled.div`
  font-family: ${theme.typography.fonts.display};
  font-size: ${theme.typography.sizes.h3};
  font-weight: ${theme.typography.weights.bold};
  color: ${theme.colors.neutral.stone};
  text-align: center;
  z-index: 1;
`;

const ComingSoonSubtext = styled.div`
  font-family: ${theme.typography.fonts.body};
  font-size: ${theme.typography.sizes.body};
  color: ${theme.colors.neutral.stone};
  margin-top: ${theme.spacing.sm};
  z-index: 1;
`;

const UpcomingContent = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: ${theme.spacing.md};
`;

const ContentItem = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.sm};
  padding: ${theme.spacing.md};
  background: ${theme.colors.neutral.offWhite};
  border-radius: ${theme.radii.lg};
  
  span {
    font-size: 24px;
  }
  
  p {
    font-family: ${theme.typography.fonts.body};
    font-size: ${theme.typography.sizes.body};
    color: ${theme.colors.neutral.charcoal};
  }
`;

const PlatformGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: ${theme.spacing.lg};
`;

const PlatformCard = styled(motion.a)`
  background: ${theme.colors.neutral.white};
  border-radius: ${theme.radii.xl};
  padding: ${theme.spacing.lg};
  text-decoration: none;
  position: relative;
  overflow: hidden;
  transition: ${theme.transitions.normal};
  cursor: pointer;
  display: block;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: ${props => props.$color};
  }
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: ${theme.shadows.xl};
    
    .platform-icon {
      transform: scale(1.1);
    }
  }
`;

const PlatformHeader = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.md};
  margin-bottom: ${theme.spacing.md};
`;

const PlatformIcon = styled.div`
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${props => props.$color}20;
  border-radius: ${theme.radii.md};
  transition: ${theme.transitions.normal};
  
  svg {
    width: 28px;
    height: 28px;
    fill: ${props => props.$color};
  }
`;

const PlatformName = styled.h3`
  font-family: ${theme.typography.fonts.display};
  font-size: ${theme.typography.sizes.h4};
  font-weight: ${theme.typography.weights.bold};
  color: ${theme.colors.primary.forestDeep};
`;

const PlatformStats = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.sm};
`;

const Stat = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StatLabel = styled.span`
  font-family: ${theme.typography.fonts.body};
  font-size: ${theme.typography.sizes.small};
  color: ${theme.colors.neutral.stone};
`;

const StatValue = styled.span`
  font-family: ${theme.typography.fonts.mono};
  font-size: ${theme.typography.sizes.body};
  font-weight: ${theme.typography.weights.bold};
  color: ${theme.colors.primary.forestDeep};
`;

const ContentPlatforms = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  
  const platforms = [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/ananddtyagi/',
      color: '#0A66C2',
      stats: {
        'Network': '2,500+',
        'Post Views': '100,000+',
        'Articles': '12',
      },
    },
    {
      name: 'Medium',
      url: 'https://medium.com/@anandtyagi',
      color: '#000000',
      stats: {
        'Articles': '15',
        'Reads': '50,000+',
        'Followers': '500+',
      },
    },
    {
      name: 'Twitter/X',
      url: 'https://twitter.com/ananddtyagi',
      color: '#1DA1F2',
      stats: {
        'Status': 'Coming Soon',
        'Focus': 'AI & Tech',
        'Launch': 'Q1 2025',
      },
    },
  ];
  
  const upcomingContent = [
    { icon: '🎥', text: 'AI Development Tutorials' },
    { icon: '🚀', text: 'Startup Journey Vlogs' },
    { icon: '💻', text: 'Live Coding Sessions' },
    { icon: '🎙️', text: 'Tech Interview Series' },
  ];
  
  return (
    <PlatformContainer ref={ref}>
      <Container>
        <SectionHeader>
          <SectionTitle
            initial={{ opacity: 0, y: -20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            Content & Community
          </SectionTitle>
          <SectionSubtitle
            initial={{ opacity: 0, y: -20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Follow my journey across platforms
          </SectionSubtitle>
        </SectionHeader>
        
        <YouTubeSection
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <YouTubeHeader>
            <YouTubeTitle>
              <svg viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
              YouTube Channel
            </YouTubeTitle>
            <SubscribeButton 
              href="https://www.youtube.com/@ananddtyagi" 
              target="_blank"
              rel="noopener noreferrer"
            >
              Subscribe
            </SubscribeButton>
          </YouTubeHeader>
          
          <VideoPreview>
            <ComingSoonText>Channel Launching Soon</ComingSoonText>
            <ComingSoonSubtext>Quality content on AI, coding, and startups</ComingSoonSubtext>
          </VideoPreview>
          
          <UpcomingContent>
            {upcomingContent.map((item, index) => (
              <ContentItem key={index}>
                <span>{item.icon}</span>
                <p>{item.text}</p>
              </ContentItem>
            ))}
          </UpcomingContent>
        </YouTubeSection>
        
        <PlatformGrid>
          {platforms.map((platform, index) => (
            <PlatformCard
              key={platform.name}
              href={platform.url}
              target="_blank"
              rel="noopener noreferrer"
              $color={platform.color}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <PlatformHeader>
                <PlatformIcon className="platform-icon" $color={platform.color}>
                  {platform.name === 'LinkedIn' && (
                    <svg viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  )}
                  {platform.name === 'Medium' && (
                    <svg viewBox="0 0 24 24">
                      <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
                    </svg>
                  )}
                  {platform.name === 'Twitter/X' && (
                    <svg viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                  )}
                </PlatformIcon>
                <PlatformName>{platform.name}</PlatformName>
              </PlatformHeader>
              
              <PlatformStats>
                {Object.entries(platform.stats).map(([label, value]) => (
                  <Stat key={label}>
                    <StatLabel>{label}</StatLabel>
                    <StatValue>{value}</StatValue>
                  </Stat>
                ))}
              </PlatformStats>
            </PlatformCard>
          ))}
        </PlatformGrid>
      </Container>
    </PlatformContainer>
  );
};

export default ContentPlatforms;