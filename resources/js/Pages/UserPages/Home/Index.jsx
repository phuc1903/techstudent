import Button from "@/Components/Button/Index";
import { Head } from "@inertiajs/react";
import Categories from "./Components/Categories";
import Banner from "./Components/Banner";
import Courses from "@/Components/Coueses/Index";

function Home({courses}) {
    return (  
        <>
            <Head title="Trang chủ"/>
            <Banner/>
            <Categories/>
            <Courses courses={courses}/>
        </>
    );
}

export default Home;