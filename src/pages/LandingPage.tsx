import { useState, useEffect, useRef } from "react";
import { Container, Typography, Box, Button, Stack, Grid, Card, CardContent } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { styled } from "@mui/material/styles";
import CodeIcon from "@mui/icons-material/Code";
import CloudIcon from "@mui/icons-material/Cloud";
import PsychologyIcon from "@mui/icons-material/Psychology";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import WebIcon from "@mui/icons-material/Web";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocalCafeIcon from "@mui/icons-material/LocalCafe";
import AnimatedDotGrid from "../components/AnimatedDotGrid";

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
      }, 50); // Typing speed
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
  const [typewriterComplete, setTypewriterComplete] = useState(false);
  const photoRef = useRef<HTMLImageElement>(null);

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

  const projects = [
    {
      icon: <SmartToyIcon sx={{ fontSize: 40, color: '#62a0f0ff' }} />,
      title: "LLM Systems at Culture Biosciences",
      description: "Built flexible data retrieval system for bioreactors with document extraction, generative SQL queries, and chatbot for guided experimental design",
      tech: "Python, OpenAI, Google GenAI",
      link: "https://www.culturebiosciences.com/"
    },
    {
      icon: <WebIcon sx={{ fontSize: 40, color: '#e97853ff' }} />,
      title: "Stratyx Full-Stack Platform",
      description: "Led development of cloud bioreactor product including hardware runtime, touchscreen interface, and cloud jobs",
      tech: "React, Python, Docker, AWS, CircleCI, GraphQL",
      link: "https://www.culturebiosciences.com/"
    },
    {
      icon: <FavoriteIcon sx={{ fontSize: 40, color: '#f36d63ff' }} />,
      title: "RECO: Recovery Companion",
      description: "LLM-powered chatbot for post-discharge heart-failure monitoring with synthetic patient dialogues and PDF summary generation",
      tech: "LangChain, GPT-4o, PostgreSQL",
      link: "https://github.com/recoverycompanion/reco/"
    },
    {
      icon: <LocalCafeIcon sx={{ fontSize: 40, color: '#40a2eeff' }} />,
      title: "CalHacks: CodeQuery",
      description: "Hackathon project showcasing rapid prototyping and innovative problem-solving in a competitive environment",
      tech: "Full-Stack Development, APIs",
      link: "https://github.com/mike-khor/BobBuilderGPT"
    }
  ];

  return (
    <Box>
      {/* Hero Section */}
      <HeroSection>
        <AnimatedDotGrid
          photoRef={photoRef}
          interval={3000}
          speed={500}
          dotSpacing={20}
          dotSize={5}
          displacementDistance={30}
          intensityMultiplier={0.15}
        />
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
          <ScrollableContent scrolled={scrolled}>
            <Grid container spacing={4} alignItems="center" justifyContent="center">
              <Grid item xs={12} md={5} textAlign="center">
                <ProfileImage
                  ref={photoRef}
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
                    <TypewriterText
                      text="Hi, I'm Mike Khor"
                      onComplete={() => setTypewriterComplete(true)}
                    />
                  </WelcomeText>
                  <Typography
                    variant="h5"
                    sx={{
                      mt: 2,
                      color: 'text.secondary',
                      fontWeight: 300,
                      fontSize: { xs: '1.2rem', md: '1.5rem' },
                      opacity: typewriterComplete ? 1 : 0,
                      transform: typewriterComplete ? 'translateY(0)' : 'translateY(20px)',
                      transition: 'opacity 0.8s ease-out, transform 0.8s ease-out',
                      transitionDelay: '0.2s'
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
                      mx: { xs: 'auto', md: 0 },
                      opacity: typewriterComplete ? 1 : 0,
                      transform: typewriterComplete ? 'translateY(0)' : 'translateY(20px)',
                      transition: 'opacity 0.8s ease-out, transform 0.8s ease-out',
                      transitionDelay: '0.4s'
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

      {/* Projects Section */}
      <Box sx={{ py: 8, backgroundColor: '#f3f5f7' }}>
        <Container maxWidth="lg">
          <Typography
            variant="h3"
            textAlign="center"
            sx={{
              mb: 6,
              color: 'text.primary',
              fontWeight: 300,
              fontSize: { xs: '2rem', md: '3rem' }
            }}
          >
            Notable Projects
          </Typography>
          <Grid container spacing={4}>
            {projects.map((project, index) => (
              <Grid item xs={12} md={6} key={index}>
                <HighlightCard sx={{ height: '100%' }}>
                  <CardContent sx={{ p: 4 }}>
                    <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 3 }}>
                      <Box sx={{ mr: 3, mt: 0.5 }}>
                        <Box
                          onClick={() => window.open(project.link, '_blank', 'noopener,noreferrer')}
                          sx={{
                            display: 'inline-block',
                            cursor: 'pointer',
                            '&:hover': {
                              transform: 'scale(1.1)',
                            },
                            transition: 'transform 0.2s ease',
                          }}
                        >
                          {project.icon}
                        </Box>
                      </Box>
                      <Box sx={{ flex: 1 }}>
                        <Typography
                          variant="h5"
                          onClick={() => window.open(project.link, '_blank', 'noopener,noreferrer')}
                          sx={{
                            mb: 2,
                            fontWeight: 600,
                            cursor: 'pointer',
                            '&:hover': {
                              color: 'primary.main',
                              textDecoration: 'underline',
                            },
                            transition: 'color 0.2s ease',
                          }}
                        >
                          {project.title}
                        </Typography>
                        <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.6 }}>
                          {project.description}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{
                            color: 'text.secondary',
                            fontStyle: 'italic',
                            fontWeight: 500
                          }}
                        >
                          {project.tech}
                        </Typography>
                      </Box>
                    </Box>
                  </CardContent>
                </HighlightCard>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Blog Navigation Section */}
      <Box sx={{ py: 8, backgroundColor: '#ffffff' }}>
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
