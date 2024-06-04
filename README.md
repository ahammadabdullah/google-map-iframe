# googlemapiframe

`googlemapiframe` is a React component that allows you to embed Google Maps into your React application using an iframe. This component is highly customizable and easy to use.

## Installation

You can install the package using npm:

```bash
npm install googlemapiframe


### Usage

```markdown
## Usage

To use the GoogleMapIframe component, simply import it into your React component and provide the necessary props.

### Example

```jsx
// src/ExampleComponent.js
import React from 'react';
import GoogleMapIframe from 'googlemapiframe';

const ExampleComponent = () => {
    return (
        <div>
            <h1>Our Business Location</h1>
            <GoogleMapIframe
                height="600"
                address="1 Grafton Street, Dublin, Ireland"
                zoom={13}
                businessName="My Business Name"
            />
        </div>
    );
};

export default ExampleComponent;



### Integration

```markdown
### Integrate in the Main Application

```jsx
// src/App.js
import React from 'react';
import ExampleComponent from './ExampleComponent';

const App = () => {
    return (
        <div>
            <ExampleComponent />
        </div>
    );
};

export default App;


### Props

```markdown
### Props

The GoogleMapIframe component accepts the following props:

| Prop Name    | Type   | Default | Description                                              |
|--------------|--------|---------|----------------------------------------------------------|
| height       | string | 600     | The height of the iframe.                                |
| address      | string | -       | **Required.** The address to be displayed on the map.    |
| zoom         | number | 13      | The zoom level of the map. Must be between 1 and 21.     |
| businessName | string | -       | **Required.** The business name to be displayed in the map link. |



### Example Props

```jsx
<GoogleMapIframe
    height="600"
    address="1 Grafton Street, Dublin, Ireland"
    zoom={13}
    businessName="My Business Name"
/>


### Contributing

```markdown
## Contributing

If you would like to contribute to this project, please follow these steps:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/your-feature-name`)
3. Make your changes
4. Commit your changes (`git commit -m 'Add some feature'`)
5. Push to the branch (`git push origin feature/your-feature-name`)
6. Create a new Pull Request