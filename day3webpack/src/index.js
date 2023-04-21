// console.log(React)
// console.log(ReactDOM)
// class Counter extends React.Component {
//     state = {
//         count:0,
//     };
    
//     render() { 
//         return (
//             <div>
//                 <h2>{this.state.count}</h2>
//                 <button onClick = {() => {

//                     this.setState({count: this.state.count + 1})
//                 }}>Click</button>
//             </div> );

// }}

import Counter from "./components/Counter.js"; 


class HelloMessage extends React.Component {
    render() {
      return (
        <div>
          <h1>Hello World</h1>
          <Counter /> 
        </div>

      );
    }
  }




ReactDOM.render(<HelloMessage />, document.getElementById("app"));

//new updated version did not work 
//   const root = ReactDOM.createRoot(document.getElementById("app"));
//   root.render(<HelloMessage />);


