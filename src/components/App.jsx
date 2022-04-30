import { SocialProfile } from './SocialProfile/SocialProfile';
import user from './SocialProfile/data/user.json';
import { Statistics } from './Statistics/Statistics';
import data from './Statistics/data/data.json';

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

      <Statistics title="Upload stats" stats={data} />
    </div>
  );
};
