import {combineReducers} from "redux";
interface ActionA {
  type: string
  payload ?: any
}

// Mock Data 
export const  users = [
  {
    name : 'Harry',
    email : "harry1@gmail.com",
    book : "Goblet of fire",
    price : 2001
  }
]

 


const reducerFunction = (state = users, action : ActionA ) =>{

  console.log(state);
  switch(action.type){

    case "ADD":
      return  [...state, action.payload]

    case "DELETE":
      return state.filter((data, index) => index !== action.payload);
      
    
    case "EDIT":
      return state = state.map((element, ind)=>{
        if(ind === action.payload.obj.index){
          return action.payload.obj.values
        }
        else{
          return element;
        }

      })
    default:
      return state;
  }


}
export const rootReducer = combineReducers({reducerFunction})


