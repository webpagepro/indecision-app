//babel src/playground/es6-let-const.js --out-file=public/scripts/app.js --presets=env,react --watch

'use strict';

console.log('App.js is running!');

var app = {
    title: 'Indecision App',
    subtitle: 'Here is the subtitle',
    options: ['One', 'Two']
};

//JSX - Javascript XML
var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        app.title
    ),
    app.subtitle && React.createElement(
        'p',
        null,
        app.subtitle
    ),
    React.createElement(
        'p',
        null,
        app.options.length > 0 ? 'Here are your options' : 'No options'
    ),
    React.createElement(
        'ol',
        null,
        React.createElement(
            'li',
            null,
            'Item one'
        ),
        React.createElement(
            'li',
            null,
            'Item two'
        )
    )
);

var user = {
    name: 'Samuel',
    age: '49',
    location: 'Phoenix, AZ'
};

function getLocation(location) {
    if (location) {
        return React.createElement(
            'p',
            null,
            'Location: ',
            location
        );
    } else {
        return undefined;
    }
}

var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        user.name ? user.name : 'Anonomous',
        '  '
    ),
    user.age && user.age >= 18 && React.createElement(
        'p',
        null,
        'Age: ',
        user.age
    ),
    React.createElement(
        'p',
        null,
        getLocation(user.location)
    )
);

var appRoot = document.getElementById('app');
ReactDOM.render(template, appRoot);
