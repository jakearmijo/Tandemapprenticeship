const { Question } = require("../db");

const router = require("express").Router();

// GET /api/questions
router.get("/", async (req, res, next) => {
  try {
    const questions = await Question.findAll();
    res.status(200).json(questions);
  } catch (error) {
    next(error);
  }
});

// GET /api/questions/:questionId
router.get("/:questionId", async (req, res, next) => {
  try {
    const question = await Question.findByPk(req.params.questionId);
    res.json(question);
  } catch (error) {
    next(error);
  }
});

// POST /api/questions/

router.post("/", async (req, res, next) => {
  try {
    const question = await Question.create(req.body);
    res.json(question);
  } catch (err) {
    next(err);
  }
});

// DELETE /api/questions/:questionId

router.delete("/:questionId", async (req, res, next) => {
  try {
    const question = await Question.findByPk(req.params.questionId);
    if (!question) return res.sendStatus(404);
    await question.destroy();
    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
});

// PUT /api/questions/:questionId

router.put("/:questionId", async (req, res, next) => {
  try {
    const question = await Question.findByPk(req.params.questionId);
    if (!question) return res.sendStatus(404);
    const updatedQuestion = await question.update(req.body);
    res.status(200).json(updatedQuestion);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
