import Button from "@/Components/Button/Index";
import { Head } from "@inertiajs/react";
import Categories from "./Components/Categories";
import Banner from "./Components/Banner";

function Home() {
    return (  
        <>
            <Head title="Trang chủ"/>
            <Banner/>
            <Categories/>
        </>
    );
}

export default Home;