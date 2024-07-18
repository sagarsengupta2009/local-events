import React, { Component } from 'react'

export default class ErrorBoundary extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isError: false,
            errorInfo: ""
        }
    }

    static getDerivedStateFromError(error) {
        return { errorInfo: error, isError: true };
    }

    componentDidCatch(error) {
        console.log(error, "error caught in  error boundary");
        // do some logging here
    }

    render() {
        console.log("I am here", this.state);
        if (this.state.isError) {
            return <p>Error</p>
        }
        return (
            <>{this.props.children}</>
        )
    }

    // fetFallback(error){
    //     switch(){

    //     }
    //   }
}

