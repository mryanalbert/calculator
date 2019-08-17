import React from 'react';
import './Button.css';

class Button extends React.Component {
    isOperator(val) {
        return val === "+" || val === "-" || val === "*" || val === "/";
    }

    render() {
        return (
            <div
                className={`button ${this.isOperator(this.props.value) ? "operator" : ""}`}
                id={this.props.id}
                onClick={() => this.props.handleClick(this.props.value)}
            >
                {this.props.value}
            </div>
        );
    }
}

export default Button;
