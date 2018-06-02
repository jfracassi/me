var skillset = {'php':{'label':'PHP',
						'status':'',
						'frequency':'Daily',
						'duration_start':moment("2010-04-01"),
						'duration_end':moment(),
						'value':95},
				'html':{'label':'HTML',
						'status':'',
						'frequency':'Daily',
						'duration_start':moment("2005-02-01"),
						'duration_end':moment(),
						'value':95},
				'ci':{'label':'CodeIgniter',
						'status':'',
						'frequency':'Daily',
						'duration_start':moment("2013-01-01"),
						'duration_end':moment(),
						'value':90},
				'css3':{'label':'CSS3',
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
						'value':90},
				'jsonajax':{'label':'JSON / AJAX',
						'status':'',
						'frequency':'Daily',
						'duration_start':moment("2015-01-01"),
						'duration_end':moment(),
						'value':85},
				'sql':{'label':'MySQL / MSSQL',
						'status':'',
						'frequency':'Daily',
						'duration_start':moment("2005-02-01"),
						'duration_end':moment(),
						'value':95},
				'perl':{'label':'Perl / CGI',
						'status':'',
						'frequency':'Occasionally',
						'duration_start':moment("2005-02-01"),
						'duration_end':moment(),
						'value':80},
				'nix':{'label':'Linux / Unix',
						'status':'',
						'frequency':'Daily',
						'duration_start':moment("2010-04-01"),
						'duration_end':moment(),
						'value':75},
				'asp':{'label':'ASP',
						'status':'',
						'frequency':'Daily',
						'duration_start':moment("2005-02-01"),
						'duration_end':moment("2009-10-16"),
						'value':60},
				'csharp':{'label':'C#',
						'status':'',
						'frequency':'Daily',
						'duration_start':moment("2007-10-01"),
						'duration_end':moment("2009-10-31"),
						'value':60},
				'vb':{'label':'Visual Basic',
						'status':'',
						'frequency':'Daily',
						'duration_start':moment("2002-06-01"),
						'duration_end':moment("2004-05-31"),
						'value':60},
				'ccpp':{'label':'C / C++',
						'status':'',
						'frequency':'Daily',
						'duration_start':moment("1998-09-01"),
						'duration_end':moment("2003-06-30"),
						'value':50},
				'java':{'label':'Java',
						'status':'',
						'frequency':'Daily',
						'duration_start':moment("1998-09-01"),
						'duration_end':moment("2003-06-30"),
						'value':50}}

$(function() {
	$('#skill_list').empty();
	var right_now = moment();
	var i = 0;
	var float_str = 'float-left';
	$.each(skillset, function(skill, skilldata) {
		i++;
		var yrs_str = '';
		var yrs = skilldata['duration_end'].diff(skilldata['duration_start'], 'years', true);
		
		if (yrs % 1 == 0 && yrs >= 1) {
			yrs_str = yrs;
			if (yrs > 1)
				yrs_str = yrs_str + ' years';
			else
				yrs_str = yrs_str + ' year';
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
				if (yr > 1)
					yrs_str = yrs_str + ' years';
				else
					yrs_str = yrs_str + ' year';
				
				if (mth > 0) {
					yrs_str = yrs_str + ' ' + mth;
					if (mth > 1)
						yrs_str = yrs_str + ' months';
					else
						yrs_str = yrs_str + ' month';
				}
			}
			yrs_str = $.trim(yrs_str);
		}
		
		if (right_now.diff(skilldata['duration_end'],'days') == 0) {
			skilldata['status'] = 'Status: Currently used<br>Duration: ' + yrs_str + '<br>Frequency: ' + skilldata['frequency'];
		}
		else {
			skilldata['status'] = 'Status: Last used ' + skilldata['duration_end'].fromNow() + '<br>Duration: ' + yrs_str + '<br>Frequency: ' + skilldata['frequency'];
		}
		
		if (i % 2 == 0)
			float_str = 'float-right';
		else
			float_str = 'float-left';
		
		var the_skill = "<div class='col-lg-6 col-sm-12 " + float_str + "'>"
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
		$(this).find('#intro-icon').removeClass('wobble');
		$(this).find('#cog1').removeClass('fa-spin');
		$(this).find('#cog2').removeClass('spin-reverse');
		$(this).find('#work-icon').removeClass('wobble');
		$(this).find('#edu-icon').removeClass('wobble');
	});
		
});