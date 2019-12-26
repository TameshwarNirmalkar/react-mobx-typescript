import { observable, action, computed } from "mobx";
import { RootStore } from "./RootStore";

interface FormValues {
    email: string;
    firstName: string;
    lastName: string;
}


export class ContactStore {
    protected rootStore: RootStore;

    public constructor(rootStore: RootStore) {
        this.rootStore = rootStore;
      }
    
      @observable public formvalue: FormValues = {
          email: "",
          firstName: "",
          lastName: "",

      };
    
      @action public saveForm = () => {
        console.log('Form Value: ', this.formvalue);
      };

      @computed public get compiledValues() {
        return `Values: ${this.formvalue}`;
      }
    

}