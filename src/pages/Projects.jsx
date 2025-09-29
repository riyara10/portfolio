import React, { useState, useEffect } from 'react';
import {
  Container,
  Grid,
  Typography,
  Box,
  CircularProgress,
  Alert
} from '@mui/material';
import Projectcard from '../components/Projectcard';

function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const mockProjects = [
    {
      id: 1,
      title: "Horizon Financial",
      description: "Full-stack website with HTMLJS & Localstorage",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhlyzlyMjrerf2589ZdRsVOONqT6i37IdurA&s",
      techStack: ["HTML", "CSS", "JS", "BOOTSTRAP"],
      liveLink: "https://bank-app-cyan.vercel.app/",
      githubLink: "https://github.com/username/ecommerce",
      featured: true
    },
    {
      id: 2,
      title: "To Do",
      description: "Collaborative task app with real-time updates",
      image: "https://user-images.githubusercontent.com/61280281/99399723-0b3fa980-290c-11eb-8728-03d974be548d.png",
      techStack: ["HTML", "TAILWIND", "JS"],
      liveLink: "https://todo-brown-beta.vercel.app/",
      githubLink: "https://github.com/username/taskapp",
      featured: false
    },
    {
      id: 3,
      title: "Calculator App",
      description: "Calculator app with exact calculations",
      image: "https://cdn.prod.website-files.com/63f8ca18cae2585db28fd75b/63f8ca18cae2581fd38fd87a_create-interactive-website-calculator-on-webflow.png",
      techStack: ["JavaScript", "API", "Chart.js"],
      liveLink: "https://calculator-hqo7.vercel.app/",
      githubLink: "https://calculator-hqo7.vercel.app/",
      featured: true
    },
    {
      id: 4,
      title: "Discount Calculator",
      description: "Modern discount calculator with JS",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=200&fit=crop",
      techStack: ["HTML", "JS"],
      liveLink: "https://discountapp-six.vercel.app/",
      githubLink: "https://github.com/username/portfolio",
      featured: false
    },
    {
      id: 5,
      title: "Contact App",
      description: "Contact manager with option of saving the contacts",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo1UlPWZU9yycCLhBanR7q9erdS3FgbSHZOQ&s",
      techStack: ["HTML", "BOOTSTRAP", "JS"],
      liveLink: "https://contact-list-manager-navy.vercel.app/",
      githubLink: "https://github.com/username/social-app",
      featured: false
    },
    {
      id: 6,
      title: "Movie Search",
      description: "Searching the movies",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR89WhbaJzFK0jzIlSgxyDNQQkBFwp7ly0zww&s",
      techStack: ["HTML", "TAILWIND", "JS","API"],
      liveLink: "https://movie-search-beta-two.vercel.app/",
      githubLink: "https://github.com/username/chatbot",
      featured: true
    }
  ];

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true);
        await new Promise(resolve => setTimeout(resolve, 1000));
        setProjects(mockProjects);
        setError('');
      } catch (err) {
        setError('Failed to load projects. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (loading) {
    return (
      <Box
        sx={{
          background: 'linear-gradient(135deg, #003161 0%, #001a33 100%)',
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <Box textAlign="center">
          <CircularProgress sx={{ color: '#FFD700' }} />
          <Typography variant="h6" sx={{ mt: 2, color: 'white' }}>
            Loading projects...
          </Typography>
        </Box>
      </Box>
    );
  }

  if (error) {
    return (
      <Box
        sx={{
          background: 'linear-gradient(135deg, #003161 0%, #001a33 100%)',
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <Alert severity="error" sx={{ width: '100%', maxWidth: 400 }}>
          {error}
        </Alert>
      </Box>
    );
  }

  return (
    <Box
      sx={{
        background: 'linear-gradient(135deg, #003161 0%, #001a33 100%)',
        minHeight: '100vh',
        py: 8
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
            My Projects
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
            A collection of my recent work and personal projects
          </Typography>
        </Box>

        {/* Projects Grid - 3 cards per row */}
        <Grid container spacing={3}>
          {projects.map((project) => (
            <Grid item xs={12} sm={6} md={4} key={project.id}>
              <Projectcard project={project} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default Projects;