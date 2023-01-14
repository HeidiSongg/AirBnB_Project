import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';

function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  if (sessionUser.id) {
    sessionLinks = (
      <>
      <nav className="navbar_user">
      <ProfileButton user={sessionUser.id} />
      </nav>
      <div>
        <NavLink to="/spots" className="spot" style={{ textDecoration: 'none' }}>Vacation Homes</NavLink>
      </div>
      </>
    );
  } else {
    sessionLinks = (
      <>
      <nav className="navbar_user">
        <div>
          <button className="button_auth"><NavLink to="/login" style={{ textDecoration: 'none' }}>Log In</NavLink></button>
        &nbsp;
          <button className="button_auth"><NavLink to="/signup" style={{ textDecoration: 'none' }}>Sign Up</NavLink></button>
        </div>
      </nav>
      <div>
        <NavLink to="/spots" className="spot" style={{ textDecoration: 'none' }}>Vacation Homes</NavLink>
      </div>
      </>
    );
  }

  return (
    <div>
      <NavLink exact to="/" className="home" style={{ textDecoration: 'none'}}><i class='fab fa-airbnb fa-2x'></i></NavLink><br/>
        {isLoaded && sessionLinks}
    </div>
  );
}

export default Navigation;