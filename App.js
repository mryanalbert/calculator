import React from 'react';
import Button from './components/Button'
import './App.css';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            input: "0",
            decimal: true,
            operator: true
        }

    this.handleClear = this.handleClear.bind(this);
    this.addToInput = this.addToInput.bind(this);
    this.evaluate = this.evaluate.bind(this);
    }

    handleClear() {
        this.setState({ input: "0", decimal: true, operator: true })
    }

    addToInput(val) {
        if (this.state.input == "0") {
            if (val == "+" || val == "-" || val == "*" || val == "/") {
                this.setState({ input: this.state.input + val, decimal: false, operator: false });
            }
            else if (val == ".") {
                this.setState({ input: this.state.input + val, decimal: false, operator: false });
            }
            else {
                this.setState({ input: val, decimal: true, operator: true });
            }
        }

        else {
            if (val == "+" || val == "-" || val == "*" || val == "/") {
                if (this.state.operator == true) {
                    this.setState({ input: this.state.input + val, decimal: true, operator: false });
                }
            }
            else if(val == ".") {
                if (this.state.decimal == true) {
                    if (this.state.input[this.state.input.length - 1] == "+" || this.state.input[this.state.input.length - 1] == "-" || this.state.input[this.state.input.length - 1] == "*" || this.state.input[this.state.input.length - 1] == "/") {
                        this.setState({ input: this.state.input + "0" + val, decimal: false, operator: false });
                    }
                    else {
                        this.setState({ input: this.state.input + val, decimal: false, operator: false});
                    }
                }
                else {
                    if (this.state.input.toString().indexOf(".") == -1) { 
                        this.setState({ input:this.state.input + val });
                    }
                }
            }
            else {
                this.setState({ input: this.state.input + val, decimal: this.state.decimal, operator: true });
            }
        }
    }

    evaluate() {
        this.setState({ input: eval(this.state.input), decimal: false, operator: true });
        
    }

    render() {
        return (
            <div className="App">
                <div className="calc-wrapper">
                <Input id="display" value={this.state.input} />
                <div className="row">
                    <Button id="seven" value="7" handleClick={this.addToInput}/>
                    <Button id="eight" value="8" handleClick={this.addToInput}/>
                    <Button id="nine" value="9" handleClick={this.addToInput}/>
                    <Button id="divide" value="/" handleClick={this.addToInput}/>
                </div>
                <div className="row">
                    <Button id="four" value="4" handleClick={this.addToInput}/>
                    <Button id="five" value="5" handleClick={this.addToInput}/>
                    <Button id="six" value="6" handleClick={this.addToInput}/>
                    <Button id="multiply" value="*" handleClick={this.addToInput}/>
                </div>
                <div className="row">
                    <Button id="one" value="1" handleClick={this.addToInput}/>
                    <Button id="two" value="2" handleClick={this.addToInput}/>
                    <Button id="three" value="3" handleClick={this.addToInput}/>
                    <Button id="add" value="+" handleClick={this.addToInput}/>
                </div>
                <div className="row">
                    <Button id="decimal" value="." handleClick={this.addToInput}/>
                    <Button id="zero" value="0" handleClick={this.addToInput}/>
                    <Button id="equals" value="=" handleClick={this.evaluate}/>
                    <Button id="subtract" value="-" handleClick={this.addToInput}/>       
                </div>
                <div className="row">
                    <ClearButton id="clear" value="C" handleClick={this.handleClear} />
                </div>
                </div>
            </div>
        );
    }
}

class Input extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div id={this.props.id} className="input">
                {this.props.value}
            </div>
        );
    }
}

class ClearButton extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="clear-btn" id={this.props.id} onClick={this.props.handleClick}>
                {this.props.value}
            </div>
        );
    }
}

export default App;
