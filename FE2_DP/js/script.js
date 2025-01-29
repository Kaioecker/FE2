    function menu(pagina) {
        $("#conteudo").slideUp(2000, () => {
            $("#conteudo").load("./pages/" + pagina + ".html", () => {
                $("#conteudo").slideDown(1500);
            });
        });
    }