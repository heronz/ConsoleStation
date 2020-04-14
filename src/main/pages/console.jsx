import React, {useState, useContext, useEffect} from 'react';
import Terminal from 'react-console-emulator'
import { Button, Row, Image} from 'react-bootstrap';
import CloseIcon from '@material-ui/icons/Close';
import MinimizeIcon from '@material-ui/icons/Minimize';
import GlobalContext from '../helpers/GlobalContext';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function formatScoreResult(lines = [], size=35) {
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

function formatListResult(title='', itens = []) {
    var i=0;
    const list = <List component="nav" className="list-format" aria-label="contacts">
                    <ListItem className="title">
                        <ListItemText primary={title} />
                    </ListItem>
                    {itens.map(item => {
                        i++;
                        return <ListItem >
                            {i}
                            <ListItemText inset primary={item} />
                        </ListItem>
                    })}
                </List>
    return list
}

export default props => {
    const {global_context, setGlobalContext} = useContext(GlobalContext)
    const [usuario_logado, setUsuarioLogado] = useState(global_context.user);
    const terminal_ref = React.createRef()
    useEffect(() => {
        global_context.setTerminal(terminal_ref.current);
        global_context.jogos= jogos
        global_context.formatScoreResult = formatScoreResult
        global_context.formatListResult = formatListResult
        global_context.setUsuarioLogado = setUsuarioLogado
        global_context.setCommands = setCommands
        global_context.setJogos = setJogos
        global_context.getRndInteger = getRndInteger
    })
    
    const [jogos, setJogos] = useState(global_context.jogos_instance.make_jogos());
    const [commands, setCommands] = useState(global_context.commands_instance.make_menu());
    const callback_terminal = (result) => {
        if (global_context.next_callback) global_context.next_callback()
    }

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
                            <h3>{global_context.i18n.t("Seja bem vindo ao ConsoleStation")}</h3><br/>
                            {global_context.i18n.t("Para ver uma lista de comandos digite ")}<i>{global_context.i18n.t("ajuda")}</i><br/>
                            {global_context.i18n.t("Para limpar o terminal digite ")}<i>{global_context.i18n.t("limpar")}</i>                            
                            </p>
                        </div>}
                    promptLabel={usuario_logado + '@Consolestation:~$'}
                    commandCallback={callback_terminal}
                    dangerMode
                    autoFocus
                    noDefaults
                    promptLabelStyle={{
                        color: "#6890ff"
                    }}
                    style={{
                        width:"98%", 
                        height:"92%", 
                        margin:"50px auto",
                        minWidth: "98%", 
                        minHeight: "2%",
                        position: "absolute",
                        borderRadius: "0 0 5px 5px",
                        top: 0,
                        bottom: 0,
                        left: 0,
                        right: 0,
                        borderBottom: 'solid',
                        borderRight: 'solid'
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