import React, { useContext } from 'react';
import GlobalContext from '../helpers/GlobalContext'

export default class Jogos extends React.Component {
    static contextType = GlobalContext
    constructor(props) {
        super(props);
        this.context = props.context;
        this.state = {

        };
      }

    make_jogos() {
        const global_context = this.context;
        const finish_commands_config = (global_context, local_commands, local_commands_en) => {
            const main_menu_commands = global_context.commands_instance.make_menu()
                        if (localStorage.getItem('i18nextLng') === 'en'){
                            local_commands_en.help = main_menu_commands.help
                            local_commands_en.clear = main_menu_commands.clear
                            global_context.setCommands(local_commands_en)
                        } else {
                            local_commands.ajuda = main_menu_commands.ajuda
                            local_commands.limpar = main_menu_commands.limpar
                            global_context.setCommands(local_commands)
                        }
        }
        const jogos = {
            pedra_papel_tesoura: {
                'descricao': global_context.i18n.t('Jogo de pedra, papel e tesoura'),
                'instrucoes': global_context.i18n.t('Use o comando usar <jogada> para jogar contra mim, jogada pode ser pedra, papel ou tesoura'),
                fn: function () {
                    const local_commands = {
                        voltar: {
                            description: global_context.i18n.t('Volta para o menu principal'),
                            usage: global_context.i18n.t('voltar'),
                            fn: function () {
                                global_context.setCommands(global_context.commands_instance.make_menu());
                                return global_context.i18n.t('Voltando ao menu principal!')
                            }
                        },
                        usar: {
                            description: global_context.i18n.t('Joga contra o computador usando pedra, papel ou tesoura'),
                            usage: global_context.i18n.t('usar <pedra ou papel ou tesoura>'),
                            fn: function (jogada) {
                                const exemplo_do_comando = <p>{global_context.i18n.t("Exemplo do comando")}: <i>usar</i> {global_context.i18n.t("pedra")}</p>
                                const opcoes = [global_context.i18n.t('pedra'), global_context.i18n.t('papel'), global_context.i18n.t('tesoura')];
                                const resultado = []
                                if (opcoes.includes(jogada)) {
                                    const jogada_ai = opcoes[global_context.getRndInteger(0,2)]
                                    var venceu_ou_empate = false
                                    resultado.push(global_context.i18n.t("sua_jogada")+jogada)
                                    resultado.push(global_context.i18n.t("ai_jogada")+jogada_ai)                                
                                    if (jogada_ai === jogada) {
                                        resultado.push(global_context.i18n.t("Um empate!"))
                                        venceu_ou_empate=true
                                    }
                                    else {
                                        switch (jogada) {
                                            case global_context.i18n.t('pedra'):
                                                if (jogada_ai===global_context.i18n.t('tesoura')) {
                                                    resultado.push(global_context.i18n.t("Você ganhou!"))
                                                    venceu_ou_empate=true
                                                }
                                                break;
        
                                            case global_context.i18n.t('papel'):
                                                if (jogada_ai===global_context.i18n.t('pedra')) {
                                                    resultado.push(global_context.i18n.t("Você ganhou!"))
                                                    venceu_ou_empate=true
                                                }
                                                break;
        
                                            case global_context.i18n.t('tesoura'):
                                                if (jogada_ai===global_context.i18n.t('papel')) {
                                                    resultado.push(global_context.i18n.t("Você ganhou!"))
                                                    venceu_ou_empate=true
                                                }
                                                break;
                                        
                                            default:
                                                break;
                                        }
                                    }
                                    if (!venceu_ou_empate) resultado.push(global_context.i18n.t("Você perdeu!"))
                                    return <div>{global_context.formatScoreResult(resultado)}</div>
                                }
                                return <div><p>{global_context.i18n.t("Opção de jogada inválida!")}</p>{exemplo_do_comando}</div>
                            }
                        },
                    }
                    const local_commands_en ={
                        back: local_commands.voltar,
                        use: local_commands.usar,
                    }
                    finish_commands_config(global_context, local_commands, local_commands_en)                   
                }
            },
            flip_a_coin: {
                'descricao': global_context.i18n.t('Cara ou coroa?'),
                'instrucoes': global_context.i18n.t('Use o comando jogar para jogar uma moeda e ver se dará cara ou coroa'),
                fn: function () {
                    const local_commands = {
                        voltar: {
                            description: global_context.i18n.t('Volta para o menu principal'),
                            usage: global_context.i18n.t('voltar'),
                            fn: function () {
                                global_context.setCommands(global_context.commands_instance.make_menu());
                                return global_context.i18n.t('Voltando ao menu principal!')
                            }
                        },
                        jogar: {
                            description: global_context.i18n.t('Joga uma moeda'),
                            usage: global_context.i18n.t('jogar'),
                            fn: function () {
                                switch (global_context.getRndInteger(0,1)) {
                                    case 0:
                                        return global_context.formatScoreResult([
                                            global_context.i18n.t('A moeda roda no ar por algum tempo e caí no chão, você levanta e vê o resultado'), 
                                            '-',
                                            global_context.i18n.t('resultado_cara')]);
                                    case 1:
                                        const rare_message = global_context.getRndInteger(0,99);
                                        var hidden = '';
                                        if (rare_message > 90) {
                                            hidden = global_context.i18n.t('passa por uma figura desconhecida que não estava ali a 5 minutos atrás, ')
                                        }
                                        return global_context.formatScoreResult([
                                            global_context.i18n.t('A moeda roda no ar por algum tempo, quica no chão e vai parar longe, você corre atrás dela,')+
                                            hidden+
                                            global_context.i18n.t(' e quando chega vê o resultado'), 
                                            '-', 
                                            global_context.i18n.t('resultado_coroa')]);
                                    default:
                                        break;
                                }
                            }
                        },
                    }
                    const local_commands_en ={
                        back: local_commands.voltar,
                        flip: local_commands.jogar,
                    }
                    finish_commands_config(global_context, local_commands, local_commands_en)
                }
            },
            a_aventura: {
                'descricao': global_context.i18n.t('Comece sua aventura'),
                'instrucoes': global_context.i18n.t('Use o comando ajuda a qualquer momento para verificar as opções.'),
                fn: function () {
                    const voltar_option = {
                        description: global_context.i18n.t('Volta para o menu principal'),
                        usage: global_context.i18n.t('voltar'),
                        fn: function () {
                            global_context.setCommands(global_context.commands_instance.make_menu());
                            return global_context.i18n.t('Voltando ao menu principal!')
                        }
                    }
                    const local_commands = {
                        voltar: voltar_option,
                        comecar: {
                            description: global_context.i18n.t('Começar aventura'),
                            usage: global_context.i18n.t('comecar'),
                            fn: function () {
                                const new_menu = {
                                    voltar: voltar_option,
                                    continuar: {
                                        description: global_context.i18n.t('Continuar aventura'),
                                        usage: global_context.i18n.t('continuar'),
                                        fn: function () {
                                            return global_context.i18n.t("aventura_continue_1")
                                        }
                                    }
                                }
                                const new_menu_en ={
                                    back: voltar_option,
                                    continue: new_menu.continuar,
                                }
                                finish_commands_config(global_context, new_menu, new_menu_en)
                                global_context.terminal.state.stdout=[]
                                return global_context.i18n.t('aventura_start')
                            }
                        },
                    }
                    const local_commands_en ={
                        back: local_commands.voltar,
                        start: local_commands.comecar,
                    }
                    finish_commands_config(global_context, local_commands, local_commands_en)
                }
            },
        }
        if (localStorage.getItem('i18nextLng') === 'en') {
            const jogos_en = {
                rock_paper_scissors: jogos.pedra_papel_tesoura,
                flip_a_coin: jogos.flip_a_coin,
                the_adventure: jogos.a_aventura,
            }
            return jogos_en
        }
        return jogos
    }

    
}