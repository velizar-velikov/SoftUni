import { Component } from 'react';

export default class ErrorBoundary extends Component {
    constructor(props) {
        super(props);

        this.state = {
            hasError: false,
            message: '',
        };
    }

    static getDerivedStateFromError(error) {
        return {
            hasError: true,
            message: error.message,
        };
    }

    componentDidCatch(error, errorInfo) {
        // log error
    }

    render() {
        if (this.state.hasError) {
            return <h2>Oops, something went wrong! The error is: {this.state.message}</h2>;
        }

        return this.props.children;
    }
}
