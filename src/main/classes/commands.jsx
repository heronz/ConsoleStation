import React, { useContext } from 'react';
import GlobalContext from '../helpers/GlobalContext'

export default class Commands extends React.Component {
    static contextType = GlobalContext
    constructor(props) {
        super(props);
        this.context = props.context;
        this.state = {

        };
      }

    make_menu() {
        const global_context = this.context;
        const commands = {
            teste: {
                description: 'WIP',
                usage: global_context.i18n.t('teste'),
                fn: function () { 
                    // global_context.terminal.state.stdout=[]
                    console.log('global_context.terminal: ', global_context.terminal);
                }
            },
            ajuda: {
                description: global_context.i18n.t('Lista todos os comandos disponiveis com uma breve descrição e exemplo de uso'),
                usage: global_context.i18n.t('ajuda'),
                fn: function () { 
                    global_context.terminal.showHelp()
                }
            },
            limpar: {
                description: global_context.i18n.t('Limpar tela'),
                usage: global_context.i18n.t('limpar'),
                fn: function () { 
                    global_context.terminal.state.stdout=[]
                }
            },
            language: {
                description: global_context.i18n.t('Trocar linguagem do sistema'),
                usage: 'language <new_language:(en/pt-BR)>',
                fn: function (newlang) { 
                    const valid_languages = ['en','pt-BR']
                    if (!valid_languages.includes(newlang)) return <p>{global_context.i18n.t("Comando inválido!")}<br/>{global_context.i18n.t("Exemplo do comando")}<i>language</i> en</p>
                    global_context.i18n.changeLanguage(newlang)
                    window.location.reload(false);
                }
            },
            lista: {
                description: global_context.i18n.t('Lista de jogos instalados'),
                usage: global_context.i18n.t('lista'),
                fn: function () { 
                    const lista_jogos = Object.keys(global_context.jogos)
                    const lista = []
                    lista_jogos.forEach(nome_jogo => {
                        lista.push(nome_jogo + ' : ' + global_context.jogos[nome_jogo].descricao)
                    })
                    return global_context.formatListResult(global_context.i18n.t('Lista de jogos instalados'), lista)
                }
            },
            jogar: {
                description: global_context.i18n.t('Jogar um dos jogos disponíveis na memória'),
                usage: global_context.i18n.t('jogar <nome_do_jogo>'),
                fn: function (nome_do_jogo) {
                    const lista_jogos = Object.keys(global_context.jogos)
                    if (!Number.isNaN(nome_do_jogo)){
                        if(nome_do_jogo<=lista_jogos.length){
                            global_context.jogos[lista_jogos[nome_do_jogo-1]].fn()
                            return [lista_jogos[nome_do_jogo-1], <br/>, global_context.jogos[lista_jogos[nome_do_jogo-1]].descricao, <br/>, global_context.jogos[lista_jogos[nome_do_jogo-1]].instrucoes]
                        }
                    }
                    if (lista_jogos.includes(nome_do_jogo)){
                        global_context.jogos[nome_do_jogo].fn()
                        return [nome_do_jogo, <br/>, global_context.jogos[nome_do_jogo].descricao, <br/>, global_context.jogos[nome_do_jogo].instrucoes]
                    } else {
                        return global_context.i18n.t('Jogo inválido, veja a lista de jogos.')
                    }
                }
            },
            login: {
                description: global_context.i18n.t('Efetuar Login.'),
                usage: global_context.i18n.t('login <usuario> <senha>'),
                fn: function (usuario, senha) {
                    const exemplo_do_comando = <p>{global_context.i18n.t("Exemplo do comando")}<i>login</i> {global_context.i18n.t("Nome_de_Usuario")} 1234</p>
                    if (localStorage.getItem('@consolestation/usuario') === usuario &&
                        localStorage.getItem('@consolestation/senha') === senha) {
                            global_context.setUsuarioLogado(usuario);
                            global_context.user = usuario;
                            return global_context.i18n.t('Usuário logado!')
                    }
                    return <div><p>{global_context.i18n.t("Credenciais Inválidas!")}</p>{exemplo_do_comando}</div>
                }
            },
            registrar: {
                description: global_context.i18n.t('Efetuar cadastro de usuário.'),
                usage: global_context.i18n.t('registrar_example'),
                fn: function (usuario, senha) {
                    const exemplo_do_comando = <p>{global_context.i18n.t("Exemplo do comando")}<i>{global_context.i18n.t("registrar")}</i> {global_context.i18n.t("Nome_de_Usuario")} 1234</p>
                    if (!usuario || !senha) return <div><p>{global_context.i18n.t("Senha e Usuário requerido!")}</p>{exemplo_do_comando}</div>
                    if (senha.length !== 4) return <div><p>{global_context.i18n.t("Senha Inválida!")}</p>{exemplo_do_comando}</div>
                    if (usuario.length > 30 || usuario.length === 0) return <div><p>{global_context.i18n.t("Usuário Inválido!")}</p>{exemplo_do_comando}</div>
                    localStorage.setItem('@consolestation/usuario', usuario);
                    localStorage.setItem('@consolestation/senha', senha);
                    return <p>
                        {global_context.i18n.t("Usuário registrado com sucesso!")}<br/>
                        {global_context.i18n.t("Usuário")}: {usuario}<br/>
                        {global_context.i18n.t("Senha")}: {senha}<br/>
                        {global_context.i18n.t("Faça o Login para usa-lo como usuário atual.")}
                    </p>
                }
            }
        }    
        if (localStorage.getItem('i18nextLng') === 'en') {
            const commands_en = {
                test: commands.teste,
                help: commands.ajuda,
                clear: commands.limpar,
                language: commands.language,
                list: commands.lista,
                play: commands.jogar,
                login: commands.login,
                register: commands.registrar,

            }
            return commands_en
        }
        return commands
    }

    
}