import { createSlice } from "@reduxjs/toolkit";
import { getItem, removeItem, setItem } from "../Servicess/LocalStorageServices";

const AuthSlice = createSlice({
  name:"auth",
  initialState:getItem("auth"),
  reducers:{
    setAuth:(state, action) =>{
      setItem("auth", action.payload);
      state = getItem("auth")
      return state;

    },

    removeAuth:(state) =>{
      removeItem("auth");
      state = null;
      return state;
    }

  }

}) 

export const {setAuth, removeAuth} = AuthSlice.actions;

export default AuthSlice.reducer;