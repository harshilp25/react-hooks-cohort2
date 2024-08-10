import { memo, useCallback, useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const memoizedFunction = useCallback(() => {
    console.log("hey there");
  }, []);

  // const a = () => {
  //   console.log("hey there");
  // };

  // --> as on each render the reference will be changes of js objetcs , and fucntions so react will think that as the fucntion has chnaged let me call it's decomponent even we haven't chnaged the props bcz , that component has the memo which skips the re-rendering if the props are unchaned that's why to prevent this we used the useCallback() --->

  return (
    <div>
      {console.log("inside the parent component")}
      <DemoComponent memoizedFunction={memoizedFunction} />
      <br />
      <br />
      <br />
      <button onClick={() => setCount((c) => c + 1)}>{count}</button>
    </div>
  );
}

const DemoComponent = memo(({ memoizedFunction }) => {
  return <>{console.log("object")}</>;
});

export default App;
