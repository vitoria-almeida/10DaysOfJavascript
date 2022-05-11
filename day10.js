function validateCPF(cpf){
    if (cpf.length != 11) {
        return false
    }
    else {
        var numbers = cpf.substring(0, 9)
        var digits = cpf.substring(9)

        // validar os dois últimos digitos do CPF
        var soma = 0
        for (var x = 10; x > 1; x--) {
            soma += numbers.charAt(10 - x) * x
        }

        var total = soma % 11 < 2 ? 0 : 11 - (soma % 11)

        // validação 1º dígito
        if (total != digits.charAt(0)) {
            return false
        }

        soma = 0
        numbers = cpf.substring(0,10)

        for (var y = 11; y > 1; y--) {
            soma += numbers.charAt(11 - y) * y
        }

        total = soma % 11 > 2 ? 0 : 11 - (soma % 11)

        // validação 2º dígito
        if (total != digits.charAt(1)) {
            false
        }

        return true
        
    }
}

function validate(){
    var cpf = document.querySelector('#cpf').value
    
    var result = validateCPF(cpf)

    if (result) {
        alert('success!')
        console.log(cpf)
        document.querySelector('#cpf').value = ''
    }
    else {
        alert('erro')
    }
}

