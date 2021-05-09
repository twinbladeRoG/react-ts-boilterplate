import * as React from 'react';
import Button from '../components/common/Button';
import Modal from '../components/common/Modal/Modal';

const Home = () => {
  const [isLoading, setLoading] = React.useState<boolean>(false);

  const handleClick = () => {
    setLoading(true);

    setTimeout(() => setLoading(false), 3000);
  };

  const [showModal, setShowModal] = React.useState(false);
  const toggleModal = () => setShowModal(!showModal);
  const [modal, setModal] = React.useState(false);
  const toggleInnerModal = () => setModal(!modal);

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

          <h4 className="font-semibold text-blue-700 text-lg">Button</h4>
          <hr className="mb-5" />

          <div className="flex flex-wrap items-center space-x-3 mb-5">
            <Button onClick={handleClick} isLoading={isLoading} color="red-400">
              Button
            </Button>

            <Button color="blue-400">Button</Button>

            <Button color="green-400">Button</Button>

            <Button color="green-900">Button</Button>
          </div>

          <h4 className="font-semibold text-blue-700 text-lg">Modal</h4>
          <hr className="mb-5" />
          <Button color="green-900" onClick={toggleModal}>
            Open Modal
          </Button>

          <Modal show={showModal} onClose={toggleModal}>
            <Modal.Header closeButton>Modal Header</Modal.Header>
            <Modal.Body>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium eius eum
                voluptatum corporis, necessitatibus temporibus distinctio odio iste accusantium
                optio veritatis amet consequatur nam ullam? Ratione vero corrupti nemo, at beatae
                earum, accusamus dolor veritatis assumenda illo molestiae laudantium. Alias fugit ea
                animi ratione, id unde? Quidem laborum perspiciatis sit sapiente amet quia. Possimus
                ut reprehenderit tempora itaque, eum ducimus.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium eius eum
                voluptatum corporis, necessitatibus temporibus distinctio odio iste accusantium
                optio veritatis amet consequatur nam ullam? Ratione vero corrupti nemo, at beatae
                earum, accusamus dolor veritatis assumenda illo molestiae laudantium. Alias fugit ea
                animi ratione, id unde? Quidem laborum perspiciatis sit sapiente amet quia. Possimus
                ut reprehenderit tempora itaque, eum ducimus.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium eius eum
                voluptatum corporis, necessitatibus temporibus distinctio odio iste accusantium
                optio veritatis amet consequatur nam ullam? Ratione vero corrupti nemo, at beatae
                earum, accusamus dolor veritatis assumenda illo molestiae laudantium. Alias fugit ea
                animi ratione, id unde? Quidem laborum perspiciatis sit sapiente amet quia. Possimus
                ut reprehenderit tempora itaque, eum ducimus.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium eius eum
                voluptatum corporis, necessitatibus temporibus distinctio odio iste accusantium
                optio veritatis amet consequatur nam ullam? Ratione vero corrupti nemo, at beatae
                earum, accusamus dolor veritatis assumenda illo molestiae laudantium. Alias fugit ea
                animi ratione, id unde? Quidem laborum perspiciatis sit sapiente amet quia. Possimus
                ut reprehenderit tempora itaque, eum ducimus.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium eius eum
                voluptatum corporis, necessitatibus temporibus distinctio odio iste accusantium
                optio veritatis amet consequatur nam ullam? Ratione vero corrupti nemo, at beatae
                earum, accusamus dolor veritatis assumenda illo molestiae laudantium. Alias fugit ea
                animi ratione, id unde? Quidem laborum perspiciatis sit sapiente amet quia. Possimus
                ut reprehenderit tempora itaque, eum ducimus.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium eius eum
                voluptatum corporis, necessitatibus temporibus distinctio odio iste accusantium
                optio veritatis amet consequatur nam ullam? Ratione vero corrupti nemo, at beatae
                earum, accusamus dolor veritatis assumenda illo molestiae laudantium. Alias fugit ea
                animi ratione, id unde? Quidem laborum perspiciatis sit sapiente amet quia. Possimus
                ut reprehenderit tempora itaque, eum ducimus.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium eius eum
                voluptatum corporis, necessitatibus temporibus distinctio odio iste accusantium
                optio veritatis amet consequatur nam ullam? Ratione vero corrupti nemo, at beatae
                earum, accusamus dolor veritatis assumenda illo molestiae laudantium. Alias fugit ea
                animi ratione, id unde? Quidem laborum perspiciatis sit sapiente amet quia. Possimus
                ut reprehenderit tempora itaque, eum ducimus.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium eius eum
                voluptatum corporis, necessitatibus temporibus distinctio odio iste accusantium
                optio veritatis amet consequatur nam ullam? Ratione vero corrupti nemo, at beatae
                earum, accusamus dolor veritatis assumenda illo molestiae laudantium. Alias fugit ea
                animi ratione, id unde? Quidem laborum perspiciatis sit sapiente amet quia. Possimus
                ut reprehenderit tempora itaque, eum ducimus.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium eius eum
                voluptatum corporis, necessitatibus temporibus distinctio odio iste accusantium
                optio veritatis amet consequatur nam ullam? Ratione vero corrupti nemo, at beatae
                earum, accusamus dolor veritatis assumenda illo molestiae laudantium. Alias fugit ea
                animi ratione, id unde? Quidem laborum perspiciatis sit sapiente amet quia. Possimus
                ut reprehenderit tempora itaque, eum ducimus.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium eius eum
                voluptatum corporis, necessitatibus temporibus distinctio odio iste accusantium
                optio veritatis amet consequatur nam ullam? Ratione vero corrupti nemo, at beatae
                earum, accusamus dolor veritatis assumenda illo molestiae laudantium. Alias fugit ea
                animi ratione, id unde? Quidem laborum perspiciatis sit sapiente amet quia. Possimus
                ut reprehenderit tempora itaque, eum ducimus.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium eius eum
                voluptatum corporis, necessitatibus temporibus distinctio odio iste accusantium
                optio veritatis amet consequatur nam ullam? Ratione vero corrupti nemo, at beatae
                earum, accusamus dolor veritatis assumenda illo molestiae laudantium. Alias fugit ea
                animi ratione, id unde? Quidem laborum perspiciatis sit sapiente amet quia. Possimus
                ut reprehenderit tempora itaque, eum ducimus.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium eius eum
                voluptatum corporis, necessitatibus temporibus distinctio odio iste accusantium
                optio veritatis amet consequatur nam ullam? Ratione vero corrupti nemo, at beatae
                earum, accusamus dolor veritatis assumenda illo molestiae laudantium. Alias fugit ea
                animi ratione, id unde? Quidem laborum perspiciatis sit sapiente amet quia. Possimus
                ut reprehenderit tempora itaque, eum ducimus.
              </p>
            </Modal.Body>
            <Modal.Footer>
              <Button color="red-400" className="mr-5" onClick={toggleModal}>
                Close
              </Button>

              <Button color="green-400" onClick={toggleInnerModal}>
                Submit
              </Button>
            </Modal.Footer>
          </Modal>

          <Modal show={modal} onClose={toggleInnerModal} centered>
            <Modal.Header>Inner Modal</Modal.Header>
            <Modal.Body>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis blanditiis laborum
              consectetur exercitationem reiciendis accusantium velit cupiditate quibusdam molestiae
              quos.
            </Modal.Body>
            <Modal.Footer>
              <Button color="red-400" onClick={toggleInnerModal}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </section>
    </>
  );
};

export default Home;
