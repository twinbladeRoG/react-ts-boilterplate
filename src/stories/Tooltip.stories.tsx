import { Meta, Story } from '@storybook/react';
import ReactTooltip from 'react-tooltip';

export default {
  title: 'Components/Tooltip',
  component: ReactTooltip,
  argTypes: {},
} as Meta;

const Template: Story<{}> = () => (
  <div>
    <p data-tip data-for="happyFace" className="inline-block mb-7 dark:text-light">
      Hover me!
    </p>
    <ReactTooltip id="happyFace" place="bottom" type="dark" effect="solid">
      <span className="w-16">Lorem ipsum, dolor sit</span>
    </ReactTooltip>
  </div>
);

export const TooltipStory = Template.bind({});
TooltipStory.storyName = 'Tooltip';
