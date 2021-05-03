/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
/* eslint-disable no-underscore-dangle */
import Home from '../views/pages/home';
import Detail from '../views/pages/detail';
import Favorites from '../views/pages/favorites';

const routes = {
  '/': Home, // default page
  '/detail/:id': Detail,
  '/favorites': Favorites,
};

export default routes;
