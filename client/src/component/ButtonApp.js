import React from 'react';
import '../App.css'
// import Submit from './ButtonClicker'

class CounterApp extends React.Component{
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }


  
  render(){
    return(
      <div className="App">
      <section className="tracker">
          <div className="counterBox">
            <h2 className="counttitle">Submission's made</h2>
            <div data-testid='submitcounter' className="submitCounter">{this.state.count}</div>
          </div>
      </section>

        {/*COUNTER ON CLICK FUNCTION*/}
        <div className="submitButtons">
          <button data-testid='submitbtntest' type="submit" onClick={() => {
            var counter = this.state.count
            if(counter >= 500){
              this.setState({count:0})
            } else {
              this.setState({count: this.state.count+ 1})
            }
            console.log("submit", this.state.count + 1); 
          } 
            }>Submit</button>
        </div>

    </div>
    )
  }
}

export default CounterApp;
