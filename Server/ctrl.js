const express = require("express");
const worksLogic = require("./bll");
const router = express.Router();

// GET <http://localhost:3000/api/works>
router.get("/works", async (request, response) => {
  try {
    const works = await worksLogic.getAllWorksAsync();
    response.json(works);
  } catch (err) {
    response.status(500).send(err.message);
  }
});

// GET <http://localhost:3000/api/works/1>
router.get("/works/:id", async (request, response) => {
    const id = +request.params.id
    try {
      const work = await worksLogic.getOneWorkAsync(id);
      response.json(work);
    } catch (err) {
      response.status(500).send(err.message);
    }
  });

  // POST <http://localhost:3000/api/works>
router.post("/works", async (request, response) => {
    const body = request.body
    try {
      const work = await worksLogic.addOneWorkAsync(body);
      response.json(work);
    } catch (err) {
      response.status(500).send(err.message);
    }
  });
  
  // DELETE <http://localhost:3000/api/works/1>
  router.delete("/works/:id", async (request, response) => {
      const id = +request.params.id;
      try {
      const work = await worksLogic.deleteOneWorkAsync(id);
      response.json(work);
    } catch (err) {
      response.status(200);
    }
  });

    // update <http://localhost:3000/api/works/:id>
// router.patch("/works/:id", async (request, response) => {
//     const id = +request.params.id;
//     const body = request.body;
//     try {
//       const work = await worksLogic.updateOneWorkAsync(id, body);
//       response.json(work);
//     } catch (err) {
//       response.status(500).send(err.message);
//     }
//   });

module.exports = router;
