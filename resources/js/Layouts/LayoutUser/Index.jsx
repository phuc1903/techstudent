import Navbar from "@/Components/Navbar/Index";
import Footer from "./Components/Footer/Index";
import Layout from "../Index";

function LayoutUser({children}) {
    return (  
        <>
            <Layout>
                <header>
                    <Navbar/>
                </header>
                <main className="mt-header">
                    {children}
                </main>

                <footer>
                    <Footer/>
                </footer>        
            </Layout>
        </>
    );
}

export default LayoutUser;