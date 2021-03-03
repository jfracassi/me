var skillset = {'php':{'label':'PHP',
						'status':'',
						'frequency':'Daily',
						'duration_start':moment("2010-04-01"),
						'duration_end':moment(),
						'value':95},
				'ci':{'label':'CodeIgniter',
						'status':'',
						'frequency':'Daily',
						'duration_start':moment("2013-01-01"),
						'duration_end':moment(),
						'value':95},
				'sql':{'label':'MySQL / MSSQL',
						'status':'',
						'frequency':'Daily',
						'duration_start':moment("2005-02-01"),
						'duration_end':moment(),
						'value':95},
				'html':{'label':'HTML',
						'status':'',
						'frequency':'Daily',
						'duration_start':moment("2005-02-01"),
						'duration_end':moment(),
						'value':95},
				'js':{'label':'JavaScript',
						'status':'',
						'frequency':'Daily',
						'duration_start':moment("2005-02-01"),
						'duration_end':moment(),
						'value':95},
				'jquery':{'label':'jQuery',
						'status':'',
						'frequency':'Daily',
						'duration_start':moment("2013-01-01"),
						'duration_end':moment(),
						'value':95},
				'jsonajax':{'label':'JSON / AJAX',
						'status':'',
						'frequency':'Daily',
						'duration_start':moment("2015-01-01"),
						'duration_end':moment(),
						'value':90},
				'css3':{'label':'CSS',
						'status':'',
						'frequency':'Daily',
						'duration_start':moment("2005-02-01"),
						'duration_end':moment(),
						'value':85},
				'bootstrap':{'label':'Bootstrap',
						'status':'',
						'frequency':'Daily',
						'duration_start':moment("2015-01-01"),
						'duration_end':moment(),
						'value':85},
				'powerbi':{'label':'Microsoft Power BI',
						'status':'',
						'frequency':'Daily',
						'duration_start':moment("2020-11-01"),
						'duration_end':moment(),
						'value':85},
				'nix':{'label':'Linux / Unix',
						'status':'',
						'frequency':'Daily',
						'duration_start':moment("2010-04-01"),
						'duration_end':moment(),
						'value':75},
				'perl':{'label':'Perl / CGI',
						'status':'',
						'frequency':'Occasionally',
						'duration_start':moment("2005-02-01"),
						'duration_end':moment(),
						'value':75}};
						
var old_skillset = {'asp':{'label':'ASP',
						'status':'',
						// 'frequency':'Daily',
						'duration_start':moment("2005-02-01"),
						'duration_end':moment("2009-10-16"),
						'value':50},
				'csharp':{'label':'C#',
						'status':'',
						// 'frequency':'Daily',
						'duration_start':moment("2007-10-01"),
						'duration_end':moment("2009-10-31"),
						'value':50},
				'vb':{'label':'Visual Basic',
						'status':'',
						// 'frequency':'Daily',
						'duration_start':moment("2002-06-01"),
						'duration_end':moment("2004-05-31"),
						'value':50},
				'ccpp':{'label':'C / C++',
						'status':'',
						// 'frequency':'Daily',
						'duration_start':moment("1998-09-01"),
						'duration_end':moment("2003-06-30"),
						'value':50},
				'java':{'label':'Java',
						'status':'',
						// 'frequency':'Daily',
						'duration_start':moment("1998-09-01"),
						'duration_end':moment("2003-06-30"),
						'value':50}};

var nav_height = 0;

function adjust_layout() {
	var size_array = ['xs','sm','md','lg','xl'];
	var screensize = getResponsiveBreakpoint();
	
	$('#exp-timeline').css('width','');
	$('#exp-timeline').css('left','');
	
	if (size_array.indexOf(screensize) < 2)	// on a mobile device
	{
		$('.main-landing').css('max-width','90%');
		$('.needs_top_border_on_small').css('border-top-style','solid');
		$('.myname').css('font-size','30pt');
		$('.mytitle').css('font-size','15pt');
		$('.myinfo-header').css('font-size','25pt');
		$('.link-linkedin').css('margin-left','75px');
		
		if (window.innerHeight < window.innerWidth)	// landscape on a mobile device
		{
			$('.main-photo').css('height','190px');
			$('.main-photo-div').css('top','100%');
			$('.main-photo-div').css('left','80%');
			$('.main-info').css('top','-10%');
			
			$('.skill-item').removeClass('col-sm-12');
			$('.skill-item').addClass('col-sm-6');
			$('.skill-item').addClass('col-xs-12');
		}
		else
		{
			$('.main-photo').css('height','200px');
			$('.main-photo-div').css('top','50%');
			$('.main-photo-div').css('left','50%');
			$('.main-info').css('top','45%');
			
			$('#exp-timeline').css('width','125%');
			$('#exp-timeline').css('left','-15%');
			
			$('.skill-item').addClass('col-sm-12');
			$('.skill-item').removeClass('col-sm-6');
			$('.skill-item').removeClass('col-xs-12');
		}
	}
	else if (screensize == 'md')
	{
		$('.main-landing').css('max-width','90%');
		$('.myname').css('font-size','30pt');
		$('.mytitle').css('font-size','15pt');
		$('.myinfo-header').css('font-size','20pt');
		$('.link-linkedin').css('margin-left','75px');
		
		$('.main-photo').css('height','190px');
		$('.main-photo-div').css('top','50%');
		$('.main-photo-div').css('left','50%');
		$('.main-info').css('padding-left','20px');
		$('.main-info').css('top','40%');
		$('.myinfo-icon-div').css('padding-right','10px');
		$('.myinfo-icon-div').css('padding-left','10px');
	}
	else
	{
		$('.main-landing').css('max-width','80%');
		$('.needs_top_border_on_small').css('border-top-style','none');
		$('.myname').css('font-size','45pt');
		$('.mytitle').css('font-size','20pt');
		$('.myinfo-header').css('font-size','25pt');
		$('.link-linkedin').css('margin-left','180px');
		$('.main-photo').css('height','225px');
		$('.main-photo-div').css('top','50%');
		$('.main-photo-div').css('left','50%');
		$('.main-info').css('top','45%');
		
		$('.myinfo-icon-div').css('padding','60px');
	}
}

function display_skills(skills_array) {
	var float_str = 'float-left';
	var right_now = moment();
	var i = 0;
	
	$.each(skills_array, function(skill, skilldata) {
		i++;
		var yrs_str = '';
		var yrs = skilldata['duration_end'].diff(skilldata['duration_start'], 'years', true);
		
		if (yrs % 1 == 0 && yrs >= 1) {
			yrs_str = yrs;
			if (yrs == 1)
				yrs_str = yrs_str + ' year';
			else
				yrs_str = yrs_str + ' years';
		}
		else {
			var yr = skilldata['duration_end'].diff(skilldata['duration_start'], 'years');
			var mth = Math.ceil((yrs % 1)*12);
			
			if (mth == 12) {
				yr++;
				mth = 0;
			}
			if (yr > 0) {
				yrs_str = yr;
				if (yr == 1)
					yrs_str = yrs_str + ' year';
				else
					yrs_str = yrs_str + ' years';
			}
			
			if (mth > 0) {
				if (yrs_str != '')
					yrs_str = yrs_str + ' ' + mth;
				else
					yrs_str = yrs_str + ' ' + mth;
					
				if (mth == 1)
					yrs_str = yrs_str + ' month';
				else
					yrs_str = yrs_str + ' months';
			}
			
			yrs_str = $.trim(yrs_str);
		}
		
		if (right_now.diff(skilldata['duration_end'],'days') == 0) {
			skilldata['status'] = 'Status: Currently used<br>Duration: ' + yrs_str + '<br>Frequency: ' + skilldata['frequency'];
		}
		else {
			skilldata['status'] = 'Status: Last used ' + skilldata['duration_end'].fromNow() + '<br>Duration: ' + yrs_str; // + '<br>Frequency: ' + skilldata['frequency'];
		}
		
		if (i % 2 == 0)
			float_str = 'float-right';
		else
			float_str = 'float-left';
		
		var the_skill = "<div class='skill-item col-lg-6 col-sm-12 " + float_str + "'>"
						+ "<h5 class='myinfo-content-heading colour-fade-in-out'>" + skilldata['value'] + "% &bull; " + skilldata['label'] + "</h5>"
						+ "<div class='progress myprogress colour-fade-in-out'>"
						+ "<div id='progress-" + skill + "' class='progress-bar myprogress-bar colour-fade-in-out' role='progressbar' style='width: " + skilldata['value'] + "%;' aria-valuenow='" + skilldata['value'] + "' aria-valuemin='0' aria-valuemax='100'></div>"
						+ "</div>"
						+ "<p class='skill-blurb'>"
						+ skilldata['status']
						+ "</p>"
						+ "</div>";
		$('#skill_list').append(the_skill);
	});
}

$(function() {
	
	// alert($(window).width() + ' x ' + $(window).height());
	
	$('#skill_list').empty();
	
	display_skills(skillset);
	
	$('#skill_list').append("<div class='skill-item col-sm-12'><h5 class='myhr-heading colour-fade-in-out col-sm-12'><span>Older Skills<span><h5></div>");
	
	display_skills(old_skillset);
	
	adjust_layout();
	
	$('#the_spinner').fadeIn(500, function() {
		$('#the_spinner').fadeOut(700, function() {
			$('#the_page').fadeIn(700, function() {
				$('#main-photo').show();
				var t1 = setTimeout(function(){
					$('#first-name').show();
				},500);
				var t2 = setTimeout(function(){
					$('#last-name').show();
				},700);
				var t3 = setTimeout(function(){
					$('#my-title').show();
				},800);
				var t4 = setTimeout(function(){
					$('#linkedin-link').show();
				},1000);
				var t5 = setTimeout(function() {
					$('#github-link').show();
				}, 1100);
				var t6 = setTimeout(function() {
					$('#my-location').show();
				}, 1100);
				var t7 = setTimeout(function() {
					$('.main-photo').css({'border-color': '#aaaaaa'});
				}, 1100);
			});
		});
	});
	
	$('#btn-less').on('click', function() {
		$('.tl-more').slideUp();
		$('#btn-more').show();
		$('#btn-less').hide();
	});
	
	$('#btn-more').on('click', function() {
		$('.tl-more').slideDown();
		$('#btn-more').hide();
		$('#btn-less').show();
	});
	
	$('.myinfo-row').mouseover(function() {
		$(this).find('.myinfo-header').css({'color': '#ffb600', 'border-color': '#ffffff'});
		$(this).find('.myinfo-icon-div').css({'color': '#ffffff'});
		$(this).find('.timeline-badge').addClass('warning');
		$(this).find('.timeline-heading').css({'color': '#ffffff'});
		$(this).find('.timeline-panel').addClass('changed');
		$(this).find('.myinfo-content-heading').css({'color': '#ffffff'});
		$(this).find('.myprogress-bar').css({'background-color': '#ffb600'});
		$(this).find('.myhr-heading').css({'color': '#ffffff'});
		$(this).find('#intro-icon').addClass('wobble');
		$(this).find('#cog1').addClass('fa-spin');
		$(this).find('#cog2').addClass('spin-reverse');
		$(this).find('#work-icon').addClass('wobble');
		$(this).find('#edu-icon').addClass('wobble');
	});
	
	$('.myinfo-row').mouseleave(function() {
		$(this).find('.myinfo-header').css({'color': '#aaaaaa', 'border-color': '#aaaaaa'});
		$(this).find('.myinfo-icon-div').css({'color': '#aaaaaa'});
		$(this).find('.timeline-badge').removeClass('warning');
		$(this).find('.timeline-heading').css({'color': '#aaaaaa'});
		$(this).find('.timeline-panel').removeClass('changed');
		$(this).find('.myinfo-content-heading').css({'color': '#aaaaaa'});
		$(this).find('.myprogress-bar').css({'background-color': '#aaaaaa'});
		$(this).find('.myhr-heading').css({'color': '#aaaaaa'});
		$(this).find('#intro-icon').removeClass('wobble');
		$(this).find('#cog1').removeClass('fa-spin');
		$(this).find('#cog2').removeClass('spin-reverse');
		$(this).find('#work-icon').removeClass('wobble');
		$(this).find('#edu-icon').removeClass('wobble');
	});
	
	$('.scroll-top').on('click', function() {
		$('html, body').animate({
			scrollTop: 0
		}, 1000);
	});
	
	$('.nav-link').on('click', function(){
		$('#navbarToggler').collapse('hide');
	});
	
	nav_height = $('#the-nav').outerHeight();
});

function scroll_to(id) {
    $('html, body').animate({
        scrollTop: $('#' + id).offset().top - nav_height
    }, 1000, function() {
		$('.myinfo-row').trigger('mouseout');
		$('#' + id).trigger('mouseover');
	});
}

$(window).resize(function () {
	adjust_layout();
});

$(window).on('scroll', function(e) {
	let pos = $(this).scrollTop() + nav_height;
	
	$('.myinfo-icon-div').each(function() {
		if (pos > $(this).offset().top)
		{
			let curOffset_top = $(this).find('.myinfo-icon-span').offset().top - $(document).scrollTop();
			let curOffset_left = $(this).find('.myinfo-icon-span').offset().left;
			$(this).find('.myinfo-icon-span').css({
									position: 'fixed',
									top: curOffset_top,
									left: curOffset_left
			});
		}
		else
			$(this).find('.myinfo-icon-span').css({
									position: '',
									top: '',
									left: ''
			});
	});
});