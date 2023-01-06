import express from "express";

const router = express.Router();

router.get("/user", (req, res, next) => {
  res.json({
    user: {
      name: "Pankaj Yadav",
      village: "Mandola",
      pin: "123103",
    },
    success: true,
  });
});

export default router;
