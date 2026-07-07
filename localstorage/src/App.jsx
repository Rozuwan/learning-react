const App = () => {
  const user = { name: "roshan", age: 18, city: "lalitpur" };
  localStorage.setItem('user',JSON.stringify(user))
  
  return (
    <div>
      <h1>hey</h1>
    </div>
  );
};

export default App;
