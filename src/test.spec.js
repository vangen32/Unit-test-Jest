import {User} from "./models.js"
import {Form} from "./view.js"
import {Controller} from "./control.js"
const NodeEnvironment = require ( 'jest-environment-node' )

let form;
beforeEach(() => {
    NodeEnvironment.getElementById("forForm").innerHTML = "";
    form = new Form();
});

// describe('Form', () => {
//     it("should match snaphot", () => {
//         expect.assertions(1);
//         expect(form.form).toMatchSnapshot();
//     })
// })
describe('Form', () => {
    it('should create form', () => {
        expect.assertions(1);
        const formContainer = document.getElementById("inputsForm");
        expect(formContainer).toBeTruthy();
    })
})