$(function(){
    $(".sidebar ul a").on("click", function(evt){
        $(".sidebar ul").css("background-color", "#0d1117");

        var target = $(evt.target);

        if (target.closest("ul.dashboard").length){
            $(".sidebar ul.dashboard").css("background-color", "#13181f");
        }

        if (target.closest("ul.tests").length){
            $(".sidebar ul.tests").css("background-color", "#13181f");
        }

        if (target.closest("ul.bugs").length){
            $(".sidebar ul.bugs").css("background-color", "#13181f");
        }
        
        $(".sidebar li a").removeClass("active");
        target.closest("a").addClass("active");
    });
});

function toggleView(view) {
    $(".main-content > ." + view).removeClass("d-none");
    $(".main-content > " + ":not(." + view +")").addClass("d-none");
    $("." + view).hide().fadeIn("slow");
  
    if (view == 'test-view' && $(".test-list-item").length){
      $(".test-item").first().click();
    }
  }

$(function(){
    $(".suite-item").on("click", function () {
        $(".suite-item").removeClass("active");
        var content = $(this).addClass("active").find(".suite-contents").clone();
        $(".test-wrapper").empty().append(content.removeClass("d-none")).hide().fadeIn(500);
        
    });
});

$(function(){
    $(".test-wrapper").on("click", function (evt) {
    var target = $(evt.target);

    if(target.parents(".col-3").length){
      $(".test-wrapper .col-3:not(.expanded-col)").hide();
      target.parents(".col-3").addClass("expanded-col");
      $(".col-3.expanded-col").fadeIn(300);
    }
  
    if (!target.is(".btn") && target.parents(".level-0", ".level-1").length && target.is(".node,.node-text,.card-title")){
      $(".level-1 > .collapse.show").collapse("hide");
      $(".btn + .collapse.show").collapse("hide");
      
      if(!target.parents(".level-1").length){
        $(".collapse.show").collapse("hide");
      }
    }
  
    if (target.is(".node,.node-text,.card-title")) {
      target.closest(".card-header").next().collapse("toggle");
    }
    
    if (target.is(".btn.log")) {
      $(".btn + .collapse.show").collapse("hide");
      target.next().collapse("toggle");
    }
  
    /* -- [ category view, status filters ] -- */
    if (target.is(".attributes-view .info > span")) {
      var status = target.attr("status");
      $(".test-content .tag-test-status").addClass("d-none");
      $(".test-content .tag-test-status[status=" + status + "]").removeClass(
        "d-none"
      );
    }
});
});

