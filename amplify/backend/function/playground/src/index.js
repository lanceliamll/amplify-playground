/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
exports.handler = async (event) => {
  console.log({ event });
  const { num1, num2 } = event.arguments;
  return num1 + num2;
};
