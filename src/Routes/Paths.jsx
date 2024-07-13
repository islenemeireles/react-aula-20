import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import PageLayout from "../layouts/PageLayout";
import NotFound from "../pages/NotFound";
import Contato from "../pages/Contato";
const Paths = () => {
    return (
        <> 
            <BrowserRouter>
                 <Routes>
                    <Route path="/" element={<PageLayout />}>
                       <Route index element={<Home />}/>
                       <Route path="/about" element={<About />}/>
                       <Route path="/contact" element={<Contact />}/>
                       <Route path="/contato/:id/:nome" element={<Contato />}/>
                    </Route>
                    <Route path="*" element={<NotFound />} />
                 </Routes>
            </BrowserRouter>
        </>
    );
}

export default Paths;