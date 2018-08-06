import React from "react";

/**
 * Usecase 1: HOC as a Wrapper Component
 * Used to:
 *  - Share styles between Components
 *  - Share common logic between Components
 */

const withBackground = color => WrappedComponent => {
  class WithBackgroundComponent extends React.Component {
    render() {
      return (
        <div style={{ background: color }}>
          <WrappedComponent {...this.props} />
        </div>
      );
    }
  }

  return WithBackgroundComponent;
};

export default withBackground;
