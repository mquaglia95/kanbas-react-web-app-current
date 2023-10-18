import AddingAndRemovingDataToFromArrays from "./AddingAndRemovingDataToFromArrays";
import ArrayIndexAndLength from "./ArrayIndexAndLength";
import FilterFunction from "./FilterFunction";
import FindFunction from "./FindFunction";
import FindIndexFunction from "./FindIndex";
import ForLoops from "./ForLoops";
import JsonStringify from "./JsonStringify";
import MapFunction from "./MapFunction";
import TemplateLiterals from "./TemplateLiterals";
import House from "./House";
import Spread from "./Spread";
import Destructing from "./Destructing";
import FunctionDestructing from "./FunctionDestructing";

function WorkingWithArrays() {
var functionScoped = 2;
let blockScoped = 5;
const constant1 = functionScoped - blockScoped;
let numberArray1 = [1, 2, 3, 4, 5];
let stringArray1 = ['string1', 'string2'];

let variableArray1 = [
   functionScoped,   blockScoped,
   constant1,        numberArray1,   stringArray1
];
console.log(numberArray1);
console.log(stringArray1);
console.log(variableArray1);
return(
<div>
<h3>Working With Arrays</h3>
numberArray1 = {numberArray1}<br/>
stringArray1 = {stringArray1}<br/>
variableArray1 = {variableArray1}<br/>
<ArrayIndexAndLength/>
<AddingAndRemovingDataToFromArrays/>
<ForLoops/>
<MapFunction/>
<JsonStringify/>
<FindFunction/>
<FindIndexFunction/>
<FilterFunction/>
<TemplateLiterals/>
<House/>
<Spread/>
<Destructing/>
<FunctionDestructing/>
</div>
)
}
export default WorkingWithArrays;