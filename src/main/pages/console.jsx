import React, {useState, useContext} from 'react';
import Terminal from 'react-console-emulator'
import { Button, Row, Image} from 'react-bootstrap';
import CloseIcon from '@material-ui/icons/Close';
import MinimizeIcon from '@material-ui/icons/Minimize';
import GlobalContext from '../helpers/GlobalContext';

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function formatResult(lines = [], size=35) {
    const result_size = size
    const filler_char = '+'
    const filler_line = <div>|{filler_char.repeat(result_size-2)}|<br/></div>
    var header =<div>{'_'.repeat(result_size)}<br/>{filler_line}</div>
    var footer =<div>{filler_line}<div style={{transform: "rotate(180deg)", width: "max-content"}}>{'_'.repeat(result_size)}</div></div>
    var formated_lines = []
    lines.forEach((line) => {
        var fillers = result_size-4-line.length
        var teve_splice = false
        if (line.length < result_size) {
            formated_lines.push(<div>|{filler_char.repeat(Math.floor(fillers/2))} {line} {filler_char.repeat(Math.floor(fillers/2)+(fillers%2===1?1:0))}|<br/></div>)
        } else {
            teve_splice = true
            const sliced_lines = Math.floor(line.length/ (result_size-4))+1
            var slice = ''
            var i=0
            while(i<sliced_lines){
                slice = line.slice(((result_size-2)*i), ((result_size-2)*(i+1)))
                fillers = result_size-2-slice.length
                formated_lines.push(<div>|{slice}{filler_char.repeat(Math.floor(fillers))}|<br/></div>)
                i++
            }
            formated_lines.push(filler_line)
        }
        if (teve_splice) formated_lines.pop()
    })
    return <p style={{lineHeight:'13px'}}>{header} {formated_lines} {footer}</p>
}

  export default props => {
    const {global_context, setGlobalContext} = useContext(GlobalContext)
    const [usuario_logado, setUsuarioLogado] = useState(global_context.user);
    const terminal_ref = React.createRef()

    const jogos = {
        pedra_papel_tesoura: {
            'descricao': 'Jogo de pedra, papel e tesoura',
            'instrucoes': 'Use o comando usar <jogada> para jogar contra mim, jogada pode ser pedra, papel ou tesoura',
            fn: function () {
                const local_commands = {
                    voltar: {
                        description: 'Volta para o menu principal',
                        usage: 'voltar',
                        fn: function () {
                            setCommands(main_menu_commands);
                            return 'Voltando ao menu principal!'
                        }
                    },
                    usar: {
                        description: 'Joga contra o computador usando pedra, papel ou tesoura',
                        usage: 'usar <pedra ou papel ou tesoura>',
                        fn: function (jogada) {
                            const exemplo_do_comando = <p>Exemplo do comando: <i>usar</i> pedra</p>
                            const opcoes = ['pedra', 'papel', 'tesoura'];
                            const resultado = []
                            if (opcoes.includes(jogada)) {
                                const jogada_ai = opcoes[getRndInteger(0,2)]
                                var venceu_ou_empate = false
                                resultado.push("Sua Jogada: "+jogada)
                                resultado.push("Minha jogada(AI): "+jogada_ai)                                
                                if (jogada_ai === jogada) {
                                    resultado.push("Um empate!")
                                    venceu_ou_empate=true
                                }
                                else {
                                    switch (jogada) {
                                        case 'pedra':
                                            if (jogada_ai==='tesoura') {
                                                resultado.push("Você ganhou!")
                                                venceu_ou_empate=true
                                            }
                                            break;
    
                                        case 'papel':
                                            if (jogada_ai==='pedra') {
                                                resultado.push("Você ganhou!")
                                                venceu_ou_empate=true
                                            }
                                            break;
    
                                        case 'tesoura':
                                            if (jogada_ai==='papel') {
                                                resultado.push("Você ganhou!")
                                                venceu_ou_empate=true
                                            }
                                            break;
                                    
                                        default:
                                            break;
                                    }
                                }
                                if (!venceu_ou_empate) resultado.push("Você perdeu!")
                                return <div>{formatResult(resultado)}</div>
                            }
                            return <div><p>Opção de jogada inválida!</p>{exemplo_do_comando}</div>
                        }
                    },
                }
                setCommands(local_commands)
            }
        },
        flip_a_coin: {
            'descricao': 'Cara ou coroa?',
            'instrucoes': 'Use o comando jogar para jogar uma moeda e ver se dará cara ou coroa',
            fn: function () {
                const local_commands = {
                    voltar: {
                        description: 'Volta para o menu principal',
                        usage: 'voltar',
                        fn: function () {
                            setCommands(main_menu_commands);
                            return 'Voltando ao menu principal!'
                        }
                    },
                    jogar: {
                        description: 'Joga uma moeda',
                        usage: 'jogar',
                        fn: function () {
                            switch (getRndInteger(0,1)) {
                                case 0:
                                    return formatResult(['A moeda roda no ar por algum tempo e caí no chão, você levanta e vê o resultado', '-','Resultado: Cara']);
                                case 1:
                                    const rare_message = getRndInteger(0,99);
                                    var hidden = '';
                                    if (rare_message > 90) {
                                        hidden = 'passa por uma figura desconhecida que não estava ali a 5 minutos atrás, '
                                    }
                                    return formatResult(['A moeda roda no ar por algum tempo, quica no chão e vai parar longe, você corre atrás dela,'+hidden+' e quando chega vê o resultado', '-', 'Resultado: Coroa']);
                                default:
                                    break;
                            }
                        }
                    },
                }
                setCommands(local_commands)
            }
        },
    }

    const main_menu_commands = {
        teste: {
            description: 'WIP',
            usage: 'teste',
            fn: function () { 
                jogos.flip_a_coin.fn();
            }
        },
        lista: {
            description: 'Lista de jogos instalados',
            usage: 'lista',
            fn: function () { 
                const lista_jogos = Object.keys(jogos)
                const lista = ['Lista de jogos instalados:', '-']
                lista_jogos.forEach(nome_jogo => {
                    lista.push(nome_jogo + ' : ' + jogos[nome_jogo].descricao)
                    console.log('jogos[nome_jogo]: ', jogos[nome_jogo]);
                })
                return formatResult(lista)
            }
        },
        jogar: {
            description: 'Jogar um dos jogos disponíveis na memória',
            usage: 'jogar <nome_do_jogo>',
            fn: function (nome_do_jogo) {
                const lista_jogos = Object.keys(jogos)
                if (lista_jogos.includes(nome_do_jogo)){
                    jogos[nome_do_jogo].fn()
                    return [nome_do_jogo, <br/>, jogos[nome_do_jogo].descricao, <br/>, jogos[nome_do_jogo].instrucoes]
                } else {
                    return 'Jogo inválido, veja a lista de jogos.'
                }
            }
        },
        login: {
            description: 'Efetuar Login.',
            usage: 'login <usuario> <senha>',
            fn: function (usuario, senha) {
                const exemplo_do_comando = <p>Exemplo do comando: <i>login</i> Nome_de_Usuario 1234</p>
                if (localStorage.getItem('@consolestation/usuario') === usuario &&
                    localStorage.getItem('@consolestation/senha') === senha) {
                        setUsuarioLogado(usuario);
                        setGlobalContext({'user': usuario});
                        return 'Usuário logado!'
                }
                return <div><p>Credenciais Inválidas!</p>{exemplo_do_comando}</div>
            }
        },
        registrar: {
            description: 'Efetuar cadastro de usuário.',
            usage: 'registrar <usuario: Máximo de 30 caracteres> <senha: Apenas 4 caracteres>',
            fn: function (usuario, senha) {
                const exemplo_do_comando = <p>Exemplo do comando: <i>registrar</i> Nome_de_Usuario 1234</p>
                if (!usuario || !senha) return <div><p>Senha e Usuário requerido!</p>{exemplo_do_comando}</div>
                if (senha.length !== 4) return <div><p>Senha Inválida!</p>{exemplo_do_comando}</div>
                if (usuario.length > 30 || usuario.length === 0) return <div><p>Usuário Inválido!</p>{exemplo_do_comando}</div>
                localStorage.setItem('@consolestation/usuario', usuario);
                localStorage.setItem('@consolestation/senha', senha);
                return <p>
                    Usuário registrado com sucesso!<br/>
                    Usuário: {usuario}<br/>
                    Senha: {senha}<br/>
                    Faça o Login para usa-lo como usuário atual.
                </p>
            }
        }
    }    
    const [commands, setCommands] = useState(main_menu_commands);

    return (
          <div className="content-console">
              <div className="win-bar">
                  <Row>
                    <h3 style={{marginLeft: "2vh"}}>ConsoleStation</h3>
                    <div className="win-control-buttons">
                        <Button variant="outline-dark" className="win-control-btn mine" disabled={true}><MinimizeIcon /></Button>
                        <Button variant="outline-dark" className="win-control-btn mine" disabled={true}><CloseIcon /></Button>
                    </div>
                  </Row>
                  <Row>
                    <Terminal
                    ref={terminal_ref}
                    commands={commands}
                    welcomeMessage={<div>
                            <p>
                            <Image src={process.env.PUBLIC_URL + "/cs-logo.png"} rounded style={{marginBottom: "10px"}}/><br/>
                            <h3>Seja bem vindo ao ConsoleStation</h3><br/>
                            Para ver uma lista de comandos digite <i>help</i> e aperte enter<br/>
                            Para limpar o terminal digite <i>clear</i></p>
                        </div>}
                    promptLabel={usuario_logado + '@Consolestation:~$'}
                    dangerMode
                    autoFocus
                    style={{
                        width:"98%", 
                        height:"92%", 
                        margin:"50px auto",
                        minWidth: "98%", 
                        minHeight: "2%",
                        position: "absolute",
                        top: 0,
                        bottom: 0,
                        left: 0,
                        right: 0,
                        }}
                    contentStyle={{
                        height: "95%"
                    }}
                    />
                  </Row>
              </div>
          </div>
      )
    }