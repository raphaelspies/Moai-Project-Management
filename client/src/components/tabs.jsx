import React from 'react';
import { useState } from 'react';
import { Tabs, Tab } from '@mantine/core';
import Login from './login.jsx';
import CreateUser from './createuser.jsx';

const TopTabs =() => {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <Tabs active={activeTab} onTabChange={setActiveTab}>
      <Tab label="Login"><Login/></Tab>
      <Tab label="Create Account"><CreateUser/></Tab>
      <Tab label="Third">Third tab content</Tab>
    </Tabs>
  );
}

export default TopTabs;