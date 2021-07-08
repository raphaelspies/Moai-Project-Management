import React from 'react';
import { useState } from 'react';
import { Tabs, Tab } from '@mantine/core';
import Login from './login.jsx';
import CreateUser from './createuser.jsx';
import Splash from './splash.jsx';
import Jobsite from './jobsite.jsx';
import Reports from './reports.jsx';

const TopTabs =() => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <Tabs active={activeTab} onTabChange={setActiveTab}>
      <Tab label="Home"><Splash/></Tab>
      <Tab label="Jobsite"><Jobsite/></Tab>
      <Tab label="Reports"><Reports/></Tab>
    </Tabs>
  );
}

export default TopTabs;