interface ChildProps {
  color: string;
  onClick: () => void;
}

export const Child = ({ color, onClick }: ChildProps) => {
  return <div>
    { color }
    <button onClick={onClick}>Click me</button>
  </div>;
};

// Second method to define Props with Types in a proper way
export const ChildAsFC: React.FC<ChildProps> = ({ color, onClick, children }) => {
  return <div>
    { color }
    { children }
    <button onClick={onClick}>Click me</button>
  </div>;
};
