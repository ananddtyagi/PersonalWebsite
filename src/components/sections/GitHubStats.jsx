import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { theme } from '../../styles/theme';
import useSWR from 'swr';

const StatsContainer = styled.section`
  padding: ${theme.spacing.xxl} 0;
  background: linear-gradient(135deg, ${theme.colors.neutral.white} 0%, ${theme.colors.neutral.offWhite} 100%);
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

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${theme.spacing.lg};
  margin-bottom: ${theme.spacing.xl};
`;

const StatCard = styled(motion.div)`
  background: ${theme.colors.glass.white};
  backdrop-filter: blur(10px);
  border: 1px solid ${theme.colors.glass.border};
  border-radius: ${theme.radii.xl};
  padding: ${theme.spacing.lg};
  position: relative;
  overflow: hidden;
  transition: ${theme.transitions.normal};
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: ${theme.shadows.xl};
    border-color: ${theme.colors.primary.limeBright};
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, ${theme.colors.primary.limeBright}, ${theme.colors.primary.forestDeep});
  }
`;

const StatTitle = styled.h3`
  font-family: ${theme.typography.fonts.body};
  font-size: ${theme.typography.sizes.body};
  color: ${theme.colors.neutral.stone};
  margin-bottom: ${theme.spacing.sm};
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const StatValue = styled.div`
  font-family: ${theme.typography.fonts.display};
  font-size: ${theme.typography.sizes.h2};
  font-weight: ${theme.typography.weights.bold};
  color: ${theme.colors.primary.forestDeep};
`;

const CalendarContainer = styled(motion.div)`
  background: ${theme.colors.neutral.white};
  border-radius: ${theme.radii.xl};
  padding: ${theme.spacing.lg};
  margin-bottom: ${theme.spacing.xl};
  box-shadow: ${theme.shadows.md};
  
  .react-github-calendar {
    font-family: ${theme.typography.fonts.body};
  }
  
  .react-activity-calendar__legend-colors {
    display: flex;
    gap: 4px;
  }
`;

const LanguagesCard = styled(motion.div)`
  background: ${theme.colors.neutral.white};
  border-radius: ${theme.radii.xl};
  padding: ${theme.spacing.lg};
  box-shadow: ${theme.shadows.md};
  margin-bottom: ${theme.spacing.xl};
`;

const LanguagesGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${theme.spacing.lg};
  align-items: center;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const LanguagesList = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.md};
`;

const LanguageItem = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.md};
`;

const LanguageColor = styled.div`
  width: 16px;
  height: 16px;
  border-radius: ${theme.radii.sm};
  background: ${props => props.color};
`;

const LanguageName = styled.span`
  font-family: ${theme.typography.fonts.body};
  font-size: ${theme.typography.sizes.body};
  color: ${theme.colors.neutral.charcoal};
  flex: 1;
`;

const LanguagePercent = styled.span`
  font-family: ${theme.typography.fonts.mono};
  font-size: ${theme.typography.sizes.small};
  color: ${theme.colors.neutral.stone};
  font-weight: ${theme.typography.weights.bold};
`;

const ActivityFeed = styled(motion.div)`
  background: ${theme.colors.neutral.white};
  border-radius: ${theme.radii.xl};
  padding: ${theme.spacing.lg};
  box-shadow: ${theme.shadows.md};
`;

const ActivityTitle = styled.h3`
  font-family: ${theme.typography.fonts.display};
  font-size: ${theme.typography.sizes.h3};
  font-weight: ${theme.typography.weights.bold};
  color: ${theme.colors.primary.forestDeep};
  margin-bottom: ${theme.spacing.lg};
`;

const ActivityItem = styled(motion.div)`
  padding: ${theme.spacing.md} 0;
  border-bottom: 1px solid ${theme.colors.neutral.concrete};
  
  &:last-child {
    border-bottom: none;
  }
`;

const ActivityHeader = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.sm};
  margin-bottom: ${theme.spacing.xs};
`;

const ActivityIcon = styled.span`
  font-size: 20px;
`;

const ActivityText = styled.span`
  font-family: ${theme.typography.fonts.body};
  font-size: ${theme.typography.sizes.body};
  color: ${theme.colors.neutral.charcoal};
  flex: 1;
`;

const ActivityTime = styled.span`
  font-family: ${theme.typography.fonts.mono};
  font-size: ${theme.typography.sizes.small};
  color: ${theme.colors.neutral.stone};
`;

const fetcher = (url) => fetch(url).then((res) => res.json());

const GitHubStats = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  
  const { data: userData } = useSWR(
    'https://api.github.com/users/ananddtyagi',
    fetcher,
    { 
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
      refreshInterval: 3600000 // 1 hour
    }
  );
  
  const { data: reposData } = useSWR(
    'https://api.github.com/users/ananddtyagi/repos?per_page=100&sort=updated',
    fetcher,
    {
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
      refreshInterval: 3600000
    }
  );
  
  const { data: eventsData } = useSWR(
    'https://api.github.com/users/ananddtyagi/events/public?per_page=5',
    fetcher,
    {
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
      refreshInterval: 600000 // 10 minutes
    }
  );
  
  const stats = {
    repos: userData?.public_repos || 0,
    followers: userData?.followers || 0,
    stars: reposData?.reduce((acc, repo) => acc + repo.stargazers_count, 0) || 0,
    commits: 500, // This would need GitHub GraphQL API for accurate count
  };
  
  const languages = [
    { name: 'TypeScript', value: 45, color: '#3178c6' },
    { name: 'Python', value: 30, color: '#3776ab' },
    { name: 'Go', value: 15, color: '#00add8' },
    { name: 'JavaScript', value: 10, color: '#f7df1e' },
  ];
  
  const formatEventType = (type) => {
    const eventTypes = {
      PushEvent: '🚀 Pushed to',
      CreateEvent: '✨ Created',
      PullRequestEvent: '🔀 Pull request',
      IssuesEvent: '📝 Issue',
      WatchEvent: '⭐ Starred',
      ForkEvent: '🔱 Forked',
    };
    return eventTypes[type] || '📌 Updated';
  };
  
  const formatTimeAgo = (date) => {
    const seconds = Math.floor((new Date() - new Date(date)) / 1000);
    const intervals = {
      year: 31536000,
      month: 2592000,
      week: 604800,
      day: 86400,
      hour: 3600,
      minute: 60
    };
    
    for (const [name, value] of Object.entries(intervals)) {
      const interval = Math.floor(seconds / value);
      if (interval >= 1) {
        return `${interval} ${name}${interval > 1 ? 's' : ''} ago`;
      }
    }
    return 'just now';
  };
  
  
  return (
    <StatsContainer id="stats" ref={ref}>
      <Container>
        <SectionHeader>
          <SectionTitle
            initial={{ opacity: 0, y: -20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            Building in Public
          </SectionTitle>
          <SectionSubtitle
            initial={{ opacity: 0, y: -20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Live coding stats & contributions
          </SectionSubtitle>
        </SectionHeader>
        
        <StatsGrid>
          <StatCard
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <StatTitle>Repositories</StatTitle>
            <StatValue>
              {inView && (
                <CountUp
                  start={0}
                  end={stats.repos}
                  duration={2}
                  separator=","
                />
              )}
            </StatValue>
          </StatCard>
          
          <StatCard
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <StatTitle>Total Stars</StatTitle>
            <StatValue>
              {inView && (
                <CountUp
                  start={0}
                  end={stats.stars}
                  duration={2}
                  separator=","
                />
              )}
            </StatValue>
          </StatCard>
          
          <StatCard
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <StatTitle>Followers</StatTitle>
            <StatValue>
              {inView && (
                <CountUp
                  start={0}
                  end={stats.followers}
                  duration={2}
                  separator=","
                />
              )}
            </StatValue>
          </StatCard>
        </StatsGrid>
        
        <CalendarContainer
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <ActivityTitle>GitHub Activity</ActivityTitle>
          <p style={{ 
            fontFamily: theme.typography.fonts.body, 
            color: theme.colors.neutral.stone,
            textAlign: 'center',
            fontSize: theme.typography.sizes.body
          }}>
            Check out my GitHub profile for the full contribution calendar and activity history.
          </p>
        </CalendarContainer>
        
        <LanguagesCard
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <ActivityTitle>Languages</ActivityTitle>
          <LanguagesGrid>
            <LanguagesList>
              {languages.map((lang, index) => (
                <LanguageItem key={lang.name}>
                  <LanguageColor color={lang.color} />
                  <LanguageName>{lang.name}</LanguageName>
                  <LanguagePercent>{lang.value}%</LanguagePercent>
                </LanguageItem>
              ))}
            </LanguagesList>
            <ResponsiveContainer width="100%" height={200}>
              <PieChart>
                <Pie
                  data={languages}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={2}
                  dataKey="value"
                  animationBegin={0}
                  animationDuration={1000}
                >
                  {languages.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </LanguagesGrid>
        </LanguagesCard>
        
        <ActivityFeed
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <ActivityTitle>Recent Activity</ActivityTitle>
          {eventsData?.slice(0, 5).map((event, index) => (
            <ActivityItem
              key={event.id}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.3, delay: 0.8 + index * 0.1 }}
            >
              <ActivityHeader>
                <ActivityIcon>{formatEventType(event.type).split(' ')[0]}</ActivityIcon>
                <ActivityText>
                  {formatEventType(event.type).split(' ').slice(1).join(' ')} {event.repo.name}
                </ActivityText>
                <ActivityTime>{formatTimeAgo(event.created_at)}</ActivityTime>
              </ActivityHeader>
            </ActivityItem>
          ))}
        </ActivityFeed>
      </Container>
    </StatsContainer>
  );
};

export default GitHubStats;