import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./Slices/UserSlice"
import profileReducer from "./Slices/ProfileSlice"
import filterReducer from "./Slices/FilterSlice"
import sortReducer from "./Slices/sortSlice"
import authReducer from "./Slices/AuthSlice"



export default configureStore({
reducer:{
  auth:authReducer,
  user:userReducer,
  profile:profileReducer,
 filter:filterReducer,
 sort:sortReducer
}

});