import React from 'react';
import { withRouter } from 'react-router-dom';
import { RouteComponentProps } from 'react-router';

interface IStatusProps extends RouteComponentProps {
  staticContext?: any;
  code: string;
}

class Status extends React.Component<IStatusProps, {}> {
  componentWillMount() {
    if (this.props.staticContext) {
      this.props.staticContext.status = this.props.code;
    }
  }

  render(): null {
    return null;
  }
}

export default withRouter(Status);
