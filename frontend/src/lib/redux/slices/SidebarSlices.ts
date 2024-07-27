// lib/features/sidebarToggleSlice.ts
import { createSlice } from '@reduxjs/toolkit';

interface SidebarToggle {
  isOpen: boolean;
}

const initialState: SidebarToggle = {
  isOpen: false,
};

const sidebarToggleSlice = createSlice({
  name: 'sidebarToggle',
  initialState,
  reducers: {
    toggle: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
});

export const { toggle } = sidebarToggleSlice.actions;
export default sidebarToggleSlice.reducer;
