import Head from "next/head";
import Navbar from "../components/Navbar";

const Layout = (props) => (
  <div>
    <Head>
      <title>BitzPrice</title>
      <link
        rel="stylesheet"
        href="https://bootswatch.com/4/cerulean/bootstrap.min.css"
      ></link>
    </Head>
    <Navbar></Navbar>
    {props.children}
  </div>
);

export default Layout;
