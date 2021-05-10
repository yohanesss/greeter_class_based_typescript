import React from "react";

interface GreeterProps {
    name?: string;
}

interface GreeterState {
    message: string;
}

// So in this case, our state is based on props. how we can sync between our local state and props?
// We can use getDerivedStateFromProps.

export class Greeter extends React.Component<GreeterProps, GreeterState> {
    constructor(props: GreeterProps) {
        super(props);
        this.state = {
            message: Greeter.getNewMessage(props.name || ""),
        };
    }

    state: GreeterState;

    static getDerivedStateFromProps(props: GreeterProps, state: GreeterState) {
        console.log(props, state);
        if (props.name && props.name !== state.message) {
            const newState = { ...state };
            newState.message = Greeter.getNewMessage(props.name);
            return newState;
        }
        return state;
    }

    static getNewMessage(name: string): string {
        return `Hello from, ${name}`;
    }

    render() {
        console.log("rendering Greeter");
        if (!this.props.name) {
            return <div>No name given!</div>;
        }

        return <div>{this.state.message}</div>;
    }
}
