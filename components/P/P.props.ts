import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface PProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLParagraphElement>,
    HTMLParagraphElement
  > {
  size?: 'small' | 'medium' | 'large';
  children: React.ReactNode;
}
