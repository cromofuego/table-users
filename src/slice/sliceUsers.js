import { createSlice } from "@reduxjs/toolkit";
import { sortByName, sortByWebsite, sortByEmail, sortByNumberAscend, sortByStatus, formatedDate, Random } from '../helpers';
import axios from "axios";

const slicerUsers = createSlice({
  name: 'users',
  initialState: {
    list: [],
    inputsSearch: {
      name: '',
      email: '',
      selectedOption: '',
      website: '',
    },
    idUserWillBeEdit: null, // maybe is bad do this
  },
  reducers: {
    setInputsSearch: (state, action) => {

      const { name, email, selectedOption, website } = action.payload;

      state.inputsSearch = {
        name,
        email,
        selectedOption,
        website,
      }

    },
    setUserList: (state, action) => {
      // console.log(action.payload)
      state.list = action.payload;
    },
    addNewUserToList: (state, action) => {

      const {
        name,
        email,
        website,
        status,

      } = action.payload;

      // console.log(status)

      let firstLetters = '';
      const arraysNames = name.split(' ')
      if (arraysNames.length === 1) {
        firstLetters = arraysNames[0][0];
      } else if (arraysNames.length > 1) {
        firstLetters = arraysNames[0][0].toUpperCase() + arraysNames[1][0].toUpperCase();
      }

      const newUser = [
        ...state.list,
        {
          name,
          email,
          website,
          status: status === 'true' ? true : false,
          id: state.list.length + 1,
          shortName: firstLetters,
          date: formatedDate(new Date().toISOString()),
        },
      ]
      state.list = newUser
    },
    removingUserFromList: (state, action) => {
      const indexUser = state.list.filter(user => user.id !== action.payload)
      state.list = indexUser
    },
    setIdUser: (state, action) => {
      state.idUserWillBeEdit = action.payload

      console.log(action.payload)
    },
    editingUserFromList: (state, action) => {

      const { status } = action.payload
      const newInfoForUSer = {
        ...action.payload,
        status: status.toString() === 'true' ? true : false, // because we received string we shange for booleans 
      }

      const index = state.list.findIndex(user => user.id === state.idUserWillBeEdit)

      state.list[index] = {
        ...state.list[index],
        ...newInfoForUSer,
      }
      console.log(state.list[index])
    },
    sortingStateInfoUser: (state, action) => {

      const { payload } = action;
      // const arrayUserInfoForReset = [...state.list]
      const arrayUserInfoForSort = [...state.list]

      if (payload === 'reset') {
        arrayUserInfoForSort.sort(sortByNumberAscend)
        state.list = arrayUserInfoForSort;
        return
      }

      if (payload === 'number') {
        arrayUserInfoForSort.sort(sortByNumberAscend)
        state.list = arrayUserInfoForSort;
        return
      }
      if (payload === 'name') {
        arrayUserInfoForSort.sort(sortByName)
        state.list = arrayUserInfoForSort;
        return
      }
      if (payload === 'email') {
        arrayUserInfoForSort.sort(sortByEmail)
        state.list = arrayUserInfoForSort;
        return
      }
      if (payload === 'website') {
        arrayUserInfoForSort.sort(sortByWebsite)
        state.list = arrayUserInfoForSort;
        return
      }
      if (payload === 'status') {
        arrayUserInfoForSort.sort(sortByStatus)
        state.list = arrayUserInfoForSort;
        return
      }

    },
  }
})

export const { setUserList, sortingStateInfoUser, setInputsSearch, addNewUserToList, removingUserFromList, setIdUser, editingUserFromList } = slicerUsers.actions;

export default slicerUsers.reducer;

export const fetchAllUsers = () => (dispatch) => {
  axios.get('https://jsonplaceholder.typicode.com/users/')
    .then(response => {

      let infoDuplicated = [];
      for (let i = 9; i >= 0; i--) {
        if (response.data) {
          const sliced = response.data.slice(0, 7);
          infoDuplicated.push(sliced);
        }
      }

      const arrayFlat = infoDuplicated.flat(3);
      const arrayCompleted = arrayFlat.map((item, index) => {
        const arraysNames = item.name.split(' ')
        const firstLetters = arraysNames[0][0] + arraysNames[1][0];
        const arrayReturned = { ...item, date: formatedDate(new Date().toISOString()), shortName: firstLetters, id: index + 1, status: Random(index) }
        return arrayReturned
      })



      dispatch(setUserList(arrayCompleted));
    })
    .catch(error => console.log(error))
}