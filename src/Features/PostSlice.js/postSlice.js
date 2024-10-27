import { createSlice } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { getFromLocal, setLocal } from '../../App/local';

export const postSlice = createSlice({
  name: [],
  initialState: {
    posts: getFromLocal()
  },

  reducers: {

    addPost: (state, action) => {
      state.posts.push(action.payload)
      setLocal(state.posts);

    },


  }

})

export const { addPost } = postSlice.actions;
// const dispatch = useDispatch();

