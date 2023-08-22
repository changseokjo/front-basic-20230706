import { create } from "zustand";

// ! 1번째
// let useGlobalStore: any = create();

// ! 2번째
// useGlobalStore = create((set) => ());

// ! 3번째
// useGlobalStore = create((set) => ({
//   // const [state1, setState1] = useState<number>(0);
//   state1: 0,
// }));

// ! 4번째
// useGlobalStore = create((set) => ({
//   // const [state1, setState1] = useState<number>(0);
//   state1: 0,
//   setState1: (state1: number) => {set()}
// }));

// ! 5번째
// useGlobalStore = create((set) => ({
//   // const [state1, setState1] = useState<number>(0);
//   state1: 0,
//   state2: 0,
//   setState1: (state1: number) => {set((state) => ({ ...state }))}
//   // { ...state } => { state1: 0, state2: 0 }
// }));


// ! 6번째
// useGlobalStore = create((set) => ({
//   // const [state1, setState1] = useState<number>(0);
//   state1: 0,
//   state2: 0,
//   setState1: (state1: number) => {set((state) => ({ ...state, state1 }))}
//   // { ...state, state1 } => { state1: 2, state2: 0 }
//   // setState1(2);
// }));

interface GlobalStore {
  state1: number;
  state2: number;
  setState1: (state1: number) => void;
}

const useGlobalStore = create<GlobalStore>((set) => ({
    state1: 0,
    state2: 0,
    setState1: (state1: number) => {set((state) => ({ ...state, state1 }))}
  }));

export default useGlobalStore;