//  SELFWORK OGGETTI 1

let oggetto = {
    'nome' : 'Davide',
    'cognome' : 'Dignazio',
    "eta'" : 30,
    'saluta' : function(){
        console.log(`Ciao a tutti, mi chiamo ${this.nome} ${this.cognome}`);
        
    }

}

oggetto.saluta();