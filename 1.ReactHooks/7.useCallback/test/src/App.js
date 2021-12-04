import React,  {useState} from 'react'


function useUpdateInputed (initialValue) {
  const [value, setValue] = useState(initialValue)
  return { 
    value,
    onChange: event => setValue(event.target.value)
  }
}

const App = () => {
  const usernameInput = useUpdateInputed('');
  const passwordInput = useUpdateInputed('');
  const submitForm = event => {
    event.preventDefault();
    console.log(usernameInput.value, passwordInput.value)
  }
  return (
    <form onSubmit={submitForm}>
      <input type="text" name="username" {...usernameInput} />
      <input type="password" name="password" {...passwordInput} />
      <input type="submit" />
    </form>
  )
}

export default App
