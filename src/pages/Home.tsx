import * as React from 'react';
import Button from '../components/common/Button';

const Home = () => {
  const [isLoading, setLoading] = React.useState(false);

  const handleClick = () => {
    setLoading(true);

    setTimeout(() => setLoading(false), 3000);
  };

  return (
    <>
      <section className="bg-blue-200 px-8 py-10">
        <h1 className="font-mono text-white font-bold text-3xl mb-8">
          {'Welcome, to '}
          <span className="text-blue-700">REACT</span>
          {' + '}
          <span className="text-green-400">TAILWIND</span>
          {' Starter Pack'}
        </h1>

        <h2 className="font-semibold text-2xl tracking-wider text-blue-400 mb-3">React JS v17</h2>
        <h2 className="font-semibold text-2xl tracking-wider text-green-400 mb-3">
          Tailwind CSS v2
        </h2>
        <h2 className="font-semibold text-2xl tracking-wider text-red-500 mb-3">React Query v3</h2>
        <h2 className="font-semibold text-2xl tracking-wider text-pink-500">React Hook Form v7</h2>
      </section>

      <section className="mx-8 my-10">
        <div className="bg-white shadow-lg p-5">
          <h3 className="font-semibold text-blue-700 text-xl">Components</h3>
          <hr className="mb-5" />

          <div className="flex items-center space-x-3">
            <Button onClick={handleClick} isLoading={isLoading} color="red-400">
              Button
            </Button>

            <Button color="blue-400">Button</Button>

            <Button color="green-400">Button</Button>

            <Button color="green-900">Button</Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
