// import { GameStore } from "src/app/stores";

// type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

// declare module "mobx-react" {
//   export function inject<D extends object>(
//     mapStoreToProps: (store: GameStore) => D
//   ): <A extends D>(
//     component: React.ComponentType<A> | React.SFC<A>
//   ) => React.SFC<Omit<A, keyof D> & Partial<D>> & IWrappedComponent<A>;
// }
