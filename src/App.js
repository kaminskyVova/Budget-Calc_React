import React, { Component } from "react";

import Total from "./components/Total";
import Operation from "./components/Operation";
import History from "./components/history/History";
import Header from "./components/Header";

class App extends Component {
  state = {
    transactions: [],
    description: "",
    amount: "",
  };

  addTransaction = (add) => {
    const transactions = [
      ...this.state.transactions,
      {
        id: `cmr${(+new Date()).toString(16)}`,
        description: this.state.description,
        amount: this.state.amount,
        add,
      },
    ];

    this.setState({
      transactions,
      description: "",
      amount: ""
    });
  };

  addAmount = (e) => {
    this.setState({
      amount: e.target.value,
    });
  };

  addDescription = (e) => {
    this.setState({
      description: e.target.value,
    });
  };

  render() {
    return (
      <div className="App">
        <main>
          <div className="container">
            <Header />
            <Total />
            <History transactions={this.state.transactions}/>
            <Operation
              addTransaction={this.addTransaction}
              addAmount={this.addAmount}
              addDescription={this.addDescription}
              description={this.state.description}
              amount={this.state.amount}
            />
          </div>
        </main>
      </div>
    );
  }
}

export default App;
