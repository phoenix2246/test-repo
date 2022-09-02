import Intro from "./components/intro/Intro";
import About from "./components/about/About"
import Contact from "./components/contact/Contact";
import ProductList from "./components/product-list/ProductList";
import Form from "./components/form/Form";
import Footer from "./components/footer/Footer";

const App = () => {
  return <div>
    <Intro></Intro>
    <About></About>
    <ProductList/>
    <Contact/>
    <Form/>
    <Footer/>
  </div>;
};

export default App;