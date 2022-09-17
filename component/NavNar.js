import Link from "next/link"
const NavBar =()=>(
    
    
        <div className="block mt-3">
          <nav class="navbar" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
   
    <Link href={"/"}>
    <span className="tag is-info is-medium" >MyApp</span>
    </Link>

    <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" class="navbar-menu">
    <div class="navbar-start">
  <Link href={"/"}>
  <a class="navbar-item">
        Home
      </a>
  </Link>
  <Link href={"/all"}>
  <a class="navbar-item">
        Posts
      </a>
  </Link>
  <Link href={"/about"}>
  <a class="navbar-item">
        About
      </a>
  </Link>

       
    </div>

    
  </div>
</nav>
        </div>
    
)


export default NavBar