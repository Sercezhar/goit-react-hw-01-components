import { SocialProfile } from './SocialProfile/SocialProfile';
import user from './SocialProfile/data/user.json';

export const App = () => {
  return (
    <div>
      <SocialProfile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
    </div>
  );
};
