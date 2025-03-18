import Student from './Student.jsx'

function App() {
  return(
    <>
      <Student name = "Midhun" age = {23} isStudent = {true}/>
      <Student name = "Malu" age = {20} isStudent = {true}/>
      <Student name = "Devu" age = {18} isStudent = {true}/>
      <Student name = "Rahul" age = {21} isStudent = {true}/>
      <Student name = "Lekshmi"/>
    </>
  );
}

export default App
