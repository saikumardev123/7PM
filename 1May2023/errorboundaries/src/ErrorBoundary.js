import React from 'react';
class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { error: null, errorInfo: null };
    }
    componentDidCatch(error, errorInfo) {
        // Catch errors in any components below and re-render with error message
        this.setState({
            error: error,
            errorInfo: errorInfo
        })
        // You can also log error messages to an error reporting service here
    }
    render() {
        if (this.state.error) {
            // Error path
            return (
                <>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3oukz-664ffQj6YhKtEo_EvUMw1Q37sd5hg&usqp=CAU"></img>
                </>
            );
        }
        // Normally, just render children
        return this.props.children;
    }
}
export default ErrorBoundary;