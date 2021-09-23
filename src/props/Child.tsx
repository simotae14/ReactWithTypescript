interface ChildProps {
  color: string;
}

export const Child = ({ color }: ChildProps) => {
  return <div>{ color }</div>;
};

// Second method to define Props with Types in a proper way
export const ChildAsFC: React.FC<ChildProps> = ({ color }) => {
  return <div>{ color }</div>;
};
