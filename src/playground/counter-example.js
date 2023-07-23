
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

ReactDOM.render(templateTwo, appRoot);
};

renderCounterApp();