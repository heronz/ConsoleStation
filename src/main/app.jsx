import React, { useState, useEffect } from 'react';
import './main.css'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ConsolePage from './pages/console';
import { GlobalContextProvider } from './helpers/GlobalContext';
import { I18nextProvider } from "react-i18next";
import i18n from "../i18n";
import Commands from './classes/commands';
import Jogos from './classes/jogos';

toast.configure()

export default props => {
    const [actual_page, setPage] = useState(<ConsolePage />);
    const [global_context, setGlobalContext] = useState({});
    const [terminal, setTerminal] = useState();

    global_context.setPage = setPage;
    global_context.user = 'user';
    global_context.i18n = i18n;
    global_context.terminal = terminal;
    global_context.setTerminal = setTerminal;
    global_context.commands_instance = new Commands({'context': global_context})
    global_context.jogos_instance = new Jogos({'context': global_context})

    return <div className='wrapper'>            
                <GlobalContextProvider value={{global_context, setGlobalContext}}>
                    <I18nextProvider i18n={i18n}>
                        {actual_page}
                    </I18nextProvider>
                </GlobalContextProvider>
        </div>
        
}