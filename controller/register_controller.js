const UserModel = require('../model/register_model');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const e = require('express');
const seckretKey = process.env.SECRET_KEY;

var register = async (req, res) => {
    try {
        const { first_name, last_name, phone_number } = req.body;
        if (!(first_name && last_name && phone_number)) {
            res.status(400).send({
                "status": false,
                "message": "All inputs are required"
            });
        }

        const oldUser = await UserModel.findOne({ phone_number });


        if (oldUser) {
            return res.status(200).json({
                "status": true,
                "isRegistered": true,
                "message": "User already exist. Please login"
            });
        }

        // Create Token
        const generatedToken = jwt.sign({ user: UserModel.phone_number }, seckretKey, { expiresIn: "4m" });

        // CREATE USER IN DATABASE

        const user = UserModel.create({
            first_name: first_name,
            last_name: last_name,
            phone_number: phone_number
        });

        (await user).save((err, data) => {
            if (err) {
                res.json({
                    "status": false,
                    "message": err
                });
            } else {
                res.json({
                    "status": true,
                    "data": data,
                    "message": "Successfully registered"
                })
            }
        });

    } catch (error) {
        res.json({
            "status": false,
            "exception": error
        })
    }
}

module.exports = register;