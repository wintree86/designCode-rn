import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";

function mapStateToProps(state) {
  return {
    name: state.name
  };
}

function mapDispatchToProps(dispatch) {
  return {
    updateName: name =>
      dispatch({
        type: "UPDATE_NAME",
        name
      })
  };
}

class Avatar extends React.Component {
  state = {
    photo:
      "https://ixxidesign.azureedge.net/media/1738973/Disney-Icon-Winnie-the-Pooh.jpg?width=562"
  };

  componentDidMount() {
    fetch("https://uinames.com/api/?ext&gender=female")
      .then(response => response.json())
      .then(response => {
        console.log(response);

        this.setState({
          photo: response.photo
        });

        this.props.updateName(response.name);
      });
  }

  render() {
    return <Image source={{ uri: this.state.photo }} />;
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Avatar);
const Image = styled.Image`
  width: 44px;
  height: 44px;
  background: black;
  border-radius: 22px;
`;
