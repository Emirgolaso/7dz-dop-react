import React from 'react';
import './style.css'

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      num1: '',
      num2: '',
      result: ''
    };
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  handleCalculate = (operation) => {
    const { num1, num2 } = this.state;
    let result = 0;
    switch (operation) {
      case '+':
        result = parseFloat(num1) + parseFloat(num2);
        break;
      case '-':
        result = parseFloat(num1) - parseFloat(num2);
        break;
      case '*':
        result = parseFloat(num1) * parseFloat(num2);
        break;
      case '/':
        result = parseFloat(num1) / parseFloat(num2);
        break;
      case '^':
        result = Math.pow(parseFloat(num1), parseFloat(num2));
        break;
      case 'sqrt':
        result = Math.sqrt(parseFloat(num1));
        break;
      default:
        break;
    }
    this.setState({ result: result.toString() });
  };

  render() {
    const { num1, num2, result } = this.state;

    return (
      <div className='calc'>
        <h2>Калькулятор</h2>
        <input className='input'
          type="number"
          name="num1"
          value={num1}
          onChange={this.handleInputChange}
          placeholder="Введите число 1"
        />
        <input className='inpyt'
          type="number"
          name="num2"
          value={num2}
          onChange={this.handleInputChange}
          placeholder="Введите число 2"
        />
        <br />
        <button className='btn' onClick={() => this.handleCalculate('+')}>+</button>
        <button className='btn' onClick={() => this.handleCalculate('-')}>-</button>
        <button className='btn' onClick={() => this.handleCalculate('*')}>*</button>
        <button className='btn' onClick={() => this.handleCalculate('/')}>/</button>
        <button className='btn' onClick={() => this.handleCalculate('^')}>^</button>
        <button className='btn' onClick={() => this.handleCalculate('sqrt')}>в корень</button>
        <br />
        <p>Результат: {result}</p>
      </div>
    );
  }
}

export default Calculator;
