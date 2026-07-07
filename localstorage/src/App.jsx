const App = () => {

  const user = JSON.parse(localStorage.getItem('user'))
  console.log(typeof(user))
  console.log(user)

  
  return (
    <div>
      <h1>hey</h1>
    </div>
  );
};

export default App;
