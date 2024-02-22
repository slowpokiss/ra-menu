import React, { useContext } from "react";
import { RouterContext } from "../Router";

interface props {
  path: string;
  children?: React.ReactNode;
  //onClick?: (path: string) => void;
}

export default function Link({ path, children }: props) {
  const { page, setPage } = useContext(RouterContext);

  const openPage = (path: string) => {
    window.history.replaceState({}, "", path);
    setPage(path);
  };

  return (
    <a
      className={`menu__item ${path === page ? 'menu__item-active' : ''}`}
      href={path}
      onClick={(ev) => {
        ev.preventDefault();
        openPage(path);
      }}
    >
      {children}
    </a>
  );
}
