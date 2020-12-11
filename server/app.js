let express = require('express');
let app = express();
let bodyParser = require('body-parser');
let session = require('express-session');
let cors = require('cors');
app.listen(3000);
app.use(cors());
app.use(bodyParser.json());
app.use(session({
    resave: true,
    secret: 'aemple',
    saveUninitialized: true
}));

const user = require('./mock/user');
app.post('/vue-element-admin/user/login', function (req, res) {
    const { username } = req.body;
    const token = user[0].tokens[username]
    if (!token) {
        res.json({
            code: 60204,
            message: 'Account and password are incorrect.'
        });
    } else {
        res.json({
            code: 20000,
            data: token
        });
    }
});

app.get('/vue-element-admin/user/info', function (req, res) {
    const { token } = req.query
    const info = user[1].users[token]
    if (!info) {
        res.json({
            code: 50008,
            message: 'Login failed, unable to get user details.'
        })
    } else {
        res.json({
            code: 20000,
            data: info
        });
    }
});

app.post('/vue-element-admin/user/logout', function (req, res) {
    res.json({
        code: 20000,
        data: 'success'
    });
});
