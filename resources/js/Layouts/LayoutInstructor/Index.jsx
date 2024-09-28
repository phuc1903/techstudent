import Navbar from "./Components/Navbar";
import Footer from "@/Layouts/LayoutUser/Components/Footer/Index";

function LayoutInstructor({children}) {
    return (  
        <>
            <div className="flex">
                <header className="w-80">
                    <Navbar/>
                </header>
                <main className="bg-secondary flex-1 flex flex-col justify-between">
                    {children}
                    <footer>
                        <Footer/>
                    </footer>        
                </main>

            </div>
        </>
    );
}

export default LayoutInstructor;