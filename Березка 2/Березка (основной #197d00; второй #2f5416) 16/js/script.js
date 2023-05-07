window.onload = function load() {
    document.getElementById("result").innerText = '5000';
}

function stepDown(type) {
	if (type < 0)
		return;
	
	if (document.getElementById(`inputik${type}`) === undefined)
		return;

	let input = document.getElementById(`inputik${type}`);

	if (parseInt(input.value) > 1)
		input.value = parseInt(input.value) - 1;
}

function stepUp(type) {
	if (type < 0)
		return;
	
	if (document.getElementById(`inputik${type}`) == undefined)
		return;

	let input = document.getElementById(`inputik${type}`);

	input.value = parseInt(input.value) + 1;
}


			var HIDDEN_CLASS_NAME = 'hidden'
			var TARGET_CLASS_NAME = 'target'
			var SOURCE_CLASS_NAME = 'source'
			
			var targetIdToShow = 1
			
			function main() {
				var targets = getElements(TARGET_CLASS_NAME)
				var sources = getElements(SOURCE_CLASS_NAME)
				sources.forEach(function (sourceNode) {
					var sourceNodeId = extractId(sourceNode, SOURCE_CLASS_NAME)
					sourceNode.addEventListener('click', function () {
						showTarget(targets, sourceNodeId)
					})
				})
				showTarget(targets, targetIdToShow)
			}
			
			function getElements(type) {
				return [].slice.call(document.querySelectorAll('.' + type)).sort(function (targetNode1, targetNode2) {
					var target1Num = extractId(targetNode1, TARGET_CLASS_NAME)
					var target2Num = extractId(targetNode2, TARGET_CLASS_NAME)
					return target1Num > target2Num
				})
			}
			
			function extractId(targetNode, baseClass) {
				var currentClassIndex = targetNode.classList.length
				while (currentClassIndex--) {
					var currentClass = targetNode.classList.item(currentClassIndex)
					var maybeIdNum = parseInt(currentClass.split('-')[1])
					if (isNaN(maybeIdNum)) {
						continue
					}
					var classStrinToValidate = baseClass + '-' + maybeIdNum
					if (classStrinToValidate === currentClass) {
						return maybeIdNum
					}
				}
			}
			
			function showTarget(targets, targetId) {
				targets.forEach(function (targetNode, targetIndex) {
				var currentTargetNodeId = extractId(targetNode, TARGET_CLASS_NAME)
					if (currentTargetNodeId === targetId) {
						targetNode.classList.remove(HIDDEN_CLASS_NAME)
					} else {
						targetNode.classList.add(HIDDEN_CLASS_NAME)
					}
				})
			}
			
			main()


function checkSelect() {
    let selectValue = document.getElementById("change1").value;
    let price = 0;

    if (selectValue == '1 смена')
        price1 = 5000;
    else if (selectValue == '2 смена')
        price1 = 3000;
    else if (selectValue == '3 смена')
        price1 = 4000;
    else if (selectValue == '4 смена')
        price1 = 7000;

    document.getElementById("result").innerText = price1;
}

!function(){
	// скрипт 1 здесь
 
	var owl = $("#owl-demo-2");
	owl.owlCarousel({
		loop: true,
		nav:true,
		pagination : true,
		navText : ["<img src='img/left2.png'>","<img src='img/right2.png'>"],
		dots:false,
		center: false,
		rewind: false,
		mouseDrag: true,
		touchDrag: true,
		pullDrag: true,
		freeDrag: false,
		margin: 0,
		stagePadding: 0,
		merge: false,
		mergeFit: true,
		startPosition: 0,
		rtl: false,
		smartSpeed: 250,
		fluidSpeed: false,
		dragEndSpeed: false,
		responsive: {
			0: {
				items: 1
				// nav: true
			},
			480: {
				items: 2,
				nav: false
			},
			768: {
				items: 3,
				// nav: true,
				loop: false
			},
			992: {
				items: 4,
				// nav: true,
				loop: false
			}
		},
		responsiveRefreshRate: 200,
		responsiveBaseElement: window,
		fallbackEasing: "swing",
		info: false,
		nestedItemSelector: false,
		itemElement: "div",
		stageElement: "div",
		refreshClass: "owl-refresh",
		loadedClass: "owl-loaded",
		loadingClass: "owl-loading",
		rtlClass: "owl-rtl",
		responsiveClass: "owl-responsive",
		dragClass: "owl-drag",
		itemClass: "owl-item",
		stageClass: "owl-stage",
		stageOuterClass: "owl-stage-outer",
		grabClass: "owl-grab",
		autoHeight: false,
		lazyLoad: false
	});

	$(".next").click(function () {
		owl.trigger("owl.next");
	});
	$(".prev").click(function () {
		owl.trigger("owl.prev");
	});
}();

!function(){
	// скрипт 1 здесь
 
	var owl = $("#owl-demo-3");
	owl.owlCarousel({
		loop: true,
		nav:true,
		pagination : true,
		navText : ["<img src='img/left.png'>","<img src='img/right.png'>"],
		dots:false,
		center: false,
		rewind: false,
		mouseDrag: true,
		touchDrag: true,
		pullDrag: true,
		freeDrag: false,
		margin: 0,
		stagePadding: 0,
		merge: false,
		mergeFit: true,
		startPosition: 0,
		rtl: false,
		smartSpeed: 250,
		fluidSpeed: false,
		dragEndSpeed: false,
		responsive: {
			0: {
				items: 1
				// nav: true
			},
			480: {
				items: 1,
				nav: false
			},
			768: {
				items: 1,
				// nav: true,
				loop: false
			},
			992: {
				items: 1,
				// nav: true,
				loop: false
			}
		},
		responsiveRefreshRate: 200,
		responsiveBaseElement: window,
		fallbackEasing: "swing",
		info: false,
		nestedItemSelector: false,
		itemElement: "div",
		stageElement: "div",
		refreshClass: "owl-refresh",
		loadedClass: "owl-loaded",
		loadingClass: "owl-loading",
		rtlClass: "owl-rtl",
		responsiveClass: "owl-responsive",
		dragClass: "owl-drag",
		itemClass: "owl-item",
		stageClass: "owl-stage",
		stageOuterClass: "owl-stage-outer",
		grabClass: "owl-grab",
		autoHeight: false,
		lazyLoad: false
	});

	$(".next").click(function () {
		owl.trigger("owl.next");
	});
	$(".prev").click(function () {
		owl.trigger("owl.prev");
	});
}();

document.querySelectorAll('.number').forEach(number => {
	const top = number.getBoundingClientRect().top;
  
	window.addEventListener('scroll', function onScroll() {
	  if (window.pageYOffset > top - window.innerHeight / 1) {
		this.removeEventListener('scroll', onScroll);
		let start = +number.innerHTML;
		const interval = setInterval(function() {
		  number.innerHTML = ++start;
		  if (start >= number.dataset.max) {
			clearInterval(interval);
		  }
		}, 5);
	  }
	});
  });


  document.querySelectorAll('.number1').forEach(number => {
	const top = number.getBoundingClientRect().top;
  
	window.addEventListener('scroll', function onScroll() {
	  if (window.pageYOffset > top - window.innerHeight / 1) {
		this.removeEventListener('scroll', onScroll);
		let start = +number.innerHTML;
		const interval = setInterval(function() {
		  number.innerHTML = ++start;
		  if (start >= number.dataset.max) {
			clearInterval(interval);
		  }
		}, 400);
	  }
	});
  });

  document.querySelectorAll('.number2').forEach(number => {
	const top = number.getBoundingClientRect().top;
  
	window.addEventListener('scroll', function onScroll() {
	  if (window.pageYOffset > top - window.innerHeight / 1) {
		this.removeEventListener('scroll', onScroll);
		let start = +number.innerHTML;
		const interval = setInterval(function() {
		  number.innerHTML = ++start;
		  if (start >= number.dataset.max) {
			clearInterval(interval);
		  }
		}, 400);
	  }
	});
  });

  document.querySelectorAll('.number3').forEach(number => {
	const top = number.getBoundingClientRect().top;
  
	window.addEventListener('scroll', function onScroll() {
	  if (window.pageYOffset > top - window.innerHeight / 1) {
		this.removeEventListener('scroll', onScroll);
		let start = +number.innerHTML;
		const interval = setInterval(function() {
		  number.innerHTML = ++start;
		  if (start >= number.dataset.max) {
			clearInterval(interval);
		  }
		}, 100);
	  }
	});
  });
        
       