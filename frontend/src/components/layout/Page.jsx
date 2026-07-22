import Button from '../Button';
import './Page.css';
import Breadcrumb from './Breadcrumb';

export default function Page({ title, children }) {
  return (
    <section>
      <header style={{ margin: '24px 0', paddingBottom: '8px' }}>
        <div>
          <Breadcrumb />
          <strong>{title}</strong>
        </div>
      </header>
      <main>{children}</main>
    </section>
  );
}
