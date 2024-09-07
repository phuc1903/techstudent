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
                hello
            </footer>        
        </>
    );
}

export default LayoutUser;