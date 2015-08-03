define(['react', '../../api/auth', './main.rt'], function (React, auth, template){
  return React.createClass({
    mixins:[React.addons.LinkedStateMixin],
    getInitialState: function (){
      return {
        isLoggedIn: auth.isLoggedIn(),
        user: '',
        password: ''
      };
    },
    registerUser: function (){
      var self = this;
      auth.createUser(this.state.user, this.state.password, function (){
        auth.login(self.state.user, self.state.password, function (){
          self.setState({isLoggedIn: auth.isLoggedIn()});
        }), function (){
          console.log('faildToLogin')
        }
      }, function (){
          console.log('faild to createUser')
      })
    },
    logOut: function (){
      auth.logOut();
      this.setState({isLoggedIn: auth.isLoggedIn()});
    },
    socialLogin: function(provider) {
      var self = this;
     auth.socialLogin(provider, function(){
       self.setState({isLoggedIn: auth.isLoggedIn()});
     }, function (){
       console.log('error social login');
     })
    },
    render: template
  });
});
