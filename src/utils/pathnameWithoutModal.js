import routesModal from '../routesModal';

const pathnameWithoutModal = (pathname) => {
  if (pathname === '/') {
    return '';
  }
  const arrayRoute = pathname.split('/');
  const lastPath = arrayRoute[arrayRoute.length - 1];
  let modal = routesModal.filter(route => (route.pathname.split(':').length > 1) && (lastPath.search(route.pathname.split(':')[0]) === 0));
  if (!(modal && modal.length > 0)) {
    modal = routesModal.filter(route => lastPath.search(route.pathname) === 0).filter(route => route.pathname === lastPath);
  }
  let arrayRouteFix = arrayRoute;
  if (modal && modal.length > 0) {
    arrayRouteFix = arrayRoute.filter(route => route.search(lastPath) < 0);
  }
  return arrayRouteFix.join('/');
}

export default pathnameWithoutModal;