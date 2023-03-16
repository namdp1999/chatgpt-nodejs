const moduleFetch = require("../modules/moduleFetch");

module.exports = {
  postChat: async (req, res, next) => {
    try {
      const url = "https://api.voicegpt.us/v1/histories/user-get-chatGPT";
      let data = req.body;
      const result = await moduleFetch.methodPost(url, data, next);
      return res.status(200).json({
          code: 200,
          data : result,
      })
    } catch (error) {}
  },
};
