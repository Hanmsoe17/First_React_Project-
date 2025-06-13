import React from 'react';
import './Button.css';

const Button = ({valueHandelling}) => {
  return (
    <div className="btn-container">
      <div className="btn-group">
        <button className="btn" onClick={() => valueHandelling('C')}>C</button>
        <button className="btn" onClick={() => valueHandelling('(')}>(</button>
        <button className="btn" onClick={() => valueHandelling(')')}>)</button>
        <button className="btn" onClick={() => valueHandelling('AC')}>AC</button>
      </div>

      <div className="btn-group">
        <button className="btn" onClick={() => valueHandelling('7')}>7</button>
        <button className="btn" onClick={() => valueHandelling('8')}>8</button>
        <button className="btn" onClick={() => valueHandelling('9')}>9</button>
        <button className="btn" onClick={() => valueHandelling('+')}>+</button>
      </div>

      <div className="btn-group">
        <button className="btn" onClick={() => valueHandelling('4')}>4</button>
        <button className="btn" onClick={() => valueHandelling('5')}>5</button>
        <button className="btn" onClick={() => valueHandelling('6')}>6</button>
        <button className="btn" onClick={() => valueHandelling('-')}>-</button>
      </div>

      <div className="btn-group">
        <button className="btn" onClick={() => valueHandelling('1')}>1</button>
        <button className="btn" onClick={() => valueHandelling('2')}>2</button>
        <button className="btn" onClick={() => valueHandelling('3')}>3</button>
        <button className="btn" onClick={() => valueHandelling('*')}>*</button>
      </div>

      <div className="btn-group">
        <button className="btn" onClick={() => valueHandelling('.')}>.</button>
        <button className="btn" onClick={() => valueHandelling('0')}>0</button>
        <button className="btn" onClick={() => valueHandelling('00')}>00</button>
        <button className="btn" onClick={() => valueHandelling('/')}>/</button>
      </div>

      <div className="btn-group">
        <button className="btn btn-edition">HC</button>
        <button className="btn btn-long" onClick={() => valueHandelling('=')}>=</button>
      </div>
    </div>
  )
}

export default Button