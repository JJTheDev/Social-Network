const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  removeFriend,
} = require('../../controllers/userController');

// /api/users
router.route('/').get(getUsers).post(createUser);

// router
//   .route("/:thoughtId")
//   .get(getSingleUser)
//   .put(updateUser)
//   .delete(removeFriend);

// /api/users/:userId
router.route('/:userId').get(getSingleUser);

router.route('/:userId').put(updateUser).delete(deleteUser);

router.route('/:userId/friends/:friendId').post(addFriend).delete(removeFriend);


module.exports = router;
