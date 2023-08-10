
const veiculos = [];
let id = 0;

alert(`Bem-vindo ao sistema de CRUD de veículos:

No momento, o sistema tem ${veiculos.length} carros cadastrados.

Escolha uma das opções para interagir com o sistema:`);

opcao = Number(prompt(`Digite a opcao desejada
    1: cadastrar Veiculo
    2: listar veiculos
    3: listar por marca
    4: alterar veiculo
    5: deletar veiculo
    6: sair`));

const cadastrarCarro = () => {
    let veiculo = {
        id: id,
        modelo: prompt('Digite o modelo do seu carro'),
        marca: prompt('Digite a marca do seu veículo'),
        ano: prompt('Digite o ano do seu veículo'),
        cor: prompt('Digite a cor do seu veículo'),
        preco: prompt('Digite o preço do seu veículo')
    };
    veiculos.push(veiculo);
    id++;
};

if (opcao === 1) {
    while (opcao !== 6) {

        if (opcao === 1) {
            cadastrarCarro();
            console.log(veiculos)
        } else if (opcao === 2) {
            for (const carro of veiculos) {
                console.log(`Id: ${carro.id} | Modelo: ${carro.modelo} | Marca: ${carro.marca} Ano:  ${carro.ano} | Cor: ${carro.cor} | Preco: R$ ${carro.preco}`);
            }
        } else if (opcao === 3) {
            let marca = prompt('Digite a marca para listar os veículos:');
            const veiculosPorMarca = veiculos.filter((carro) => carro.marca === marca);
            for (const carro of veiculosPorMarca) {
                console.log(`ID: ${carro.id} | Modelo: ${carro.modelo} | Cor: ${carro.cor} | Preço: ${carro.preco}`);
            }
        } else if (opcao === 4) {
            let filtrado = Number(prompt('Digite o indice do seu veiculo'))
            let veiculoFiltrado = veiculos.filter(i => i.id === filtrado)
            if (filtrado === -1) {
                console.log('carro nao encontrado');
            } else {
                const novaCor = prompt('digite uma nova cor')
                veiculos[filtrado].cor = novaCor
                const novoPreco = parseFloat(prompt('digite o novo preco'))
                veiculos[filtrado].preco = novoPreco
            }
        } else if (opcao === 5) {
            let idCarros = parseInt(prompt('digite o id do carro a ser deletado'))
            let posicao = veiculos.findIndex(
                (identificador) => identificador.id === idCarros)
            if (posicao === -1) {
                console.log('veiculo nao encontrado');
            } else {
                veiculos.splice(posicao, 1);
            }
        }

        opcao = Number(prompt(`Digite a opcao desejada
    1: cadastrar Veiculo
    2: listar veiculos
    3: listar por marca
    4: alterar veiculo
    5: deletar veiculo
    6: sair`));
    }
}

console.log(veiculos);

alert(`Bem-vindo ao sistema de CRUD de veículos:
    
    No momento, o sistema tem ${veiculos.length} carros cadastrados.`)