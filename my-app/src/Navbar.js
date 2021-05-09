function Navbar() {
    return(
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page">Inicio</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page">Shop</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page">Contacto</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page">Blog</a>
        </li>
      </ul>
      <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
    )
}

export default Navbar