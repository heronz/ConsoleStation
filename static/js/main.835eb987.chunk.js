(this.webpackJsonpConsoleStation=this.webpackJsonpConsoleStation||[]).push([[0],{171:function(a,e,o){a.exports=o(470)},175:function(a,e,o){},470:function(a,e,o){"use strict";o.r(e);var t=o(0),n=o.n(t),r=o(8),i=o.n(r),s=o(23),l=(o(175),o(168)),u=(o(176),o(155)),c=o.n(u),d=o(491),m=o(497),p=o(492),g=o(160),v=o.n(g),h=o(159),f=o.n(h),j=n.a.createContext(),_=j.Provider,E=j,b=o(493),y=o(495),x=o(499),C=o(496),S=o(494),L=o(490),w=o(157);function U(a,e){return Math.floor(Math.random()*(e-a+1))+a}var k=void 0,O=function(a){var e=Object(t.useContext)(E),o=e.global_context,r=(e.setGlobalContext,[n.a.createElement(m.a,{variant:"primary",onClick:function(){x(o.i18n.t("aventura_continue_1")),O(r[1],!0)}},o.i18n.t("Levantar")),n.a.createElement(m.a,{variant:"primary",onClick:function(){x(o.i18n.t("aventura_continue_2")),U(0,99)<20&&!i.includes(r[2])&&0===u.event_countdown?(O(r[2]),x(o.i18n.t("you_see_something"))):(I(r[2]),u.event_countdown>0?u.event_countdown--:u.event_countdown=2)}},o.i18n.t("Continuar")),n.a.createElement(m.a,{variant:"primary",onClick:function(){var a=!1;(0===u.olhar_events.length||u.olhar_events[2])&&(x(o.i18n.t("aventura_olhar_1")),u.olhar_events.push(!0),a=!0),u.olhar_events[0]&&!a&&(x(o.i18n.t("aventura_olhar_2")),u.olhar_events[0]=!1,u.olhar_events.push(!0),a=!0),u.olhar_events[1]&&!a&&(x(o.i18n.t("aventura_olhar_3")),u.olhar_events[1]=!1,u.olhar_events.push(!0),a=!0),I(r[2])}},o.i18n.t("olhar"))]),i=[r[0]],l=[o.i18n.t("aventura_start")],u={olhar_events:[],event_countdown:2},c=Object(t.useState)([o.i18n.t("aventura_start")]),g=Object(s.a)(c,2),v=g[0],h=g[1],f=Object(t.useState)([r[0]]),j=Object(s.a)(f,2),_=j[0],b=j[1],y=n.a.createRef(),x=function(a){var e=Array.from(l);e.push(a),h(e),l=e},O=function(a){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],o=[];e||(o=Array.from(i)),o.includes(a)||o.push(a),b(o),i=o},I=function(a){var e=Array.from(i);e.includes(a)&&(e.splice(e.indexOf(a,1)),b(e),i=e)};return Object(t.useEffect)((function(){y.current.scrollTop=y.current.scrollHeight})),n.a.createElement(C.a,{style:{width:"80vw",color:"white",backgroundColor:"#092777cf"}},n.a.createElement(C.a.Header,{variant:"top"},n.a.createElement(S.a.Control,{ref:y,as:"textarea",rows:"10",autocorrect:"off",spellcheck:"false",style:{resize:"none",backgroundColor:"#161616",color:"#0D0",border:"inset #0b2d88cf 15px"},value:v.join("\n"),onChange:function(){k.textLog.current.scrollTop=k.textLog.current.scrollHeight,console.log("this: ",k)}})),n.a.createElement(C.a.Body,null,n.a.createElement(C.a.Title,{style:{fontWeight:"bold"}},"Adventure Game"),n.a.createElement("div",{className:"aventura-game-button-div"},_),n.a.createElement("div",{className:"aventura-game-button-div"},n.a.createElement(L.a,{fluid:!0,style:{paddingLeft:0,paddingRight:0,maxWidth:"55vw"}},n.a.createElement(d.a,{xs:{span:6},style:{paddingLeft:0,paddingRight:0,alignItems:"center",border:"medium ridge #404040"}},n.a.createElement(w.a,{style:{paddingLeft:0,paddingRight:0}},n.a.createElement(p.a,{src:"/ConsoleStation/game_icons/1 gold.png",rounded:!0,style:{width:"40px",height:"40px",margin:0}})),n.a.createElement(w.a,{style:{paddingLeft:0,paddingRight:0}},"999"),n.a.createElement(w.a,{style:{paddingLeft:0,paddingRight:0,border:"ridge #404040",borderWidth:"0 0 0 medium"}},n.a.createElement(p.a,{src:"/ConsoleStation/game_icons/2 simple sword.png",rounded:!0,style:{width:"40px",height:"40px",margin:0}})),n.a.createElement(w.a,{style:{paddingLeft:0,paddingRight:0}},"999"),n.a.createElement(w.a,{style:{paddingLeft:0,paddingRight:0,border:"ridge #404040",borderWidth:"0 0 0 medium"}},n.a.createElement(p.a,{src:"/ConsoleStation/game_icons/gem.png",rounded:!0,style:{width:"40px",height:"40px",margin:0}})),n.a.createElement(w.a,{style:{paddingLeft:0,paddingRight:0}},"999")))),n.a.createElement("div",{className:"aventura-game-button-div",style:{visibility:"hidden"}},n.a.createElement(m.a,{variant:"primary",onClick:function(){o.terminal.terminalInput.current.disabled=!o.terminal.terminalInput.current.disabled}},o.i18n.t("Ligar/Desligar input do terminal")))))};function I(){var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:35,o=e,t="+",r=n.a.createElement("div",null,"|",t.repeat(o-2),"|",n.a.createElement("br",null)),i=n.a.createElement("div",null,"_".repeat(o),n.a.createElement("br",null),r),s=n.a.createElement("div",null,r,n.a.createElement("div",{style:{transform:"rotate(180deg)",width:"max-content"}},"_".repeat(o))),l=[];return a.forEach((function(a){var e=o-4-a.length,i=!1;if(a.length<o)l.push(n.a.createElement("div",null,"|",t.repeat(Math.floor(e/2))," ",a," ",t.repeat(Math.floor(e/2)+(e%2===1?1:0)),"|",n.a.createElement("br",null)));else{i=!0;for(var s=Math.floor(a.length/(o-4))+1,u="",c=0;c<s;)u=a.slice((o-2)*c,(o-2)*(c+1)),e=o-2-u.length,l.push(n.a.createElement("div",null,"|",u,t.repeat(Math.floor(e)),"|",n.a.createElement("br",null))),c++;l.push(r)}i&&l.pop()})),n.a.createElement("p",{style:{lineHeight:"13px"}},i," ",l," ",s)}function R(){var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],o=0,t=n.a.createElement(b.a,{component:"nav",className:"list-format","aria-label":"contacts"},n.a.createElement(y.a,{className:"title"},n.a.createElement(x.a,{primary:a})),e.map((function(a){return o++,n.a.createElement(y.a,null,o,n.a.createElement(x.a,{inset:!0,primary:a}))})));return t}var q=function(a){var e=Object(t.useContext)(E),o=e.global_context,r=(e.setGlobalContext,Object(t.useState)(o.user)),i=Object(s.a)(r,2),l=i[0],u=i[1],g=Object(t.useState)(o.jogos_instance.make_jogos()),h=Object(s.a)(g,2),j=h[0],_=h[1],b=Object(t.useState)(o.commands_instance.make_menu()),y=Object(s.a)(b,2),x=y[0],C=y[1],S=n.a.createRef();Object(t.useEffect)((function(){o.setTerminal(S.current),o.jogos=j,o.formatScoreResult=I,o.formatListResult=R,o.setUsuarioLogado=u,o.setCommands=C,o.setJogos=_,o.getRndInteger=U,o.aventura_game_component=n.a.createElement(O,null)}));return n.a.createElement("div",{className:"content-console"},n.a.createElement("div",{className:"win-bar"},n.a.createElement(d.a,null,n.a.createElement("h3",{style:{marginLeft:"2vh"}},"ConsoleStation"),n.a.createElement("div",{className:"win-control-buttons"},n.a.createElement(m.a,{variant:"outline-dark",className:"win-control-btn mine",disabled:!0},n.a.createElement(f.a,null)),n.a.createElement(m.a,{variant:"outline-dark",className:"win-control-btn mine",disabled:!0},n.a.createElement(v.a,null)))),n.a.createElement(d.a,null,n.a.createElement(c.a,{ref:S,commands:x,welcomeMessage:n.a.createElement("div",null,n.a.createElement("p",null,n.a.createElement(p.a,{src:"/ConsoleStation/cs-logo.png",rounded:!0,style:{marginBottom:"10px"}}),n.a.createElement("br",null),n.a.createElement("h3",null,o.i18n.t("Seja bem vindo ao ConsoleStation")),n.a.createElement("br",null),o.i18n.t("Para ver uma lista de comandos digite "),n.a.createElement("i",null,o.i18n.t("ajuda")),n.a.createElement("br",null),o.i18n.t("Para limpar o terminal digite "),n.a.createElement("i",null,o.i18n.t("limpar")))),promptLabel:l+"@Consolestation:~$",commandCallback:function(a){o.next_callback&&o.next_callback()},dangerMode:!0,noDefaults:!0,promptLabelStyle:{color:"#6890ff"},style:{width:"98%",height:"92%",margin:"50px auto",minWidth:"98%",minHeight:"2%",position:"absolute",borderRadius:"0 0 5px 5px",top:0,bottom:0,left:0,right:0,borderBottom:"solid",borderRight:"solid"},contentStyle:{height:"95%"}}))))},J=o(167),V=o(104),A=o(162);V.a.use(A.a).init({resources:{en:{translations:{"Seja bem vindo ao ConsoleStation":"Welcome to ConsoleStation","Para ver uma lista de comandos digite ":"To see a list of commands use ","Para limpar o terminal digite ":"To clear the terminal use ","Trocar linguagem do sistema":"Change system language","Comando inv\xe1lido!":"Command Invalid","Exemplo do comando":"Command example: ","Lista de jogos instalados":"List of installed games","Jogar um dos jogos dispon\xedveis na mem\xf3ria":"Play one of the installed games","jogar <nome_do_jogo>":"play <game_name>","Jogo inv\xe1lido, veja a lista de jogos.":"Invalid game, see the list of installed games.","Efetuar Login.":"Make login.","login <usuario> <senha>":"login <user> <password>",Nome_de_Usuario:"Username","Usu\xe1rio logado!":"Login success!","Credenciais Inv\xe1lidas!":"Invalid login information!","Efetuar cadastro de usu\xe1rio.":"Register new user.",registrar_example:"register <user: 30 characters max> <password: Exactly 4 characters>","Senha e Usu\xe1rio requerido!":"User and password required","Senha Inv\xe1lida!":"Invalid password","Usu\xe1rio Inv\xe1lido!":"Invalid user","Usu\xe1rio registrado com sucesso!":"User registration successfull!","Usu\xe1rio":"user",Senha:"password","Fa\xe7a o Login para usa-lo como usu\xe1rio atual.":"Make login to use it","Jogo de pedra, papel e tesoura":"Rock, paper and scissors","Use o comando usar <jogada> para jogar contra mim, jogada pode ser pedra, papel ou tesoura":"Use command use <choice> to play against me, the choice can be rock, paper or scissors","Volta para o menu principal":"Go to main menu","Voltando ao menu principal!":"Going to main menu","Joga contra o computador usando pedra, papel ou tesoura":"Play against the computer using rock, paper or scissors","usar <pedra ou papel ou tesoura>":"use <rock or paper or scissors>",pedra:"rock",papel:"paper",tesoura:"scissors",sua_jogada:"Your move: ",ai_jogada:"My move(AI): ","Um empate!":"A draw","Voc\xea ganhou!":"You win","Voc\xea perdeu!":"You lose","Op\xe7\xe3o de jogada inv\xe1lida!":"Invalid choice","Cara ou coroa?":"Heads or Tails?","Use o comando jogar para jogar uma moeda e ver se dar\xe1 cara ou coroa":"Use flip to flip a coin and see if it's heads or tails","Joga uma moeda":"Flip a coin into the air","A moeda roda no ar por algum tempo e ca\xed no ch\xe3o, voc\xea levanta e v\xea o resultado":"The coin flips in the air for some time and then hits the ground, you stand and go see what landed",resultado_cara:"Result: Heads","passa por uma figura desconhecida que n\xe3o estava ali a 5 minutos atr\xe1s, ":"go trough a unknown figure that wasn't there 5 minutes before, ","A moeda roda no ar por algum tempo, quica no ch\xe3o e vai parar longe, voc\xea corre atr\xe1s dela,":"The coin flips in the air for some time, bouncing on the ground before landing a little too far, you run after it, "," e quando chega v\xea o resultado":" and when you catch it you see what landed",resultado_coroa:"Result: Tails",teste:"test",lista:"list",registrar:"register",voltar:"back",jogar:"flip","Comece sua aventura":"Start the adventure","Use o comando ajuda a qualquer momento para verificar as op\xe7\xf5es.":"Use the help command at any moment to see the options.","Limpar tela":"Clear screen",limpar:"clear","Lista todos os comandos disponiveis com uma breve descri\xe7\xe3o e exemplo de uso":"Lists all commands avaliable with a brief description and use example",ajuda:"help",comecar:"start",aventura_start:'You look to the empty road in front of you and think: "What am I doing here?"',aventura_continue_1:"You stand up and start to walk on the road",aventura_continue_2:"You continue to walk on the road","Olhar a sua volta":"Look around you",olhar:"Look",aventura_olhar_1:"At your right on the horizon there's a dense forest, at your left you see a mountain with snow at the top, ahead you see a empty road.",aventura_olhar_2:"You see the trees moving on the forest by your right, seems like something big is there.",aventura_olhar_3:"Wait, is there someone waving on the top of that mountain? *rubs eyes* Was only my imagination?",you_see_something:"Something has changed",Levantar:"Stand up",Continuar:"Continue",carregando:"Loading...","Ligar/Desligar input do terminal":"Toggle input terminal"}},"pt-BR":{translations:{"Seja bem vindo ao ConsoleStation":"Seja bem vindo ao ConsoleStation","Para ver uma lista de comandos digite ":"Para ver a lista de comandos use ","Para limpar o terminal digite ":"Para limpar o terminal use ","Trocar linguagem do sistema":"Trocar linguagem do sistema","Comando inv\xe1lido!":"Comando inv\xe1lido","Exemplo do comando":"Exemplo do comando: ","Lista de jogos instalados":"Lista de jogos instalados","Jogar um dos jogos dispon\xedveis na mem\xf3ria":"Jogar um dos jogos dispon\xedveis na mem\xf3ria","jogar <nome_do_jogo>":"jogar <nome_do_jogo>","Jogo inv\xe1lido, veja a lista de jogos.":"Jogo inv\xe1lido, veja a lista de jogos dispon\xedveis.","Efetuar Login.":"Efetuar Login.","login <usuario> <senha>":"login <usuario> <senha>",Nome_de_Usuario:"Nome_de_Usuario","Usu\xe1rio logado!":"Usu\xe1rio logado!","Credenciais Inv\xe1lidas!":"Credenciais Inv\xe1lidas!","Efetuar cadastro de usu\xe1rio.":"Efetuar cadastro de usu\xe1rio.",registrar_example:"registrar <usuario: M\xe1ximo de 30 caracteres> <senha: Apenas 4 caracteres>","Senha e Usu\xe1rio requerido!":"Senha e Usu\xe1rio requerido!","Senha Inv\xe1lida!":"Senha Inv\xe1lida!","Usu\xe1rio Inv\xe1lido!":"Usu\xe1rio Inv\xe1lido!","Usu\xe1rio registrado com sucesso!":"Usu\xe1rio registrado com sucesso!","Usu\xe1rio":"Usu\xe1rio",Senha:"Senha","Fa\xe7a o Login para usa-lo como usu\xe1rio atual.":"Fa\xe7a o Login para usa-lo como usu\xe1rio atual.","Jogo de pedra, papel e tesoura":"Jogo de pedra, papel e tesoura","Use o comando usar <jogada> para jogar contra mim, jogada pode ser pedra, papel ou tesoura":"Use o comando usar <jogada> para jogar contra mim, jogada pode ser pedra, papel ou tesoura","Volta para o menu principal":"Volta para o menu principal","Voltando ao menu principal!":"Voltando ao menu principal!","Joga contra o computador usando pedra, papel ou tesoura":"Joga contra o computador usando pedra, papel ou tesoura","usar <pedra ou papel ou tesoura>":"usar <pedra ou papel ou tesoura>",pedra:"pedra",papel:"papel",tesoura:"tesoura",sua_jogada:"Sua Jogada: ",ai_jogada:"Minha jogada(AI): ","Um empate!":"Um empate!","Voc\xea ganhou!":"Voc\xea ganhou!","Voc\xea perdeu!":"Voc\xea perdeu!","Op\xe7\xe3o de jogada inv\xe1lida!":"Op\xe7\xe3o de jogada inv\xe1lida!","Cara ou coroa?":"Cara ou coroa?","Use o comando jogar para jogar uma moeda e ver se dar\xe1 cara ou coroa":"Use o comando jogar para jogar uma moeda e ver se dar\xe1 cara ou coroa","Joga uma moeda":"Joga uma moeda","A moeda roda no ar por algum tempo e ca\xed no ch\xe3o, voc\xea levanta e v\xea o resultado":"A moeda roda no ar por algum tempo e ca\xed no ch\xe3o, voc\xea levanta e v\xea o resultado",resultado_cara:"Resultado: Cara","passa por uma figura desconhecida que n\xe3o estava ali a 5 minutos atr\xe1s, ":"passa por uma figura desconhecida que n\xe3o estava ali a 5 minutos atr\xe1s, ","A moeda roda no ar por algum tempo, quica no ch\xe3o e vai parar longe, voc\xea corre atr\xe1s dela,":"A moeda roda no ar por algum tempo, quica no ch\xe3o e vai parar longe, voc\xea corre atr\xe1s dela,"," e quando chega v\xea o resultado":" e quando chega v\xea o resultado",resultado_coroa:"Resultado: Coroa",teste:"teste",lista:"lista",registrar:"registrar",voltar:"voltar",jogar:"jogar","Comece sua aventura":"Comece sua aventura","Use o comando ajuda a qualquer momento para verificar as op\xe7\xf5es.":"Use o comando ajuda a qualquer momento para verificar as op\xe7\xf5es.","Limpar tela":"Limpar tela",limpar:"limpar","Lista todos os comandos disponiveis com uma breve descri\xe7\xe3o e exemplo de uso":"Lista todos os comandos disponiveis com uma breve descri\xe7\xe3o e exemplo de uso",ajuda:"ajuda",comecar:"comecar",aventura_start:'Voc\xea olha para uma estrada deserta e se pergunta: "O que estou fazendo aqui?"',aventura_continue_1:"Voc\xea levanta e come\xe7a a andar na estrada deserta.",aventura_continue_2:"Voc\xea continua a andar na estrada","Olhar a sua volta":"Olhar a sua volta",olhar:"Olhar",aventura_olhar_1:"A sua direita no horizonte voc\xea v\xea uma floresta densa, a sua esquerda voc\xea v\xea uma montanha com neve no topo, a frente uma estrada deserta.",aventura_olhar_2:"Voc\xea v\xea as arvores da floresta a direita se mexendo, parece que algo grande est\xe1 se movimentando por ali.",aventura_olhar_3:"Espera, tem algu\xe9m acenando no topo daquela montanha? *esfrega o olho* Foi s\xf3 minha imagina\xe7\xe3o?.",you_see_something:"Alguma coisa mudou",Levantar:"Levantar",Continuar:"Continuar",carregando:"Carregando...","Ligar/Desligar input do terminal":"Alternar input do terminal"}}},fallbackLng:"en",debug:!1,ns:["translations"],defaultNS:"translations",keySeparator:!1,interpolation:{escapeValue:!1,formatSeparator:","},react:{wait:!0}});var N=V.a,T=o(75),M=o(76),P=o(78),W=o(77),B=function(a){Object(P.a)(o,a);var e=Object(W.a)(o);function o(a){var t;return Object(T.a)(this,o),(t=e.call(this,a)).context=a.context,t.state={},t}return Object(M.a)(o,[{key:"make_menu",value:function(){var a=this.context,e={teste:{description:"WIP",usage:a.i18n.t("teste"),fn:function(){console.log("global_context.terminal: ",a.terminal)}},ajuda:{description:a.i18n.t("Lista todos os comandos disponiveis com uma breve descri\xe7\xe3o e exemplo de uso"),usage:a.i18n.t("ajuda"),fn:function(){a.terminal.showHelp()}},limpar:{description:a.i18n.t("Limpar tela"),usage:a.i18n.t("limpar"),fn:function(){a.terminal.state.stdout=[]}},language:{description:a.i18n.t("Trocar linguagem do sistema"),usage:"language <new_language:(en/pt-BR)>",fn:function(e){if(!["en","pt-BR"].includes(e))return n.a.createElement("p",null,a.i18n.t("Comando inv\xe1lido!"),n.a.createElement("br",null),a.i18n.t("Exemplo do comando"),n.a.createElement("i",null,"language")," en");a.i18n.changeLanguage(e),window.location.reload(!1)}},lista:{description:a.i18n.t("Lista de jogos instalados"),usage:a.i18n.t("lista"),fn:function(){var e=Object.keys(a.jogos),o=[];return e.forEach((function(e){o.push(e+" : "+a.jogos[e].descricao)})),a.formatListResult(a.i18n.t("Lista de jogos instalados"),o)}},jogar:{description:a.i18n.t("Jogar um dos jogos dispon\xedveis na mem\xf3ria"),usage:a.i18n.t("jogar <nome_do_jogo>"),fn:function(e){var o=n.a.createElement("p",null,a.i18n.t("Exemplo do comando"),n.a.createElement("i",null,a.i18n.t("jogar"))," 1");if(!e)return n.a.createElement("div",null,n.a.createElement("p",null,a.i18n.t("Jogo inv\xe1lido, veja a lista de jogos.")),o);var t=Object.keys(a.jogos);return!Number.isNaN(e)&&e<=t.length?(a.jogos[t[e-1]].fn(),[t[e-1],n.a.createElement("br",null),a.jogos[t[e-1]].descricao,n.a.createElement("br",null),a.jogos[t[e-1]].instrucoes]):t.includes(e)?(a.jogos[e].fn(),[e,n.a.createElement("br",null),a.jogos[e].descricao,n.a.createElement("br",null),a.jogos[e].instrucoes]):a.i18n.t("Jogo inv\xe1lido, veja a lista de jogos.")}},login:{description:a.i18n.t("Efetuar Login."),usage:a.i18n.t("login <usuario> <senha>"),fn:function(e,o){var t=n.a.createElement("p",null,a.i18n.t("Exemplo do comando"),n.a.createElement("i",null,"login")," ",a.i18n.t("Nome_de_Usuario")," 1234");return localStorage.getItem("@consolestation/usuario")===e&&localStorage.getItem("@consolestation/senha")===o?(a.setUsuarioLogado(e),a.user=e,a.i18n.t("Usu\xe1rio logado!")):n.a.createElement("div",null,n.a.createElement("p",null,a.i18n.t("Credenciais Inv\xe1lidas!")),t)}},registrar:{description:a.i18n.t("Efetuar cadastro de usu\xe1rio."),usage:a.i18n.t("registrar_example"),fn:function(e,o){var t=n.a.createElement("p",null,a.i18n.t("Exemplo do comando"),n.a.createElement("i",null,a.i18n.t("registrar"))," ",a.i18n.t("Nome_de_Usuario")," 1234");return e&&o?4!==o.length?n.a.createElement("div",null,n.a.createElement("p",null,a.i18n.t("Senha Inv\xe1lida!")),t):e.length>30||0===e.length?n.a.createElement("div",null,n.a.createElement("p",null,a.i18n.t("Usu\xe1rio Inv\xe1lido!")),t):(localStorage.setItem("@consolestation/usuario",e),localStorage.setItem("@consolestation/senha",o),n.a.createElement("p",null,a.i18n.t("Usu\xe1rio registrado com sucesso!"),n.a.createElement("br",null),a.i18n.t("Usu\xe1rio"),": ",e,n.a.createElement("br",null),a.i18n.t("Senha"),": ",o,n.a.createElement("br",null),a.i18n.t("Fa\xe7a o Login para usa-lo como usu\xe1rio atual."))):n.a.createElement("div",null,n.a.createElement("p",null,a.i18n.t("Senha e Usu\xe1rio requerido!")),t)}}};return"en"===localStorage.getItem("i18nextLng")?{test:e.teste,help:e.ajuda,clear:e.limpar,language:e.language,list:e.lista,play:e.jogar,login:e.login,register:e.registrar}:e}}]),o}(n.a.Component);B.contextType=E;o(211);var H=function(a){Object(P.a)(o,a);var e=Object(W.a)(o);function o(a){var t;return Object(T.a)(this,o),(t=e.call(this,a)).context=a.context,t.state={},t}return Object(M.a)(o,[{key:"make_jogos",value:function(){var a=this.context,e=function(a,e,o){var t=a.commands_instance.make_menu();"en"===localStorage.getItem("i18nextLng")?(o.help=t.help,o.clear=t.clear,a.setCommands(o)):(e.ajuda=t.ajuda,e.limpar=t.limpar,a.setCommands(e)),a.terminal.state.stdout=[]},o={description:a.i18n.t("Volta para o menu principal"),usage:a.i18n.t("voltar"),fn:function(){return a.setCommands(a.commands_instance.make_menu()),a.terminal.state.stdout=[],a.i18n.t("Voltando ao menu principal!")}},t={pedra_papel_tesoura:{descricao:a.i18n.t("Jogo de pedra, papel e tesoura"),instrucoes:a.i18n.t("Use o comando usar <jogada> para jogar contra mim, jogada pode ser pedra, papel ou tesoura"),fn:function(){var t={voltar:o,usar:{description:a.i18n.t("Joga contra o computador usando pedra, papel ou tesoura"),usage:a.i18n.t("usar <pedra ou papel ou tesoura>"),fn:function(e){var o=n.a.createElement("p",null,a.i18n.t("Exemplo do comando"),": ",n.a.createElement("i",null,"usar")," ",a.i18n.t("pedra")),t=[a.i18n.t("pedra"),a.i18n.t("papel"),a.i18n.t("tesoura")],r=[];if(t.includes(e)){var i=t[a.getRndInteger(0,2)],s=!1;if(r.push(a.i18n.t("sua_jogada")+e),r.push(a.i18n.t("ai_jogada")+i),i===e)r.push(a.i18n.t("Um empate!")),s=!0;else switch(e){case a.i18n.t("pedra"):i===a.i18n.t("tesoura")&&(r.push(a.i18n.t("Voc\xea ganhou!")),s=!0);break;case a.i18n.t("papel"):i===a.i18n.t("pedra")&&(r.push(a.i18n.t("Voc\xea ganhou!")),s=!0);break;case a.i18n.t("tesoura"):i===a.i18n.t("papel")&&(r.push(a.i18n.t("Voc\xea ganhou!")),s=!0)}return s||r.push(a.i18n.t("Voc\xea perdeu!")),n.a.createElement("div",null,a.formatScoreResult(r))}return n.a.createElement("div",null,n.a.createElement("p",null,a.i18n.t("Op\xe7\xe3o de jogada inv\xe1lida!")),o)}}};e(a,t,{back:t.voltar,use:t.usar})}},jogue_a_moeda:{descricao:a.i18n.t("Cara ou coroa?"),instrucoes:a.i18n.t("Use o comando jogar para jogar uma moeda e ver se dar\xe1 cara ou coroa"),fn:function(){var t={voltar:o,jogar:{description:a.i18n.t("Joga uma moeda"),usage:a.i18n.t("jogar"),fn:function(){switch(a.getRndInteger(0,1)){case 0:return a.formatScoreResult([a.i18n.t("A moeda roda no ar por algum tempo e ca\xed no ch\xe3o, voc\xea levanta e v\xea o resultado"),"-",a.i18n.t("resultado_cara")]);case 1:var e="";return a.getRndInteger(0,99)>90&&(e=a.i18n.t("passa por uma figura desconhecida que n\xe3o estava ali a 5 minutos atr\xe1s, ")),a.formatScoreResult([a.i18n.t("A moeda roda no ar por algum tempo, quica no ch\xe3o e vai parar longe, voc\xea corre atr\xe1s dela,")+e+a.i18n.t(" e quando chega v\xea o resultado"),"-",a.i18n.t("resultado_coroa")])}}}};e(a,t,{back:t.voltar,flip:t.jogar})}},a_aventura:{descricao:a.i18n.t("Comece sua aventura"),instrucoes:a.i18n.t("Use o comando ajuda a qualquer momento para verificar as op\xe7\xf5es."),fn:function(){var t={voltar:o,comecar:{description:a.i18n.t("Come\xe7ar aventura"),usage:a.i18n.t("comecar"),fn:function(){a.terminal.state.stdout=[];var e=a.terminal;return setTimeout((function(){a.terminal.state.stdout=[],e.pushToStdout(a.aventura_game_component)}),2500),n.a.createElement("p",null,n.a.createElement(p.a,{src:"/ConsoleStation/loading.gif",rounded:!0,style:{marginBottom:"10px"}}),n.a.createElement("br",null),a.i18n.t("carregando"))}}};e(a,t,{back:t.voltar,start:t.comecar})}}};return"en"===localStorage.getItem("i18nextLng")?{rock_paper_scissors:t.pedra_papel_tesoura,flip_a_coin:t.jogue_a_moeda,the_adventure:t.a_aventura}:t}}]),o}(n.a.Component);H.contextType=E,l.a.configure();var G=function(a){var e=Object(t.useState)(n.a.createElement(q,null)),o=Object(s.a)(e,2),r=o[0],i=o[1],l=Object(t.useState)({}),u=Object(s.a)(l,2),c=u[0],d=u[1],m=Object(t.useState)(),p=Object(s.a)(m,2),g=p[0],v=p[1],h=Object(t.useState)({}),f=Object(s.a)(h,2),j=f[0],E=f[1];return c.setPage=i,c.user="user",c.i18n=N,c.terminal=g,c.setTerminal=v,c.commands_instance=new B({context:c}),c.jogos_instance=new H({context:c}),c.global_state=j,c.setGlobalState=E,n.a.createElement("div",{className:"wrapper"},n.a.createElement(_,{value:{global_context:c,setGlobalContext:d}},n.a.createElement(J.a,{i18n:N},r)))};o(469);i.a.render(n.a.createElement(G,null),document.getElementById("root"))}},[[171,1,2]]]);
//# sourceMappingURL=main.835eb987.chunk.js.map