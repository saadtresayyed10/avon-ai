export interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export interface HeroSectionProps {
  title: string;
  imageSrc: string;
  imageAlt: string;
}

export interface CallToActionProps {
  title: string;
  buttonText: string;
  onButtonClick: () => void;
}
