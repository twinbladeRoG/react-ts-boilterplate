import React from 'react';
import Badge from '../../components/common/Badge/Badge';

const BadgePage = () => (
  <>
    <h2 className="text-dark dark:text-light text-2xl font-bold mb-5">Badges</h2>

    <h3 className="text-dark dark:text-light text-xl font-bold mb-3">Normal Badges</h3>
    <hr className="mb-5" />

    <h5 className="text-dark dark:text-light text-base font-bold mb-3">Default Badges</h5>
    <div className="flex space-x-4 mb-7">
      <Badge variant="primary">Primary</Badge>
      <Badge variant="accent">Accent</Badge>
      <Badge variant="warning">Warning</Badge>
      <Badge variant="danger">Danger</Badge>
      <Badge variant="success">Success</Badge>
      <Badge variant="light">Light</Badge>
      <Badge variant="dark">Dark</Badge>
    </div>

    <h5 className="text-dark dark:text-light text-base font-bold mb-3">Light Variant Badges</h5>
    <div className="flex space-x-4 mb-7">
      <Badge variant="primary" variantType="light">
        Primary
      </Badge>
      <Badge variant="accent" variantType="light">
        Accent
      </Badge>
      <Badge variant="warning" variantType="light">
        Warning
      </Badge>
      <Badge variant="danger" variantType="light">
        Danger
      </Badge>
      <Badge variant="success" variantType="light">
        Success
      </Badge>
      <Badge variant="light" variantType="light">
        Light
      </Badge>
      <Badge variant="dark" variantType="light">
        Dark
      </Badge>
    </div>

    <h5 className="text-dark dark:text-light text-base font-bold mb-3">Dark Variant Badges</h5>
    <div className="flex space-x-4 mb-7">
      <Badge variant="primary" variantType="dark">
        Primary
      </Badge>
      <Badge variant="accent" variantType="dark">
        Accent
      </Badge>
      <Badge variant="warning" variantType="dark">
        Warning
      </Badge>
      <Badge variant="danger" variantType="dark">
        Danger
      </Badge>
      <Badge variant="success" variantType="dark">
        Success
      </Badge>
      <Badge variant="light" variantType="dark">
        Light
      </Badge>
      <Badge variant="dark" variantType="dark">
        Dark
      </Badge>
    </div>

    <h3 className="text-dark dark:text-light text-xl font-bold mb-3">Pill Type Badges</h3>
    <hr className="mb-5" />
    <h5 className="text-dark dark:text-light text-base font-bold mb-3">Default Badges</h5>
    <div className="flex space-x-4 mb-7">
      <Badge pill variant="primary">
        Primary
      </Badge>
      <Badge pill variant="accent">
        Accent
      </Badge>
      <Badge pill variant="warning">
        Warning
      </Badge>
      <Badge pill variant="danger">
        Danger
      </Badge>
      <Badge pill variant="success">
        Success
      </Badge>
      <Badge pill variant="light">
        Light
      </Badge>
      <Badge pill variant="dark">
        Dark
      </Badge>
    </div>

    <h5 className="text-dark dark:text-light text-base font-bold mb-3">Light Variant Badges</h5>
    <div className="flex space-x-4 mb-7">
      <Badge pill variant="primary" variantType="light">
        Primary
      </Badge>
      <Badge pill variant="accent" variantType="light">
        Accent
      </Badge>
      <Badge pill variant="warning" variantType="light">
        Warning
      </Badge>
      <Badge pill variant="danger" variantType="light">
        Danger
      </Badge>
      <Badge pill variant="success" variantType="light">
        Success
      </Badge>
      <Badge pill variant="light" variantType="light">
        Light
      </Badge>
      <Badge pill variant="dark" variantType="light">
        Dark
      </Badge>
    </div>

    <h5 className="text-dark dark:text-light text-base font-bold mb-3">Dark Variant Badges</h5>
    <div className="flex space-x-4 mb-7">
      <Badge pill variant="primary" variantType="dark">
        Primary
      </Badge>
      <Badge pill variant="accent" variantType="dark">
        Accent
      </Badge>
      <Badge pill variant="warning" variantType="dark">
        Warning
      </Badge>
      <Badge pill variant="danger" variantType="dark">
        Danger
      </Badge>
      <Badge pill variant="success" variantType="dark">
        Success
      </Badge>
      <Badge pill variant="light" variantType="dark">
        Light
      </Badge>
      <Badge pill variant="dark" variantType="dark">
        Dark
      </Badge>
    </div>
  </>
);

export default BadgePage;
