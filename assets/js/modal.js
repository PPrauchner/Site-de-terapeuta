function abrirModal(id) {
    document.getElementById(id).style.display = "flex";
}

function fecharModal(id) {
    document.getElementById(id).style.display = "none";
}

window.onclick = function(event) {

    const modalOnline =
        document.getElementById("modal-online");

    const modalCancelamento =
        document.getElementById("modal-cancelamento");

    if (event.target === modalOnline) {
        modalOnline.style.display = "none";
    }

    if (event.target === modalCancelamento) {
        modalCancelamento.style.display = "none";
    }

}