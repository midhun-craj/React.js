import List from './Lists/List.jsx'

export default function App() {

    let fruits = [{id: 1, name: "apple", calories: 23}, 
                {id: 2, name: "orange", calories: 72}, 
                {id: 3, name: "banana", calories: 19}, 
                {id: 4, name: "grapes", calories: 91}, 
                {id: 5, name: "pineapple", calories: 85}];

    let vegetables = [{id: 1, name: "celory", calories: 23}, 
                    {id: 2, name: "onion", calories: 72}, 
                    {id: 3, name: "carrot", calories: 19}, 
                    {id: 4, name: "brinjal", calories: 91}, 
                    {id: 5, name: "ladyfinger", calories: 85}];

    return(
       <>
        {/* {fruits.length > 0 ? <List items = {fruits} category = "Fruits" /> : null}
        {vegetables.length > 0 ? <List items = {vegetables} category = "Vegetables"/> : null} */}

        {/* SHORT CIRCUTING */}
        {/* {fruits.length > 0 && <List items = {fruits} category = "Fruits"/>}
        {vegetables.length > 0 && <List items = {vegetables} category = "Vegetables"/>} */}

        <List items = {fruits} category = "Fruits"/>
        <List items = {vegetables} category = "Vegetables"/>
       </>
    ); 
}