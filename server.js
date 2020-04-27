const {createServer} = require('http');
const express = require('express');
//let passport = require('passport');
//app.use(passport.initialize());
//const YoutubeV3Strategy = require('passport-youtube-v3').Strategy;
const compression = require('compression');
const morgan = require('morgan');
const path = require('path');

const normalizePort = port => parseInt(port, 10);
const PORT = normalizePort(process.env.PORT || 5000);

const app = express();
const dev = app.get('env') !== 'production';

if(!dev){
    app.disable('x-powered-by');
    app.use(compression());
    app.use(morgan('common'));
    app.use(express.static(path.resolve(__dirname, 'build')));
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'build', 'index.html'))
    });
}
if(dev){
    app.use(morgan('dev'))
}

const server = createServer(app);
server.listen(PORT, err => {
    if(err) throw err;
    console.log('Server started!');
});

/*passport.use(new YoutubeV3Strategy({
        clientID: "1057384645203-j12upueio63552k35i4rkj5s7mk1clds.apps.googleusercontent.com",
        clientSecret: "j5L0gV9bwikLMOWLJVAevRMs",
        callbackURL: 'http://localhost:5000/redirect',
        scope: ['https://www.googleapis.com/auth/youtube']
    },
    function (accessToken, refreshToken, profile, cb) {
        const user = {
            accessToken: accessToken,
            refreshToken: refreshToken
        };
        return cb(null, user)
    }
));

passport.serializeUser(function(user, cb) {
    cb(null, user);
});

passport.deserializeUser(function(obj, cb) {
    cb(null, obj);
});

app.get('/authenticate', passport.authenticate('youtube'));
app.get('/redirect', passport.authenticate('youtube', { failureRedirect: '/login' }),
    function(req, res) {
        res.redirect('http://localhost:3000' + '?access_token=' + req.user.accessToken)
    });*/

app.listen(5000);