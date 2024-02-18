let contador = 0
let input = document.getElementById('inputTarefa');
let btnAdd = document.getElementById('btnAdd');
let main = document.getElementById('areaLista');

function addTarefa() {
    // Pegar o valor Digitado no Input
    let valorInput = input.value

    //Se não for vazio, nem nulo, nem indefinido
    if ((valorInput !== "") && (valorInput !== null) && (valorInput !== undefined)) {

        ++contador;

        let novoItem = `<div id="${contador}" class="item">
        <div onclick="marcarTarefa(${contador})" class="item-icone">
            <i id="icone_${contador}" class="fa-regular fa-circle"></i>
        </div>
        <div onclick="marcarTarefa(${contador})" class="item-nome">
            ${valorInput}
        </div>
        <div onclick="marcarTarefa(${contador})" class="item-botao">
            <button onclick="deletar(${contador})" class="delete"><i class="fas fa-trash-alt"></i> Deletar</button>
        </div>
    </div>`;

        // Adicionar novo item no main
        main.innerHTML += novoItem

        // Zerar o PlaceHold
        input.value = ""
        input.focus();

    }
}

function deletar(id) {
    var tarefa = document.getElementById(id);
    tarefa.remove();
}


function marcarTarefa(id) {
    var item = document.getElementById(id);

    // Verificar se a classe "clicado" está presente
    var isClicado = item.classList.contains("Clicado");

    if (!isClicado) {
        // Se não estiver clicado, adicione a classe "clicado"
        item.classList.add("Clicado");

        // Altere o ícone
        var icone = document.getElementById("icone_" + id);
        icone.classList.remove("fa-circle");
        icone.classList.add("fa-circle-check");
    } else {
        // Se estiver clicado, remova a classe "Clicado"
        item.classList.remove("Clicado");

        // Altere o ícone
        var icone = document.getElementById("icone_" + id);
        icone.classList.remove("fa-circle-check");
        icone.classList.add("fa-circle");
    }
}


input.addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        btnAdd.click();
    }
})