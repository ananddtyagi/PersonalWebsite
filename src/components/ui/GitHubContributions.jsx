import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { theme } from '../../styles/theme';

const ContributionsContainer = styled.div`
  background: ${theme.colors.neutral.white};
  border-radius: ${theme.radii.xl};
  padding: ${theme.spacing.lg};
  margin-bottom: ${theme.spacing.xl};
  box-shadow: ${theme.shadows.md};
`;

const ContributionsTitle = styled.h3`
  font-family: ${theme.typography.fonts.display};
  font-size: ${theme.typography.sizes.h3};
  font-weight: ${theme.typography.weights.bold};
  color: ${theme.colors.primary.forestDeep};
  margin-bottom: ${theme.spacing.lg};
  text-align: center;
`;

const ContributionsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(53, 1fr);
  grid-template-rows: repeat(7, 1fr);
  gap: 3px;
  max-width: 722px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    gap: 2px;
    transform: scale(0.8);
  }
`;

const ContributionDay = styled(motion.div)`
  width: 11px;
  height: 11px;
  border-radius: 2px;
  background: ${props => props.$color || (() => {
    const level = props.$level || 0;
    if (level === 0) return theme.colors.neutral.concrete;
    if (level === 1) return `${theme.colors.primary.limeBright}40`;
    if (level === 2) return `${theme.colors.primary.limeBright}60`;
    if (level === 3) return `${theme.colors.primary.limeBright}80`;
    return theme.colors.primary.limeBright;
  })()};
  cursor: pointer;
  transition: ${theme.transitions.fast};
  
  &:hover {
    transform: scale(1.2);
    border: 1px solid ${theme.colors.primary.forestDeep};
  }
`;

const ContributionsLegend = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${theme.spacing.xs};
  margin-top: ${theme.spacing.md};
  font-family: ${theme.typography.fonts.body};
  font-size: ${theme.typography.sizes.small};
  color: ${theme.colors.neutral.stone};
`;

const LegendItem = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

const LegendSquare = styled.div`
  width: 11px;
  height: 11px;
  border-radius: 2px;
  background: ${props => props.color};
`;

// Removed per request: mini stats below the grid; keep card focused on the grid only

const GitHubContributions = () => {
  const [contributions, setContributions] = useState([]);
  const username = 'ananddtyagi';
  
  useEffect(() => {
    const token = process.env.REACT_APP_GITHUB_TOKEN;
    const fetchRealContributions = async () => {
      try {
        if (!token) {
          // Fallback: don't block render; keep empty (or consider mock if desired)
          return;
        }
        const query = `
          query($login: String!) {
            user(login: $login) {
              contributionsCollection {
                contributionCalendar {
                  weeks { contributionDays { date contributionCount color } }
                }
              }
            }
          }
        `;
        const res = await fetch('https://api.github.com/graphql', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
          },
          body: JSON.stringify({ query, variables: { login: username } }),
        });
        const json = await res.json();
        const weeks = json?.data?.user?.contributionsCollection?.contributionCalendar?.weeks || [];
        const days = weeks.flatMap(w => w.contributionDays || []);
        const normalized = days.map(d => ({
          date: d.date,
          count: d.contributionCount,
          color: d.color,
        }));
        setContributions(normalized);
      } catch (e) {
        // Silent fail; leave grid empty if request fails
      }
    };
    fetchRealContributions();
  }, []);
  
  const legendItems = [
    { label: 'Less', color: theme.colors.neutral.concrete },
    { label: '', color: `${theme.colors.primary.limeBright}40` },
    { label: '', color: `${theme.colors.primary.limeBright}60` },
    { label: '', color: `${theme.colors.primary.limeBright}80` },
    { label: 'More', color: theme.colors.primary.limeBright },
  ];
  
  return (
    <ContributionsContainer>
      <ContributionsTitle>GitHub Contributions</ContributionsTitle>
      
      <ContributionsGrid>
        {contributions.map((day, index) => (
          <ContributionDay
            key={day.date}
            $level={day.level}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ 
              duration: 0.1, 
              delay: index * 0.001,
              ease: "easeOut"
            }}
            whileHover={{ scale: 1.2 }}
            title={`${day.count} contributions on ${day.date}`}
          />
        ))}
      </ContributionsGrid>
      
      <ContributionsLegend>
        {legendItems.map((item, index) => (
          <LegendItem key={index}>
            {item.label && <span>{item.label}</span>}
            <LegendSquare color={item.color} />
          </LegendItem>
        ))}
      </ContributionsLegend>
    </ContributionsContainer>
  );
};

export default GitHubContributions;