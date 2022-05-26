
import jwt_decode from 'jwt-decode';
const authReducer=(state,action)=>{
const {type, payload}=action
switch (type) {
  case 'LOG_IN':
    return {
    ...state,
    user: {
      id:jwt_decode(payload.tokens.accessToken).id,
      isAuthenticated: true,
      isAdmin:false,
      email:jwt_decode(payload.tokens.accessToken).email ,
      name:jwt_decode(payload.tokens.accessToken).name
    },
    tokens:payload.tokens
    }
    case 'GET_USER':

    return {
   
    }
   
  default:
    break;
}
}

export default authReducer;