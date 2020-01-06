import { types } from "mobx-state-tree";

export const FormValues = types.model("FormValues", {
  id: types.identifier,
  email: types.string,
  firstName: types.string,
  lastName: types.string,
})

export const ContactStore = types.model("ContactStore", { FormValues })