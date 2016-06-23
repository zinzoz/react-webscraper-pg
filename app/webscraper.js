//import express  from 'express';
//let router = express.Router();
import request from 'request';
import cheerio from 'cheerio';
import db from './db';
import R from 'ramda';

export function scrapeWeb() {

    let url = 'http://www.nasdaq.com/';
    let json = {
        index: "",
        value: "",
        net: ""
    };
    setInterval(() => {
        request(url, (error, response, html) => {
            if (!error) {
                let $ = cheerio.load(html);

                $('#indexTable').find('script').filter(function() {
                    let data = $(this);

                    json.index = getGraphnasd(data)[0];
                    console.log(getGraphnasd(data)[0]);
                    json.value = getGraphnasd(data)[1];
                    json.net = getGraphnasd(data)[2];
                })

                db.insert({
                        index: json.index,
                        value: json.value,
                        net: json.net,
                        date: getDateTime()
                    }, 'id').into('nasdaq')
                    .catch((error) => {
                        console.error(error);
                    }).then(() => {
                        console.log("ok");
                    });
            }
        })
    }, 10000);

    function getGraphnasd(data) {

        return data.text().replace("//<![CDATA[", "").replace(/"/g, '').split("nasdaqHomeIndexChart.storeIndexInfo(")[1].split(",");
    }

    function getDateTime() {

        var date = new Date();
        var dateFragments = [date.getFullYear(), date.getMonth() + 1, date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds()];
        var punctuations = ["/", "/", " ", ":", ":", ""];
        var dateFragmentpad = dateFragments.map(padZero);
        var dateFormat = R.zip(dateFragments, punctuations).reduce(function(ac, val) {
            return ac + val.join("");
        }, "");

        return dateFormat;

    }

    function padZero(i) {
        return (i < 10 ? "0" : "") + i;
    }


}
