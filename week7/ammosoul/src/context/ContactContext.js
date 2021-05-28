import React, { Component } from "react";
const { Provider, Consumer } = React.createContext();

class ContactContextProvider extends Component {
  state = {
    menuList: [
      {
        name: "Jane",
        comment: "Maxberry is my favorite!!",
      },

      {
        name: "James",
        comment: "Any Chance you'll be making a passion fruit one?",
      },

      {
        name: "John",
        comment: "I love the flavor options!",
      },
    ],

    name: "",
    comment: "",
  };

  handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  menuListUpdate = (event) => {
    event.preventDefault();
    this.setState({
      menuList: this.state.menuList.concat({
        name: this.state.name,
        comment: this.state.comment,
      }),
      name: "",
      comment: "",
    });
  };

  menuDelete = (index) => {
    console.log("edit", index);
    console.log(document.getElementById(index));
    var array = this.state.menuList;
    array.splice(index, 1);
    console.log(array);
    this.setState({ menuList: array });
  };

  render() {
    return (
      <div>
        <Provider
          value={{
            menuList: this.state.menuList,
            name: this.state.name,
            comment: this.state.comment,
            handleChange: this.handleChange,
            menuListUpdate: this.menuListUpdate,
            menuDelete: this.menuDelete,
          }}
        >
          {this.props.children}
        </Provider>
      </div>
    );
  }
}
export { ContactContextProvider, Consumer as ContactContextConsumer };
