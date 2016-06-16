const router = require("koa-router")();
const _ = require("lodash");
const urllib = require("urllib");

function* proxyApi(path, data, method) {
    const url = `http://192.168.1.25/${path}`;
    const result = yield urllib.requestThunk(url, {
        method: method || "GET",
        headers: {
            'Content-Type': 'application/json'
        },
        dataType: 'json',
        data: data
    });
    return result.data;
}

router
.get("*", function* (next) {

    yield this.render("index", {store: { }});
});

module.exports = router;