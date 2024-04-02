import {create} from 'zustand';

const usePaginationStore = create((set) => ({
  currentPage: 1,
  limit: 25,
  setCurrentPage: (page) => set({ currentPage: page, }),
}));

export default usePaginationStore;
