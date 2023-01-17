import { Suspense } from 'react';
import { Outlet, Link } from 'react-router-dom';
import css from './SharedLayout.module.css';

const SharedLayout = () => {
  return (
    <div className={css.Cotainer}>
      <header>
        <nav>
          <Link className={css.Link} to="/">
            Home
          </Link>
          <Link className={css.Link} to="movies">
            Movies
          </Link>
        </nav>
      </header>

      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default SharedLayout;
