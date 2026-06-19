//Ana Beatriz Pereira Silva N2
//Alicia da Silva N1

const { body, validationResult } = require("express-validator");
router.post "/html", //Obrigatório mínimo 3 caracteres function (req, res)) {
 res.json(req.body) 

router.get("/", function (req, res)) {
    res.render("pages/index", {"erros": null, "valores": {"nome" "email" "cpf": ""} , "retorno":null });

}
router.post(
    "/index",
    body("nome").isLength({min: 3, max: 30})
    .withMessage("Nome deve ter de 3 a 30 caracteres! ")
    body ("email") .isEmail (),
    body ("cpf") .isLength({min: 11, max: 14})

    


)