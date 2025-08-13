export interface Project {
  icon: React.ReactNode;
  title: string;
  description: string;
  tech: string;
  link: string;
}

export interface Highlight {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface TypewriterTextProps {
  text: string;
  onComplete?: () => void;
}

export interface AnimatedDotGridProps {
  photoRef: React.RefObject<HTMLImageElement | null>;
  interval?: number;
  speed?: number;
  dotSpacing?: number;
  dotSize?: number;
  displacementDistance?: number;
  intensityMultiplier?: number;
}

export interface BlogPost {
  category: string;
  id: string;
  title: string;
  subtitle: string;
  date: string;
  timestamp: number;
  content: string;
  excerpt?: string;
  tags?: string[];
}

export interface NavigationItem {
  label: string;
  path: string;
}