import React, { useState, useEffect } from 'react';
import { Box, Container, Typography, Button, Stack, IconButton, Paper, Grid, CircularProgress } from '@mui/material';
import { LinkedIn, GitHub, Email, Download, ArrowDownward } from '@mui/icons-material';

// Custom hook for typing effect
const useTypewriter = (text, speed = 100) => {
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < text.length) {
        setDisplayText(text.substring(0, i + 1));
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, speed);

    return () => clearInterval(typingInterval);
  }, [text, speed]);

  return displayText;
};

// Circular Progress with Label component
const CircularProgressWithLabel = ({ value, skill, color = "#FFD700" }) => {
  return (
    <Box sx={{ position: 'relative', display: 'inline-flex', flexDirection: 'column', alignItems: 'center' }}>
      <CircularProgress
        variant="determinate"
        value={value}
        size={100}
        thickness={3}
        sx={{
          color: color,
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
          borderRadius: '50%',
          padding: '8px'
        }}
      />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography variant="h6" component="div" sx={{ color: '#FFD700', fontWeight: 'bold' }}>
          {`${Math.round(value)}%`}
        </Typography>
      </Box>
      <Typography variant="body1" sx={{ color: '#E3F2FD', mt: 2, fontWeight: '500', textAlign: 'center' }}>
        {skill}
      </Typography>
    </Box>
  );
};

function Home() {
  const greeting = useTypewriter("Hi, I'm Riyara", 120);
  const title = useTypewriter("Full Stack Developer", 100);
  const description = useTypewriter(
    "I specialize in creating beautiful, functional web applications using cutting-edge technologies. With strong expertise in React, Node.js, and modern development frameworks, I build scalable solutions that deliver exceptional user experiences. Passionate about clean code, intuitive user interfaces, and transforming innovative ideas into reality. I thrive on solving complex challenges and continuously learning new technologies to stay ahead in the ever-evolving web development landscape. Let's collaborate to bring your digital vision to life!",
    35
  );

  const handleDownloadCV = () => {

    const link = document.createElement('a');
    link.href = 'public/assets/resume_riyara.pdf'; 
    link.download = 'Riyara_FullStack_Developer_CV.pdf';
    link.click();
  };

  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToSkills = () => {
    const element = document.getElementById('technical-skills');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Technical Skills Data
  const technicalSkills = [
    { skill: 'React.js', percentage: 90 },

    { skill: 'JavaScript', percentage: 80 },
      { skill: 'HTML5', percentage: 95 },
   { skill: 'CSS', percentage: 85 },
  
  ];

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          background: 'linear-gradient(135deg, #003161 0%, #001a33 100%)',
          color: 'white',
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        {/* Background decorative elements */}
        <Box
          sx={{
            position: 'absolute',
            top: -100,
            right: -100,
            width: 300,
            height: 300,
            borderRadius: '50%',
            background: 'rgba(255, 215, 0, 0.1)',
            zIndex: 0
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            bottom: -50,
            left: -50,
            width: 200,
            height: 200,
            borderRadius: '50%',
            background: 'rgba(255, 215, 0, 0.05)',
            zIndex: 0
          }}
        />

        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: 4
            }}
          >
            {/* Left Content - Introduction */}
            <Box sx={{ 
              flex: 1, 
              textAlign: { xs: 'center', md: 'left' },
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center'
            }}>
              <Typography
                variant="h3"
                component="h1"
                sx={{
                  fontWeight: 'bold',
                  mb: 2,
                  background: 'linear-gradient(45deg, #FFD700, #FFED4E)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  color: 'transparent',
                  fontSize: { xs: '2rem', md: '3rem' },
                  minHeight: '4rem',
                  lineHeight: 1.2
                }}
              >
                {greeting}
                <Box
                  component="span"
                  sx={{
                    animation: 'blink 1s infinite',
                    marginLeft: '2px'
                  }}
                >
                  |
                </Box>
              </Typography>
              
              <Typography
                variant="h4"
                component="h2"
                sx={{
                  fontWeight: '600',
                  mb: 3,
                  color: '#E3F2FD',
                  fontSize: { xs: '1.5rem', md: '2rem' },
                  minHeight: '2.5rem',
                  lineHeight: 1.3
                }}
              >
                {title}
              </Typography>

              <Typography
                variant="h6"
                sx={{
                  color: '#BBDEFB',
                  mb: 4,
                  lineHeight: 1.8,
                  maxWidth: '550px',
                  mx: { xs: 'auto', md: 0 },
                  minHeight: { xs: '10rem', md: '9rem' },
                  fontSize: { xs: '1rem', md: '1.15rem' },
                  textAlign: { xs: 'center', md: 'left' },
                  textAlignLast: { xs: 'center', md: 'left' },
                  hyphens: 'auto',
                  wordWrap: 'break-word',
                  overflowWrap: 'break-word',
                  paddingRight: { md: 2 }
                }}
              >
                {description}
              </Typography>

              {/* Call-to-Action Buttons */}
              <Stack
                direction={{ xs: 'column', sm: 'row' }}
                spacing={2}
                sx={{ 
                  mb: 4, 
                  justifyContent: { xs: 'center', md: 'flex-start' },
                  alignItems: { xs: 'center', md: 'flex-start' }
                }}
              >
                <Button
                  variant="contained"
                  size="large"
                  startIcon={<Download />}
                  onClick={handleDownloadCV}
                  sx={{
                    backgroundColor: '#FFD700',
                    color: '#003161',
                    fontWeight: 'bold',
                    px: 4,
                    py: 1.5,
                    '&:hover': {
                      backgroundColor: '#FFED4E',
                      transform: 'translateY(-2px)',
                      boxShadow: '0 8px 25px rgba(255, 215, 0, 0.3)'
                    },
                    transition: 'all 0.3s ease'
                  }}
                >
                  Download CV
                </Button>
                
               
              </Stack>

              {/* Social Media Links */}
              <Box sx={{ 
                mb: 4,
                textAlign: { xs: 'center', md: 'left' }
              }}>
                <Typography variant="body1" sx={{ 
                  color: '#90CAF9', 
                  mb: 2, 
                  fontWeight: '500',
                  fontSize: '1.1rem'
                }}>
                  Connect with me
                </Typography>
                <Stack direction="row" spacing={1} sx={{ 
                  justifyContent: { xs: 'center', md: 'flex-start' } 
                }}>
                  <IconButton
                    component="a"
                    href="https://linkedin.com/in/yourprofile"
                    target="_blank"
                    sx={{
                      color: '#FFD700',
                      backgroundColor: 'rgba(255, 215, 0, 0.1)',
                      '&:hover': {
                        backgroundColor: '#FFD700',
                        color: '#003161',
                        transform: 'scale(1.1)'
                      },
                      transition: 'all 0.3s ease'
                    }}
                  >
                    <LinkedIn />
                  </IconButton>
                  <IconButton
                    component="a"
                    href="https://github.com/yourusername"
                    target="_blank"
                    sx={{
                      color: '#FFD700',
                      backgroundColor: 'rgba(255, 215, 0, 0.1)',
                      '&:hover': {
                        backgroundColor: '#FFD700',
                        color: '#003161',
                        transform: 'scale(1.1)'
                      },
                      transition: 'all 0.3s ease'
                    }}
                  >
                    <GitHub />
                  </IconButton>
                  <IconButton
                    component="a"
                    href="mailto:your.email@example.com"
                    sx={{
                      color: '#FFD700',
                      backgroundColor: 'rgba(255, 215, 0, 0.1)',
                      '&:hover': {
                        backgroundColor: '#FFD700',
                        color: '#003161',
                        transform: 'scale(1.1)'
                      },
                      transition: 'all 0.3s ease'
                    }}
                  >
                    <Email />
                  </IconButton>
                </Stack>
              </Box>
            </Box>

            {/* Right Content - Profile Image */}
            <Box sx={{ 
              flex: 1, 
              display: 'flex', 
              justifyContent: 'center',
              alignItems: 'center'
            }}>
              <Paper
                elevation={8}
                sx={{
                  width: { xs: 320, md: 450 },
                  height: { xs: 320, md: 450 },
                  borderRadius: '16px',
              
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'relative',
                  overflow: 'hidden',
                  padding: '0px',
                  border: 'none'
                }}
              >
                {/* Profile Image */}
                <Box
                  component="img"
                  src="/assets/images/profile.jpg"
                  alt="Riyara - Full Stack Developer"
                  sx={{
                    width: '900px',
                    height: '900px',
                    objectFit: 'cover',
                    borderRadius: '16px',
                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
                    border: 'none'
                  }}
                  onError={(e) => {
                    // Fallback if image doesn't load
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                {/* Fallback content if image doesn't load */}
                <Box
                  sx={{
                    display: 'none',
                    width: '100%',
                    height: '100%',
                    background: 'linear-gradient(135deg, #003161, #001a33)',
                    borderRadius: '16px',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#FFD700',
                    flexDirection: 'column',
                    textAlign: 'center',
                    p: 2,
                    border: 'none'
                  }}
                >
                  <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
                    Profile Image
                  </Typography>
                  <Typography variant="body2">
                    Place your image at:<br />
                    public/assets/images/profile.jpg
                  </Typography>
                </Box>
              </Paper>
            </Box>
          </Box>

          {/* Scroll Down Indicator */}
          <Box
            sx={{
              position: 'absolute',
              bottom: 30,
              left: '50%',
              transform: 'translateX(-50%)',
              textAlign: 'center'
            }}
          >
            <IconButton
              onClick={scrollToSkills}
              sx={{
                color: '#FFD700',
                animation: 'bounce 2s infinite',
                '&:hover': {
                  backgroundColor: 'rgba(255, 215, 0, 0.1)',
                  transform: 'scale(1.1)'
                }
              }}
            >
         
            </IconButton>
          </Box>
        </Container>

        {/* Add animations */}
        <style jsx>{`
          @keyframes bounce {
            0%, 20%, 50%, 80%, 100% {
              transform: translateY(0);
            }
            40% {
              transform: translateY(-10px);
            }
            60% {
              transform: translateY(-5px);
            }
          }

          @keyframes blink {
            0%, 100% {
              opacity: 1;
            }
            50% {
              opacity: 0;
            }
          }
        `}</style>
      </Box>

      {/* Technical Skills Section */}
      <Box
        id="technical-skills"
        sx={{
          background: 'linear-gradient(135deg, #001a33 0%, #003161 100%)',
          color: 'white',
          py: { xs: 8, md: 12 },
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        {/* Background decorative elements */}
        <Box
          sx={{
            position: 'absolute',
            top: -50,
            right: -50,
            width: 200,
            height: 200,
            borderRadius: '50%',
            background: 'rgba(255, 215, 0, 0.05)',
            zIndex: 0
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            bottom: -30,
            left: -30,
            width: 150,
            height: 150,
            borderRadius: '50%',
            background: 'rgba(255, 215, 0, 0.03)',
            zIndex: 0
          }}
        />

        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <Box sx={{ textAlign: 'center', mb: { xs: 6, md: 8 } }}>
            <Typography
              variant="h3"
              component="h2"
              sx={{
                fontWeight: 'bold',
                mb: 2,
                background: 'linear-gradient(45deg, #FFD700, #FFED4E)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                color: 'transparent',
                fontSize: { xs: '2rem', md: '2.5rem' }
              }}
            >
              Technical Skills
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: '#BBDEFB',
                maxWidth: '600px',
                mx: 'auto',
                fontSize: { xs: '1rem', md: '1.1rem' }
              }}
            >
              Here are the technologies and tools I work with to bring ideas to life
            </Typography>
          </Box>

          <Grid container spacing={4} justifyContent="center">
            {technicalSkills.map((tech, index) => (
              <Grid item xs={6} sm={4} md={3} key={tech.skill} sx={{ textAlign: 'center' }}>
                <CircularProgressWithLabel 
                  value={tech.percentage} 
                  skill={tech.skill}
                  color={index % 2 === 0 ? "#FFD700" : "#FFED4E"}
                />
              </Grid>
            ))}
          </Grid>

          {/* Additional Skills List */}
          <Box sx={{ mt: 8, textAlign: 'center' }}>
            <Typography
              variant="h5"
              sx={{
                color: '#E3F2FD',
                mb: 3,
                fontWeight: '600'
              }}
            >
              Other Technologies & Tools
            </Typography>
            <Box
              sx={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                gap: 2,
                maxWidth: '800px',
                mx: 'auto'
              }}
            >
              {['BOOTSTRAP', 'TAILWIND', 'FIGMA', 'MATERIAL UI',  'REST APIs'].map((skill) => (
                <Paper
                  key={skill}
                  elevation={2}
                  sx={{
                    px: 3,
                    py: 1.5,
                    backgroundColor: 'rgba(255, 215, 0, 0.1)',
                    border: '1px solid rgba(255, 215, 0, 0.3)',
                    borderRadius: '20px',
                    color: '#FFD700',
                    fontWeight: '500',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      backgroundColor: 'rgba(255, 215, 0, 0.2)',
                      transform: 'translateY(-2px)'
                    }
                  }}
                >
                  {skill}
                </Paper>
              ))}
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}

export default Home;