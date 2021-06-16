import React from 'react';
import Breadcrumb from '../../components/common/Breadcrumb/Breadcrumb';

const BreadcrumbPage = () => (
  <>
    <h2 className="text-dark dark:text-light text-2xl font-bold mb-5">Breadcrumbs</h2>

    <h3 className="text-dark dark:text-light text-xl font-bold mb-3">Breadcrumbs</h3>
    <hr className="mb-5" />

    <Breadcrumb>
      <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
      <Breadcrumb.Item href="/">Category</Breadcrumb.Item>
      <Breadcrumb.Item active>Product</Breadcrumb.Item>
    </Breadcrumb>
  </>
);

export default BreadcrumbPage;
