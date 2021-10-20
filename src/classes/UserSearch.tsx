import { Component } from "react";

interface UserSearchProps {
  users: {
    name: string;
    age: number;
  }[]
}

class UserSearch extends Component<UserSearchProps> {
  render() {
    console.log(this.props.users);

    return <div>ciao</div>
  }
}

export default UserSearch;
