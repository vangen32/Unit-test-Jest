export class User{
    constructor(){
        this.mail = null;
        this.pass = null;
    }

    // Валідація пошти
    _isValidMail(email){
        var re = /\S+@\S+\.\S+/;
        return re.test(email);
    }

    //Валідація пароля
    _isValidPass(pass, repead)
    {
        let isDownSym = false;
        let isUpSym =false;
        let isNumSym = false;
        let isSpecSym = false;

        if(pass.length===repead.length&&pass.length>=8){
            var mas = pass.split("");
            for(let i =0; i < mas.length; i++){
                let a = mas[i];
                if(a >= 'a' && a <= 'z') isDownSym = true;
                else if(a >= 'A' && a <= 'Z') isUpSym = true;
                else if(a >= 0 && a <= 9) isNumSym = true;
                else if(a=="@"||a=="#"||a=="?"||a=="&"||a=="/"||a=="."||a==","||a=="*") isSpecSym = true;
                else return false;
            }
            if(isDownSym&&isUpSym&&isNumSym&&isSpecSym)
            {   
                 return true;
            }
        }
        else return false;
    }

    // загальна валідація даних
    isValidData(email, pass, repead){
        if(this._isValidMail(email)&&this._isValidPass(pass, repead))
        {
            this.mail = email;
            this.pass = pass;
            return true;
        }
        return false;
    }
    getMail(){
        return this.mail;
    }
    getPass(){
        return this.pass;
    }
}