/* eslint-disable jsdoc/require-jsdoc */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import Teardrop from '../components/teardrop/teardrop';

export default {
  title: 'Components/Teardrop',
  component: Teardrop,
  argTypes: {
  },
};

function Template(args) {
  return (
    <div
      style={{
        width: '100px',
        height: '100px',
        position: 'relative',
      }}
    >
      <Teardrop {...args} />
    </div>
  );
}

export const Primary = Template.bind({});

Primary.args = {
};
