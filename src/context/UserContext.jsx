import { createContext, useReducer } from 'react';

export const UserContext = createContext(null);

export function UserProvider({ children }) {
  const [state, dispatch] = useReducer(
    UserReducer,
    initialUser
  );

  return (
    <UserContext.Provider value={{state, dispatch}}>
        {children}
    </UserContext.Provider>
  );
}

export const UserReducer = (state, action) => {
  switch (action.type) {
    case 'setId': {
        return {...state, id: action.payload.id}
        break;
    }
    case 'setName': {
        return {...state, name: action.payload.name}
        break;
    }
    case 'setImg': {
        return {...state, img: action.payload.img}
        break;
    }
    case 'setEmail': {
        return {...state, email: action.payload.email}
        break;
    }
    case 'setDataMaster': {
        return {...state, is_data_master: action.payload.is_data_master}
        break;
    }
    default:
        return state;
  }
}

const initialUser = {
    id: 0,
    name: '',
    img: '',
    email:'',
    is_data_master:false
};