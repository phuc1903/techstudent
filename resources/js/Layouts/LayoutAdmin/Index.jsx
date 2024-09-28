
function LayoutAdmin({children}) {
    return (
        <>
            <header>
                <h1>header</h1>
            </header>
            <main>
                {children}
            </main>
            <footer>
                <h1>footer</h1>
            </footer>
        </>
    );
}

export default LayoutAdmin;