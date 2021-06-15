import Table from '../../components/common/Table/Table';

const TableContent = () => (
  <>
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
  </>
);

const TablePage = () => (
  <>
    <h2 className="text-dark dark:text-light text-2xl font-bold mb-5">Table</h2>

    <h3 className="text-dark dark:text-light text-xl font-bold mb-3">Default Table</h3>
    <hr className="mb-5" />

    <Table className="mb-7" responsive>
      <TableContent />
    </Table>

    <h3 className="text-dark dark:text-light text-xl font-bold mb-3">Bordered Table</h3>
    <hr className="mb-5" />

    <Table className="mb-7" bordered responsive>
      <TableContent />
    </Table>

    <h3 className="text-dark dark:text-light text-xl font-bold mb-3">Borderless Table</h3>
    <hr className="mb-5" />

    <Table className="mb-7" borderless responsive>
      <TableContent />
    </Table>

    <h3 className="text-dark dark:text-light text-xl font-bold mb-3">Hover Table</h3>
    <hr className="mb-5" />

    <Table className="mb-7" hover responsive>
      <TableContent />
    </Table>

    <h3 className="text-dark dark:text-light text-xl font-bold mb-3">Responsive Table</h3>
    <hr className="mb-5" />

    <Table className="mb-7" responsive>
      <TableContent />
    </Table>
  </>
);

export default TablePage;
