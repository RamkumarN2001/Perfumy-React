import Navbar from "./Components/Navbar.js"
import Searcheng from "./Components/Search.js"
import Product from "./Components/product.js"
import About from "./Components/About.js"
import Footer from "./Components/Footer.js"
function App(){
    return(
        <div>
        <Navbar></Navbar>
        <Searcheng></Searcheng>
        <Product></Product>
        <About></About>
        <Footer></Footer>
        </div>
    )
}
export default App