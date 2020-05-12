import Link from "next/link";

const Navbar = () => (
  <nav className="navbar navbar-expand navbar-dark bg-primary mb-4">
    <div className="container">
      <a className="navbar-brand" href="#">
        BitzPrice
      </a>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link href="/">
              <a className="nav-link">Home</a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/about">
              <a className="nav-link">About</a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  //   <div>
  //     <ul>
  //       <li>
  //         <Link href="/">
  //           <a>Home</a>
  //         </Link>
  //       </li>
  //       <li>
  //         <Link href="/about">
  //           <a>About</a>
  //         </Link>
  //       </li>
  //     </ul>
  //     {/* <style jsx>{`
  //       ul {
  //         background: #333;
  //         color: #fff;
  //         list-style: none;
  //         display: flex;
  //       }
  //       ul li {
  //         font-size: 18px;
  //         margin-right: 20px;
  //       }
  //       ul li a {
  //         color: #fff;
  //         text-decoration: none;
  //       }
  //     `}</style> */}
  //   </div>
);

export default Navbar;
