module.exports = async () => {

  try {

    process.env.BASE_URL = `http://localhost:3001/api/v1/`;
    console.log('\n 🕵️‍ INTEGRATION TEST RUNNING \n');
  } catch (e) {
    throw new Error(e)
  }
};
