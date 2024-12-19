import MyContext from '../context/MyContext.js';

function withMyContext(Component) {
    const ComponentWrapper = (props) => {
        return (
            // prettier-ignore
            <MyContext.Consumer>
            {(contextData) => <Component {...props} contextData={contextData} />}
            </MyContext.Consumer>
        );
    };

    return ComponentWrapper;
}

export default withMyContext;
