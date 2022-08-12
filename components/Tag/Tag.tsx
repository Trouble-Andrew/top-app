import cn from 'classnames';
import { TagProps } from './Tag.props';
import styles from './Tag.module.css';

function Tag({
  size = 'medium',
  color = 'ghost',
  href,
  children,
  className,
  ...props
}: TagProps): JSX.Element {
  return (
    <div
      className={cn(styles.tag, className, {
        [styles.small]: size === 'small',
        [styles.medium]: size === 'medium',
        [styles.large]: size === 'large',
        [styles.ghost]: color === 'ghost',
        [styles.primary]: color === 'primary',
        [styles.red]: color === 'red',
        [styles.green]: color === 'green',
      })}
      {...props}
    >
      {href ? <a href={href}>{children}</a> : <>{children}</>}
    </div>
  );
}

export default Tag;
