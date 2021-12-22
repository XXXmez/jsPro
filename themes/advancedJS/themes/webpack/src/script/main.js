function myModule() {
    this.hello = function() {
        console.log('hello world');
    };

    this.goodbye = function() {
        console.log('bye!');
    };
}

module.exports = myModule;