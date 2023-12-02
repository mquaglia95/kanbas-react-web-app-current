import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faGauge, faBook, faUserFriends, faCalendar, faInbox, faClock, faNetworkWired, faQuestionCircle } from '@fortawesome/free-solid-svg-icons';

const iconSizing = "3x"

function KanbasNavigation() {
    const links = [
        { name: "Account", icon: <FontAwesomeIcon icon={faUserCircle} size={iconSizing}/>},
        { name: "Signin", icon: <FontAwesomeIcon icon={faUserCircle} size={iconSizing}/>},
        { name: "Signup", icon: <FontAwesomeIcon icon={faUserCircle} size={iconSizing}/>},
        { name: "Dashboard", icon: <FontAwesomeIcon icon={faGauge} size={iconSizing}/>},
        { name: "Courses", icon: <FontAwesomeIcon icon={faBook} size={iconSizing}/>},
        { name: "Groups", icon: <FontAwesomeIcon icon={faUserFriends} size={iconSizing}/>},
        { name: "Calendar", icon: <FontAwesomeIcon icon={faCalendar} size={iconSizing}/>},
        { name: "Inbox", icon: <FontAwesomeIcon icon={faInbox} size={iconSizing}/>},
        { name: "History", icon: <FontAwesomeIcon icon={faClock} size={iconSizing}/>},
        { name: "Studio", icon: <FontAwesomeIcon icon={faNetworkWired} size={iconSizing}/>},
        { name: "Help", icon: <FontAwesomeIcon icon={faQuestionCircle} size={iconSizing}/>}
      ];
  const { pathname } = useLocation();



  const KNStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '0px'
  };
  return (
    <div className="list-group" style={{ width: 150 }}>
      {links.map((link, index) => (
        <Link
          key={index}
          to={`/Kanbas/${link.name}`}
          style={KNStyle}
          className={`list-group-item wd-kanbas-nav ${pathname.includes(link.name) ? "active": ""}`}
          >
          {link.icon}<br/>
          {link.name}
        </Link>
      ))}
    </div>
  );
}
export default KanbasNavigation;