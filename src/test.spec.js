import {User} from "./models.js"
import {Form} from "./view.js"
import {Controller} from "./control.js"
const NodeEnvironment = require ( 'jest-environment-node' )

let form;
beforeEach(() => {
    document.body.innerHTML = "";
    form = new Form();
    document.body.append(form.form);
});
describe('Form', () => {
    it('should render form', () => {
        expect.assertions(1);
        const formContainer = document.getElementById("inputsForm");
        expect(formContainer).toBeTruthy();
    })
    it('should render mailInput', () => {
        expect.assertions(1);
        const mailInput = document.getElementById("inputMail");
        expect(mailInput).toBeTruthy();
    })
    it('should render passInput', () => {
        expect.assertions(1);
        const passInput = document.getElementById("inputPass");
        expect(passInput).toBeTruthy();
    })
    it('should render passRepeadInput', () => {
        expect.assertions(1);
        const passRepeadInput = document.getElementById("inputPassRepead");
        expect(passRepeadInput).toBeTruthy();
    })
    it('should render disabled buttonInput', () => {
        expect.assertions(2);
        const buttonInput = document.getElementById("inputBut");
        expect(buttonInput).toBeTruthy();
        expect(buttonInput.disabled).toBeTruthy();
    })

    it('should enabled buttonInput', () => {
        expect.assertions(1);
        let user = new User()
        const mockCallback = jest.fn(x => user.isValidData("wanzinhn@gmail.com", "Aa1#Aa1#", "Aa1#Aa1#"));
        form.isValid(mockCallback);
        let but = document.getElementById("inputBut");
        expect(but.disabled).toBeFalsy();
    });

    it('should not enabled buttonInput', () => {
        expect.assertions(1);
        let user = new User()
        const mockCallback = jest.fn(x => user.isValidData("wanzinhngmail.com", "Aa1#Aa1#", "Aa1#Aa1#"));
        form.isValid(mockCallback);
        let but = document.getElementById("inputBut");
        expect(but.disabled).toBeTruthy();
    });

    it('should not validate inputs value', () => {
        expect.assertions(1);
        const Spy = jest
        .spyOn(Form.prototype, "isValid")
        .mockImplementation(() => {
            //console.log("Create new account");
            // От в цьому місці, я просто не знаю що робити
            return true;
        });
        let but = document.getElementById("inputBut");
        but.disabled = false;
        but.click();
        expect(form.checkValid(Spy)).toBeCalled();
    });

    // it('should not validate inputs value', () => {
    //     expect.assertions(1);
    //     let user = new User()
    //     const mockCallback1 = jest.fn(x => user.isValidData("wanzinhngmail.com", "Aa1#Aa1#", "Aa1#Aa1#"));
    //     const mockCallback2 = jest.fn(x => {
    //         form.isValid(mockCallback1)
    //     });
    //     form.checkValid(mockCallback2);
    //     let but = document.getElementById("inputBut");
    //     expect(but.disabled).toBeFalsy();
    // });

})




describe('Model user', () => {
    it('should perform mail verification', () => {
        expect.assertions(1)
        var user = new User();
        var mail = "wanzikhn@gmail.com";
        expect(user._isValidMail(mail)).toBeTruthy();
    });
    it('should not perform mail verification', () => {
        expect.assertions(3)
        var user = new User();
        var mail = ["wanzikhngmail.com", "wanzikhn@gmailcom","wanzikhngmailcom"];
        mail.forEach(element => {
            var isValid = user._isValidMail(element);
            expect(isValid).toBeFalsy();
        });
    });

    it('should perform pass verification', () => {
        expect.assertions(1)
        var user = new User();
        var pass = "A1a#A1a#"
        var passRepead = pass;
        expect(user._isValidPass(pass, passRepead)).toBeTruthy();
    });

    it('should not perform pass verification', () => {
        expect.assertions(6)
        let user = new User();
        let pass = ["1a#A1a#", "a1a#a1a#", "A1A#A1A#", "Aaa#Aaa#", "A1aaA1aa"];
        expect(user._isValidPass(pass[2],pass[3])).toBeFalsy();

        pass.forEach(el => {
            let Valid = user._isValidPass(el, el);
            expect(Valid).toBeFalsy();
        })
    });

    it('should perform pass and mail verification and set user field', () => {
        expect.assertions(3);
        let user = new User();
        let mail = "wanzikhn@gmail.com";
        let pass = "A1a#A1a#"
        let isValid = user.isValidData(mail, pass, pass);
        expect(isValid).toBeTruthy();
        expect(user.getMail()).toBe(mail);
        expect(user.getPass()).toBe(pass);
    });

    it('should not perform pass and mail verification', () => {
        expect.assertions(1);
        let user = new User();
        let mail = "wanzikhn@gmailcom";
        let pass = "A1a#A1a#"
        let isValid = user.isValidData(mail, pass, pass);
        expect(isValid).toBeFalsy();
    });


});