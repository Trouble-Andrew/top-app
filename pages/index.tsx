// import Image from 'next/image';

import Button from '../components/Button/Button';
import Htag from '../components/Htag/Htag';
import P from '../components/P/P';
import Tag from '../components/Tag/Tag';

export default function Home(): JSX.Element {
  return (
    <>
      <Htag tag="h1">Title</Htag>

      <Button appearance="primary">Button</Button>
      <Button appearance="primary" arrow="right">
        Button
      </Button>
      <Button appearance="primary" arrow="down">
        Button
      </Button>
      <Button appearance="ghost">Button</Button>
      <Button appearance="ghost" arrow="right">
        Button
      </Button>
      <Button appearance="ghost" arrow="down">
        Button
      </Button>

      <P>Paragraph default</P>
      <P size="small">Paragraph small</P>
      <P size="large">Paragraph default</P>

      <Tag size="small">small tag</Tag>
      <Tag size="small" color="red">
        small tag
      </Tag>
      <Tag size="medium">medium tag</Tag>
      <Tag size="medium" color="green">
        medium tag
      </Tag>
    </>
  );
}
