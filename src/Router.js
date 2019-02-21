import React, { Component } from 'react';
import { Router, Stack, Scene, Tabs } from 'react-native-router-flux';

//Auth
import Login from './components/auth/Login';
import Signup from './components/auth/Signup';
import Signup1 from './components/auth/SignUp_01';
import Signup2 from './components/auth/SignUp_02';
import Signup3 from './components/auth/SignUp_03';
import Signup4 from './components/auth/SignUp_04';
import Signup5 from './components/auth/SignUp_05';
import Signup6 from './components/auth/SignUp_06';

//Tab Stack
import Profile from './components/profile/Profile';
import Record from './components/record/Record';
import Achievements from './components/achievements/Achievements';
import Settings from './components/settings/Settings';
import Stats from './components/stats/Stats';
import ActivityComplete from'./components/record/ActivityComplete';

import Ionicons from 'react-native-vector-icons/Ionicons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Icon from 'react-native-vector-icons/FontAwesome';
import EditProfile from './components/profile/EditProfile';


// const HomeIcon = () => <Ionicons name="md-home" size={25} />;
// const ExploreIcon = () => <Ionicons name="md-search" size={25} />;
const AddPostIcon = () => <EvilIcons name="plus" size={25} />;
const ProfileIcon = () => <Icon name="user" size={25} />;
const AchieveIcon = () => <Ionicons name="ios-trophy" size={25} />;
const SettingsIcon = () => <Ionicons name="ios-cog" size={25} />;
const StatsIcon = () => <Ionicons name="ios-stats" size={25} />;

const RouterComponent = () => (
  <Router>
    <Stack key="root">
      <Stack key="auth" hideNavBar>
        <Scene key="login" component={Login} />
        <Scene key="signup" component={Signup} />
        <Scene key="signup1" component={Signup1} />
        <Scene key="signup2" component={Signup2} />
        <Scene key="signup3" component={Signup3} />
        <Scene key="signup4" component={Signup4} />
        <Scene key="signup5" component={Signup5} />
        <Scene key="signup6" component={Signup6} />
      </Stack>
      <Stack key="app" hideNavBar panHandlers={null}>
        <Tabs showLabel={false}>
          <Scene key="achievements" component={Achievements} icon={AchieveIcon} hideNavBar />
          <Scene key="profile" component={Profile} icon={ProfileIcon} hideNavBar />
          <Scene key="record" component={Record} icon={AddPostIcon} hideNavBar />
          <Scene key="stats" component={Stats} icon={StatsIcon} hideNavBar />
          <Scene key="settings" component={Settings} icon={SettingsIcon} hideNavBar/>
        </Tabs>
        <Scene key="editProfile" component={EditProfile} />
        <Scene key="activityComplete" component={ActivityComplete}/>
      </Stack>
    </Stack>
  </Router>
);

export default RouterComponent;