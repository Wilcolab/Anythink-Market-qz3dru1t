// Hey GitHub Copilot, this is the comments API route file.
const router = require("express").Router();
const mongoose = require("mongoose");
const Comment = mongoose.model("Comment");

/**
 * Express router for handling comment API endpoints
 * @type {Express.Router}
 */

/**
 * Retrieves all comments from the database
 * @route GET /
 * @returns {Object[]} Array of comment objects
 * @throws {Error} 500 - Failed to fetch comments
 */
router.get("/", async (req, res) => {
  try {
    const comments = await Comment.find();
    res.json(comments);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch comments" });
  }
});

/**
 * Creates a new comment in the database
 * @route POST /
 * @param {Object} req.body - Comment data
 * @returns {Object} The newly created comment object with generated ID
 * @throws {Error} 400 - Failed to create comment
 */
router.post("/", async (req, res) => {
  try {
    const newComment = new Comment(req.body);
    const savedComment = await newComment.save();
    res.status(201).json(savedComment);
  } catch (err) {
    res.status(400).json({ error: "Failed to create comment" });
  }
});

// add another route for deleting a comment
/**
 * Deletes a comment by ID from the database
 * @route DELETE /:id
 * @param {string} req.params.id - The comment ID to delete
 * @returns {Object} Success message indicating comment was deleted
 * @throws {Error} 404 - Comment not found
 * @throws {Error} 500 - Failed to delete comment
 */
router.delete("/:id", async (req, res) => {
  try {
    const deletedComment = await Comment.findByIdAndDelete(req.params.id);
    if (!deletedComment) {
      return res.status(404).json({ error: "Comment not found" });
    }
    res.json({ message: "Comment deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: "Failed to delete comment" });
  }
});

module.exports = router;
