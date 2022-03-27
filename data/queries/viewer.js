import  User  from '../models/User';
import UserType from '../types/UserType';


const viewer = {
  type: UserType,
  resolve({ user }){
    return User.findByPk(user && user.id);
  }
};

export default viewer;
