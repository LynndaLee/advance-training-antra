// console.log(React)
// console.log(ReactDOM)
class HelloMessage extends React.Component {
    render() {
        return React.createElement("div", null, "Hello World");
    }
}

const root = ReactDOM.createRoot(document.getElementById('app'))
root.render(React.createElement(HelloMessage,null))
