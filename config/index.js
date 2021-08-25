var configValues = require("./config.json")

module.exports = {
    getDbConnectionString: function() {
        return `mongodb+srv://${ configValues.username }:${ configValues.password }@cluster0.mjakl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
    }
}

