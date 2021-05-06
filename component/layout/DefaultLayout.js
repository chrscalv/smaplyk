import NavBar from "../NavBar";
import Footer from "../Footer";
import Head from "next/head";

const DefaultLayout = (props) => {
  
  return (
    <>
      <Head>
        <title>{props.pageTitle}</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="https://unpkg.com/tailwindcss/dist/tailwind.min.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"/>
        
        <link rel="icon" href="/logo-sma.png"/>
        <style dangerouslySetInnerHTML={{__html: "\n.dropdown:hover > .dropdown-content {\n\tdisplay: block;\n}\n" }} />

        <style dangerouslySetInnerHTML={{__html: "\n.aos_anim {\n  overflow-x: hidden; \n  overflow-y: hidden;\n}\n" }} />
        <style dangerouslySetInnerHTML={{__html: "\n      .gradient {\n        background: linear-gradient(90deg, #d53369 0%, #daae51 100%);\n      }\n    " }} />
       </Head>
      
      <NavBar />
      <div>{props.children}</div>
      
      <Footer/>
    </>
  );
}

export default DefaultLayout;