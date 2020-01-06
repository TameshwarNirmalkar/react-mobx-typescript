import * as stores from "./";
import { syncHistoryWithStore } from "mobx-react-router";
import { createBrowserHistory } from "history";
// import { History } from "history";

// Mobx state tree
import { types, Instance } from "mobx-state-tree"
import { ContactStore, CounterStore } from './';

// export class RootStore {
//   public history: History;
//   public routerStore: stores.RouterStore;
//   public counterStore: stores.CounterStore;
//   public constactStore: stores.ContactStore;

//   public constructor() {
//     const browerHistory = createBrowserHistory();

//     this.routerStore = new stores.RouterStore();
//     this.history = syncHistoryWithStore(browerHistory, this.routerStore);

//     this.counterStore = new stores.CounterStore(this);
//     this.constactStore = new stores.ContactStore(this);

//     return {
//       routerStore: this.routerStore,
//       history: this.history,
//       counterStore: this.counterStore,
//       constactStore: this.constactStore
//     };
//   }
// }
// let history: History;
const browerHistory = createBrowserHistory();

const routerStore = new stores.RouterStore();
// const history = syncHistoryWithStore(browerHistory, routerStore);

export const HistoryStore = types.model("HistoryStore", { 
  browerHistory: types.optional(types.custom(null), {})
 });

export type RootStoreModel = Instance<typeof RootStore>

export const RootStore = types.model("RootStore", {
  CounterStore: CounterStore,
  ConstactStore: ContactStore,
  history: HistoryStore
})

// export default RootStore;
