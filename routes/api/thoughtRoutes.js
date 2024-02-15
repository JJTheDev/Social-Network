const router = require("express").Router();
const {
  getThoughts,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
  addThoughtReaction,
  removeThoughtReaction,
} = require("../../controllers/thoughtController");

// /api/thought
router.route("/").get(getThoughts).post(createThought);

// /api/videos/:videoId
router
  .route("/:thoughtId")
  .get(getSingleThought)
  .put(updateThought)
  .delete(deleteThought);

// /api/videos/:THoughtId/responses
router.route("/:ThoughtId/reactions").post(addThoughtReaction);

// /api/videos/:ThoughtId/responses/:responseId
router.route("/:thoughtId/reactions/:reactionId").delete(removeThoughtReaction);

module.exports = router;
