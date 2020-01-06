// import { observable, action, computed } from "mobx";
// import { RootStore } from "./RootStore";

import { types } from "mobx-state-tree"

export const CounterValues = types.model("CounterValues", {
  id: types.identifier,
  count: types.number,
  formatedCount: types.string
}).actions( self => ({
  incrementCount() {
    console.log('Increment: ', self.count++);
    self.formatedCount = `Count: ${self.count}`;
  },
  decrementCount() {
    console.log('Increment: ', self.count--);
    self.formatedCount = `Count: ${self.count}`;
  }
}))

export const CounterStore = types.model("CounterStore", { CounterValues });

/*
export class CounterStore {
  protected rootStore: RootStore;

  public constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
  }

  @observable public count: number = 0;

  @action public incrementCount = () => {
    this.count++;
  };

  @action public decrementCount = () => {
    this.count--;
  };

  @action public resetCount = () => {
    this.count = 0;
  };

  @computed public get formatedCount() {
    return `Counter: ${this.count}`;
  }
}

*/
