/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
const axios = require("axios");
exports.handler = async (event) => {
  console.log({ event });
  switch (event) {
    case "read":
      return axios.get("https://jsonplaceholder.typicode.com/users");
    case "addition":
      const { num1, num2 } = event.arguments;
      return num1 + num2;
  }
};
