import PropTypes from 'prop-types'

// After React version 18+ they introduced default parameters instead of the default props.
function Student({ name = "Guest", age = 0, isStudent = false }) {
    return (
        <div className="props">
            <p>name: {name}</p>
            <p>age: {age}</p>
            <p>Student: {isStudent ? "Yes" : "No"}</p>
        </div>
    );
}

Student.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    isStudent: PropTypes.bool
}

// Student.defaultProps = {
//     name: "Guest",
//     age: 0,
//     isStudent: false
// }

export default Student