import Navbar from "@/Components/Navbar/Index";
import Footer from "./Components/Footer/Index";

function LayoutUser({children}) {
    return (  
        <>
            <header>
                <Navbar/>
            </header>
            <main className="mt-header">
                {children}
            </main>

            <footer>
                <Footer/>
            </footer>        
        </>
    );
}

export default LayoutUser;