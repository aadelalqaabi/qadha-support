import { makeAutoObservable } from "mobx";
import { instance } from "./instance";

class SupportStore {
  constructor() {
    makeAutoObservable(this);
  }

  supports = [];

  createSupport = async (newSupport) => {
    try {
      await instance.post(`/create`, newSupport);
      return true;
    } catch (error) {
      console.error("create support", error);
    }
  };
}

const supportStore = new SupportStore();
export default supportStore;
