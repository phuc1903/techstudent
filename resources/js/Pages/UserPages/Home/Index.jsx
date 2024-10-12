// import {
//     TranslationProvider,
// } from "@/Contexts/TranslationContext";
import { Head } from "@inertiajs/react";
import Categories from "./Components/Categories";
import Banner from "./Components/Banner";
import Courses from "@/Components/Coueses/Index";
import CoursesHighlyRated from "@/Components/Coueses/CoursesHighlyRated";
import Hover from "@/Components/Coueses/Hover";

function Home({ courses, translations }) {

    return (
        // <TranslationProvider translations={translations}>
        <>
            <Head title={translations.title} />
            <Banner />
            <Categories title={translations.categories.title} />
            <Courses courses={courses} quantityPerRow={3} rowNumber={2} />
            <CoursesHighlyRated courses={courses}/>
            <Hover/>
        </>
        // </TranslationProvider>
    );
}

export default Home;
