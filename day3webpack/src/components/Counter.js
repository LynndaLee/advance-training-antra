export default class Counter extends React.Component {
    state = {
        count:0,
    };
    
    render() { 
        return (
            <div>
                <h2>{this.state.count}</h2>
                <button onClick = {() => {

                    this.setState({count: this.state.count + 1})
                }}>Click</button>
            </div> );

}}

