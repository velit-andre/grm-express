let data = {
    "title": "Msgs",
    "name": "msgs",
    "data": [
      {
        "title": "John Doe",
        "image": "assets/img/avatars/4.png",
        "time": "2 minutes ago",
        "subject": "Msed quia non numquam eius modi tempora",
        "message": "Hello again and thanks for being a part of the newsletter.",
        "status": "unread",
        "type": "message"
      },
      {
          
        "title": "Sonya Birthday",
        "image": "assets/img/avatars/female.png",
        "time": "Thursday, September 19th",
        "subject": "Incidunt ut labor",
        "message": "sed quia non numquam eius modi tempora incidunt ut labor",
        "status": "read",
        "type": "message"
      },
      {
        "title": "Cristina Algera",
        "image": "assets/img/avatars/1.png",
        "time": "TSunday, September 15th",
        "subject": "Best-Selling Teethers",
        "message": "ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?",
        "status": "read",
        "type": "message"
      },
      {
        "title": "Lam Tampora",
        "image": "assets/img/avatars/male.png",
        "time": "TSunday, September 14th",
        "subject": "Deadline due date",
        "message": "mus qui blanditiis praesentium voluptatum deleniti atque corrup",
        "status": "read",
        "type": "message"
      },
      {
        "title": "Project approved! ",
        "image": "assets/img/avatars/sunny.png",
        "time": "TSunday, June 14th",
        "subject": "Et harum quidem rerum facilis est et expedita distinctio",
        "message": "...",
        "status": "read",
        "type": "message"
      }
    ]
  }
  
  let data2 = {
    "title": "Notify",
    "name": "notification",
    "data": [
      {
        "icon": "fa-user",
        "message": "2 new users just signed up! martin.luther and kevin.reliey",
        "time": "1 min ago...",
        "type": "notification"
      },
      {
        "icon": "fa-facebook",
        "message": "Facebook recived +33 unique likes",
        "time": "4 hrs ago...",
        "type": "notification"
      },
      {
        "icon": "fa-check",
        "message": "2 projects were completed on time! Submitted for your approval - Click here",
        "time": "1 day ago...",
        "type": "notification"
      }
    ]
  }

  let data3 = {
    "title": "Tasks",
    "name": "tasks",
    "data": [
      {
        "status": "URGENT",
        "type": "task",
        "size": "progress-md progress-striped",
        "title": "Upgrade Infestructure",
        "width": 85,
        "last_update": "12/12/2015"
      },
      {
        "status": "URGENT",
        "type": "task",
        "size": "progress-sm",
        "title": "Code foundation",
        "width": 65,
        "last_update": "12/12/2015"
      },
      {
        "status": "Project Plan",
        "type": "task",
        "size": "progress-xs",
        "title": "Code foundation",
        "width": 25,
        "last_update": "12/12/2015"
      },
      {
        "status": "CRITICAL",
        "type": "task",
        "size": "progress-xs",
        "title": "Wireframes",
        "width": 5,
        "last_update": "12/12/2015"
      },
      {
        "status": "NORMAL",
        "type": "task",
        "size": "progress-xs",
        "title": "Compile hotfix",
        "width": 99,
        "last_update": "12/12/2015"
      },
      {
        "status": "MINOR",
        "type": "task",
        "size": "progress-micro",
        "title": "Bug fix #213",
        "width": 100,
        "last_update": "12/12/2015"
      }
    ]
  }

module.exports = [ 'activities', data, data2, data3 ]