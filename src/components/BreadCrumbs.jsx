import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const BreadCrumbs = () => {
  const { pathname } = useLocation();

 
  const pathArr = pathname.split('/').filter((x) => x);


  const breadcrumbs = pathArr.map((val, index) => {
    const to = '/' + pathArr.slice(0, index + 1).join('/');
    return { name: val, to };
  });

  return (
    <div className="h-20 flex items-center gap-2">
      <Link to="/" className="text-blue-600 font-bold">Home</Link>
      {breadcrumbs.map((crumb, index) => (
        <span key={index} className="flex items-center gap-2">
          <span>/</span>
          <Link to={crumb.to} className="text-blue-500 underline">{crumb.name}</Link>
        </span>
      ))}
    </div>
  );
};

export default BreadCrumbs;
