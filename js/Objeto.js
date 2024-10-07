class Objeto {
    constructor() {

    }

    scripts(op) {
        switch (op) {
            case "A":
                const scripts = [
                    {
                        key: "CONFIRMADO",
                        script: "Dados confirmados com sucesso."

                    },
                    {
                        key: "LIG. ENCERRADA",
                        script: "Ligação encerrada por falta de comunicação."
                    },
                    {
                        key: "DESCE",
                        script: "Contato desce para receber."
                    }
                ]
                return scripts
                break;
            default:
                break;
        }
    }

    async lerTxt(arq,callback,id) {
        try {
            const file = arq.explicitOriginalTarget.files[0]
            var scripts = []
            await fetch(URL.createObjectURL(file))
                .then(resp => resp.text())
                .then(texto => {
                    const matchesChaves = texto.match(/{(.*?)}/g);
                    
                    if (matchesChaves) {
                        const textos = matchesChaves.map(val => val.slice(1, -1).trim())
                        
                        textos.forEach(txt => {
                            
                            if(txt[0] === "[" && txt.length > 1){
                                if(txt[1] !== "]"){
                                    for(let x=2; x<txt.length; x++){
                                        if(txt[x] == ']'){
                                            scripts.push(
                                                {
                                                    key: txt.substr(1,x-1),
                                                    script: txt.slice(x+1).trim()
                                                }
                                            )
                                            
                                            return
                                        }
                                    }
                                }
                                
                            }else{
                                  scripts.push({
                                    key: undefined,
                                    script: txt
                                  })  
                            }

                        })
                    }else {
                        alert("Formato do texto do txt errado, pfv, colocar os seus textos padrão entre chaves.\n EX: {padrão 1} {padrão 2}...")
                    }
                }).finally ( () => {
                    bloco.createScripts(scripts,false)
                })

        } catch (error) {

        }
    }
}