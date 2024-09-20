const Review = require("../models/Reviews");

exports.submitReview = async (req, res) => {
  const { hotelName, reviewText, rating, images } = req.body;

  try {
    const newReview = new Review({
      user: req.user.id,
      hotelName,
      reviewText,
      rating,
      images,
    });

    const savedReview = await newReview.save();
    res.json(savedReview);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

exports.getAllReviews = async (req, res) => {
  try {
    const reviews = await Review.find().populate("user", ["name"]);
    res.json(reviews);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

exports.getReviewById = async (req, res) => {
  try {
    const review = await Review.findById(req.params.id).populate("user", [
      "name",
    ]);
    if (!review) {
      return res.status(404).json({ msg: "Review not found" });
    }
    res.json(review);
  } catch (err) {
    console.error(err.message);
    if (err.kind === "ObjectId") {
      return res.status(404).json({ msg: "Review not found" });
    }
    res.status(500).send("Server Error");
  }
};
