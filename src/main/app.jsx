import React, { useState } from 'react';
import './main.css'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ConsolePage from './pages/console';
import { GlobalContextProvider } from './helpers/GlobalContext';

toast.configure()

export default props => {
    const [actual_page, setPage] = useState(<ConsolePage />);
    const [global_context, setGlobalContext] = useState({});

    global_context.setPage = setPage;
    global_context.user = 'user'

    return <div className='wrapper'>            
            <GlobalContextProvider value={{global_context, setGlobalContext}}>
                {actual_page}
            </GlobalContextProvider>
        </div>
        
}