

ReactDOM.render(jsx, document.getElementById('age'));
{
    title: 'Indecision App',
    subtitle: 'Here is the subtitle',
    options: []
};

const onFormSubmit = (e) => {
    e.preventDefault();

    const option = e.target.elements.option.value;
    //console.log("option ", option);
    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
        render();
    }
};

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];
    alert(option);
};

const onSubmitClear = () => {
    app.options=[];
    render();

};
const appRoot = document.getElementById('app');
const numbers = [55, 101, 1000];

//1) Create options array that renders the new JSX
//   Call it right away
//   Call it after added to
//2) Create Remove all button 
 let num = 0;
const render = () => {
//JSX - Javascript XML
const template = (
   
    <div>
        <h1>{app.title}</h1>
        {app.subtitle && <p>{app.subtitle}</p>}
        <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
      
     {/* map over app.options getting back an array of list [set ley and list] */}
     <button onClick={onMakeDecision}>What should I do</button>

        <button onClick={onSubmitClear}>Remove all</button>
        <ol>
        {
            app.options.map((option) => 
               <li key={num++}>{option}</li>
            )
        }
    
        </ol>

        <form onSubmit={onFormSubmit}>
            <input type="text" name="option" />
            <button>Add Option</button>
        </form>
    </div>
);

ReactDOM.render(template, appRoot);

}

render();