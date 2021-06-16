import React from 'react';
import Card from '../../components/common/Card/Card';

const CardPage = () => (
  <>
    <h2 className="text-dark dark:text-light text-2xl font-bold mb-5">Card</h2>

    <h3 className="text-dark dark:text-light text-xl font-bold mb-3">Card</h3>
    <hr className="mb-5" />

    <Card className="mb-7">
      <Card.Header>
        <Card.Title>Lorem ipsum dolor sit amet.</Card.Title>
      </Card.Header>
      <Card.Body>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum perferendis tempore quae
        incidunt sed facere eaque pariatur numquam, dolor dolores, voluptatem facilis possimus
        officiis molestiae sint ea fuga voluptatibus itaque qui ut, dolore tenetur? Necessitatibus
        fuga voluptate modi ad in fugit sunt dolores et sapiente ratione ex nobis nemo accusamus
        veniam, reiciendis aspernatur ea quo, quibusdam ut nisi eveniet voluptates placeat. Ea in
        explicabo perspiciatis. Natus commodi quasi reiciendis illo dolorum quaerat eum, assumenda
        id facere hic qui iure ipsam. Possimus voluptatibus, odit deserunt repellendus laudantium
        sunt officia tempora omnis at praesentium sed iusto voluptatum ullam accusamus ipsum facere
        esse.
      </Card.Body>
    </Card>

    <h3 className="text-dark dark:text-light text-xl font-bold mb-3">Image Card</h3>
    <hr className="mb-5" />
    <Card>
      <Card.Image src="https://picsum.photos/1600/400" />
      <Card.Header>
        <Card.Title>Lorem ipsum dolor sit amet.</Card.Title>
      </Card.Header>
      <Card.Body>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum perferendis tempore quae
        incidunt sed facere eaque pariatur numquam, dolor dolores, voluptatem facilis possimus
        officiis molestiae sint ea fuga voluptatibus itaque qui ut, dolore tenetur? Necessitatibus
        fuga voluptate modi ad in fugit sunt dolores et sapiente ratione ex nobis nemo accusamus
        veniam, reiciendis aspernatur ea quo, quibusdam ut nisi eveniet voluptates placeat. Ea in
        explicabo perspiciatis. Natus commodi quasi reiciendis illo dolorum quaerat eum, assumenda
        id facere hic qui iure ipsam. Possimus voluptatibus, odit deserunt repellendus laudantium
        sunt officia tempora omnis at praesentium sed iusto voluptatum ullam accusamus ipsum facere
        esse.
      </Card.Body>
    </Card>
  </>
);

export default CardPage;
