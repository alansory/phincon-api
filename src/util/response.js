const successResponse = (res, result, statusCode = 200, message = "OK") => {
  const response = {};

  if (result?.data !== null) {
    response.data = result.data;
  }

  if (result?.pagination !== null) {
    response.pagination = result.pagination;
  }

  response.status_code = statusCode;
  response.message = message;

  res.status(statusCode).json(response);
};

const errorResponse = (res, statusCode, message) => {
  res.status(statusCode).json({
    status_code: statusCode,
    message,
  });
};

export default {
  successResponse,
  errorResponse
};
