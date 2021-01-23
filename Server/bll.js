const dal = require("./dal");

async function getAllWorksAsync() {
  const sql = "SELECT * FROM `works`";
  const works = await dal.executeAsync(sql);
  return works;
}

async function getOneWorkAsync(id) {
    const sql = `SELECT * FROM works WHERE workID = ${id}`;
    const works = await dal.executeAsync(sql);
    return works;
  }

  async function addOneWorkAsync(body) {
    const sql = `INSERT INTO works (workCategory, workName, workDescription, workDate, workThumb, workImage) VALUES 
    ('${body.workCategory}', '${body.workName}', '${body.workDescription}', '${body.workDate}', '${body.workThumb}', '${body.workImage}');`;
    const works = await dal.executeAsync(sql);
    return works;
  }
  
  async function deleteOneWorkAsync(id) {
    const sql = `DELETE FROM works WHERE workID = ${id}`;
    const works = await dal.executeAsync(sql);
    return works;
  }

//   // ER_DUP_ENTRY: Duplicate entry '2' for key 'PRIMARY'
//   async function updateOneWorkAsync(id, body) {
//     //   console.log('id, body', id, body)
//     const sql = `UPDATE works SET workID=${id}, workCategory='${body.workCategory}',workName='${body.workName}',workDescription='${body.workDescription}',workDate='${body.workDate}',workThumb='${body.workThumb}',workImage='${body.workImage}' WHERE 1`;
//     const works = await dal.executeAsync(sql);
//     return works;
//   }
  

module.exports = { getAllWorksAsync, getOneWorkAsync, addOneWorkAsync, deleteOneWorkAsync };
