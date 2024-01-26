import create from "zustand";

const useIdStore = create((set) => ({
  userId: "",
  updateUserId: (id) => set({ userId: id }),
  removeUserId:  () => set({ userId: '' })
}));


export default useIdStore;
