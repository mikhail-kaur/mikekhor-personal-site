import { useState, useEffect } from "react";
import { Container, Typography, Box, Button, Stack, Grid, Card, CardContent } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { styled } from "@mui/material/styles";
import CodeIcon from "@mui/icons-material/Code";
import CloudIcon from "@mui/icons-material/Cloud";
import PsychologyIcon from "@mui/icons-material/Psychology";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";

const HeroSection = styled(Box)(({ theme }) => ({
  minHeight: '100vh',
  background: 'linear-gradient(135deg, #e2e2ec 0%, #e5e6f6ff 50%, #8fd9fbff 100%)',
  display: 'flex',
  alignItems: 'center',
  position: 'relative',
  overflow: 'hidden',
  [theme.breakpoints.up('md')]: {
    marginTop: '-80px',
    paddingTop: '80px',
  },
}));

const ProfileImage = styled('img')(({ theme }) => ({
  width: '300px',
  height: '300px',
  objectFit: 'cover',
  borderRadius: '50%',
  boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
  transition: 'transform 0.3s ease',
  '&:hover': {
    transform: 'scale(1.05)',
  },
  [theme.breakpoints.down('md')]: {
    width: '250px',
    height: '250px',
  },
  [theme.breakpoints.down('sm')]: {
    width: '200px',
    height: '200px',
  },
}));

const WelcomeText = styled(Typography)(({ theme }) => ({
  fontSize: '3.5rem',
  fontWeight: 300,
  color: theme.palette.text.primary,
  lineHeight: 1.2,
  [theme.breakpoints.down('md')]: {
    fontSize: '2.5rem',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '2rem',
  },
}));

const HighlightCard = styled(Card)(() => ({
  height: '100%',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  '&:hover': {
    transform: 'translateY(-10px)',
    boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
  },
  background: 'rgba(255,255,255,0.9)',
  backdropFilter: 'blur(10px)',
}));

const ScrollableContent = styled(Box)<{ scrolled: boolean }>(({ scrolled }) => ({
  transform: scrolled ? 'translateY(-50px)' : 'translateY(0)',
  transition: 'transform 0.6s ease',
  opacity: scrolled ? 0.8 : 1,
}));

const TypewriterText = ({ text, onComplete }: { text: string; onComplete?: () => void }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timer = setTimeout(() => {
        setDisplayText(text.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, 100); // Typing speed
      return () => clearTimeout(timer);
    } else if (!isComplete) {
      setIsComplete(true);
      onComplete?.();
    }
  }, [currentIndex, text, isComplete, onComplete]);

  // Parse text to make "Mike Khor" bold as it's being typed
  const renderText = (text: string) => {
    const mikeStart = "Hi, I'm ".length;
    const mikeEnd = mikeStart + "Mike Khor".length;

    if (text.length <= mikeStart) {
      return text;
    } else if (text.length >= mikeEnd) {
      return text.replace('Mike Khor', '<strong>Mike Khor</strong>');
    } else {
      // We're in the middle of typing "Mike Khor"
      const beforeMike = text.slice(0, mikeStart);
      const mikePortion = text.slice(mikeStart);
      return beforeMike + '<strong>' + mikePortion + '</strong>';
    }
  };

  return (
    <span style={{ fontFamily: "'Spline Sans Mono', monospace" }}>
      <span dangerouslySetInnerHTML={{ __html: renderText(displayText) }} />
      <span
        style={{
          opacity: isComplete ? 1 : 0,
          animation: isComplete ? 'blink 1s infinite' : 'none',
          position: 'relative',
          width: '2px',
          height: '1em',
          display: 'inline-block',
          backgroundColor: 'currentColor',
          top: '8px'
        }}
      />
      <style>{`
        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
      `}</style>
    </span>
  );
};

const LandingPage = () => {
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setScrolled(scrollTop > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const highlights = [
    {
      icon: <PsychologyIcon sx={{ fontSize: 40, color: '#db5e81ff' }} />,
      title: "ML & AI Engineering",
      description: "Neural ODEs, LLMs, and production ML systems with PyTorch, TensorFlow, and JAX"
    },
    {
      icon: <CloudIcon sx={{ fontSize: 40, color: '#4bafb6ff' }} />,
      title: "Cloud & Infrastructure",
      description: "AWS/GCP/Azure deployments with Docker, Kubernetes, and CI/CD pipelines"
    },
    {
      icon: <CodeIcon sx={{ fontSize: 40, color: '#64ab99ff' }} />,
      title: "Full-Stack Development",
      description: "React/TypeScript frontends with Python/FastAPI backends and GraphQL APIs"
    },
    {
      icon: <RocketLaunchIcon sx={{ fontSize: 40, color: '#be6d84ff' }} />,
      title: "Startup Experience",
      description: "Series B startup environment shipping production hardware/software systems"
    }
  ];

  return (
    <Box>
      {/* Hero Section */}
      <HeroSection>
        <Container maxWidth="lg">
          <ScrollableContent scrolled={scrolled}>
            <Grid container spacing={4} alignItems="center" justifyContent="center">
              <Grid item xs={12} md={5} textAlign="center">
                <ProfileImage
                  src="/mike_photo.png"
                  alt="Mike Khor"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                  }}
                />
              </Grid>
              <Grid item xs={12} md={7}>
                <Box textAlign={{ xs: 'center', md: 'left' }}>
                  <WelcomeText variant="h1">
                    <TypewriterText text="Hi, I'm Mike Khor" />
                  </WelcomeText>
                  <Typography
                    variant="h5"
                    sx={{
                      mt: 2,
                      color: 'text.secondary',
                      fontWeight: 300,
                      fontSize: { xs: '1.2rem', md: '1.5rem' }
                    }}
                  >
                    Machine Learning Engineer & Full-Stack Developer
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      mt: 3,
                      color: 'text.primary',
                      fontSize: '1.1rem',
                      lineHeight: 1.6,
                      maxWidth: '500px',
                      mx: { xs: 'auto', md: 0 }
                    }}
                  >
                    I research and ship production ML and web systems from concept to product,
                    with experience in neural networks, cloud infrastructure, and startup environments.
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </ScrollableContent>
        </Container>
      </HeroSection>

      {/* Highlights Section */}
      <Box sx={{ py: 8, background: 'linear-gradient(135deg, #cdc6e4ff 0%, #809dc4ff 100%)' }}>
        <Container maxWidth="lg">
          <Typography
            variant="h3"
            textAlign="center"
            sx={{
              mb: 6,
              color: '#ffffff',
              fontWeight: 300,
              fontSize: { xs: '2rem', md: '3rem' }
            }}
          >
            Experience Highlights
          </Typography>
          <Grid container spacing={4}>
            {highlights.map((highlight, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <HighlightCard>
                  <CardContent sx={{ textAlign: 'center', p: 3 }}>
                    <Box sx={{ mb: 2 }}>
                      {highlight.icon}
                    </Box>
                    <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                      {highlight.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {highlight.description}
                    </Typography>
                  </CardContent>
                </HighlightCard>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Blog Navigation Section */}
      <Box sx={{ py: 8, backgroundColor: '#f3f5f7' }}>
        <Container maxWidth="sm">
          <Typography
            variant="h4"
            textAlign="center"
            sx={{ mb: 4, color: 'text.primary', fontWeight: 300 }}
          >
            Explore My Writing
          </Typography>
          <Stack spacing={3}>
            <Button
              variant="contained"
              size="large"
              onClick={() => navigate("/machinelearning")}
              sx={{
                textTransform: "none",
                py: 2,
                fontSize: '1.1rem',
                background: 'linear-gradient(45deg, #5B9BD5 30%, #4A8CC5 90%)',
                '&:hover': {
                  background: 'linear-gradient(45deg, #4A8CC5 30%, #3B7AB5 90%)',
                }
              }}
            >
              Machine Learning
            </Button>
            <Button
              variant="contained"
              size="large"
              onClick={() => navigate("/acappella")}
              sx={{
                textTransform: "none",
                py: 2,
                fontSize: '1.1rem',
                background: 'linear-gradient(45deg, #7B9FCE 30%, #6A8EBD 90%)',
                '&:hover': {
                  background: 'linear-gradient(45deg, #6A8EBD 30%, #597DAC 90%)',
                }
              }}
            >
              A Cappella
            </Button>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
};

export default LandingPage;
