import { Link, useHref } from 'react-router-dom';
import { capitalize } from '@/utilities/text';
export default function Breadcrumb() {
  const breadcrumbStyle = {
    fontSize: '0.8em',
    display: 'flex',
  };
  const href = useHref();
  const parts = href.split('/').filter(Boolean);

  function isNavPart(index) {
    return index !== parts.length - 1;
  }

  return (
    <div style={breadcrumbStyle}>
      {parts.map((part, index) => {
        const path = '/' + parts.slice(0, index + 1).join('/');
        return (
          <div key={index}>
            {isNavPart(index) ? (
              <>
                <Link to={path}>{capitalize(part)}</Link>&nbsp;/&nbsp;
              </>
            ) : (
              <span>{capitalize(part)}</span>
            )}
          </div>
        );
      })}
    </div>
  );
}
