import Vue from 'vue'

Vue.prototype.print = (obj,type) => {
    type = type || "log";
    const log = JSON.parse(JSON.stringify(obj));
    console[type](log)
}

Vue.prototype.globalClick = (callback) => {
    document.getElementById('app').onclick = function () {
        callback()
    }
}