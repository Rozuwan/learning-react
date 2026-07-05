const App = () => {
  return (
    <div>
      <input
        onChange={(e) => {
          console.log(e.target.value);
        }}
        type="text"
        placeholder="Enter name"
      />
    </div>
  );
};

export default App;
