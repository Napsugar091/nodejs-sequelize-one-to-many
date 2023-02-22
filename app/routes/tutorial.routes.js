module.exports = app => {
    const tutorials = require("../controllers/tutorial.controller.js");
    var router = require("express").Router();
    router.post("/tutorials", tutroials.createTutorial);
    router.get("/tutorials", tutorials.findAll);
    router.get("/comments:id", tutorials.findTutorialById);
    router.post("/comments", tutorials.createComment);
    router.get("/comments/:id", tutorials.findCommentlById);

    app.use('/api',router);
};