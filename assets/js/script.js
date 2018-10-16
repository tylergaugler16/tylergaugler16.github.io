$(document).ready(function() {
  $("#fullpage").fullpage({
    //options here
    // autoScrolling:true,
    // scroll: true,
    sectionsColor: ["#044389", "#e1e5ee", "#ffd200", "#7CAFC4", "#73BFB8"],
    scrollingSpeed: 800,
    licenseKey: "OPEN-SOURCE-GPLV3-LICENSE",
    onLeave: function(origin, destination, direction) {
      if (destination.index === 1 || destination.index === 3) {
        $("#skills-sidebar").addClass("ease-in");
        if (destination.index == 3) {
          // highlightSkillsOfProject("project1");
        } else {
          // highlightSkillsOfProject('all');
        }
      } else {
        // 	$('.skills-section').removeClass('project-view');
        $("#skills-sidebar").removeClass("ease-in");
      }
    }
  });
  //methods
  // $.fn.fullpage.setAllowScrolling(false);
});

$(document).ready(function() {
  if (typeof AOS != "undefined") {
    AOS.init({
      duration: 500
    });
  }
  $(".first-section.draw").addClass("hovered");

  var triggers = $("ul.triggers li");
  var images = $("ul.projects li");
  var lastElem = $("ul.triggers li").length - 1;
  var view = $(".view ul.projects");
  var imgWidth = images.width();
  var descriptions = $(".project-description");
  var target;
  console.log(imgWidth);
  triggers.first().addClass("selected");
  descriptions.first().addClass("selected");
  view.css("width", imgWidth * (lastElem + 1) + "px");

  function sliderResponse(target) {
    view
      .stop(true, false)
      .animate({ left: "-" + imgWidth * target + "px" }, 500);
    triggers
      .removeClass("selected")
      .eq(target)
      .addClass("selected");
    descriptions
      .removeClass("selected")
      .eq(target)
      .addClass("selected");
  }

  triggers.click(function() {
    if (!$(this).hasClass("selected")) {
      target = $(this).index();
      sliderResponse(target);
      // resetTiming();
    }
  });

  $(".next").click(function() {
    target = $("ul.triggers li.selected").index();
    target === lastElem ? (target = 0) : (target = target + 1);
    sliderResponse(target);
    // resetTiming();
  });
  $(".prev").click(function() {
    target = $("ul.triggers li.selected").index();
    lastElem = triggers.length - 1;
    target === 0 ? (target = lastElem) : (target = target - 1);
    sliderResponse(target);
    // resetTiming();
  });

  const $filters = $(".project-filter [data-filter]");
  // $boxes = $('.skills-flexbox [data-category]');

  $(document).on("click", "#project1, #project2, #project3", function() {
    console.log("here");
    var $this = $(this);
    $filters.removeClass("active"); // removes active from the projects
    $this.addClass("active"); // adds active to the current projects

    var $projectFilter = $this.attr("data-filter");
    highlightSkillsOfProject($projectFilter);
  });

  const highlightSkillsOfProject = function(projectName) {
    console.log(projectName);
    const $skills = $(".skills-flexbox .skill");
    if (projectName == "all") {
      $skills
        .removeClass("is-animated")
        .fadeOut()
        .promise()
        .done(function() {
          $skills.addClass("is-animated").fadeIn();
        });
    } else {
      $skills
        .removeClass("is-animated")
        .fadeOut()
        .promise()
        .done(function() {
          $skills
            .filter(".skill[ " + projectName + "='true']")
            .addClass("is-animated")
            .fadeIn();
        });
    }
  };
});

$(document).ready(function() {
  if (typeof AOS != "undefined") {
    AOS.init({
      duration: 500
    });
  }
});
