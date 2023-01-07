const UserModel = require('../model/login_model');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const seckretKey = process.env.SECRET_KEY;

const login = async (req, res) => {
    try {
        const { phone_number, password } = req.body;

        if (!(phone_number && password)) {
            res.status(400).send({
                "status": false,
                "message": "All inputs are required"
            });
        }

        const user = await UserModel.findOne({ phone_number });
        if (user) {
            // CREATE TOKEN
            const generatedToken = jwt.sign({ user: UserModel.phone_number }, seckretKey, { expiresIn: "4m" })
            user.access_token = generatedToken;
            user.save((err, data) => {
                if (err) {
                    res.json({
                        "status": false,
                        "error": err
                    });
                } else {
                    res.status(200).json({
                        "status": true,
                        "isRegistered": true,
                        "user": data,
                        "message": "Successfully signed in"
                    });
                }
            });
        } else {
            res.status(200).json({
                "status": true,
                "isRegistered": false,
                "message": "User not found. Please register"
            });
        }

        // 
    } catch (error) {
        res.json({
            "status": false,
            "exception": error
        })
    }
} 