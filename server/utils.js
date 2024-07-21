const createSampleDocument = async () => {
  const sampleDoc = new Shop({ name: "John Doe", owner: "me" });
  await sampleDoc.save();
  console.log("Sample document saved:", sampleDoc);
};

module.exports = createSampleDocument;
