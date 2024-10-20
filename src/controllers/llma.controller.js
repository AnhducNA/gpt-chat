const { LlamaParseReader, VectorStoreIndex } = require("llamaindex");

async function chatCloud(req, res) {
  // Split text and create embeddings. Store them in a VectorStoreIndex
  const index = await VectorStoreIndex.fromDocuments(documents);

  // Query the index
  const queryEngine = index.asQueryEngine();
  const { response, sourceNodes } = await queryEngine.query({
    query: "What can you do in the Bay of Fundy?",
  });

  // Output response with sources
  console.log(response);
  return res.json({ message: "Hello World!" });
}

module.exports = { chatCloud };
