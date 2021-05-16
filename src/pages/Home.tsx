import * as React from 'react';
import Accordian from '../components/common/Accordian/Accordian';
import Badge from '../components/common/Badge/Badge';
import Breadcrumb from '../components/common/Breadcrumb/Breadcrumb';
import Button from '../components/common/Button';
import Form from '../components/common/Form/Form';
import FormControl from '../components/common/Form/FormControl';
import FormGroup from '../components/common/Form/FormGroup';
import FormLabel from '../components/common/Form/FormLabel';
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

          <Button color="green-900 mb-9" onClick={toggleModal}>
            Open Modal
          </Button>

          <Modal show={showModal} onClose={toggleModal} scrollable>
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

          <Modal show={modal} onClose={toggleInnerModal} centered disbaledBackdropPress>
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

          <h4 className="font-semibold text-blue-700 text-lg">Accordian</h4>
          <hr className="mb-5" />

          <Accordian defaultKey="1" multiple scrollOnOpen>
            <Accordian.Toggle eventKey="0">Click 1</Accordian.Toggle>
            <Accordian.Collapse eventKey="0">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis officiis a soluta
              aliquid quam quibusdam, corrupti temporibus fuga praesentium numquam.
            </Accordian.Collapse>
            <Accordian.Toggle eventKey="1">Click 2</Accordian.Toggle>
            <Accordian.Collapse eventKey="1">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos quas voluptate
              nesciunt ullam corrupti voluptatem nihil debitis, cupiditate, perspiciatis, magnam in
              quidem reprehenderit nobis labore nam ratione necessitatibus quis adipisci aperiam
              delectus totam quo? Earum deserunt aliquam nam recusandae veritatis ea a, provident
              laborum iure quaerat doloremque autem odio incidunt officia repellendus vitae iusto
              sunt eligendi? Aut autem dolor at omnis sed soluta adipisci vero natus, ratione ut
              deserunt quia est necessitatibus nesciunt dolorum non delectus similique veniam esse
              libero provident. Officia minus atque debitis ipsa minima nesciunt obcaecati
              consectetur dolorem quas distinctio autem praesentium hic nostrum eum, aliquid eaque
              consequatur beatae. Quasi ut aliquid architecto, quaerat sed ea veritatis qui fugit
              sunt nisi. Quibusdam laudantium fugiat aliquid magnam voluptate, aut ipsum
              voluptatibus dolorem doloremque, sunt distinctio ex. Recusandae laborum aperiam
              deserunt corrupti tempora iusto maxime non sit earum repudiandae, minima fuga
              voluptatem laboriosam voluptatibus labore quia, veniam ex porro nostrum numquam modi
            </Accordian.Collapse>
          </Accordian>

          <h4 className="font-semibold text-blue-700 text-lg">Badges</h4>
          <hr className="mb-5" />

          <div className="flex items-center space-x-4 mb-7">
            <Badge>Who</Badge>
            <Badge color="red-400">Let</Badge>
            <Badge color="yellow-400">The</Badge>
            <Badge color="gray-400">Dogs</Badge>
            <Badge color="green-400">Out</Badge>
          </div>

          <div className="flex items-center space-x-4 mb-7">
            <Badge pill>Who</Badge>
            <Badge pill color="red-400">
              Let
            </Badge>
            <Badge pill color="yellow-400">
              The
            </Badge>
            <Badge pill color="gray-400">
              Dogs
            </Badge>
            <Badge pill color="green-400">
              Out
            </Badge>
          </div>

          <h4 className="font-semibold text-blue-700 text-lg">Breadcrumbs</h4>
          <hr className="mb-5" />

          <Breadcrumb>
            <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
            <Breadcrumb.Item href="#">Category</Breadcrumb.Item>
            <Breadcrumb.Item href="#" active>
              Electronics
            </Breadcrumb.Item>
          </Breadcrumb>

          <h4 className="font-semibold text-blue-700 text-lg">Form</h4>
          <hr className="mb-5" />

          <Form>
            <FormGroup controlId="name">
              <FormLabel>Normal</FormLabel>
              <FormControl placeholder="Name" />
            </FormGroup>
            <FormGroup controlId="name">
              <FormLabel>Invalid Input</FormLabel>
              <FormControl placeholder="Name" isInvalid />
              <Form.Control.Feedback type="invalid">Oh noooo!</Form.Control.Feedback>
            </FormGroup>
            <FormGroup controlId="name">
              <FormLabel>Valid Input</FormLabel>
              <FormControl placeholder="Name" isValid />
              <Form.Control.Feedback type="valid">Go to go!</Form.Control.Feedback>
            </FormGroup>
            <FormGroup controlId="name">
              <FormLabel>Plain Text</FormLabel>
              <FormControl placeholder="Name" plaintext />
            </FormGroup>
          </Form>
        </div>
      </section>
    </>
  );
};

Badge.defaultProps = {
  color: 'blue-400',
};

export default Home;
