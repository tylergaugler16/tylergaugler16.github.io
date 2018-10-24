const $backgroundYellow = 'rgba(255, 210, 0, 0.9)' //"#FFD200";
const $backgroundGray   = "#e1e5ee";
const $backgroundRed    = "#D33F49";
const $backgroundGreen  = "#73BFB8";
const $backgroundBlue   = 'rgba(0, 65, 139, 0.9)' // "#00418b";



const $backgroundDarkBlue = 'rgba(2, 47, 64, 0.9)' // "#022F40";
const $backgroundOrange = 'rgba(240, 135, 0, 0.9)' // "#F08700";
const $backgroundLightBlue = 'rgba(56, 174, 204, 0.9)' //"#38AECC";

$(document).ready(function() {
  $("#fullpage").fullpage({
    //options here
    // autoScrolling:true,
    // scroll: true,
    sectionsColor: [
      $backgroundBlue,
      $backgroundOrange,
      $backgroundDarkBlue,
      $backgroundYellow,
      $backgroundLightBlue,
    ],
    scrolloverflow: true,
    parallax: true,
    parallaxOptions: {type: 'cover', percentage: 100},
    anchors: ['home', 'skills', 'projects', 'experience', 'contact'],
    scrollingSpeed: 800,
    licenseKey: "OPEN-SOURCE-GPLV3-LICENSE",
    menu: '#menu',
    // easingcss3: ' cubic-bezier(0.000, 0.795, 0.680, 0.890)',
    onLeave: function(origin, destination, direction) {
      if (origin.index === 0) {
        setTimeout(
          () => $(".first-section").removeClass("hovered animate"),
          800
        );
      }
      if (destination.index === 0) {
        setTimeout(() => $(".first-section").addClass("hovered animate"), 800);
      }

      if(origin.index === 3 ){
          // setTimeout(() => $(".experience-section").removeClass("animate"), 800);
          $(".experience-section").removeClass("animate")
      }
      if(destination.index === 3){
        setTimeout(() => $(".experience-section").addClass("animate"), 200);
      }

    }
  });
  //methods
  // $.fn.fullpage.setAllowScrolling(false);
});



$(document).on('click', '.healthie-trigger', function(){
  $('.healthie-trigger').addClass('active-circle');
  $('.waywire-trigger').removeClass('active-circle');
  $('.waywire-description')
    .removeClass('is-animated selected')
    .fadeOut()
    .promise()
    .done(function(){
      $('.healthie-description').addClass('is-animated selected').fadeIn();
    })
})
$(document).on('click', '.waywire-trigger', function(){
  $('.waywire-trigger').addClass('active-circle');
  $('.healthie-trigger').removeClass('active-circle');
  $('.healthie-description')
    .removeClass('is-animated')
    .fadeOut()
    .promise()
    .done(function(){
      $('.waywire-description').addClass('is-animated').fadeIn();
    })
})

$(document).ready(function() {
  $(".first-section.draw").addClass("hovered animate");
  if (typeof AOS != "undefined") {
    AOS.init({
      duration: 500
    });
  }
});









var treeData = [
  {
    "name": "Projects",
    "parent": "null",
    "children": [
      {
        "name": "YouNote",
        "parent": "Projects",
        "project_id": "younote",
        "is_project": "true",
        "children": [
          {
            "name": "Tech Stack",
            "parent": "YouNote",
            "project_id": "younote",
            "children": [
              {
                "name": "Ruby On Rails",
                "parent": "Tech Stack",
                "project_id": "younote",
              },
              {
                "name": "HTML/CSS",
                "parent": "Tech Stack",
                "project_id": "younote",
              }
            ]
          },
          {
            "name": "Description",
            "parent": "YouNote",
            "project_id": "younote",
          }
        ]
      },
      {
        "name": "Attendance/Registration Mangement System",
        "parent": "Projects",
        "is_project": "true",
        "project_id": "mbc-register",
        "children": [
          {
            "name": "Tech Stack",
            "parent": "Attendance/Registration Mangement System",
            "project_id": "mbc-register",
            "children": [
              {
                "name": "Node.js",
                "parent": "Tech Stack",
                "project_id": "mbc-register",
              },
              {
                "name": "Express.js",
                "parent": "Tech Stack",
                "project_id": "mbc-register",
              }
            ]
          },
          {
            "name": "Description",
            "parent": "Attendance/Registration Mangement System",
            "project_id": "mbc-register",
          }
        ]
      }
    ]
  }
];


$(document).ready(function(){
  // ************** Generate the tree diagram	 *****************
  var margin = {top: 20, right: 120, bottom: 20, left: 90},
  	width = 960 - margin.right - margin.left,
  	height = 500 - margin.top - margin.bottom;

  var i = 0,
  	duration = 750,
  	root;

  var tree = d3.layout.tree()
  	.size([height, width]);

  var diagonal = d3.svg.diagonal()
  	.projection(function(d) { return [d.y, d.x]; });

  var svg = d3.select(".projects-section .fp-tableCell .svg-container").append("svg")
  	.attr("width", width + margin.right + margin.left)
  	.attr("height", height + margin.top + margin.bottom)
    .append("g")
  	.attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  root = treeData[0];
  root.x0 = height / 2;
  root.y0 = 0;

  update(root);
  console.log(root);

  // setTimeout(() => , 1000)
  // dft(root);
  for(var i = 0; i< root.children.length; i++){
    click(root.children[i]);
  }
  // click(root);


  d3.select(self.frameElement).style("height", "500px");
  function update(source) {


    // Compute the new tree layout.
    var nodes = tree.nodes(root).reverse(),
  	  links = tree.links(nodes);


    // Normalize for fixed-depth.
    nodes.forEach(function(d) { d.y = d.depth * 180; });

    // Update the nodes…
    var node = svg.selectAll("g.node")
  	  .data(nodes, function(d) { return d.id || (d.id = ++i); });



    // Enter any new nodes at the parent's previous position.

    var nodeEnter = node.enter().append("g")
  	  .attr("class", function(d){ return d.is_project === "true"? d.project_id+' node' : 'node'})
  	  .attr("transform", function(d) { return "translate(" + source.y0 + "," + source.x0 + ")"; })
  	  .on("click", click);

    nodeEnter.append("circle")
  	  .attr("r", 1e-6)
  	  .style("fill", function(d) { return d._children ? "lightsteelblue" : "#fff"; });

    nodeEnter.append("text")
  	  .attr("x", function(d) { return d.children || d._children ? -25 : 25; })
  	  .attr("dy", ".18em")
  	  .attr("text-anchor", function(d) { return d.children || d._children ? "end" : "start"; })
  	  .text(function(d) { return d.name; })
  	  .style("fill-opacity", 1e-6);

    // Transition nodes to their new position.
    var nodeUpdate = node.transition()
  	  .duration(duration)
  	  .attr("transform", function(d) { return "translate(" + d.y + "," + d.x + ")"; });

    nodeUpdate.select("circle")
  	  .attr("r", 10)
  	  .style("fill", function(d) { return d._children ? "lightsteelblue" : "#fff"; });

    nodeUpdate.select("text")
  	  .style("fill-opacity", 1);

    // Transition exiting nodes to the parent's new position.
    var nodeExit = node.exit().transition()
  	  .duration(duration)
  	  .attr("transform", function(d) { return "translate(" + source.y + "," + source.x + ")"; })
  	  .remove();

    nodeExit.select("circle")
  	  .attr("r", 1e-6);

    nodeExit.select("text")
  	  .style("fill-opacity", 1e-6);

    // Update the links…
    var link = svg.selectAll("path.link")
  	  .data(links, function(d) { return d.target.id; });

    // Enter any new links at the parent's previous position.
    link.enter().insert("path", "g")
  	  .attr("class", "link")
  	  .attr("d", function(d) {
  		var o = {x: source.x0, y: source.y0};
  		return diagonal({source: o, target: o});
  	  });

    // Transition links to their new position.
    link.transition()
  	  .duration(duration)
  	  .attr("d", diagonal);

    // Transition exiting nodes to the parent's new position.
    link.exit().transition()
  	  .duration(duration)
  	  .attr("d", function(d) {
  		var o = {x: source.x, y: source.y};
  		return diagonal({source: o, target: o});
  	  })
  	  .remove();

    // Stash the old positions for transition.
    nodes.forEach(function(d) {
  	d.x0 = d.x;
  	d.y0 = d.y;
    });
  }

  // Toggle children on click.
  function click(d) {
    // console.log(d);
    // change the displayed picture based on d.project_id. defined in the json
    if (d.children) {
  	d._children = d.children;
  	d.children = null;
    } else {

    if(d.project_id){
      // $('.project-description.active').removeClass('active');
      // $('.project-description.'+d.project_id).addClass('active');
        $('g.'+d.project_id+' circle').css('fill','green');
        $('.project-description.active')
        .removeClass('active')
        .fadeOut()
        .promise()
        .done(function(){
          $('.project-description.'+d.project_id).addClass('active').fadeIn();
        })

    }
  	d.children = d._children;
  	d._children = null;
    }
    update(d);
  }

  function dft(root){
    var stack=[];
    var animX=0;
    stack.push(root);
    while(stack.length!==0){
      var element = stack.pop();
      if(!element.name === "Projects"){
        click(element);
      }
      // visitElement(element,animX);
      animX=animX+1;
      if(element.children!==undefined){
        for(var i=0; i<element.children.length; i++){
          stack.push(element.children[element.children.length-i-1]);
        }
      }
    }
  }
})
