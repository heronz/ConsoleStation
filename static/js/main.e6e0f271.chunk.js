(this.webpackJsonpConsoleStation=this.webpackJsonpConsoleStation||[]).push([[0],{54:function(a,e,o){a.exports=o(97)},59:function(a,e,o){},97:function(a,e,o){"use strict";o.r(e);var t=o(0),n=o.n(t),r=o(17),s=o.n(r),i=o(14),l=(o(59),o(52)),u=(o(60),o(44)),c=o.n(u),d=o(111),m=o(113),p=o(112),g=o(48),v=o.n(g),h=o(46),j=o.n(h),f=n.a.createContext(),E=f.Provider,b=f;function _(a,e){return Math.floor(Math.random()*(e-a+1))+a}function U(){var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:35,o=e,t="+",r=n.a.createElement("div",null,"|",t.repeat(o-2),"|",n.a.createElement("br",null)),s=n.a.createElement("div",null,"_".repeat(o),n.a.createElement("br",null),r),i=n.a.createElement("div",null,r,n.a.createElement("div",{style:{transform:"rotate(180deg)",width:"max-content"}},"_".repeat(o))),l=[];return a.forEach((function(a){var e=o-4-a.length,s=!1;if(a.length<o)l.push(n.a.createElement("div",null,"|",t.repeat(Math.floor(e/2))," ",a," ",t.repeat(Math.floor(e/2)+(e%2===1?1:0)),"|",n.a.createElement("br",null)));else{s=!0;for(var i=Math.floor(a.length/(o-4))+1,u="",c=0;c<i;)u=a.slice((o-2)*c,(o-2)*(c+1)),e=o-2-u.length,l.push(n.a.createElement("div",null,"|",u,t.repeat(Math.floor(e)),"|",n.a.createElement("br",null))),c++;l.push(r)}s&&l.pop()})),n.a.createElement("p",{style:{lineHeight:"13px"}},s," ",l," ",i)}var S=function(a){var e=Object(t.useContext)(b),o=e.global_context,r=(e.setGlobalContext,Object(t.useState)(o.user)),s=Object(i.a)(r,2),l=s[0],u=s[1],g=n.a.createRef();Object(t.useEffect)((function(){o.setTerminal(g.current),o.jogos=E,o.formatResult=U,o.setUsuarioLogado=u,o.setCommands=I,o.setJogos=S,o.getRndInteger=_}));var h=Object(t.useState)(o.jogos_instance.make_jogos()),f=Object(i.a)(h,2),E=f[0],S=f[1],C=Object(t.useState)(o.commands_instance.make_menu()),x=Object(i.a)(C,2),w=x[0],I=x[1];return n.a.createElement("div",{className:"content-console"},n.a.createElement("div",{className:"win-bar"},n.a.createElement(d.a,null,n.a.createElement("h3",{style:{marginLeft:"2vh"}},"ConsoleStation"),n.a.createElement("div",{className:"win-control-buttons"},n.a.createElement(m.a,{variant:"outline-dark",className:"win-control-btn mine",disabled:!0},n.a.createElement(j.a,null)),n.a.createElement(m.a,{variant:"outline-dark",className:"win-control-btn mine",disabled:!0},n.a.createElement(v.a,null)))),n.a.createElement(d.a,null,n.a.createElement(c.a,{ref:g,commands:w,welcomeMessage:n.a.createElement("div",null,n.a.createElement("p",null,n.a.createElement(p.a,{src:"/ConsoleStation/cs-logo.png",rounded:!0,style:{marginBottom:"10px"}}),n.a.createElement("br",null),n.a.createElement("h3",null,o.i18n.t("Seja bem vindo ao ConsoleStation")),n.a.createElement("br",null),o.i18n.t("Para ver uma lista de comandos digite "),n.a.createElement("i",null,"help"),n.a.createElement("br",null),o.i18n.t("Para limpar o terminal digite "),n.a.createElement("i",null,"clear"))),promptLabel:l+"@Consolestation:~$",commandCallback:function(a){o.next_callback&&o.next_callback()},dangerMode:!0,autoFocus:!0,style:{width:"98%",height:"92%",margin:"50px auto",minWidth:"98%",minHeight:"2%",position:"absolute",top:0,bottom:0,left:0,right:0},contentStyle:{height:"95%"}}))))},C=o(51),x=o(33),w=o(50);x.a.use(w.a).init({resources:{en:{translations:{"Seja bem vindo ao ConsoleStation":"Welcome to ConsoleStation","Para ver uma lista de comandos digite ":"To see a list of commands use ","Para limpar o terminal digite ":"To clear the terminal use ","Trocar linguagem do sistema":"Change system language","Comando inv\xe1lido!":"Command Invalid","Exemplo do comando":"Command example: ","Lista de jogos instalados":"List of installed games","Jogar um dos jogos dispon\xedveis na mem\xf3ria":"Play one of the installed games","jogar <nome_do_jogo>":"jogar <game_name>","Jogo inv\xe1lido, veja a lista de jogos.":"Invalid game, see the list of installed games.","Efetuar Login.":"Make login.","login <usuario> <senha>":"login <user> <password>",Nome_de_Usuario:"Username","Usu\xe1rio logado!":"Login success!","Credenciais Inv\xe1lidas!":"Invalid login information!","Efetuar cadastro de usu\xe1rio.":"Register new user.",registrar_example:"registrar <user: 30 characters max> <password: Exactly 4 characters>","Senha e Usu\xe1rio requerido!":"User and password required","Senha Inv\xe1lida!":"Invalid password","Usu\xe1rio Inv\xe1lido!":"Invalid user","Usu\xe1rio registrado com sucesso!":"User registration successfull!","Usu\xe1rio":"user",Senha:"password","Fa\xe7a o Login para usa-lo como usu\xe1rio atual.":"Make login to use it","Jogo de pedra, papel e tesoura":"Rock, paper and scissors","Use o comando usar <jogada> para jogar contra mim, jogada pode ser pedra, papel ou tesoura":"Use command usar <choice> to play against me, the choice can be rock, paper or scissors","Volta para o menu principal":"Go to main menu","Voltando ao menu principal!":"Goin to main menu","Joga contra o computador usando pedra, papel ou tesoura":"Play against the computer using rock, paper or scissors","usar <pedra ou papel ou tesoura>":"usar <rock or paper or scissors>",pedra:"rock",papel:"paper",tesoura:"scissors",sua_jogada:"Your move: ",ai_jogada:"My move(AI): ","Um empate!":"A draw","Voc\xea ganhou!":"You win","Voc\xea perdeu!":"You lose","Op\xe7\xe3o de jogada inv\xe1lida!":"Invalid choice","Cara ou coroa?":"Heads or Tails?","Use o comando jogar para jogar uma moeda e ver se dar\xe1 cara ou coroa":"Use jogar to toss a coin and see if it's heads or tails","Joga uma moeda":"Toss a coin into the air","A moeda roda no ar por algum tempo e ca\xed no ch\xe3o, voc\xea levanta e v\xea o resultado":"The coin flips in the air for some time and then hits the ground, you stand and go see what landed",resultado_cara:"Result: Heads","passa por uma figura desconhecida que n\xe3o estava ali a 5 minutos atr\xe1s, ":"go trough a unknown figure that wasn't there 5 minutes before, ","A moeda roda no ar por algum tempo, quica no ch\xe3o e vai parar longe, voc\xea corre atr\xe1s dela,":"The coin flips in the air for some time, bouncing on the ground before landing a little too far, you run after it, "," e quando chega v\xea o resultado":" and when you catch it you see what landed",resultado_coroa:"Result: Tails"}},pt_br:{translations:{"Seja bem vindo ao ConsoleStation":"Seja bem vindo ao ConsoleStation","Para ver uma lista de comandos digite ":"Para ver a lista de comandos use ","Para limpar o terminal digite ":"Para limpar o terminal use ","Trocar linguagem do sistema":"Trocar linguagem do sistema","Comando inv\xe1lido!":"Comando inv\xe1lido","Exemplo do comando":"Exemplo do comando: ","Lista de jogos instalados":"Lista de jogos instalados","Jogar um dos jogos dispon\xedveis na mem\xf3ria":"Jogar um dos jogos dispon\xedveis na mem\xf3ria","jogar <nome_do_jogo>":"jogar <nome_do_jogo>","Jogo inv\xe1lido, veja a lista de jogos.":"Jogo inv\xe1lido, veja a lista de jogos dispon\xedveis.","Efetuar Login.":"Efetuar Login.","login <usuario> <senha>":"login <usuario> <senha>",Nome_de_Usuario:"Nome_de_Usuario","Usu\xe1rio logado!":"Usu\xe1rio logado!","Credenciais Inv\xe1lidas!":"Credenciais Inv\xe1lidas!","Efetuar cadastro de usu\xe1rio.":"Efetuar cadastro de usu\xe1rio.",registrar_example:"registrar <usuario: M\xe1ximo de 30 caracteres> <senha: Apenas 4 caracteres>","Senha e Usu\xe1rio requerido!":"Senha e Usu\xe1rio requerido!","Senha Inv\xe1lida!":"Senha Inv\xe1lida!","Usu\xe1rio Inv\xe1lido!":"Usu\xe1rio Inv\xe1lido!","Usu\xe1rio registrado com sucesso!":"Usu\xe1rio registrado com sucesso!","Usu\xe1rio":"Usu\xe1rio",Senha:"Senha","Fa\xe7a o Login para usa-lo como usu\xe1rio atual.":"Fa\xe7a o Login para usa-lo como usu\xe1rio atual.","Jogo de pedra, papel e tesoura":"Jogo de pedra, papel e tesoura","Use o comando usar <jogada> para jogar contra mim, jogada pode ser pedra, papel ou tesoura":"Use o comando usar <jogada> para jogar contra mim, jogada pode ser pedra, papel ou tesoura","Volta para o menu principal":"Volta para o menu principal","Voltando ao menu principal!":"Voltando ao menu principal!","Joga contra o computador usando pedra, papel ou tesoura":"Joga contra o computador usando pedra, papel ou tesoura","usar <pedra ou papel ou tesoura>":"usar <pedra ou papel ou tesoura>",pedra:"pedra",papel:"papel",tesoura:"tesoura",sua_jogada:"Sua Jogada: ",ai_jogada:"Minha jogada(AI): ","Um empate!":"Um empate!","Voc\xea ganhou!":"Voc\xea ganhou!","Voc\xea perdeu!":"Voc\xea perdeu!","Op\xe7\xe3o de jogada inv\xe1lida!":"Op\xe7\xe3o de jogada inv\xe1lida!","Cara ou coroa?":"Cara ou coroa?","Use o comando jogar para jogar uma moeda e ver se dar\xe1 cara ou coroa":"Use o comando jogar para jogar uma moeda e ver se dar\xe1 cara ou coroa","Joga uma moeda":"Joga uma moeda","A moeda roda no ar por algum tempo e ca\xed no ch\xe3o, voc\xea levanta e v\xea o resultado":"A moeda roda no ar por algum tempo e ca\xed no ch\xe3o, voc\xea levanta e v\xea o resultado",resultado_cara:"Resultado: Cara","passa por uma figura desconhecida que n\xe3o estava ali a 5 minutos atr\xe1s, ":"passa por uma figura desconhecida que n\xe3o estava ali a 5 minutos atr\xe1s, ","A moeda roda no ar por algum tempo, quica no ch\xe3o e vai parar longe, voc\xea corre atr\xe1s dela,":"A moeda roda no ar por algum tempo, quica no ch\xe3o e vai parar longe, voc\xea corre atr\xe1s dela,"," e quando chega v\xea o resultado":" e quando chega v\xea o resultado",resultado_coroa:"Resultado: Coroa"}}},fallbackLng:"en",debug:!0,ns:["translations"],defaultNS:"translations",keySeparator:!1,interpolation:{escapeValue:!1,formatSeparator:","},react:{wait:!0}});var I=x.a,k=o(29),O=o(30),y=o(32),J=o(31),L=function(a){Object(y.a)(o,a);var e=Object(J.a)(o);function o(a){var t;return Object(k.a)(this,o),(t=e.call(this,a)).context=a.context,t.state={},t}return Object(O.a)(o,[{key:"make_menu",value:function(){var a=this.context;return{teste:{description:"WIP",usage:"teste",fn:function(){return"TESTE"}},language:{description:a.i18n.t("Trocar linguagem do sistema"),usage:"language <new_language:(en/pt_br)>",fn:function(e){if(!["en","pt_br"].includes(e))return n.a.createElement("p",null,a.i18n.t("Comando inv\xe1lido!"),n.a.createElement("br",null),a.i18n.t("Exemplo do comando"),n.a.createElement("i",null,"language")," en");a.i18n.changeLanguage(e),window.location.reload(!1)}},lista:{description:a.i18n.t("Lista de jogos instalados"),usage:"lista",fn:function(){var e=Object.keys(a.jogos),o=[a.i18n.t("Lista de jogos instalados"),"-"];return e.forEach((function(e){o.push(e+" : "+a.jogos[e].descricao)})),a.formatResult(o)}},jogar:{description:a.i18n.t("Jogar um dos jogos dispon\xedveis na mem\xf3ria"),usage:a.i18n.t("jogar <nome_do_jogo>"),fn:function(e){return Object.keys(a.jogos).includes(e)?(a.jogos[e].fn(),[e,n.a.createElement("br",null),a.jogos[e].descricao,n.a.createElement("br",null),a.jogos[e].instrucoes]):a.i18n.t("Jogo inv\xe1lido, veja a lista de jogos.")}},login:{description:a.i18n.t("Efetuar Login."),usage:a.i18n.t("login <usuario> <senha>"),fn:function(e,o){var t=n.a.createElement("p",null,a.i18n.t("Exemplo do comando"),n.a.createElement("i",null,"login")," ",a.i18n.t("Nome_de_Usuario")," 1234");return localStorage.getItem("@consolestation/usuario")===e&&localStorage.getItem("@consolestation/senha")===o?(a.setUsuarioLogado(e),a.user=e,a.i18n.t("Usu\xe1rio logado!")):n.a.createElement("div",null,n.a.createElement("p",null,a.i18n.t("Credenciais Inv\xe1lidas!")),t)}},registrar:{description:a.i18n.t("Efetuar cadastro de usu\xe1rio."),usage:a.i18n.t("registrar_example"),fn:function(e,o){var t=n.a.createElement("p",null,a.i18n.t("Exemplo do comando"),n.a.createElement("i",null,"registrar")," ",a.i18n.t("Nome_de_Usuario")," 1234");return e&&o?4!==o.length?n.a.createElement("div",null,n.a.createElement("p",null,a.i18n.t("Senha Inv\xe1lida!")),t):e.length>30||0===e.length?n.a.createElement("div",null,n.a.createElement("p",null,a.i18n.t("Usu\xe1rio Inv\xe1lido!")),t):(localStorage.setItem("@consolestation/usuario",e),localStorage.setItem("@consolestation/senha",o),n.a.createElement("p",null,a.i18n.t("Usu\xe1rio registrado com sucesso!"),n.a.createElement("br",null),a.i18n.t("Usu\xe1rio"),": ",e,n.a.createElement("br",null),a.i18n.t("Senha"),": ",o,n.a.createElement("br",null),a.i18n.t("Fa\xe7a o Login para usa-lo como usu\xe1rio atual."))):n.a.createElement("div",null,n.a.createElement("p",null,a.i18n.t("Senha e Usu\xe1rio requerido!")),t)}}}}}]),o}(n.a.Component);L.contextType=b;var V=function(a){Object(y.a)(o,a);var e=Object(J.a)(o);function o(a){var t;return Object(k.a)(this,o),(t=e.call(this,a)).context=a.context,t.state={},t}return Object(O.a)(o,[{key:"make_jogos",value:function(){var a=this.context;return{pedra_papel_tesoura:{descricao:a.i18n.t("Jogo de pedra, papel e tesoura"),instrucoes:a.i18n.t("Use o comando usar <jogada> para jogar contra mim, jogada pode ser pedra, papel ou tesoura"),fn:function(){var e={voltar:{description:a.i18n.t("Volta para o menu principal"),usage:"voltar",fn:function(){return a.setCommands(a.commands_instance.make_menu()),a.i18n.t("Voltando ao menu principal!")}},usar:{description:a.i18n.t("Joga contra o computador usando pedra, papel ou tesoura"),usage:a.i18n.t("usar <pedra ou papel ou tesoura>"),fn:function(e){var o=n.a.createElement("p",null,a.i18n.t("Exemplo do comando"),": ",n.a.createElement("i",null,"usar")," ",a.i18n.t("pedra")),t=[a.i18n.t("pedra"),a.i18n.t("papel"),a.i18n.t("tesoura")],r=[];if(t.includes(e)){var s=t[a.getRndInteger(0,2)],i=!1;if(r.push(a.i18n.t("sua_jogada")+e),r.push(a.i18n.t("ai_jogada")+s),s===e)r.push(a.i18n.t("Um empate!")),i=!0;else switch(e){case a.i18n.t("pedra"):s===a.i18n.t("tesoura")&&(r.push(a.i18n.t("Voc\xea ganhou!")),i=!0);break;case a.i18n.t("papel"):s===a.i18n.t("pedra")&&(r.push(a.i18n.t("Voc\xea ganhou!")),i=!0);break;case a.i18n.t("tesoura"):s===a.i18n.t("papel")&&(r.push(a.i18n.t("Voc\xea ganhou!")),i=!0)}return i||r.push(a.i18n.t("Voc\xea perdeu!")),n.a.createElement("div",null,a.formatResult(r))}return n.a.createElement("div",null,n.a.createElement("p",null,a.i18n.t("Op\xe7\xe3o de jogada inv\xe1lida!")),o)}}};a.setCommands(e)}},flip_a_coin:{descricao:a.i18n.t("Cara ou coroa?"),instrucoes:a.i18n.t("Use o comando jogar para jogar uma moeda e ver se dar\xe1 cara ou coroa"),fn:function(){var e={voltar:{description:a.i18n.t("Volta para o menu principal"),usage:"voltar",fn:function(){return a.setCommands(a.commands_instance.make_menu()),a.i18n.t("Voltando ao menu principal!")}},jogar:{description:a.i18n.t("Joga uma moeda"),usage:"jogar",fn:function(){switch(a.getRndInteger(0,1)){case 0:return a.formatResult([a.i18n.t("A moeda roda no ar por algum tempo e ca\xed no ch\xe3o, voc\xea levanta e v\xea o resultado"),"-",a.i18n.t("resultado_cara")]);case 1:var e="";return a.getRndInteger(0,99)>90&&(e=a.i18n.t("passa por uma figura desconhecida que n\xe3o estava ali a 5 minutos atr\xe1s, ")),a.formatResult([a.i18n.t("A moeda roda no ar por algum tempo, quica no ch\xe3o e vai parar longe, voc\xea corre atr\xe1s dela,")+e+a.i18n.t(" e quando chega v\xea o resultado"),"-",a.i18n.t("resultado_coroa")])}}}};a.setCommands(e)}}}}}]),o}(n.a.Component);V.contextType=b,l.a.configure();var q=function(a){var e=Object(t.useState)(n.a.createElement(S,null)),o=Object(i.a)(e,2),r=o[0],s=o[1],l=Object(t.useState)({}),u=Object(i.a)(l,2),c=u[0],d=u[1],m=Object(t.useState)(),p=Object(i.a)(m,2),g=p[0],v=p[1];return c.setPage=s,c.user="user",c.i18n=I,c.terminal=g,c.setTerminal=v,c.commands_instance=new L({context:c}),c.jogos_instance=new V({context:c}),n.a.createElement("div",{className:"wrapper"},n.a.createElement(E,{value:{global_context:c,setGlobalContext:d}},n.a.createElement(C.a,{i18n:I},r)))};o(95);s.a.render(n.a.createElement(q,null),document.getElementById("root"))}},[[54,1,2]]]);
//# sourceMappingURL=main.e6e0f271.chunk.js.map