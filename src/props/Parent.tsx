import { Child } from './Child';
const Parent: React.FC = () => {
  return (
    <>
      <h1>Hello I am parent</h1>
      <Child color={'red'} />
    </>
  );
};

export default Parent;
