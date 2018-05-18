const pizzaTemplate = Twig.twig({
    href: "shared/renderPizza.twig",async:false
});

const subtitleTemplate = Twig.twig({
    href: "shared/renderSubtitle.twig", async:false
});

function mostrarPizzas(pizzas) {
    let index;

    $.each(pizzas, function(tipo, pizzasPorTipo) {
        agregarSubTitulo(tipo);
        $.each(pizzasPorTipo, function(index, pizza) {
            let id = getId(pizza);
            agregarPizza(id, pizza);
            if (enPedido(id)) {
                actualizarEstado(id, true);
            }
        });
    });
}

function agregarSubTitulo(subtitulo) {
    $("#tabla").append($(subtitleTemplate.render({"subtitle":subtitulo})));
}

function agregarPizza(id, pizza) {
    var row = $(pizzaTemplate.render({"pizza": pizza})).attr("id", id);
    row.click(onActualizarPedido);
    $("#tabla").append(row);
}

function actualizarTotal(total) {
    $("#total").text(total+".00");
}

function actualizarEstado(id, valor) {
    $('#'+id).prop("class", valor ? "selected" : "").find('input').prop('checked', valor);
}
