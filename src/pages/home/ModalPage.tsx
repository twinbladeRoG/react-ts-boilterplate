import { useState } from 'react';
import Button from '../../components/common/Button';
import Modal from '../../components/common/Modal/Modal';

enum MODALS {
  BASIC,
  CENTERED,
  SCROLLABLE,
  DISABLE_BACKDROP,
}

const ModalPage = () => {
  const [modal, setModal] = useState<MODALS | null>(null);
  const toggle = (value: MODALS | null) => setModal(value);
  const closeModal = () => setModal(null);

  return (
    <>
      <h2 className="text-dark dark:text-light text-2xl font-bold mb-5">Modal</h2>
      <hr className="mb-5" />

      <div className="flex space-x-4">
        <Button onClick={() => toggle(MODALS.BASIC)}>Open Modal</Button>
        <Button onClick={() => toggle(MODALS.CENTERED)}>Centred Modal</Button>
        <Button onClick={() => toggle(MODALS.SCROLLABLE)}>Scrollable Modal</Button>
        <Button onClick={() => toggle(MODALS.DISABLE_BACKDROP)}>Disbale Backdrop</Button>
      </div>

      <Modal show={modal === MODALS.BASIC} onClose={closeModal}>
        <Modal.Header closeButton>Modal Title</Modal.Header>
        <Modal.Body>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus tempora quibusdam
          explicabo architecto maiores. Fuga atque nihil aspernatur alias odit, vitae velit debitis
          dignissimos minima nobis quae reiciendis expedita eaque quod iusto ipsa cupiditate
          recusandae sapiente totam excepturi cum at assumenda? Modi tempore vitae porro animi
          officia similique facilis vero aperiam officiis laboriosam nisi aspernatur quidem
          voluptates ab, accusamus asperiores velit neque assumenda praesentium sint? Ipsam,
          dignissimos blanditiis. Ut, inventore doloremque nam necessitatibus numquam veniam non
          tempore atque hic assumenda repellat provident distinctio fugiat, ullam incidunt similique
          nihil dicta, quasi totam. Cum laudantium, numquam delectus explicabo non voluptate
          reprehenderit iure.
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={closeModal} variant="danger" buttonStyle="plain">
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={modal === MODALS.CENTERED} onClose={closeModal} centered>
        <Modal.Header closeButton>Modal Title</Modal.Header>
        <Modal.Body>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus tempora quibusdam
          explicabo architecto maiores. Fuga atque nihil aspernatur alias odit, vitae velit debitis
          dignissimos minima nobis quae reiciendis expedita eaque quod iusto ipsa cupiditate
          recusandae sapiente totam excepturi cum at assumenda? Modi tempore vitae porro animi
          officia similique facilis vero aperiam officiis laboriosam nisi aspernatur quidem
          voluptates ab, accusamus asperiores velit neque assumenda praesentium sint? Ipsam,
          dignissimos blanditiis. Ut, inventore doloremque nam necessitatibus numquam veniam non
          tempore atque hic assumenda repellat provident distinctio fugiat, ullam incidunt similique
          nihil dicta, quasi totam. Cum laudantium, numquam delectus explicabo non voluptate
          reprehenderit iure.
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={closeModal} variant="danger" buttonStyle="plain">
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={modal === MODALS.SCROLLABLE} onClose={closeModal} scrollable>
        <Modal.Header closeButton>Modal Title</Modal.Header>
        <Modal.Body className="text-">
          <p className="mb-7">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus tempora quibusdam
            explicabo architecto maiores. Fuga atque nihil aspernatur alias odit, vitae velit
            debitis dignissimos minima nobis quae reiciendis expedita eaque quod iusto ipsa
            cupiditate recusandae sapiente totam excepturi cum at assumenda? Modi tempore vitae
            porro animi officia similique facilis vero aperiam officiis laboriosam nisi aspernatur
            quidem voluptates ab, accusamus asperiores velit neque assumenda praesentium sint?
            Ipsam, dignissimos blanditiis. Ut, inventore doloremque nam necessitatibus numquam
            veniam non tempore atque hic assumenda repellat provident distinctio fugiat, ullam
            incidunt similique nihil dicta, quasi totam. Cum laudantium, numquam delectus explicabo
            non voluptate reprehenderit iure.
          </p>
          <p className="mb-7">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus tempora quibusdam
            explicabo architecto maiores. Fuga atque nihil aspernatur alias odit, vitae velit
            debitis dignissimos minima nobis quae reiciendis expedita eaque quod iusto ipsa
            cupiditate recusandae sapiente totam excepturi cum at assumenda? Modi tempore vitae
            porro animi officia similique facilis vero aperiam officiis laboriosam nisi aspernatur
            quidem voluptates ab, accusamus asperiores velit neque assumenda praesentium sint?
            Ipsam, dignissimos blanditiis. Ut, inventore doloremque nam necessitatibus numquam
            veniam non tempore atque hic assumenda repellat provident distinctio fugiat, ullam
            incidunt similique nihil dicta, quasi totam. Cum laudantium, numquam delectus explicabo
            non voluptate reprehenderit iure.
          </p>
          <p className="mb-7">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus tempora quibusdam
            explicabo architecto maiores. Fuga atque nihil aspernatur alias odit, vitae velit
            debitis dignissimos minima nobis quae reiciendis expedita eaque quod iusto ipsa
            cupiditate recusandae sapiente totam excepturi cum at assumenda? Modi tempore vitae
            porro animi officia similique facilis vero aperiam officiis laboriosam nisi aspernatur
            quidem voluptates ab, accusamus asperiores velit neque assumenda praesentium sint?
            Ipsam, dignissimos blanditiis. Ut, inventore doloremque nam necessitatibus numquam
            veniam non tempore atque hic assumenda repellat provident distinctio fugiat, ullam
            incidunt similique nihil dicta, quasi totam. Cum laudantium, numquam delectus explicabo
            non voluptate reprehenderit iure.
          </p>
          <p className="mb-7">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus tempora quibusdam
            explicabo architecto maiores. Fuga atque nihil aspernatur alias odit, vitae velit
            debitis dignissimos minima nobis quae reiciendis expedita eaque quod iusto ipsa
            cupiditate recusandae sapiente totam excepturi cum at assumenda? Modi tempore vitae
            porro animi officia similique facilis vero aperiam officiis laboriosam nisi aspernatur
            quidem voluptates ab, accusamus asperiores velit neque assumenda praesentium sint?
            Ipsam, dignissimos blanditiis. Ut, inventore doloremque nam necessitatibus numquam
            veniam non tempore atque hic assumenda repellat provident distinctio fugiat, ullam
            incidunt similique nihil dicta, quasi totam. Cum laudantium, numquam delectus explicabo
            non voluptate reprehenderit iure.
          </p>
          <p className="mb-7">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus tempora quibusdam
            explicabo architecto maiores. Fuga atque nihil aspernatur alias odit, vitae velit
            debitis dignissimos minima nobis quae reiciendis expedita eaque quod iusto ipsa
            cupiditate recusandae sapiente totam excepturi cum at assumenda? Modi tempore vitae
            porro animi officia similique facilis vero aperiam officiis laboriosam nisi aspernatur
            quidem voluptates ab, accusamus asperiores velit neque assumenda praesentium sint?
            Ipsam, dignissimos blanditiis. Ut, inventore doloremque nam necessitatibus numquam
            veniam non tempore atque hic assumenda repellat provident distinctio fugiat, ullam
            incidunt similique nihil dicta, quasi totam. Cum laudantium, numquam delectus explicabo
            non voluptate reprehenderit iure.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={closeModal} variant="danger" buttonStyle="plain">
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={modal === MODALS.DISABLE_BACKDROP} onClose={closeModal} disbaledBackdropPress>
        <Modal.Header closeButton>Modal Title</Modal.Header>
        <Modal.Body>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus tempora quibusdam
          explicabo architecto maiores. Fuga atque nihil aspernatur alias odit, vitae velit debitis
          dignissimos minima nobis quae reiciendis expedita eaque quod iusto ipsa cupiditate
          recusandae sapiente totam excepturi cum at assumenda? Modi tempore vitae porro animi
          officia similique facilis vero aperiam officiis laboriosam nisi aspernatur quidem
          voluptates ab, accusamus asperiores velit neque assumenda praesentium sint? Ipsam,
          dignissimos blanditiis. Ut, inventore doloremque nam necessitatibus numquam veniam non
          tempore atque hic assumenda repellat provident distinctio fugiat, ullam incidunt similique
          nihil dicta, quasi totam. Cum laudantium, numquam delectus explicabo non voluptate
          reprehenderit iure.
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={closeModal} variant="danger" buttonStyle="plain">
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalPage;
