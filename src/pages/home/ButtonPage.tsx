import Button from '../../components/common/Button';

const ButtonPage = () => (
  <>
    <h2 className="text-dark dark:text-light text-2xl font-bold mb-5">Buttons</h2>

    <h3 className="text-dark dark:text-light text-xl font-bold mb-3">Default Buttons</h3>
    <hr className="mb-5" />

    <div className="flex space-x-4 mb-7">
      <Button type="submit">Primary</Button>
      <Button variant="accent">Accent</Button>
      <Button variant="warning">Warning</Button>
      <Button variant="danger">Danger</Button>
      <Button variant="success">Success</Button>
      <Button variant="light">Light</Button>
      <Button variant="dark">Dark</Button>
    </div>

    <h3 className="text-dark dark:text-light text-xl font-bold mb-3">Outlined Buttons</h3>
    <hr className="mb-5" />

    <div className="flex space-x-4 mb-7">
      <Button buttonStyle="outline">Primary</Button>
      <Button buttonStyle="outline" variant="accent">
        Accent
      </Button>
      <Button buttonStyle="outline" variant="warning">
        Warning
      </Button>
      <Button buttonStyle="outline" variant="danger">
        Danger
      </Button>
      <Button buttonStyle="outline" variant="success">
        Success
      </Button>
      <Button buttonStyle="outline" variant="light">
        Light
      </Button>
      <Button buttonStyle="outline" variant="dark">
        Dark
      </Button>
    </div>

    <h3 className="text-dark dark:text-light text-xl font-bold mb-3">Plain Buttons</h3>
    <hr className="mb-5" />

    <div className="flex space-x-4 mb-7">
      <Button buttonStyle="plain">Primary</Button>
      <Button buttonStyle="plain" variant="accent">
        Accent
      </Button>
      <Button buttonStyle="plain" variant="warning">
        Warning
      </Button>
      <Button buttonStyle="plain" variant="danger">
        Danger
      </Button>
      <Button buttonStyle="plain" variant="success">
        Success
      </Button>
      <Button buttonStyle="plain" variant="light">
        Light
      </Button>
      <Button buttonStyle="plain" variant="dark">
        Dark
      </Button>
    </div>
    <h3 className="text-dark dark:text-light text-xl font-bold mb-3">Different Sized Buttons</h3>
    <hr className="mb-5" />

    <div className="flex space-x-4 mb-7">
      <Button size="sm" type="submit">
        Primary
      </Button>
      <Button size="sm" variant="accent">
        Accent
      </Button>
      <Button size="sm" variant="warning">
        Warning
      </Button>
      <Button size="sm" variant="danger">
        Danger
      </Button>
      <Button size="sm" variant="success">
        Success
      </Button>
      <Button size="sm" variant="light">
        Light
      </Button>
      <Button size="sm" variant="dark">
        Dark
      </Button>
    </div>

    <div className="flex space-x-4 mb-7">
      <Button size="lg" type="submit">
        Primary
      </Button>
      <Button size="lg" variant="accent">
        Accent
      </Button>
      <Button size="lg" variant="warning">
        Warning
      </Button>
      <Button size="lg" variant="danger">
        Danger
      </Button>
      <Button size="lg" variant="success">
        Success
      </Button>
      <Button size="lg" variant="light">
        Light
      </Button>
      <Button size="lg" variant="dark">
        Dark
      </Button>
    </div>

    <h3 className="text-dark dark:text-light text-xl font-bold mb-3">Loding State Buttons</h3>
    <hr className="mb-5" />

    <div className="flex space-x-4 mb-7">
      <Button isLoading>Loading</Button>
      <Button isLoading buttonStyle="outline">
        Loading
      </Button>
      <Button isLoading buttonStyle="plain">
        Loading
      </Button>
      <Button variant="accent" isLoading>
        Loading
      </Button>
      <Button variant="warning" isLoading>
        Loading
      </Button>
      <Button variant="danger" isLoading>
        Loading
      </Button>
      <Button variant="success" isLoading>
        Loading
      </Button>
      <Button variant="light" isLoading>
        Loading
      </Button>
      <Button variant="dark" isLoading>
        Loading
      </Button>
    </div>
    <div className="flex items-center space-x-4 mb-7">
      <Button size="sm" isLoading>
        Loading
      </Button>
      <Button size="sm" isLoading loadingText="Loading...">
        Loading
      </Button>
      <Button size="sm" isLoading buttonStyle="outline" loadingText="Loading...">
        Loading
      </Button>
      <Button size="sm" isLoading buttonStyle="plain" loadingText="Loading...">
        Loading
      </Button>
    </div>
    <div className="flex items-center space-x-4 mb-7">
      <Button size="lg" isLoading>
        Loading
      </Button>
      <Button size="lg" isLoading loadingText="Loading...">
        Loading
      </Button>
      <Button size="lg" isLoading buttonStyle="outline" loadingText="Loading...">
        Loading
      </Button>
      <Button size="lg" isLoading buttonStyle="plain" loadingText="Loading...">
        Loading
      </Button>
    </div>
    <div className="flex space-x-4 mb-7">
      <Button isLoading loadingText="Loading...">
        Loading
      </Button>
      <Button variant="accent" isLoading loadingText="Loading...">
        Loading
      </Button>
      <Button variant="warning" isLoading loadingText="Loading...">
        Loading
      </Button>
      <Button variant="danger" isLoading loadingText="Loading...">
        Loading
      </Button>
      <Button variant="success" isLoading loadingText="Loading...">
        Loading
      </Button>
      <Button variant="light" isLoading loadingText="Loading...">
        Loading
      </Button>
      <Button variant="dark" isLoading loadingText="Loading...">
        Loading
      </Button>
    </div>
    <div className="flex space-x-4 mb-7">
      <Button isLoading loadingText="Loading..." buttonStyle="outline">
        Loading
      </Button>
      <Button variant="accent" isLoading loadingText="Loading..." buttonStyle="outline">
        Loading
      </Button>
      <Button variant="warning" isLoading loadingText="Loading..." buttonStyle="outline">
        Loading
      </Button>
      <Button variant="danger" isLoading loadingText="Loading..." buttonStyle="outline">
        Loading
      </Button>
      <Button variant="success" isLoading loadingText="Loading..." buttonStyle="outline">
        Loading
      </Button>
      <Button variant="light" isLoading loadingText="Loading..." buttonStyle="outline">
        Loading
      </Button>
      <Button variant="dark" isLoading loadingText="Loading..." buttonStyle="outline">
        Loading
      </Button>
    </div>
    <div className="flex space-x-4 mb-7">
      <Button isLoading loadingText="Loading..." buttonStyle="plain">
        Loading
      </Button>
      <Button variant="accent" isLoading loadingText="Loading..." buttonStyle="plain">
        Loading
      </Button>
      <Button variant="warning" isLoading loadingText="Loading..." buttonStyle="plain">
        Loading
      </Button>
      <Button variant="danger" isLoading loadingText="Loading..." buttonStyle="plain">
        Loading
      </Button>
      <Button variant="success" isLoading loadingText="Loading..." buttonStyle="plain">
        Loading
      </Button>
      <Button variant="light" isLoading loadingText="Loading..." buttonStyle="plain">
        Loading
      </Button>
      <Button variant="dark" isLoading loadingText="Loading..." buttonStyle="plain">
        Loading
      </Button>
    </div>
  </>
);

export default ButtonPage;
