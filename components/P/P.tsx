import cn from 'classnames';
import { PProps } from './P.props';
import styles from './P.module.css';

function P({
  size = 'medium',
  children,
  className,
  ...props
}: PProps): JSX.Element {
  return (
    <p
      className={cn(styles.p, className, {
        [styles.small]: size === 'small',
        [styles.medium]: size === 'medium',
        [styles.large]: size === 'large',
      })}
      {...props}
    >
      {children}
    </p>
  );
}

export default P;
