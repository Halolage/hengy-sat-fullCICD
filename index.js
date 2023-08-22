module.exports.handler = async (event) => {

    console.log("[INFO] For monitoring lesson")
    return {
      statusCode: 200,
      body: JSON.stringify(
        {
          message: "Your function executed successfully!",
          access_key: process.env.ACCESS_KEY
        },
        null,
        2
      ),
    };
  };
