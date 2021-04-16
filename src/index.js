import * as View from "./view.js"
import * as Model from "./models.js"
import * as Control from "./control.js"

var view = new View.Form();
var model = new Model.User();
var control = new Control.Controller(view, model);