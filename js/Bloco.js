class Bloco {
    constructor (idBlocos) {
        this.scripts = []
        this.idBlocos = idBlocos
    }

    createScripts (arrayScripts, clear) {
        document.querySelector(`#${this.idBlocos}`).innerHTML = ''
        
        if(clear){
            this.scripts = []
        }
        
        if(!this.scripts){
            this.scripts = arrayScripts
        }else {
            arrayScripts.forEach(item => {
                this.scripts.push(item)
            })
        }

        console.log(this.scripts)

        this.scripts.forEach((el, index) => {
            const compl_id = (index >= 0 && index < 10) ? "0"+index : index
            var texto = (el.key !== undefined) ? `[${el.key}] ` : ''
            texto += (el.script != undefined) ? el.script : ""

            document.querySelector(`#${this.idBlocos}`).innerHTML += `
                <div class='boxInputsBts' id='box-btn-inp-script${compl_id}'>
                    <button 
                        id='${compl_id}btn-script'
                        type='button'
                        onclick='bloco.click_btn_script(this)'
                    >COPIAR</button>
                    <textarea 
                        id='${compl_id}textarea-script' 
                        placeholder='Digite o seu texto padrão' 
                        onchange='bloco.onchange_textarea_script(this)'
                    >${texto}</textarea>
                </div>
            `
        });
    }

    click_btn_script(obj) {
        const numId = obj.id.substr(0,2)
        const textArea = document.getElementById(`${numId}textarea-script`)
        const scripts = this.scripts[parseInt(numId)] 
        console.log(this.scripts[parseInt(numId)])

        navigator.clipboard.writeText(scripts.script)
                .then(() => {
                    textArea.select()
                    //textArea.setSelectionRange(0,0)
                })
                .catch(err => {
                    console.error('Erro ao copiar o texto: ', err);
                });

    }

    onchange_textarea_script (obj) {
        obj.value = obj.value.trim()
        var id = parseInt(obj.id.substr(0,2))
        this.scripts[id].script = obj.value.trim()
        this.scripts[id] = this.check_script(obj.value)
        obj.value = (this.scripts[id].key !== undefined) ? `[${this.scripts[id].key}] ${this.scripts[id].script}` : this.scripts[id].script
    }

    check_script(txt) {
        var key
        var script = txt
        if(txt[0] === '['){
            if(txt[1] !== ']'){
                for(let x=0;x<txt.length;x++){
                    if(txt[x] === ']' && x < txt.length-1){
                        key = txt.substr(1,x-1).trim()
                        script = txt.slice(x+1).trim()
                        return {key,script}
                    }
                }
            }
        }
        return {key,script}
    }

}