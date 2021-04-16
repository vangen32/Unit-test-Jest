export class Controller{
    constructor(view, user){
        this.view = view;
        this.user = user
        this.view.checkValid(this.onInputValueChange);
        this.view.disabledBut(this.getUserMail, this.getUserPass);
    }
    // Перевірка валідності даних при змінні значення будь якого інпута
    onInputValueChange = (param1, param2, param3) =>{
        let a = this.user.isValidData(param1, param2, param3);
        return a;
    }
    getUserMail = () => {
        let a = this.user.getMail();
        return a
    }
    getUserPass = () => { 
        let a = this.user.getPass();
        return a
    }
}