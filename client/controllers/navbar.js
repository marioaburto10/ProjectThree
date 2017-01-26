Template.navbar.helpers({
  // check if user is an admin
  'isAdminUser': function() {
    return Roles.userIsInRole(Meteor.user(), ['admin']); 
  }
});

Template.navbar.onRendered(function(){
  $('.button-collapse').sideNav({
    menuWidth: 300, // Default is 240
    edge: 'left', // Choose the horizontal origin
    closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
    draggable: true // Choose whether you can drag to open on touch screens      
  });
  setTimeout(function(){
    $('.collapsible').collapsible();
  }, 1000)
});

// Displaying each user email
Meteor.subscribe('allEmails');

Template.ListUsers.helpers({
  allUsers(){ return Meteor.users.find({}); },
  email(){ return this.emails[0].address; }
});

Template.ListUsers.events({
  'click li': function(event){
    var userEmail = $(event.target).closest('a').html();
    console.log(userEmail);

    if (userEmail) {
      Session.set("chatWindow", true);
    } else {
      Session.set("chatWindow", false)
    }
  }
});

