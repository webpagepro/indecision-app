
console.log('App.js is running!');
let showMe = false;

const handleButtonToggle = () => {
    showMe = !showMe;


    console.log("button clicked");
    render();
}

const appRoot = document.getElementById('app');
const render = () => {

    const template = (
        <div>

            <p>{showMe ? 'Show message' : 'Hide message'}</p>

            <button onClick={handleButtonToggle}>Toggle</button>
            {showMe && (
                <div>
                    <p>Hey. These are some details you can now see!</p>
                </div>
            )}
        </div>

    );

    ReactDOM.render(template, appRoot);
}

render();