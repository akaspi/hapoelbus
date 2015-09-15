module.exports = {
    numericLinkState: function(key) {
        return {
            value: this.state[key],
            requestChange: function(newValue) {
                var newState = {};
                newState[key] = parseInt(newValue);
                this.setState(newState);
            }.bind(this)
        }
    }
};