import React from "react";

import Modal from "../../components/UI/Modal/Modal";
import Auxiliar from "../Auxiliar/Auxiliar";

const withErrorHandler = (WrappedComponent, axios) => {
  return class extends React.Component {
    state = {
      error: null,
    };
    UNSAFE_componentWillMount() {
      this.reqInterceptor = axios.interceptors.request.use((req) => {
        this.setState({ error: null });
        return req;
      });
      this.resInterceptor = axios.interceptors.response.use(null, (error) => {
        this.setState({ error: error });
      });
    }

    componentWillUnmount() {
      axios.interceptors.request.eject(this.reqInterceptor);
      axios.interceptors.response.eject(this.resInterceptor);
    }
    errorConfirmedHandler = () => {
      this.setState({
        error: null,
      });
    };
    render() {
      return (
        <Auxiliar>
          <Modal
            show={this.state.error}
            modalClosed={this.errorConfirmedHandler}
          >
            {this.state.error ? this.state.error.message : null}
          </Modal>
          <WrappedComponent {...this.props} />
        </Auxiliar>
      );
    }
  };
};

export default withErrorHandler;
