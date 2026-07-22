import { useMemo } from 'react';
import './Button.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Button({
  onClick,
  className,
  children,
  sm,
  primary,
  danger,
  icon,
  iconStyle,
}) {
  const iconOnly = useMemo(() => !!icon && !!iconStyle, [icon, iconStyle]);

  const buttonClass = useMemo(() => {
    return [
      'btn',
      sm ? 'btn-sm' : '',
      primary
        ? `btn-${iconOnly ? 'outline-' : ''}primary`
        : danger
          ? `btn-${iconOnly ? 'outline-' : ''}danger`
          : `btn-light`,
      className || '',
    ].join(' ');
  }, [sm, primary, className, danger, iconOnly]);

  if (iconOnly) {
    return (
      <button type="button" className={buttonClass} onClick={onClick}>
        <FontAwesomeIcon icon={icon} />
      </button>
    );
  }

  return (
    <button type="button" className={buttonClass} onClick={onClick}>
      {icon && <FontAwesomeIcon icon={icon} />}
      {children}
    </button>
  );
}

export default Button;
