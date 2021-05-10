import React from "react";

interface GreetingProps {
    message: string;
}

export const GreeterFunctional = ({ message }: GreetingProps) => {
    console.log("rendering Greeter");
    return <div>{message}</div>;
};
