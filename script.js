function execRequisicaoAJAX() {
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {

        if (xhr.readyState == 4 && xhr.status == 200){

            let result = JSON.parse(xhr.responseText);
            let itens = result.data.memes;
            itens = itens.sort(function() { return 0.5 - Math.random();});
            let htmlToAppend = "";
            itens.forEach(function(item){
                let tr = "<tr class='table__row'>";
                tr += "<td class='table__content'><img width='120px' src='"+item.url+"'alt='"+item.name+"'></td>";
                tr += "<td class='table__content'> "+item.name+"</td>";
                tr += "<td class='table__content'><a target='_blank' href='"+item.url+"'>"+item.url+"</a></td>";
                tr += "<td class='table__content'> "+item.width+"</td>";
                tr += "<td class='table__content'> "+item.height+"</td>";
                tr += "</tr>";

                htmlToAppend += tr;
            });
            var tbodyConteudo = document.getElementById("conteudo");
            tbodyConteudo.innerHTML = htmlToAppend;
        }
    }
    xhr.open("GET", "https://api.imgflip.com/get_memes",true);
    xhr.send();
}