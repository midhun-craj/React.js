import style from './List.module.css';
import PropTypes from 'prop-types';

export default function List({items = [], category = "Category"}) {
     
    // fruits.sort((a, b) => a.name.localeCompare(b.name)); // ALPHABETICAL  
    // fruits.sort((a, b) => b.name.localeCompare(a.name)); // REVERSE ALPHABETICAL 
    // fruits.sort((a, b) => a.calories - b.calories); // NUMERIC
    // fruits.sort((a, b) => b.calories - a.calories); // REVERSE NUMERIC

    // let lowCalorieFruits = fruits.filter(fruit => fruit.calories < 50);
    // let highCalorieFruits = fruits.filter(fruit => fruit.calories >=  50);

    let listItems = items.map(fruit => 
                                    <li key={fruit.id}>
                                        {fruit.name.charAt(0).toUpperCase() + fruit.name.slice(1)}: 
                                        {fruit.calories}</li>);

    return(
       <>
        <h1 className={style.listCategory}>{category}</h1>
        <ul className={style.listItems}>{listItems}</ul>
       </>
    );
}

List.PropTypes = {
    category: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
        name: PropTypes.string,
        calories: PropTypes.number,
    }))
}

// console.log(list)