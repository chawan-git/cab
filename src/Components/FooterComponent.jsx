import React, { Component } from "react";

// Author: Ashutosh Rao Chawan U
// This component is used to render the Bootstrap footer on all the screens.
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

// Exporting the component so that it could be imported and used by other components.
export default FooterComponent;
