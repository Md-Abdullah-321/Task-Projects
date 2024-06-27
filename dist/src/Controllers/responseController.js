/**
 * Title: Response Controller
 * Description: Handle Response Controller Here
 * Author: Md Abdullah
 * Date: 28/06/2024
 */
export const errorResponse = (res, statusCode, message) => {
    return res.status(statusCode).json({ message });
};
export const successResponse = (res, statusCode, message, payload) => {
    return res.status(statusCode).json({ message, payload });
};
