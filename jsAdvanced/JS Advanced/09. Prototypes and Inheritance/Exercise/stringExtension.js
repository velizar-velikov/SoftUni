//66/100 in judge
(function () {

    String.prototype.ensureStart = function (str) {
        return this.startsWith(str) ? this.toString() : str + this.toString();
    }
    String.prototype.ensureEnd = function (str) {
        return this.endsWith(str) ? this.toString() : this.toString() + str;
    }
    String.prototype.isEmpty = function () {
        return this.toString().length == 0;
    }
    String.prototype.truncate = function (n) {
        if (n < 4) {
            return '.'.repeat(n);
        }
        if (this.length <= n) {
            return this.toString();
        }
        if (this.includes(' ')) {
            let result = this.substring(0, this.lastIndexOf(' ')) + '...';
            while (result > n) {
                result = result.substring(0, result.lastIndexOf(' ')) + '...';
            }
            return result;
        }
        return this.substring(0, n - 3) + '...';

    }

    String.format = function (str, ...params) {
        for (let i = 0; i < params.length; i++) {
            const param = params[i];
            str = str.replace(`{${i}}`, param);
        }
        return str;
    }
})();