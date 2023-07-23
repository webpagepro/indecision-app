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

const user = {
    name: 'Samuel',
    age: '49',
    location: 'Phoenix, AZ'
};

function getLocation(location) {
    if (location) {
        return <p>Location: {location}</p>;
    } else {
        return undefined;
    }
}

const templateTwo = (
    <div>
        <h1>{user.name ? user.name : 'Anonomous'}  </h1>
        {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
        <p>{getLocation(user.location)}</p>
    </div>
);

const appRoot = document.getElementById('app');
ReactDOM.render(template, appRoot);