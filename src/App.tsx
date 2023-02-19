
import { useAppSelector, useAppDispatch } from "./store/hooks";
import { decrement, increment } from "./slices/counterSlice";
import "./App.css";
import AnimalCard from "./components/AnimalCard/AnimalCard";

function App() {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  return (
    <div className="App">
      <AnimalCard />
      <div>
        <div>
          <button
            aria-label="Increment value"
            onClick={() => dispatch(increment())}
          >
            Increment
          </button>
          <span>{count}</span>
          <button
            aria-label="Decrement value"
            onClick={() => dispatch(decrement())}
          >
            Decrement
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
