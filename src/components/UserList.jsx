import { getUsers } from "../api";

export default UserList = () => {
  getUsers().then((users) => {
    return users;
  });
};
