import { Meta, Story } from '@storybook/react';
import Table, { TableProps } from '../components/common/Table/Table';

export default {
  title: 'Components/Table',
  component: Table,
  argTypes: {
    responsive: { control: 'boolean' },
    bordered: { control: 'boolean' },
    borderless: { control: 'boolean' },
    hover: { control: 'boolean' },
  },
} as Meta;

const Template: Story<TableProps> = args => (
  <Table {...args}>
    <thead>
      <tr>
        <th>Name</th>
        <th>Title</th>
        <th>Status</th>
        <th>Role</th>
        <th>Edit</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>
          <div className="flex items-center">
            <div className="flex-shrink-0 h-10 w-10">
              <img className="h-10 w-10 rounded-full" src="https://picsum.photos/200/200" alt="" />
            </div>
            <div className="ml-4">
              <div className="text-sm font-medium dark:text-light">Jane Cooper</div>
              <div className="text-sm dark:text-light">jane.cooper@example.com</div>
            </div>
          </div>
        </td>
        <td>
          <div className="text-sm dark:text-light">Regional Paradigm Technician</div>
          <div className="text-sm dark:text-light">Optimization</div>
        </td>
        <td>
          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
            Active
          </span>
        </td>
        <td>Admin</td>
        <td>Edit</td>
      </tr>

      <tr>
        <td>
          <div className="flex items-center">
            <div className="flex-shrink-0 h-10 w-10">
              <img className="h-10 w-10 rounded-full" src="https://picsum.photos/200/200" alt="" />
            </div>
            <div className="ml-4">
              <div className="text-sm font-medium dark:text-light">Jane Cooper</div>
              <div className="text-sm dark:text-light">jane.cooper@example.com</div>
            </div>
          </div>
        </td>
        <td>
          <div className="text-sm dark:text-light">Regional Paradigm Technician</div>
          <div className="text-sm dark:text-light">Optimization</div>
        </td>
        <td>
          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
            Active
          </span>
        </td>
        <td>Admin</td>
        <td>Edit</td>
      </tr>

      <tr>
        <td>
          <div className="flex items-center">
            <div className="flex-shrink-0 h-10 w-10">
              <img className="h-10 w-10 rounded-full" src="https://picsum.photos/200/200" alt="" />
            </div>
            <div className="ml-4">
              <div className="text-sm font-medium dark:text-light">Jane Cooper</div>
              <div className="text-sm dark:text-light">jane.cooper@example.com</div>
            </div>
          </div>
        </td>
        <td>
          <div className="text-sm dark:text-light">Regional Paradigm Technician</div>
          <div className="text-sm dark:text-light">Optimization</div>
        </td>
        <td>
          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
            Active
          </span>
        </td>
        <td>Admin</td>
        <td>Edit</td>
      </tr>
    </tbody>
  </Table>
);

export const TableStory = Template.bind({});
TableStory.args = {};
TableStory.storyName = 'Table';
