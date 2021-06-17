import { Meta, Story } from '@storybook/react';
import Card, { CardProps } from '../components/common/Card/Card';

export default {
  title: 'Components/Card',
  component: Card,
  argTypes: {},
} as Meta;

export const NormalCard: Story<CardProps> = args => (
  <Card {...args}>
    <Card.Header>Tile</Card.Header>
    <Card.Body>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum quia magni eligendi omnis, vel
      inventore provident odio qui vero minus.
    </Card.Body>
  </Card>
);
NormalCard.args = {};
NormalCard.storyName = 'Normal Card';

export const ImageCard: Story<CardProps> = args => (
  <Card {...args}>
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
      explicabo perspiciatis. Natus commodi quasi reiciendis illo dolorum quaerat eum, assumenda id
      facere hic qui iure ipsam. Possimus voluptatibus, odit deserunt repellendus laudantium sunt
      officia tempora omnis at praesentium sed iusto voluptatum ullam accusamus ipsum facere esse.
    </Card.Body>
  </Card>
);
ImageCard.args = {};
ImageCard.storyName = 'Image Card';
