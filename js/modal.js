class Modal {
    constructor (idModal,idTitulo,idCloseModal,idContentModal) {
        this.idModal = idModal
        this.idTitulo = idTitulo
        this.idCloseModal = idCloseModal
        this.idModalContent = idContentModal
        this.init = false
    }

    openModal (obj) {
        document.querySelector(`#${this.idModal}`).style.display = 'flex'
        switch (obj.op) {
            case 'config':
                document.querySelector(`#${this.idTitulo}`).innerHTML = obj.titulo.toUpperCase()
                document.querySelector(`#${this.idModalContent}`).style.display = 'block'
                break;
            default:
                break;
        }
    }

    closeModal () {
        this.init = true
        document.querySelector(`#${this.idModal}`).style.display = 'none'
        document.querySelector(`#${this.idModalContent}`).style.display = 'none'
    }

    onclickBody (e) {
        if(e.target.id === this.idModal && this.init) {
            this.closeModal()
        }
    }
    inicio (op) {
        if(op === 'sem-login'){
            this.init = true
            document.querySelector('#closeModal').style.display = 'block'
            this.closeModal()
        }else {
            alert('Codigo em construção, escolha a opção sem login')
        }
    }
}