import Navbar from "@/Components/Navbar/Index";

function LayoutUser({children}) {
    return (  
        <>
            <header>
                <Navbar/>
            </header>
            <main>
                {children}
            </main>

            <footer>
            </footer>        
        </>
    );
}

export default LayoutUser;