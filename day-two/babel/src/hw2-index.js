// console.log(React)
// console.log(ReactDOM)

class HelloMessage extends React.Component {
    render() {
      return (
        <div>
          <h1>Hello World</h1>
        </div>
      );
    }
  }



ReactDOM.render(<HelloMessage />, document.getElementById("app"));

//new updated version did not work 
//   const root = ReactDOM.createRoot(document.getElementById("app"));
//   root.render(<HelloMessage />);
