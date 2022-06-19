function App() {
  return (
    <div className="App">
      <div>
        <div className="m-10 divide-y-2 divide-slate-600">
          <div className="mb-10">
            <p className="text-7xl font-medium uppercase">
              Furniture For Now <br />
              <span>or forever.</span>
            </p>
          </div>

          <div className="flex-row content-center justify-between md:flex">
            <button className="mt-10 border-2 border-slate-700 p-3 px-16 font-medium text-slate-700">
              Get Started
            </button>
            <p className="mt-10 text-sm font-semibold">
              Whether You Choose To Rent or Buy,
              <br />
              Classico Offers Flexible Ways to Get <br />
              The Furniture You Love
            </p>
          </div>
        </div>
        <div className="m-10">
          <img
            src="https://images.unsplash.com/photo-1600585152220-90363fe7e115?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt=""
            className="mx-auto"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
