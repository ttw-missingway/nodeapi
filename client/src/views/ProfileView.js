import Navigation from "../components/Navigation";
import Profile from "../components/Profile";
import { withAuthenticationRequired } from '@auth0/auth0-react';

const PrivateRoute = () => (
  <div>
    <h1>
      This is the Profile Page
    </h1>
    <Profile />
    <Navigation />
  </div>
);

export default withAuthenticationRequired(PrivateRoute, {
  // Show a message while the user waits to be redirected to the login page.
  onRedirecting: () => (<div>Redirecting you to the login page...</div>)
});