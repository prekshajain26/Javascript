const user={
    username:"preksha",
    price:999,
    welcomeMessage:function(){
      console.log(`${this.username}, welcome to this website`);   //this keyword is used to give current context
      //console.log(this);      //here it will give current context
    }
}
user.welcomeMessage()
user.username="pihu"
user.welcomeMessage()

//console.log(this); //but if we give this outside it will give empty paranthesis which means empty object
