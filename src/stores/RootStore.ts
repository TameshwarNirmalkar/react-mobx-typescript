import * as stores from "./";
import { syncHistoryWithStore } from "mobx-react-router";
import { createBrowserHistory } from "history";
import { History } from "history";

export class RootStore {
  public history: History;
  public routerStore: stores.RouterStore;
  public counterStore: stores.CounterStore;
  public constactStore: stores.ContactStore;

  public constructor() {
    const browerHistory = createBrowserHistory();

    this.routerStore = new stores.RouterStore();
    this.history = syncHistoryWithStore(browerHistory, this.routerStore);

    this.counterStore = new stores.CounterStore(this);
    this.constactStore = new stores.ContactStore(this);

    return {
      routerStore: this.routerStore,
      history: this.history,
      counterStore: this.counterStore,
      constactStore: this.constactStore
    };
  }
}
