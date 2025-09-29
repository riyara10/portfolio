import React from 'react';
import { Box, Container, Typography, Link, IconButton, Stack } from '@mui/material';
import { LinkedIn, GitHub, Email, Twitter } from '@mui/icons-material';

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#003161',
        color: 'white',
        py: 6,
        mt: 'auto',
        borderTop: '1px solid rgba(255, 215, 0, 0.2)'
      }}
    >
      <Container maxWidth="lg">
        <Stack
          direction={{ xs: 'column', md: 'row' }}
          justifyContent="space-between"
          alignItems="center"
          spacing={4}
        >
      
          <Box>
            <Typography 
              variant="h6" 
              sx={{ 
                fontWeight: 'bold',
                color: '#FFD700',
                mb: 1
              }}
            >
              RIYARA
            </Typography>
            <Typography variant="body2" sx={{ color: '#B0BEC5' }}>
              © {new Date().getFullYear()} All rights reserved.
            </Typography>
            <Typography variant="body2" sx={{ color: '#B0BEC5', mt: 1 }}>
         
            </Typography>
          </Box>

          {/* Center Section - Quick Links */}
          <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
            <Typography 
              variant="subtitle1" 
              sx={{ 
                fontWeight: 'bold',
                color: '#FFD700',
                mb: 2
              }}
            >
              Quick Links
            </Typography>
            <Stack direction="row" spacing={3}>
              <Link
                href="#home"
                color="inherit"
                underline="none"
                sx={{
                  color: '#B0BEC5',
                  '&:hover': {
                    color: '#FFD700',
                    transform: 'translateY(-2px)',
                    transition: 'all 0.3s ease'
                  }
                }}
              >
                Home
              </Link>
              <Link
                href="#about"
                color="inherit"
                underline="none"
                sx={{
                  color: '#B0BEC5',
                  '&:hover': {
                    color: '#FFD700',
                    transform: 'translateY(-2px)',
                    transition: 'all 0.3s ease'
                  }
                }}
              >
                About
              </Link>
              <Link
                href="#projects"
                color="inherit"
                underline="none"
                sx={{
                  color: '#B0BEC5',
                  '&:hover': {
                    color: '#FFD700',
                    transform: 'translateY(-2px)',
                    transition: 'all 0.3s ease'
                  }
                }}
              >
                Projects
              </Link>
              <Link
                href="#contact"
                color="inherit"
                underline="none"
                sx={{
                  color: '#B0BEC5',
                  '&:hover': {
                    color: '#FFD700',
                    transform: 'translateY(-2px)',
                    transition: 'all 0.3s ease'
                  }
                }}
              >
                Contact
              </Link>
            </Stack>
          </Box>


          <Box sx={{ textAlign: { xs: 'center', md: 'right' } }}>
            <Typography 
              variant="subtitle1" 
              sx={{ 
                fontWeight: 'bold',
                color: '#FFD700',
                mb: 2
              }}
            >
              Let's Connect
            </Typography>
            <Stack direction="row" spacing={1}>
              <IconButton
                href="https://linkedin.com/in/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: '#B0BEC5',
                  '&:hover': {
                    color: '#FFD700',
                    backgroundColor: 'rgba(255, 215, 0, 0.1)',
                    transform: 'scale(1.1)',
                    transition: 'all 0.3s ease'
                  }
                }}
              >
                <LinkedIn />
              </IconButton>
              <IconButton
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: '#B0BEC5',
                  '&:hover': {
                    color: '#FFD700',
                    backgroundColor: 'rgba(255, 215, 0, 0.1)',
                    transform: 'scale(1.1)',
                    transition: 'all 0.3s ease'
                  }
                }}
              >
                <GitHub />
              </IconButton>
              <IconButton
                href="mailto:your.email@example.com"
                sx={{
                  color: '#B0BEC5',
                  '&:hover': {
                    color: '#FFD700',
                    backgroundColor: 'rgba(255, 215, 0, 0.1)',
                    transform: 'scale(1.1)',
                    transition: 'all 0.3s ease'
                  }
                }}
              >
                <Email />
              </IconButton>
              <IconButton
                href="https://twitter.com/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: '#B0BEC5',
                  '&:hover': {
                    color: '#FFD700',
                    backgroundColor: 'rgba(255, 215, 0, 0.1)',
                    transform: 'scale(1.1)',
                    transition: 'all 0.3s ease'
                  }
                }}
              >
                <Twitter />
              </IconButton>
            </Stack>
            <Typography 
              variant="body2" 
              sx={{ 
                color: '#B0BEC5', 
                mt: 2,
                fontStyle: 'italic'
              }}
            >
              Ready for new opportunities
            </Typography>
          </Box>
        </Stack>

        <Box
          sx={{
            borderTop: '1px solid rgba(255, 215, 0, 0.1)',
            mt: 4,
            pt: 3,
            textAlign: 'center'
          }}
        >
          <Typography variant="body2" sx={{ color: '#90A4AE' }}>
      
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer;