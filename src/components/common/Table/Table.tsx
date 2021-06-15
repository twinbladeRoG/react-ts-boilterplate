import classNames from 'classnames';
import React from 'react';

interface TableProps extends React.TableHTMLAttributes<HTMLTableElement> {
  responsive?: boolean;
  bordered?: boolean;
  borderless?: boolean;
  hover?: boolean;
}

const Table: React.FC<TableProps> = ({
  children,
  className,
  responsive,
  bordered,
  borderless,
  hover,
  ...props
}) => {
  const table = (
    <table
      className={classNames(
        className,
        'w-full',
        bordered && 'table-bordered',
        borderless && 'table-borderless',
        hover && 'table-hoverable',
      )}
      {...props}
    >
      {children}
    </table>
  );

  if (!responsive) {
    return table;
  }

  return <div className="overflow-x-auto">{table}</div>;
};

Table.defaultProps = {
  responsive: true,
};

export default Table;
