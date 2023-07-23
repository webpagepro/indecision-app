
//Create a component called: VisibilityToggle - render, constructor, handleToggleVisibility
//State:  visibility -> false ("Show details")


class VisibilityToggle extends React.Component {

    constructor(props) {
        super(props);
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);

        this.state = {
            visibility: false
        };
    }

handleToggleVisibility () {
    this.setState((prevState) => {
        return {
            visibility: !prevState.visibility
        };

    });


    // console.log("button clicked");
    // render();
}


render () {
return(
  //  const VisibilityToggle = (
        <div>

            <p>{this.state.visibility ? 'Show message' : 'Hide message'}</p>

            <button onClick={this.handleToggleVisibility}>Toggle</button>
            {this.state.visibility && (
                <div>
                    <p>Hey. These are some details you can now see!</p>
                </div>
            )}
        </div>

  );
 }
} 
const appRoot = document.getElementById('app');        
    ReactDOM.render(<VisibilityToggle />, appRoot);


render();