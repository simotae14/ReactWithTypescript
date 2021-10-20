import { Component } from "react";

interface UserSearchProps {
  users: User[]
}

interface User {
  name: string;
  age: number;
}

interface UserSearchState {
  name: string;
  user: User | undefined;
}

class UserSearch extends Component<UserSearchProps> {
  state: UserSearchState = {
    name: '',
    user: undefined
  };

  render() {
    console.log(this.state.user)
    return <div>state</div>
  }
}

export default UserSearch;
