export class Form{
    constructor(){
        this.form = document.createElement("form");
        this.form.id = "inputsForm";

        this.inputMail = document.createElement("input");
        this.inputMail.type = "text";
        this.inputMail.id = "inputMail";

        this.inputPass = document.createElement("input");
        this.inputPass.type = "password";
        this.inputPass.id = "inputPass"

        this.inputPassRepead = document.createElement("input");
        this.inputPassRepead.type = "password";
        this.inputPassRepead.id = "inputPassRepead";

        this.inputBut = document.createElement("input");
        this.inputBut.type = "button";
        this.inputBut.value = "Submit";
        this.inputBut.id = "inputBut";
        this.inputBut.disabled = "disabled";

        this.form.append(this.inputMail, this.inputPass, this.inputPassRepead, this.inputBut);
        let fd = document.getElementById("forForm");
        fd.append(this.form);
    }

    // Перевірка умов для розблокування кнопки
    isValid(callback){
        if(callback(this.inputMail.value, this.inputPass.value, this.inputPassRepead.value)){
            this.inputBut.removeAttribute("disabled");
        }
        else{
            try{
                this.inputBut.disabled = "disabled";
            }
            catch{}
        }
    }

    // перевірка валідності значення всіх інпутів при змінні їх значення
    checkValid(callback){
        this.inputMail.addEventListener("input", () => {
            this.isValid(callback);
        });
        this.inputPass.addEventListener("input", () => {
            this.isValid(callback);
        });
        this.inputPassRepead.addEventListener("input", () => {
            this.isValid(callback);
        });
    }

    // Блокування кнопки
    disabledBut(callback1, callback2){
        this.inputBut.addEventListener("click", ()=>{
            this.inputBut.disabled = "disabled";
            this.inputMail.value = null;
            this.inputPass.value = null;
            this.inputPassRepead.value = null;
            let email = callback1();
            let pass = callback2();
            alert(`Mail ${email}\nPass ${pass}`);
        })
    }

    
}