import logo from './logo.svg';
import './App.css';
// let name = "kanik";
// function App() {
//   return (
//     <>
//     {/* a function in react can only return a single 
//     tag so agr zada tag return krwane ho toh use a free 
//     tag open and close ni toh error dega */}
//     <div className="blank">hi {name}</div>
//     <nav>
//       <li>home</li>
//       <li>about</li>
//       <li>contact</li>
    
//     </nav>
//     <div className="container">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio, dicta delectus provident nisi exercitationem placeat dignissimos sint iusto fugiat hic voluptatem asperiores. Voluptatem animi fugit, corrupti nobis at asperiores.</div>
//     </>);

function App() {
  return (
    <>
   <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">Textutils</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">About</a>
        </li>
              </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
    </>
  );
}

export default App;
