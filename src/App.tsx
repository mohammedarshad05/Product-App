import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./App.css";
import ProductList from "./components/ProductList";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div>
        <header className="bg-dark text-white py-3">
          <div className="container">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
              <div className="container-fluid">
                <Link className="navbar-brand" to="/">My Store</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <Link className="nav-link" to="/product">Product List</Link>
                    </li>
                  </ul>
                  <form className="d-flex">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success" type="submit">Search</button>
                  </form>
                </div>
              </div>
            </nav>
          </div>
        </header>

        <section className="hero bg-light text-center py-5">
          <div className="container">
            <h1 className="display-4">Welcome to My Store</h1>
            <p className="lead">Your one-stop shop for all your needs.</p>
            <Link to="/product" className="btn btn-primary btn-lg">Browse Products</Link>
          </div>
        </section>

        <main className="main">
          <div className="container my-5">
            <Routes>
              <Route path="/" element={<ProductList />} />
            </Routes>
          </div>
        </main>
      </div>
    </Router>
  );
}

export default App;
