// lib/features/sidebarToggleSlice.ts
import { createSlice } from '@reduxjs/toolkit';
import ProfileModal from "../../app/components/common/header/ProfileModal"

interface SidebarToggle {
  sidebarToggle: boolean;
  profileToggle:number;
  shortCommentsToggle:boolean

}

const initialState: SidebarToggle = {
  sidebarToggle: false,
  profileToggle:0,
  shortCommentsToggle:false
};

const sidebarToggleSlice = createSlice({
  name: 'toggle',
  initialState,
  reducers: {
    sidebarToggleAction: (state) => {
      state.sidebarToggle = !state.sidebarToggle;
    },
    profileToggleAction : (state,action) =>{
        state.profileToggle = action.payload
    },
    shortCommentsToggleAction : (state) =>{
        state.shortCommentsToggle = !state.shortCommentsToggle
    }
  },
});

export const { sidebarToggleAction ,profileToggleAction,shortCommentsToggleAction} = sidebarToggleSlice.actions;
export default sidebarToggleSlice.reducer;
