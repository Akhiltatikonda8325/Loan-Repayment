import './App.css';

import React, { Component } from 'react'
import Results from "./result";

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Amount : " ",
      rateofinterest: "",
      period:"",
      resultdata:[
        {
          paymentvalue :"",
        ppvalue :"",
        intvalue:"",
        balanceamount:""
        }
      ]
    };
    this.amountchange = this.amountchange.bind(this);
    this.interestchange = this.interestchange.bind(this);
    this.periodchange = this.periodchange.bind(this);
    this.calculate = this.calculate.bind(this);
  }
  amountchange(event) {
    this.setState({Amount: event.target.value});
  }
  interestchange(event) {
    this.setState({rateofinterest: event.target.value});
  }
  periodchange(event) {
    this.setState({period: event.target.value});
  }
  calculate(event) {
    event.preventDefault();
    let amount = this.state.Amount;
    let rate = (this.state.rateofinterest) / 1200;
    let noofmonths = this.state.period;
    for (let i = 1; i <= noofmonths; i++)
    {
      let Paymentvalue = ((rate * amount) * Math.pow((1 + rate), noofmonths)) / (Math.pow((1 + rate), noofmonths) - 1);
      let PPValue = Paymentvalue * Math.pow((1 + rate), (i-1-noofmonths));
      let Intvalue = Paymentvalue-PPValue;
      let Balanceamount = (Intvalue/rate)-PPValue;
      let result={
           paymentvalue : Math.round(Paymentvalue,2),
           ppvalue :  Math.round(PPValue,2),
           intvalue :Math.round(Intvalue,2),
           balanceamount :Math.round(Balanceamount,2)
      }          
     
      this.state.resultdata.push(result);

  }
 console.log(this.state.resultdata);
}
  render() {
    return (
      <div className="App">
      <h1> Loan repayment Calculations</h1>
      <form className="m-3 text-center " onSubmit={this.calculate}>
        <div>
            <label className="pr-5">Amount</label>
            <input  type="number" value={this.state.Amount} onChange={this.amountchange}></input>
        </div>
        <div>
            <label className="pr-5">Interest</label>
            <input  type="number" value={this.state.rateofinterest} onChange={this.interestchange}></input>
        </div>
        <div>
            <label className="p-1">Period(Months)</label>
            <input  type="number" value={this.state.period} onChange={this.periodchange}></input>
        </div>
        <button type="submit" className="btn btn-success">Calculate</button>
      </form>
      <Results resultvalue={this.state.resultdata}/>
    </div>
    )
  }
}

export default App
