import { ReactNode } from 'react';

// For Card Component
export interface CardProps {
  title: string;
  content: string;
}

// For Button Component
export type ButtonSize = 'small' | 'medium' | 'large';
export type ButtonShape = 'rounded-sm' | 'rounded-md' | 'rounded-lg' | 'rounded-full';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  onClick?: () => void;
  size?: ButtonSize;
  shape?: ButtonShape;
}

// For PostCard Component
export interface PostProps {
  userId: number;
  id: number; // Included 'id' for keying, though not directly displayed in PostCard
  title: string;
  body: string;
}

// For UserCard Component
export interface UserProps {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}