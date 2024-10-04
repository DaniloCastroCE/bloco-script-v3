class Abas {
    constructor (abaContent) {
        const abaContents = document.querySelectorAll(`.${abaContent}`)
        abaContents.forEach((item, index) => {
            const aba = index+1
            item.innerHTML = `
                <h1>Aba ${aba}</h2>
                <p>Conteúdo da aba ${aba}</p>
            `
        })
    }
    open(evt, tabId) {
        // Esconde todos os conteúdos das abas
        var tabContent = document.getElementsByClassName("aba-content");
        for (var i = 0; i < tabContent.length; i++) {
            tabContent[i].classList.remove("active");
        }
    
        // Remove a classe 'active' de todas as abas
        var tabs = document.getElementsByClassName("btnAba");
        for (var i = 0; i < tabs.length; i++) {
            tabs[i].classList.remove("active");
        }
    
        // Mostra o conteúdo da aba clicada e adiciona a classe 'active'
        const aba = document.getElementById(tabId);
        aba.classList.add("active");
        evt.currentTarget.classList.add("active");

    }
}
