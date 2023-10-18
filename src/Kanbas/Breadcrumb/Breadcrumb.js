import React from "react";
import { Link, useLocation } from "react-router-dom";

const Breadcrumb = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);
  const ind = 1;

  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb">
        {pathnames.map((name, index) => {
          const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
          const isLast = index === pathnames.length - 1;

          if (index > ind) {
            if (isLast) {
              return (
                <li key={name} className="breadcrumb-item active" aria-current="page">
                  {name}
                </li>
              );
            } else {
              return (
                <li key={name} className="breadcrumb-item">
                  <Link to={routeTo}>{name}</Link>
                </li>
              );
            }
          }

          return null;
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumb;