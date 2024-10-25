var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

$(function () { 
     //Fix PNG's in IE6
     $('div.trim_image, div.package_image').pngFix();
                
     //Cancel click for selected section tab
     $('#specsTabs li.selected a').click(function(){return false;});
   
     //Set First Table oe each section open
     $('#specsTrimFeaturesContainer, #specsTrimSpecsContainer, #specsTrimPricingContainer').each(function(){
           $(this).find('.specs_trim_table_container .table_header').eq(0).addClass('open');
           $(this).find('.specs_trim_table_container .table_header').eq(0).addClass('table_header_dark');
           $(this).find('.specs_trim_table_container .table_content').eq(0).parent().addClass('table_content_open');      
          $(this).find('.specs_trim_table_container').eq(0).addClass('container_open');

     });
     //Open/Close Sections and set sIFR text replacement
     $('.specs_trim_table_container').each(function(){
           $(this).find('.table_header').click(function (){
                $('#specs_tool_tip').hide();
                if($(this).hasClass('open')){                   
                     $(this).parent().removeClass('table_content_open');
                     $(this).parent().removeClass('container_open');
                     $(this).removeClass('open');
                     $(this).removeClass('table_header_dark');
                }else{                     
                     $(this).parent().addClass('table_content_open');
                     $(this).parent().addClass('container_open');
                     $(this).addClass('open');
                     $(this).addClass('table_header_dark');
                }    
                return false;        
           });
           var selector = '#' + $(this).attr('id') + ' h3.specs_header_text';
           var $tableHeader = $('#' + $(this).attr('id') + ' .table_header');        
/*         sIFR.replace(univers, {
                selector: selector
                ,transparent: true
                ,onRelease: function() {if ($.browser.msie) $tableHeader.click();}     
                ,css: {
                       '.sIFR-root': { 'letter-spacing': '-0.3', 'color': '#3e3d3a', 'background-color': 'transparent', 'text-transform': 'uppercase', 'font-size': '13px'}
                }
           });*/
     });  

     // Style tables - Alternating rows, last-child  
     $('table tbody tr:even').addClass('altrow');
     $('table tbody tr:last-child').addClass('last_row');

     
     
     // Highlight differences   
     var intDifferencesCount = 0;
     $('.specs_trim_table_container').not('#specsTrimPricingContainer .specs_trim_table_container').addClass('no_difference');
     $('.specs_trim_table_container table').not('#specsTrimPricingContainer .specs_trim_table_container table').addClass('no_difference_table');
     $('table tbody tr').not('#specsTrimPricingContainer table tbody tr').each(function () {
           var td = $(this).find('td').eq(1);
           var contents = td.html();
           
           td.nextAll().each(function () {
                if (contents !== $(this).html() && $(this).html() !== '') {
                     $(this)
                           .parents('tr').addClass('difference')
                           .parents('table').removeClass('no_difference_table')
                          .parents('.specs_trim_table_container').removeClass('no_difference');
                     intDifferencesCount = intDifferencesCount + 1;
                }
           });
     });
     
     if(intDifferencesCount != 0){
           var arrow = $('.button_differences a img');
           var tempLinkLabel = '';
           $('.button_differences a').toggle(function () {
                tempLinkLabel = $(this).attr('rel');            
                $(this).attr('rel', $(this).text());            
                $(this).text(tempLinkLabel).append(arrow);
                $('tbody tr:not(.difference)').hide(); 
                $('table.no_difference_table').hide(); 
                $('div.no_difference').hide();
                $('.static_table').css('height',1);
           }, function () { 
                tempLinkLabel = $(this).attr('rel');            
                $(this).attr('rel', $(this).text());            
                $(this).text(tempLinkLabel).append(arrow);
                $('tbody tr:not(.difference)').show(); 
                $('table.no_difference_table').show(); 
                $('div.no_difference').show();
                $('.static_table').css('height',1);
           });
     }else{
           $('.specs_differences').hide(); 
     }

     // Find the largest of things
     var maxPackageDetails = 0;
     var maxPackageTitleHeight = 0;
     var maxPackageTotalHeight = 0;
     var maxPackageDetailHeight = 0;
     $('.package_container').each(function () {
           var packageDetails = $(this).find('.package_detail li').length;
           maxPackageDetails = (packageDetails > maxPackageDetails) ? packageDetails : maxPackageDetails;

           $(this).find('.package_detail li').each(function () {
                maxPackageDetailHeight = ($(this).height() > maxPackageDetailHeight) ? $(this).height() : maxPackageDetailHeight;
           });
           
           var packageTitleHeight = $(this).find('.package_title').height();
           maxPackageTitleHeight = (packageTitleHeight > maxPackageTitleHeight) ? packageTitleHeight : maxPackageTitleHeight;
           
           var packageTotalHeight = $(this).find('.package_total').height();
           maxPackageTotalHeight = (packageTotalHeight > maxPackageTotalHeight) ? packageTotalHeight : maxPackageTotalHeight;
     });
     
     maxPackageTitleHeight += 10;
     
     // Standardize heights
     $('.package_container').each(function () {
           var packageDetails = $(this).find('.package_detail li');
           if (packageDetails.length < maxPackageDetails) {
                for (var i = 0; i < (maxPackageDetails - packageDetails.length); i++) {
                     $(this).find('.package_detail').append('<li></li>');
                }
           }
           
           $(this).find('.package_detail li').each(function () {
                if ($(this).height() < maxPackageDetailHeight) {
                      $(this).height(maxPackageDetailHeight);
                }
           });
           
           var packageTitle = $(this).find('.package_title');
           if (packageTitle.height() < maxPackageTitleHeight) {
                packageTitle.height(maxPackageTitleHeight);
           }
           
           var packageTotal = $(this).find('.package_total');
           if (packageTotal.height() < maxPackageTotalHeight) {
                packageTotal.height(maxPackageTotalHeight);
           }
     });

     // Add altrow style
     $('.package_container').each(function () {
           $(this).find('.package_detail li:odd').addClass('altrow');
     });

     // Handle Packages Filtering
     $('.specs_trim_table_container.packages p.packages_filter a').click(function(){
           if (!$(this).hasClass('selected')){
                $('.specs_trim_table_container.packages p.packages_filter a').each(function(){
                     $(this).removeClass('selected')
                });
                $(this).addClass('selected');
                if($(this).attr('href').indexOf('all') > -1){
                     $('.package_container').each(function () {
                           $(this).show();
                     });
                }else{
                     var trimFilter = $(this).attr('href').split('#/');                              
                     $('.package_container').each(function () {
                           if($(this).hasClass(trimFilter[1])){
                                $(this).css('display','inline');                                           
                           }else{                                          
                                $(this).css('display','none');  
                           }
                     });
                }
           }
           return false;
     }); 
     
     // Tool Tip ====================================== 
    $('.description a').css('cursor','pointer');
    $('.description a').click(function(){
           var tiptop=($(this).position().top);
           var tipheight=($(this).height()/2); 
           var tipos=tiptop+tipheight-100;
           var tipname = $(this).attr('name');
           $(this).parent().parent().parent().parent().parent().find('#specs_tool_tip').empty().load('/ajax/features/tooltip.html #'+tipname);
           $(this).parent().parent().parent().parent().parent().find('#specs_tool_tip').css('top',tipos).show();
           return false;
     });
     
     $('.cluetip-close, body').click(function(){
           $(this).find('#specs_tool_tip').hide();
     });
     $('.table_header').click(function(){
           $(this).next('.table_content').find('#specs_tool_tip').hide();
           return false;
     });
     
});

}
/*
     FILE ARCHIVED ON 11:00:55 May 16, 2013 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 22:09:41 Oct 08, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.592
  exclusion.robots: 0.026
  exclusion.robots.policy: 0.011
  esindex: 0.012
  cdx.remote: 7.244
  LoadShardBlock: 77.998 (3)
  PetaboxLoader3.datanode: 89.067 (4)
  load_resource: 68.898
  PetaboxLoader3.resolve: 54.85
*/