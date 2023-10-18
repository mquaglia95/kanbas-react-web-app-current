import ES5Functions from "./ES5Functions"
import ES6Functions from "./ArrowFunctions";
import ImpliedReturn from "./ImpliedReturn";
import ParenthesisAndParameters from "./FunctionParenthesisAndParameters";

function WorkingWithFunctions() {
    return(
        <div>
            <ES5Functions/>
            <ES6Functions/>
            <ImpliedReturn/>
            <ParenthesisAndParameters/>
        </div>
    )
}
export default WorkingWithFunctions;