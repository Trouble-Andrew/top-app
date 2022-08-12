import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface TagProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  size?: 'small' | 'medium' | 'large';
  color?: 'primary' | 'ghost' | 'red' | 'green';
  href?: string;
  children: React.ReactNode;
}
