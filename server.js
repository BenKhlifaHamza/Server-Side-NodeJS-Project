const express = require('express');
const path = require('path');
const homeRouter = require('./routers/homeroute');
const booksRouter = require('./routers/booksroute');
const signupRouter = require('./routers/signuproute');
const loginRouter = require('./routers/loginroute');
const logoutRouter = require('./routers/logoutroute');
const addBookRouter = require('./routers/addbookroute');
const myBooksRouter = require('./routers/mybooksroute');
const contactRouter = require('./routers/contactroute');
const aboutRouter = require('./routers/aboutroute');

var session = require('express-session');
var MongoDBStore = require('connect-mongodb-session')(session);
var flash = require('connect-flash');
const app = express();

var store = new MongoDBStore({
    uri: "mongodb://127.0.0.1:27017/education",
    collection: 'mySessions'
});
store.on('error', function (error) {
    console.log(error);
});
app.use(session({
    secret: 'This is a secret',
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7 // 1 week
    },
    store: store,
    resave: true,
    saveUninitialized: true
}));

app.use(express.static(path.join(__dirname, 'assets')));
app.set('view engine', 'ejs');
app.set('views', 'view');
app.use(flash());

app.use('/', homeRouter);
app.use('/products', booksRouter);
app.use('/signup', signupRouter);
app.use('/login', loginRouter);
app.use('/logout', logoutRouter);
app.use('/addbook', addBookRouter);
app.use('/mybooks', myBooksRouter);
app.use('/contact', contactRouter);
app.use('/about', aboutRouter);

app.listen(3000, () =>
    console.log('Server Working On Port 3000')
);