function jogo() {
    var palavras = ['PEDRA', 'PAPEL', 'TESOURA']
    var escolha = Math.floor(Math.random() * palavras.length);
    var maquina = palavras[escolha]

    var usuario = prompt('PEDRA, PAPEL ou TESOURA?')
    var pedra = 'PEDRA'
    var papel = 'PAPEL'
    var tesoura = 'TESOURA'

    if(usuario === pedra && maquina === pedra) {
        alert(`Usuário escolheu ${pedra} e máquina escolheu ${pedra} = EMPATE`)
        if(confirm("deseja jogar novamente?") == true) {
            jogo()
        } else {}
    }
    else if(usuario === pedra && maquina === papel) {
        alert(`Usuário escolheu ${pedra} e máquina escolheu ${papel} = MÁQUINA VENCEU!`)
        if(confirm("deseja jogar novamente?") == true) {
            jogo()
        } else {}
    } 
    else if(usuario === pedra && maquina === tesoura) {
        alert(`Usuário escolheu ${pedra} e máquina escolheu ${tesoura} = USUÁRIO VENCEU!`)
        if(confirm("deseja jogar novamente?") == true) {
            jogo()
        } else {}
    }
    else if(usuario === papel && maquina === papel) {
        alert(`Usuário escolheu ${papel} e máquina escolheu ${papel} = EMPATE!`)
        if(confirm("deseja jogar novamente?") == true) {
            jogo()
        } else {}
    }
    else if(usuario === papel && maquina === tesoura) {
        alert(`Usuário escolheu ${papel} e máquina escolheu ${tesoura} = MÁQUINA VENCEU!`)
        if(confirm("deseja jogar novamente?") == true) {
            jogo()
        } else {}
    }
    else if(usuario === papel && maquina === pedra) {
        alert(`Usuário escolheu ${papel} e máquina escolheu ${pedra} = USUÁRIO VENCEU!`)
        if(confirm("deseja jogar novamente?") == true) {
            jogo()
        } else {}
    }
    else if(usuario === tesoura && maquina === tesoura) {
        alert(`Usuário escolheu ${tesoura} e máquina escolheu ${tesoura} = EMPATE!`)
        if(confirm("deseja jogar novamente?") == true) {
            jogo()
        } else {}
    }
    else if(usuario === tesoura && maquina === papel) {
        alert(`Usuário escolheu ${tesoura} e máquina escolheu ${papel} = USUÁRIO VENCEU!`)
        if(confirm("deseja jogar novamente?") == true) {
            jogo()
        } else {}
    }
    else if(usuario === tesoura && maquina === pedra) {
        alert(`Usuário escolheu ${tesoura} e máquina escolheu ${pedra} = MÁQUINA VENCEU!`)
        if(confirm("deseja jogar novamente?") == true) {
            jogo()
        } else {}
    }
    else {
        alert('Opção inválida. Digite "PEDRA", "PAPEL" ou "TESOURA", com letras maiúsculas.')
        jogo()
    }
}

jogo()


