import { useTranslation, TranslationProvider } from "@/Contexts/TranslationContext";
import { Head } from "@inertiajs/react";
import Categories from "./Components/Categories";
import Banner from "./Components/Banner";
import Courses from "@/Components/Coueses/Index";

function Home({courses, translations}) {
    return (  
        <TranslationProvider translations={translations}>
            <Head title={translations.title}/>
            <Banner/>
            <Categories title={translations.categories.title}/>
            <Courses courses={courses}/>

        </TranslationProvider>
    );
}

export default Home;