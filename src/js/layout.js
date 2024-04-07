
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";


import { Contact } from "./views/contact";
import { AddContact } from "./views/addContact";
import { EditContact } from "./views/editContact";

import injectContext from "./store/appContext";



//create your first component
const Layout = () => {
  //the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
  const basename = process.env.BASENAME || "";

  return (
    <div>
      <BrowserRouter basename={basename}>
        <ScrollToTop>
         
          <Routes>
           {/* <Route path="/demo" element={<Demo />} /> */}
			      <Route path="/" element={<Contact />} />
            <Route path="/addContact" element={<AddContact />} />
            <Route path="/editContact/:id" element={<EditContact />} />
            
            {/* <Route path="/single/:theid" element={<Single />} /> */}
            <Route path="*" element={<h1>Not found!</h1>} />
           
          </Routes>
         
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);