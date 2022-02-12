import React from 'react';
import { Link } from 'react-router-dom';

interface HeaderProps {

}

export const Header: React.FunctionComponent<HeaderProps> = (props) => {
  // const { children, to, className } = props
  console.log("hello header");
  return (
    <>
      {/* <Link to={location => ({ ...location, pathname: "/app" })}>App page</Link>
      <Link to={location => ({ ...location, pathname: "/request" })}>Request page</Link> */}
    </>
  );
}