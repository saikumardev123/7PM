function Child(props) {
    console.log("child component called");
    return (
        <div>
            <h1>The Child Props Counter {props.counter}</h1>
        </div>
    )

}
export default Child;