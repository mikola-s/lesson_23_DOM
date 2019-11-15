// 3.03. 5 ссылок как и в задаче 2.
// Только после трех кликов на ссылку следует убрать от нее событие,
// которое добавляет href в конец текста как в предыдушей задачи


$('a').attr("cliCount", 0)

$('a').bind('click', function () {
    let cliCount = Number($(this).attr("cliCount"))
    if (cliCount < 3) {
        this.append($(this).attr("href"))
        $(this).attr("cliCount", cliCount + 1)
        console.log(cliCount + 1)
    } else {
        $(this).unbind("click")
        $(this).removeAttr("cliCount")
    }
})