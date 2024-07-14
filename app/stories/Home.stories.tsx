import React from 'react';
import Home from '../src/pages/index';

export default {
  title: 'Home',
  component: Home,
};

const Template = (args: any) => <Home {...args} />;

export const Default:any = Template.bind({});
Default.args = {};