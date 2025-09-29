import React from 'react';
import {
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Typography,
  Chip,
  Button,
  Box,
  Stack
} from '@mui/material';

function Projectcard({ project }) {
  const {
    title,
    description,
    image,
    techStack,
    liveLink,
    githubLink,
    featured = false
  } = project;

  return (
    <Card 
      sx={{ 
        height: '400px',
        display: 'flex',
        flexDirection: 'column',
        background: 'rgba(255, 255, 255, 0.05)',
        border: featured ? '2px solid #FFD700' : '1px solid rgba(255, 215, 0, 0.2)',
        borderRadius: 2,
        transition: 'all 0.3s ease',
        '&:hover': {
          transform: 'translateY(-4px)',
          boxShadow: '0 8px 25px rgba(0, 0, 0, 0.3)',
          borderColor: '#FFD700'
        }
      }}
    >
      {/* Project Image */}
      <CardMedia
        component="img"
        height="140"
        image={image}
        alt={title}
        sx={{
          objectFit: 'cover'
        }}
      />

      <CardContent sx={{ flexGrow: 1, p: 3 }}>
        {/* Title */}
        <Typography 
          variant="h6" 
          component="h3" 
          gutterBottom
          sx={{ 
            fontWeight: 600,
            color: '#FFD700',
            fontSize: '1.1rem',
            mb: 2
          }}
        >
          {title}
        </Typography>
        
        {/* Description */}
        <Typography 
          variant="body2" 
          sx={{ 
            color: '#E3F2FD',
            lineHeight: 1.5,
            mb: 3,
            height: '40px',
            overflow: 'hidden'
          }}
        >
          {description}
        </Typography>

        {/* Tech Stack */}
        <Box sx={{ mb: 2 }}>
          <Typography 
            variant="caption" 
            sx={{ 
              color: '#90CAF9',
              fontWeight: 600,
              display: 'block',
              mb: 1
            }}
          >
            Technologies Used:
          </Typography>
          <Stack direction="row" flexWrap="wrap" useFlexGap sx={{ gap: 0.5 }}>
            {techStack.map((tech, index) => (
              <Chip
                key={index}
                label={tech}
                size="small"
                variant="outlined"
                sx={{ 
                  fontSize: '0.65rem',
                  height: 22,
                  color: '#FFD700',
                  borderColor: 'rgba(255, 215, 0, 0.3)',
                  backgroundColor: 'rgba(255, 215, 0, 0.1)'
                }}
              />
            ))}
          </Stack>
        </Box>
      </CardContent>

      {/* Action Buttons */}
      <CardActions sx={{ p: 3, pt: 0, gap: 1 }}>
        {liveLink && (
          <Button
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            variant="contained"
            size="small"
            fullWidth
            sx={{
              backgroundColor: '#FFD700',
              color: '#003161',
              fontWeight: '600',
              '&:hover': {
                backgroundColor: '#FFED4E'
              }
            }}
          >
            Live Demo
          </Button>
        )}
        
       
        
      </CardActions>
    </Card>
  );
}

export default Projectcard;