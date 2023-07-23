console.log('App.js is running!');

const app = {
    title: 'Indecision App',
    subtitle: 'Here is the subtitle',
    options: ['One', 'Two']
};

//JSX - Javascript XML
const template = (
    <div>
        <h1>{app.title}</h1>
         {app.subtitle && <p>{app.subtitle}</p>}
        <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
        <ol>
            <li>Item one</li>
            <li>Item two</li>
        </ol>
    </div>);

    const appRoot = document.getElementById('app');


let count = 0;
const addOne = () => { 
   count++;
   renderCounterApp();
     //   return count;


};

const minusOne = () => {
    count--;
    renderCounterApp();
   // return count;
};

const reset = () => {
    count = 0;
    renderCounterApp();
}

const templateTwo = (
    <div>
        <h1>Count:  {count}</h1>
        <button onClick={addOne}>+1</button>
        <button onClick={minusOne}>-1</button>
        <button onClick={reset}>reset</button>
    </div>
);
//Challenge
//Make button "-1" - setup minusOne function and register - log "minusOne"
//Make reset button "reset" - setup reset funciton - log "reset"

const renderCounterApp = () => {

    const templateTwo = (
        <div>
            <h1>Count:  {count}</h1>
            <button onClick={addOne}>+1</button>
            <button onClick={minusOne}>-1</button>
            <button onClick={reset}>reset</button>
        </div>
    );

};
ReactDOM.render(template, appRoot);

renderCounterApp();