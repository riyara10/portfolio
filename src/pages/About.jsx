import React from 'react';
import { Box, Container, Typography, Paper, Grid, Avatar, Stack } from '@mui/material';
import { School, Psychology, TrendingUp } from '@mui/icons-material';

function About() {
  return (
    <Box
      sx={{
        background: 'linear-gradient(135deg, #003161 0%, #001a33 100%)',
        color: 'white',
        minHeight: '100vh',
        py: 8,
        display: 'flex',
        alignItems: 'center'
      }}
    >
      <Container maxWidth="lg">
        {/* Header */}
        <Box textAlign="center" mb={6}>
          <Typography
            variant="h3"
            component="h1"
            sx={{
              fontWeight: 'bold',
              mb: 2,
              background: 'linear-gradient(45deg, #FFD700, #FFED4E)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              color: 'transparent'
            }}
          >
            About Me
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: '#BBDEFB',
              maxWidth: '600px',
              mx: 'auto',
              lineHeight: 1.6
            }}
          >
            Passionate MCA Graduate & Full Stack Developer specializing in MERN Stack
          </Typography>
        </Box>

        <Stack spacing={4}>
          {/* Personal Bio Section */}
          <Paper
            sx={{
              background: 'rgba(255, 255, 255, 0.05)',
              borderRadius: 3,
              p: 4,
              border: '1px solid rgba(255, 215, 0, 0.1)'
            }}
          >
            <Box display="flex" alignItems="center" mb={3}>
              <Avatar
                sx={{
                  bgcolor: '#FFD700',
                  width: 60,
                  height: 60,
                  mr: 3
                }}
              >
                <Psychology fontSize="large" />
              </Avatar>
              <Typography variant="h4" component="h2" sx={{ color: '#FFD700', fontWeight: '600' }}>
                Personal Bio
              </Typography>
            </Box>
            
            <Typography variant="body1" sx={{ color: '#E3F2FD', lineHeight: 1.8, mb: 3 }}>
              I am a passionate and dedicated MCA graduate with a strong foundation in computer science 
              and software development. My journey in technology began with a curiosity for how software 
              applications work, which evolved into a deep passion for creating innovative web solutions.
            </Typography>
            
            <Typography variant="body1" sx={{ color: '#E3F2FD', lineHeight: 1.8 }}>
              During my Master's program, I developed expertise in various programming languages, 
              database management systems, and software engineering principles. I particularly fell in 
              love with web development and found my calling in the MERN stack ecosystem.
            </Typography>
          </Paper>

          {/* Education Section */}
          <Paper
            sx={{
              background: 'rgba(255, 255, 255, 0.05)',
              borderRadius: 3,
              p: 4,
              border: '1px solid rgba(255, 215, 0, 0.1)'
            }}
          >
            <Box display="flex" alignItems="center" mb={3}>
              <Avatar
                sx={{
                  bgcolor: '#FFD700',
                  width: 60,
                  height: 60,
                  mr: 3
                }}
              >
                <School fontSize="large" />
              </Avatar>
              <Typography variant="h4" component="h2" sx={{ color: '#FFD700', fontWeight: '600' }}>
                Education
              </Typography>
            </Box>

            <Box>
              <Typography variant="h5" sx={{ color: '#FFD700', fontWeight: 'bold', mb: 1 }}>
                Master of Computer Applications (MCA)
              </Typography>
              <Typography variant="h6" sx={{ color: '#90CAF9', mb: 2 }}>
                Graduate • 2020-2025
              </Typography>
              <Typography variant="body1" sx={{ color: '#E3F2FD', mb: 3, lineHeight: 1.8 }}>
                Completed comprehensive coursework in advanced computer science concepts including 
                Data Structures, Algorithms, Database Management Systems, Web Technologies, 
                and Software Engineering.
              </Typography>
              
              <Box display="flex" flexWrap="wrap" gap={1}>
                {['Data Structures', 'Algorithms', 'DBMS', 'Web Technologies', 'Software Engineering'].map((skill) => (
                  <Box
                    key={skill}
                    sx={{
                      px: 2,
                      py: 1,
                      backgroundColor: 'rgba(255, 215, 0, 0.1)',
                      border: '1px solid rgba(255, 215, 0, 0.3)',
                      borderRadius: '16px',
                      color: '#FFD700',
                      fontWeight: '500',
                      fontSize: '0.9rem'
                    }}
                  >
                    {skill}
                  </Box>
                ))}
              </Box>
            </Box>
          </Paper>

          {/* Career Goals Section */}
          <Paper
            sx={{
              background: 'rgba(255, 255, 255, 0.05)',
              borderRadius: 3,
              p: 4,
              border: '1px solid rgba(255, 215, 0, 0.1)'
            }}
          >
            <Box display="flex" alignItems="center" mb={3}>
              <Avatar
                sx={{
                  bgcolor: '#FFD700',
                  width: 60,
                  height: 60,
                  mr: 3
                }}
              >
                <TrendingUp fontSize="large" />
              </Avatar>
              <Typography variant="h4" component="h2" sx={{ color: '#FFD700', fontWeight: '600' }}>
                Career Goals & Objectives
              </Typography>
            </Box>

            <Grid container spacing={4}>
              {/* Short Term Goals */}
              <Grid item xs={12} md={6}>
                <Box
                  sx={{
                
                    p: 3,
                    height: '100%'
                  }}
                >
                  <Typography variant="h5" sx={{ color: '#FFD700', fontWeight: '600', mb: 3 }}>
                    Short Term Goals
                  </Typography>
                  <Typography variant="body1" sx={{ color: '#E3F2FD', mb: 2, lineHeight: 1.7 }}>
                    • Master MERN Stack: Become proficient in MongoDB, Express.js, React, and Node.js
                  </Typography>
                  <Typography variant="body1" sx={{ color: '#E3F2FD', mb: 2, lineHeight: 1.7 }}>
                    • Build Portfolio: Develop 5+ full-stack projects showcasing MERN expertise
                  </Typography>
                  <Typography variant="body1" sx={{ color: '#E3F2FD', mb: 2, lineHeight: 1.7 }}>
                    • Open Source Contribution: Actively contribute to MERN-based open source projects
                  </Typography>
                  <Typography variant="body1" sx={{ color: '#E3F2FD', lineHeight: 1.7 }}>
                    • Industry Ready: Prepare for full-stack developer roles in tech companies
                  </Typography>
              

                  <Typography variant="h5" sx={{ color: '#FFD700', fontWeight: '600', mb: 3 }}>
                    Long Term Goals
                  </Typography>
                  <Typography variant="body1" sx={{ color: '#E3F2FD', mb: 2, lineHeight: 1.7 }}>
                    • Senior Developer: Grow into a senior full-stack developer role
                  </Typography>
                  <Typography variant="body1" sx={{ color: '#E3F2FD', mb: 2, lineHeight: 1.7 }}>
                    • Technical Leadership: Mentor junior developers and lead technical teams
                  </Typography>
                  <Typography variant="body1" sx={{ color: '#E3F2FD', mb: 2, lineHeight: 1.7 }}>
                    • Architecture Design: Design and architect scalable web applications
                  </Typography>
                  <Typography variant="body1" sx={{ color: '#E3F2FD', lineHeight: 1.7 }}>
                    • Innovation: Contribute to cutting-edge web technologies and frameworks
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Paper>
        </Stack>
      </Container>
    </Box>
  );
}

export default About;