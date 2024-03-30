import { createContext, useContext, useEffect, useReducer } from "react";
import axios from "axios";

export const getDentist = async () => {
  let res = await axios.get("https://jsonplaceholder.typicode.com/users");
  return res.data;
};

export const getDentistById = async (id) => {
  let res = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
  return res.data;
};

export const ContextGlobal = createContext();
const lsFavs = JSON.parse(localStorage.getItem('favs'))

export const initialState = {
  favs: lsFavs || [],
  darkMode: false
}

const dentistReducer = (state, action) => {
  
  switch (action.type) {  
    case "ADD_FAVORITES":
      if(state.favs.find((dentist) => dentist.id === action.payload.id)){
        return state;
      }
      return { ...state, favs: [...state.favs, action.payload] };
    case "REMOVE_BY_ID":
      let newArr = state.favs.filter(
        (dentist) => dentist.id !== action.payload
      )
      return { ...state, favs: newArr };
    case "REMOVE_ALL":
      return { ...state, favs: [] };
    case "CHANGE_MODE":
      return { ...state, darkMode: !state.darkMode };
    default:
      return state;
  }
};

export const ContextProvider = ({ children }) => {

  //Estados globales
  const [state, dispatch] = useReducer(dentistReducer, initialState);

  //Aca van las funciones globales
  let data = { state, dispatch };

  useEffect(() => {
    localStorage.setItem('favs', JSON.stringify(state.favs))
  }, [state.favs])


  return (
    <ContextGlobal.Provider value={data}>
      {children}
    </ContextGlobal.Provider>
  );
};

export const useDentistStates = () => useContext(ContextGlobal);
