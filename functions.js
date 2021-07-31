const prodBase = {
    "codProduto": 25754,
    "descricao": "ADAPTADOR BLUETOOH USB RECEPTOR DE AUDIO P2",
    "preco": 5.0,
    "qtdEstoque": 10,
    "disponivel": "sim",
    "emDestaque": "sim",
    "departamento": {
        "idDepto": 1,
        "nomeDepto": "Adaptadores"
    }
}

const listaProdutos = [
    {
        "codProduto": 25754,
        "descricao": "Produto 1",
        "preco": 5.0,
        "qtdEstoque": 10,
        "disponivel": "sim",
        "emDestaque": "sim",
        "departamento": {
            "idDepto": 1,
            "nomeDepto": "Departamento 1"
        }
    },
    {
        "codProduto": 25754,
        "descricao": "Produto 2",
        "preco": 15.0,
        "qtdEstoque": 30,
        "disponivel": "nao",
        "emDestaque": "sim",
        "departamento": {
            "idDepto": 1,
            "nomeDepto": "Departamento 1"
        }
    },
    {
        "codProduto": 25754,
        "descricao": "Produto 3",
        "preco": 7.0,
        "qtdEstoque": 15,
        "disponivel": "sim",
        "emDestaque": "nao",
        "departamento": {
            "idDepto": 1,
            "nomeDepto": "Departamento 1"
        }
    },
    {
        "codProduto": 25754,
        "descricao": "Produto 4",
        "preco": 12.0,
        "qtdEstoque": 25,
        "disponivel": "nao",
        "emDestaque": "nao",
        "departamento": {
            "idDepto": 2,
            "nomeDepto": "Departamento 2"
        }
    },
    {
        "codProduto": 25754,
        "descricao": "Produto 5",
        "preco": 50.0,
        "qtdEstoque": 0,
        "disponivel": "sim",
        "emDestaque": "sim",
        "departamento": {
            "idDepto": 2,
            "nomeDepto": "Departamento 2"
        }
    }
]

// 1. Quantidade total de itens em estoque (somatória das quantidades de todos os produtos)
const quantidadeEstoque = ((lista) => {
    let total = 0
    lista.map(produto => {
        total += produto.qtdEstoque
    })
    console.log(`1. Quantidade total de itens em estoque: ${total}`)
    return total;
})
quantidadeEstoque(listaProdutos)

// 2. Quantidade total de itens em destaque (somatória das quantidades dos itens marcados como "emDestaque : sim")
const quantidadeDestaque = ((lista) => {
    let total = 0
    lista.map(produto => {
        if (produto.emDestaque === "sim"){
            total += produto.qtdEstoque
        }
    })
    console.log(`2. Quantidade total de itens em destaque: ${total}`)
    return total;
})
quantidadeDestaque(listaProdutos)

// 3. Quantidade total de itens disponíveis (similar ao anterior)
const quantidadeDisponível = ((lista) => {
    let total = 0
    lista.map(produto => {
        if (produto.disponivel === "sim"){
            total += produto.qtdEstoque
        }
    })
    console.log(`3. Quantidade total de itens disponíveis: ${total}`)
    return total;
})
quantidadeDisponível(listaProdutos)

// 4. Quantidade de itens disponíveis e em estoque
const quantidadeDisponívelEEmEstoque = ((lista) => {
    let total = 0
    lista.map(produto => {
        if (produto.disponivel === "sim" && produto.qtdEstoque > 0){
            total += produto.qtdEstoque
        }
    })
    console.log(`4. Quantidade de itens disponíveis e em estoque: ${total}`)
    return total;
})
quantidadeDisponívelEEmEstoque(listaProdutos)

// 5. Valor total do inventário da empresa (somatória dos valores individuais multiplicado pela quantidade em estoque - considere apenas os produtos “EM ESTOQUE”)
const valorInventario = ((lista) => {
    let total = 0
    lista.map(produto => {
        total += produto.qtdEstoque * produto.preco
    })
    console.log(`5. Valor total do inventário da empresa: ${total}`)
    return total;
})
let totalValorInventario = valorInventario(listaProdutos)

// 6. Produto mais caro da loja (bem como seu departamento - considere apenas o preço dele)
const produtoMaisCaro = ((lista) => {
    let maxPreco = Number.NEGATIVE_INFINITY
    let prod = null
    lista.map(produto => {
        if (produto.preco > maxPreco){
            maxPreco = produto.preco
            prod = produto
        }
    })
    console.log(`6. Produto mais caro da loja: "${prod.descricao}" do Departamento ${prod.departamento.nomeDepto}`)
    return prod;
})
produtoMaisCaro(listaProdutos)

// 7. Produto mais barato da loja (bem como seu departamento - considere apenas o preço dele)
const produtoMaisBarato = ((lista) => {
    let minPreco = Number.POSITIVE_INFINITY
    let prod = null
    lista.map(produto => {
        if (produto.preco < minPreco){
            minPreco = produto.preco
            prod = produto
        }
    })
    console.log(`7. Produto mais barato da loja: "${prod.descricao}" do Departamento ${prod.departamento.nomeDepto}`)
    return prod;
})
produtoMaisBarato(listaProdutos)

// 8. Produto de estoque mais valioso (considere o preço multiplicado pela quantidade e também apenas EM ESTOQUE)
const produtoMaisValioso = ((lista) => {
    let maxValor = Number.NEGATIVE_INFINITY
    let prod = null
    lista.map(produto => {
        if (produto.qtdEstoque > 0 && (produto.preco * produto.qtdEstoque) > maxValor){
            maxValor = (produto.preco * produto.qtdEstoque)
            prod = produto
        }
    })
    console.log(`8. Produto de estoque mais valioso: "${prod.descricao}" do Departamento ${prod.departamento.nomeDepto}`)
    return prod;
})
produtoMaisValioso(listaProdutos)

// 9. Produto em estoque menos valioso (considere o preço multiplicado pela quantidade e também apenas EM ESTOQUE)
const produtoMenosValioso = ((lista) => {
    let minValor = Number.POSITIVE_INFINITY
    let prod = null
    lista.map(produto => {
        if (produto.qtdEstoque > 0 && (produto.preco * produto.qtdEstoque) < minValor){
            minValor = (produto.preco * produto.qtdEstoque)
            prod = produto
        }
    })
    console.log(`9. Produto em estoque menos valioso: "${prod.descricao}" do Departamento ${prod.departamento.nomeDepto}`)
    return prod;
})
produtoMenosValioso(listaProdutos)

// 10. Valor do ticket médio dos produtos da empresa (basicamente o valor total do inventário dividido pelo número de itens - considere TODOS os produtos, porém considere apenas 1 exemplar por produto)
const ticketMedio = ((lista) => {
    let ticket = 0
    ticket = totalValorInventario/lista.length
    console.log(`10. Valor do ticket médio dos produtos da empresa: ${ticket}`)
    return ticket;
})
ticketMedio(listaProdutos)

// 11. Somatória de itens por departamento (você deverá retornar um objeto contendo o nome do departamento e o total de itens nele - Novamente considere os produtos “EM ESTOQUE” - e é apenas a somatória da quantidade de itens)
const itensPorDepartamento = ((lista) => {
    let departamentos = {}
    lista.map(produto => {
        let dpto = produto.departamento.nomeDepto
        if (!Object.keys(departamentos).includes(dpto)){
            departamentos = {... departamentos, [dpto]:produto.qtdEstoque}
        } else {
            departamentos[dpto] += produto.qtdEstoque
        }
    })
    console.log("11. Somatória de itens por departamento: " + JSON.stringify(departamentos))
    return departamentos;
})
itensPorDepartamento(listaProdutos)

// 12. Valor total do inventário por departamento (similar ao item anterior - considere TODOS os produtos)
const inventarioPorDepartamento = ((lista) => {
    let departamentos = {}
    lista.map(produto => {
        let dpto = produto.departamento.nomeDepto
        if (!Object.keys(departamentos).includes(dpto)){
            departamentos = {... departamentos, [dpto]:(produto.preco * produto.qtdEstoque)}
        } else {
            departamentos[dpto] += (produto.preco * produto.qtdEstoque)
        }
    })
    console.log("12. Valor total do inventário por departamento: " + JSON.stringify(departamentos))
    return departamentos;
})
let invPorDepartamento = inventarioPorDepartamento(listaProdutos)

// 13. Ticket médio por departamento (similar ao item anterior, porém retornando uma lista de objetos que contenha o nome do departamento e o seu ticket médio)
const ticketMedioPorDepartamento = ((lista) => {
    let departamentos = {}
    Object.keys(invPorDepartamento).map((dpto) => {
        let quant = 0
        lista.map(produto => {
            if (produto.departamento.nomeDepto === dpto){
                quant ++
            }
        })
        departamentos = {... departamentos, [dpto]: (invPorDepartamento[dpto]/quant)}
    })
    console.log("13. Ticket médio por departamento: " + JSON.stringify(departamentos))
    return departamentos
})
ticketMedioPorDepartamento(listaProdutos)

// 14. Departamento mais valioso (qual o departamento que tem a maior somatória dos valores dos itens - Considere todos os departamentos)
const departamentoMaisValioso = ((lista) => {
    let departamento = null
    let maxValor = Number.NEGATIVE_INFINITY
    Object.keys(invPorDepartamento).map((dpto) => {
        if (invPorDepartamento[dpto] > maxValor){
            maxValor = invPorDepartamento[dpto]
            departamento = dpto
        }
    })
    console.log(`14. Departamento mais valioso: ${departamento}`)
    return departamento
})
departamentoMaisValioso(listaProdutos)

// 15. Departamento menos valioso (similar ao anterior)
const departamentoMenosValioso = ((lista) => {
    let departamento = null
    let minValor = Number.POSITIVE_INFINITY
    Object.keys(invPorDepartamento).map((dpto) => {
        if (invPorDepartamento[dpto] < minValor){
            minValor = invPorDepartamento[dpto]
            departamento = dpto
        }
    })
    console.log(`15. Departamento menos valioso: ${departamento}`)
    return departamento
})
departamentoMenosValioso(listaProdutos)