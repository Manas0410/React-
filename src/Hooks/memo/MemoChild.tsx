const MemoChild = ({ count }: { count: number }) => {
  console.log("child rerendered");
  return <div>Child Count: {count}</div>;
};

export default MemoChild;
