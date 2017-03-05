import {composeWithTracker} from 'react-komposer';
import Header from '../components/Header/Header.jsx';

function composer(props, onData) {
  const handle = Meteor.subscribe('currentUserData');
  if(handle.ready()) {
    const user = {
      currentUser: Meteor.user(),
      userLeagueKey : Meteor.user() ? Meteor.user().userLeagueKey : null,
      userLeagueType : Meteor.user() ? Meteor.user().userLeagueType : null,
      userTeamKey : Meteor.user() ? Meteor.user().userTeamKey : null
    };
    onData(null, {user});
  };
};

const HeaderContainer = composeWithTracker(composer)(Header);
export default HeaderContainer;
