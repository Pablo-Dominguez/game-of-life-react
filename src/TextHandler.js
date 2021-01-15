export const MContext = React.createContext();  //exporting context object

class TextHandler extends Component {
state = {message: ""}
render() {
        return (
            <MContext.Text value={
            {   state: this.state,
                setMessage: (value) => this.setState({
                            message: value })}}>
            {this.props.children}   //this indicates that the global store is accessible to all the child tags with MyProvider as Parent
            </MContext.Provider>)
    }
}
