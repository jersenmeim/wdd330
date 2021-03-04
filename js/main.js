const week = [{
    title: "Week 1",
    link : "weekone.html",
  },
  {
    title: "Week 2",
    link : "weektwo.html",
  },

  {
    title: "Week 3",
    link : "weekthree.html",
  },

  {
    title: "Week 4",
    link : "weekfour.html",
  },

  {
    title: "Week 5",
    link : "weekfive.html",
  },

  {
    title: "Todo App",
    link : "./TodoApp/index.html",
  },

  {
    title: "Week 7",
    link : "weekseven.html",
  },
  
  {
    title: "Week 8",
    link : "weekeight.html",
  },

  {
    title: "Week 9",
    link : "weeknine.html",
  }
  
];

week.forEach(week => {
    
    
    let div1 = document.createElement ('li');
    div1.setAttribute('class', 'section');
  
    let a = document.createElement('a');
    a.setAttribute ('href', week.link);

    let h4 = document.createElement('h4');
    h4.setAttribute ('id', 'link');

   
    let p1 = document.createElement('p');

    let a2 = document.createElement('a');
    a2.setAttribute ('href', week.link);

    h4.textContent = week.title;

    
    
    p1.appendChild(a2);
    a.appendChild(h4);
    div1.appendChild(a);
   
    div1.appendChild(p1);

    document.querySelector('ul.body').appendChild(div1);
    
    });