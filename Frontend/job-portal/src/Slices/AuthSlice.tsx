import { createSlice } from "@reduxjs/toolkit";
import { getItem, removeItem, setItem, setToken } from "../Servicess/LocalStorageServices";

const AuthSlice = createSlice({
  name:"auth",
  initialState:localStorage.getItem("auth"),
  reducers:{
    setAuth:(state, action) =>{
      setToken("auth", action.payload);
     
      return action.payload;

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