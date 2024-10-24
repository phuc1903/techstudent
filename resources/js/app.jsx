import './bootstrap';
import '../css/app.css';

import { createRoot } from 'react-dom/client';
import { createInertiaApp } from '@inertiajs/react';
import GlobalStyles from './GlobalStyles/Index';
import LayoutUser from './Layouts/LayoutUser/Index';
import LayoutAdmin from './Layouts/LayoutAdmin/Index';
import LayoutInstructor from './Layouts/LayoutInstructor/Index';
import { TranslationProvider } from './Contexts/TranslationContext';
import LayoutDasboardUser from './Layouts/LayoutDashboardUser/Index';

const appName = import.meta.env.VITE_APP_NAME || 'Tech Student';

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => {
        const pages = import.meta.glob('./Pages/**/*.jsx', { eager: true });
        let page = pages[`./Pages/${name}.jsx`];

        if (name.startsWith('AdminPages')) {
            page.default.layout = page.default.layout || ((page) => <LayoutAdmin children={page} />);
        } else if(name.startsWith('InstructorPages')) {
            page.default.layout = page.default.layout || ((page) => <LayoutInstructor children={page} />);
        }else if(name.startsWith('UserPages/Dashboard')) {
            page.default.layout = page.default.layout || ((page) => <LayoutDasboardUser children={page} />);
        } 
        else {
            page.default.layout = page.default.layout || ((page) => <LayoutUser children={page} />);
        }

        return page;
    },
    setup({ el, App, props }) {
        const root = createRoot(el);

        root.render(
            <GlobalStyles>
                <TranslationProvider translations={props.initialPage.props.translations}>
                    <App {...props} />
                </TranslationProvider>
            </GlobalStyles>
        );
    },
    progress: {
        color: '#4B5563',
    },
});
