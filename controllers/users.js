'use strict';

module.exports = function(_, passport) {
    return {
        SetRouting: function(router) {
            router.get('/', this.indexPage);
            router.get('/signup', this.getSignup);
            router.get('/home', this.homePage);




            router.post('/signup', this.postSignUp);
        },

        indexPage: function(req, res) {
            return res.render('index', { test: "this is a test" });
        },
        getSignup: function(req, res) {
            return res.render('signup'); //look in views dir
        },

        postSignUp: passport.authenticate('local.signup', {
            succesRedirect: '/home',
            failureRedirect: '/signup',
            failureFlash: true
        }),

        homePage: function(req, res) {
            return res.render('home');
        }
    }
}