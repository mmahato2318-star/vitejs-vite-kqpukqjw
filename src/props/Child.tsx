interface colorProps {
  color: string;
}

export const Child: React.FC<colorProps> = ({ color }) => {
  return <div>I am child and color is {color}</div>;
};
