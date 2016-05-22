var React = require('react');
var ReactRouter = require('react-router');
require('../styles/style.css');
var Link = ReactRouter.Link;

var styles = {
    mainBg: {
        backgroundImage: "url('app/images/background.svg')",
        backgroundSize: "cover",
        height: "100%",
        width: "100%"
    }
};

var Home = React.createClass({
    render: function() {
        return (
            <div className='container main-bg flex-vh-center' style={styles.mainBg}>
                <h1 className="header-title">Enter a City and State</h1>
                <div className='col-sm-7'>
                    <form>
                        <div className='form-group'>
                            <input
                                className='form-control'
                                placeholder='St. George, Utah'
                                type='text'
                            />
                        </div>
                        <div className='form-group'>
                            <button className='btn btn-block btn-success' type='submit'>
                                Get Weather
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
});

module.exports = Home;