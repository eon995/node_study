import { validationResult, body } from 'express-validator';


export const validate = (req, res, next) => {

    const errors = validationResult(req);
    if (errors.isEmpty()) {
        return next();
    } else {
        res
            .status(400)
            .json({ message: errors.array() })
    }


};

