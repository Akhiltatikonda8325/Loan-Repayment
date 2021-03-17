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
      isLoading: false,
      resultdata:[
        {
         
        }
      ]
      
    };
    this.amountchange = this.amountchange.bind(this);
    this.interestchange = this.interestchange.bind(this);
    this.periodchange = this.periodchange.bind(this);
    this.calculate = this.calculate.bind(this);
    this.clear = this.clear.bind(this);
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
  clear(){
      this.setState({
        Amount : " ",
        rateofinterest: "",
        period:"",
        isLoading: false,
        resultdata:[
          {
           
          }
        ]
        
      })
  }
  calculate(event) {
    event.preventDefault();
    this.setState({ isLoading: false,
      resultdata:[
        {
         
        }
      ]
      
    })
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
           paymentvalue : Math.round( Paymentvalue*100)/100,
           ppvalue : Math.round(PPValue*100) /100,
           intvalue :Math.round(Intvalue*100)/100,
           balanceamount :Math.round(Balanceamount*100)/100
      }          
      this.setState(prevState => ({
        resultdata: [...prevState.resultdata, result]
      }))
     
      this.setState({isLoading: true});

  }
  

}
  render() {
    return (
      <div className="App">
      <h1> Loan repayment Calculations</h1>
      <form className="m-3 text-center " onSubmit={this.calculate}>
        <div>
            <label className="pr-5">Amount</label>
            <input  type="number" value={this.state.Amount} onChange={this.amountchange} required></input>
        </div>
        <div>
            <label className="pr-5">Interest</label>
            <input  type="number" value={this.state.rateofinterest} onChange={this.interestchange} required></input>
        </div>
        <div>
            <label className="p-1">Period(Months)</label>
            <input  type="number" value={this.state.period} onChange={this.periodchange} required></input>
        </div>
        <button type="submit" className="btn btn-success">Calculate</button>
        <button type="submit" className="btn btn-danger m-3" onClick={this.clear}>Clear</button>
      </form>
      <Results resultvalue={this.state}/>
    </div>
    )
  }
}

export default App
