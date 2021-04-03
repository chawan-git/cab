import React, { Component } from "react";

export class FooterComponent extends Component {
  render() {
    return (
      <>
        <footer className="footer bg-dark">
          <div className="text-white">
            <h6 className="text-center">&copy; 2021 Group 1 @ Capgemini</h6>
          </div>
        </footer>
      </>
    );
  }
}

export default FooterComponent;
