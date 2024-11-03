import '../css/app.css';
import './bootstrap';

import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { createRoot } from 'react-dom/client';
// import Sidebar from '../js/CMS/CMS_Component/Sidebar';
// import Header from '../js/CMS/CMS_Component/Header';
// import Home from '../js/CMS/CMS_Pages/Home';
// import Dramas from '../js/CMS/CMS_Pages/Dramas';
// import Countries from '../js/CMS/CMS_Pages/Countries';
// import Awards from '../js/CMS/CMS_Pages/Awards';
// import Genre from '../js/CMS/CMS_Pages/Genre';
// import Actor from '../js/CMS/CMS_Pages/Actor';
// import Comment from '../js/CMS/CMS_Pages/Comment';
// import User from '../js/CMS/CMS_Pages/User';
// import Validate from '../js/CMS/CMS_Pages/validate_drama';
// import InputNewDrama from '../js/CMS/CMS_Pages/Input_drama';


const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) =>
        resolvePageComponent(
            `./Pages/${name}.jsx`,
            import.meta.glob('./Pages/**/*.jsx'),
        ),
    setup({ el, App, props }) {
        const root = createRoot(el);

        root.render(<App {...props} />);
    },
    progress: {
        color: '#4B5563',
    },
});

// const App = () => {
//     return (
//       <Router>
//         <div className="d-flex">
//           <Sidebar />
//           <div className="w-100">
//             <Header />
//             <div className="container mt-4">
//               <Routes>
//                 <Route exact path="/admin" element={<Home />} />
//                 <Route path="/dramas" element={<Dramas />} />
//                 <Route path="/validate" element={<Validate />} />
//                 <Route path="/input_drama" element={<InputNewDrama />} />
//                 <Route path="/countries" element={<Countries />} />
//                 <Route path="/awards" element={<Awards />} />
//                 <Route path="/genre" element={<Genre />} />
//                 <Route path="/actor" element={<Actor />} />
//                 <Route path="/comment" element={<Comment />} />
//                 <Route path="/user" element={<User />} />
//               </Routes>
//             </div>
//           </div>
//         </div>
//       </Router>
//     );
//   };
