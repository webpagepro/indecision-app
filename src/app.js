// babel src/playground/es6-let-const.js --out-file=public/scripts/app.js --presets=env,react --watch
console.log('App.js is running!');


class IndecisionApp extends React.Component {
    render() {
        const title = 'Indecision App';
        const subtitle = 'Put your life in the hands of a computer';
        const options = ['thing one', 'thing two', 'thing three'];
        let len = options.length;

        return (
            <div>

                <Header title={title} subtitle={subtitle} />
                <Action />
                <Options options={options} />
                <AddOption />

            </div>
        );
    }
}

class Header extends React.Component {

    render() {
       // console.log("this ", this.props)
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
            </div>
        )
    }

}

class Action extends React.Component {
    handleClick() {
        alert("Handle Click");
    }

    render() {
        return (
            <div>
                <button onClick={this.handleClick}>What I should do?</button>

            </div>
        );
    }
}

// add remove all button
// setup 

class Options extends React.Component {

    constructor(props){
        super(props);
      this.handleRemoveAll = this.handleRemoveAll.bind(this);
    }

    handleRemoveAll() {
       console.log("options ", this.props.options);
    }
    render() {
        return (
            <div>

                <button onClick={this.handleRemoveAll.bind(this)}>Remove all</button>

                <div>{this.props.options.map((option) => <Option key={option} optionsText={option} />)}</div>


            </div>
        );
    }
}

class Option extends React.Component {
    render() {
        return (
            <div>
                {this.props.optionsText}
            </div>
        );
    }
}


class AddOption extends React.Component {
    submitForm(e) {
        e.preventDefault();
      const option = e.target.elements.option.value.trim();
      console.log("option ", option);
      
      if(option){
       alert("option ");
      }
     }
    render() {
        return (
            <div>
                <form onSubmit={this.submitForm}>
                    <input type='text' name="option" />
 <button>Add Option</button>
                </form>
               
            </div>
        );
    }

}



ReactDOM.render(<IndecisionApp />, document.getElementById('app'));

