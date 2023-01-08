const { query } = require('express');
const NewsModel = require('../../model/news_model');

// POST NEWS
const postNews = async (req, res) => {
    try {
        const { title, subtitle, img } = req.body;
        var serverTime = new Date();
        const news = NewsModel.create({
            title: title,
            subtitle: subtitle,
            img: img,
            created_at: serverTime.toString(),
        });

        (await news).save((err, data) => {
            if (err) {
                res.json({
                    err
                });
            } else {
                res.status(201).json({
                    "status": true,
                    "news": data,
                    "message": "The new content successfully created"
                });
            }
        });
    } catch (error) {
        res.json(error);
    }
}

// GET NEWS
const getNews = async (req, res) => {
    try {
        await NewsModel.find({}, (err, data) => {
            if (err) {
                res.json({
                    "status": false,
                    "message": "Error on find news"
                });
            } else {
                res.json({
                    "status": true,
                    "data": data,
                    "message": "News successfully found"
                });
            }
        });
    } catch (error) {

    }
}

const viewNews = async (req, res) => {
    res.status(200).json({
        "message": "Successfully!"
    });
    setTimeout(async () => {
        var id = req.params.id;

        try {
            var totalViews = await NewsModel.findById(id);
            var incrementer = totalViews.details.views + 1;
            var updatedContent = await NewsModel.findByIdAndUpdate(id, { "details.views": incrementer });
            (updatedContent).save();
        } catch (error) {
            console.log("Error");
        }
    }, 8000);

}
const likeNews = async (req, res) => {
    res.status(200).json({
        "message": "Successfully!"
    });
    setTimeout(async () => {
        var id = req.params.id;
        try {
            var totalViews = await NewsModel.findById(id);
            var incrementer = totalViews.details.likes + 1;

            var updatedContent = await NewsModel.findByIdAndUpdate(id, { "details.likes": incrementer });
            (updatedContent).save();
        } catch (error) {
            console.log("Error");
        }

    }, 30000);
}

module.exports = { postNews, getNews, viewNews, likeNews };