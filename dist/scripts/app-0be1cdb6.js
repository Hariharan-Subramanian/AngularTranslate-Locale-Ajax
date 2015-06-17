!function(){"use strict";angular.module("myPage",["ngAnimate","ngCookies","ngTouch","ngSanitize","ngResource","ui.router","ui.bootstrap","pascalprecht.translate"]).config(["$stateProvider","$urlRouterProvider",function(a,t){a.state("home",{url:"/",templateUrl:"app/main/main.html",controller:"MainCtrl"}).state("currentpaycheck",{url:"/currentpaycheck",templateUrl:"app/mymoney/currentpaycheck/currentpaycheck.html",controller:"PaycheckCtrl"}).state("timecardhistory",{url:"/timecardhistory",templateUrl:"app/mytime/timecard/timercardhistory.html",controller:"PaycheckCtrl"}),t.otherwise("/")}]).config(["$translateProvider",function(a){a.useStaticFilesLoader({prefix:"../locale/locale-",suffix:".json"}),a.use("de_DE")}])}(),function(){"use strict";function a(a){this.getDashboardData=function(){return a.get("./data/dashboard.json")},this.getTimecardEditData=function(){return a.get("./data/timecardedit.json")},this.getCurrentpayCheckData=function(){return a.get("./data/currentpaycheck.json")},this.getTimecardHistoryData=function(){return a.get("./data/timecardhistory.json")}}angular.module("myPage").service("dataService",a),a.$inject=["$http"]}(),function(){"use strict";angular.module("myPage").directive("mpFooter",function(){return{restrict:"E",templateUrl:"app/components/navbar/footer.html"}}).directive("mpHeader",function(){return{restrict:"E",templateUrl:"app/components/navbar/header.html"}})}(),angular.module("myPage").controller("NavbarCtrl",["$scope",function(a){a.date=new Date}]),function(){"use strict";function a(a){function t(){return a.getDashboardData().then(function(a){e.data=a})}var e={data:null,getDashboardData:t};return e}angular.module("myPage").service("dashboardService",a),a.$inject=["dataService"]}(),function(){"use strict";angular.module("myPage").directive("mpInfoTable",function(){return{restrict:"A",scope:{data:"=",togglePersonalInfo:"="},templateUrl:"app/main/infotable.html"}})}(),function(){"use strict";function a(a,t,e){function i(){e.getDashboardData().then(function(){s=e.data.data,o.summaryData=s.summaryData,o.infoData=s.infoData,o.timeAwayData=s.timeAwayData,o.currentEsppData=s.currentEsppData})}function r(){o.showPersonalInfo=!o.showPersonalInfo}function n(){t.use("en_US"===t.use()?"de_DE":"en_US")}var o=this,s={};o.showPersonalInfo=!1,o.togglePersonalInfo=r,o.changeLocale=n,i()}angular.module("myPage").controller("MainCtrl",a),a.$inject=["$scope","$translate","dashboardService"]}(),function(){"use strict";function a(a){function t(){return a.getTimecardEditData().then(function(a){e.data=a.data})}var e={data:null,getTimecardEditData:t};return e}angular.module("myPage").service("timecardEditService",a),a.$inject=["dataService"]}(),function(){"use strict"}(),function(){"use strict";function a(a,t){function e(){t.getTimecardEditData().then(function(){r=t.data.timepairsData,i.timepairsData=r})}var i=this,r={};e()}angular.module("myPage").controller("TimecardEditCtrl",a),a.$inject=["$scope","timecardEditService"]}(),function(){"use strict";function a(a){function t(){return a.getTimecardHistoryData().then(function(a){e.data=a.data})}var e={data:"",getTimecardHistoryData:t};return e}angular.module("myPage").service("timecardHistoryService",a),a.$inject=["dataService"]}(),function(){"use strict";function a(a,e,i){function r(){i.getTimecardHistoryData().then(function(){l=i.data.durationData,s.durationData=l})}function n(){i.getTimecardHistoryData().then(function(){l=i.data.durationCompareData,s.durationData=l})}function o(){s.modalInstance=e.open({templateUrl:"/app/mytime/timecard/timcardhistoryhelp.html",controller:t})}var s=this;s.modalInstance,s.applyDurationdate=n,s.openHelpModal=o;var l={};r()}function t(a,t){a.timecardHelpModalClose=function(){t.dismiss("cancel")}}angular.module("myPage").controller("timecardHistoryCtrl",a),a.$inject=["$scope","$modal","timecardHistoryService"],t.$inject=["$scope","$modalInstance"]}(),function(){"use strict";function a(a){function t(){return a.getCurrentpayCheckData().then(function(a){e.data=a.data})}var e={data:null,getCurrentPaycheckData:t};return e}angular.module("myPage").service("currentPaycheckService",a),a.$inject=["dataService"]}(),function(){"use strict";angular.module("myPage").directive("mpPrimarypayTable",function(){return{restric:"A",scope:{data:"=",hideHeader:"="},templateUrl:"app/mymoney/currentpaycheck/primarypaytable.html"}})}(),function(){"use strict";function a(a,e,i){function r(){i.getCurrentPaycheckData().then(function(){s=i.data,o.employeeData=s.employeeData,o.durationData=s.durationData,o.taxData=s.taxData,o.earningsData=s.earningsData,o.deductionData=s.deductionData,o.pretaxData=s.pretaxData,o.posttaxData=s.posttaxData,o.otherinfoData=s.otherinfoData,o.netpayData=s.netpayData,o.federalData=s.federalData})}function n(){o.modalInstance=e.open({templateUrl:"/app/mymoney/currentpaycheck/currentpaycheckprinthelp.html",controller:t})}var o=this,s={};o.openHelpModal=n,r()}function t(a,t){a.currentpaycheckHelpModalClose=function(){t.dismiss("cancel")}}angular.module("myPage").controller("PaycheckCtrl",a),a.$inject=["$scope","$modal","currentPaycheckService"],t.$inject=["$scope","$modalInstance"]}(),angular.module("myPage").run(["$templateCache",function(a){a.put("app/main/infotable.html",'<div class="table-responsive"><table class="table"><thead><tr><th colspan="2"><div></div>{{data.title}}</th></tr></thead><tbody><tr ng-repeat="(propkey,propvalue) in data.data"><td>{{propkey}}</td><td ng-show="!!togglePersonalInfo">{{propvalue}}</td></tr></tbody></table></div>'),a.put("app/main/main.html",'<div class="home-container" id="container"><div class="row" ng-controller="MainCtrl as vm"><div class="col-sm-4 col-md-4"><h5 class="news">Welcome to myPage!</h5><p>myPage is a self-service tool that allows you to view your compensation, update personal information, and more.</p><h5 class="news"><a target="_blank" href="https://hrweb.apple.com/US/en/subtopic/604">2015 Open Enrollment is here.</a></h5><p>Change or confirm your benefits by November 14.</p><h5 class="news">Vacation Cash Out ends October 31.</h5><p>Eligible employees can cash out one day of accrued vacation day for each day taken between June 1 and the end of October. Submit requests by November 14.</p><h5 class="news">Keep your profile current.</h5><p>Now you can add the languages you speak and more on the the newly updated myInfo tab. <a href="https://mypage.apple.com/myPage/myInfo.action">Take a minute to get current</a>.</p><div id="questions"><h3>Paycheck Questions?</h3>Visit the <a target="_blank" href="http://financeweb.apple.com/payroll">Payroll website</a> or contact the <a href="mailto:hrhelpline@apple.com">HR HelpLine</a>.<h3>Time Away Questions?</h3>View <a target="_blank" href="https://hrweb.cdn-apple.com/US/en">Time Away</a> information on HRWeb or email the <a target="_blank" href="mailto:hrhelpline@apple.com">HR HelpLine</a>.<h3>Benefits Questions?</h3>View general <a target="_blank" href="https://hrweb.cdn-apple.com/US/en/subtopic/45">benefits</a> information on HRWeb, log in to the <a target="_blank" href="http://benefits.apple.com">Benefits Enrollment Tool</a>, or email the <a target="_blank" href="mailto:hrhelpline@apple.com">HR HelpLine</a>.</div></div><div class="col-sm-4 col-md-4 mp-table col-divider"><div mp-info-table="" class="icon-info-table" toggle-personal-info="true" data="vm.timeAwayData"></div><div class="priceHistory"><a href="#currentpaycheck" class="arrow">Time Away History</a></div><div mp-info-table="" class="icon-info-table current-espp" toggle-personal-info="true" data="vm.currentEsppData"></div><div class="link"><a href="#timecardhistory" class="arrow">ESPP Tax Info and Price History</a></div><div id="benCal"><h2 class="news">Benefits Information</h2><ul><li><a href="https://hrweb.apple.com/subtopic/431" target="_blank">Holiday Schedule</a></li><li><a href="http://benefits.apple.com/" target="_blank">My Benefits Summary</a></li><li><a href="http://www.apple401k.com/" target="_blank">401(k) - Schwab</a></li></ul></div></div><div class="col-sm-4 col-md-4 mp-table"><div ng-click="vm.togglePersonalInfo()"><span class="personal-info" ng-show="vm.showPersonalInfo"><a href="javascript:;"><img src="/assets/images/opened.gif" alt="open widget" width="13" height="15" border="0" class="hidearrow"> Hide Personal Info</a></span> <span class="personal-info" ng-show="!vm.showPersonalInfo"><a href="javascript:;"><img src="/assets/images/closed.gif" alt="open widget" width="13" height="15" border="0" class="hidearrow"> Show Personal Info</a></span></div><div mp-info-table="" class="secondary-info-table" toggle-personal-info="vm.showPersonalInfo" data="vm.summaryData"></div><div mp-info-table="" class="secondary-info-table" toggle-personal-info="vm.showPersonalInfo" data="vm.infoData"></div><span class="text-xsmall">* If applicable, this is your adjusted date of hire.</span></div></div><div class="divider-horizontal"></div><div class="row container panel-padding top-space-20 left-space-20"><a href="javascrip:;"><img src="/assets/images/hrweb_icon.gif" alt="getting started"></a> <a href="javascrip:;"><img src="/assets/images/gsbutton.gif" alt="hrweb"></a></div></div>'),a.put("app/components/navbar/footer.html",'<footer class="well well-sm footer"><div class="container-fluid"><div class="row"><p>© 2015 Apple Inc. AppleWeb is for the business use of employees, temporary agency workers, and independent contractors of Apple and its subsidiaries, and should not be distributed or discussed outside of Apple Inc.</p></div></div></footer>'),a.put("app/components/navbar/header.html",'<header><div class="container-fluid"><div class="row well well-sm"><div class="pull-left"><figure><img src="assets/images/apple.png" alt="apple logo"> <img src="assets/images/mypage_logo.png" alt="My page"></figure></div><div class="pull-right" style="width:auto;"><img src="assets/images/avatar.png" alt="apple logo" class="pull-left avatar-icon"><div class="dropdown well-sm pull-right"><p id="loginmenu" data-toggle="dropdown">Shirley Chan <span class="caret"></span></p><ul class="dropdown-menu" role="menu" aria-labelledby="loginmenu"><li role="presentation"><a role="menuitem" tabindex="-1" href="#">Sign out</a></li></ul></div></div></div></div></header>'),a.put("app/components/navbar/navbar.html",'<nav class="navbar navbar-static-top navbar-inverse" ng-controller="NavbarCtrl"><div class="container-fluid"><div class="navbar-header"><a class="navbar-brand" href="https://github.com/Swiip/generator-gulp-angular"><span class="glyphicon glyphicon-home"></span> Gulp Angular</a></div><div class="collapse navbar-collapse" id="bs-example-navbar-collapse-6"><ul class="nav navbar-nav"><li class="active"><a ng-href="#">Home</a></li><li><a ng-href="#">About</a></li><li><a ng-href="#">Contact</a></li></ul><ul class="nav navbar-nav navbar-right"><li>Current date: {{ date | date:\'yyyy-MM-dd\' }}</li></ul></div></div></nav>'),a.put("app/mymoney/currentpaycheck/currentpaycheck.html",'<div class="paycheck-container" ng-controller="PaycheckCtrl as vm"><div class="inner-container"><div class="row"><div class="col-sm-12 col-md-12"><h3>Current Paycheck <span class="help1"><a ng-click="vm.openHelpModal()" href="javascript:;">Printing Tips</a></span></h3><div class="paycheck"><table width="100%" border="0" cellspacing="0" cellpadding="10"><tbody><tr><td><div class="logo"><p>Apple Inc.<br>12545 Riata Vista Circle<br>Austin, TX 78727</p></div></td></tr><tr><td class="rightBold">Net Pay of</td><td class="bold">$100.00</td><td class="bold">will be available on</td><td class="bold">Jan 16, 2015</td><td>&nbsp;</td></tr><tr><td class="right">Payment made by:</td><td colspan="2">Deposit to Checking Account</td><td>123456789</td><td class="right">$100.00</td></tr><tr><td class="right">&nbsp;</td><td colspan="2">Deposit to Savings Account</td><td>123456789</td><td class="right">$200.00</td></tr><tr><td class="right">&nbsp;</td><td colspan="2">Deposit to Savings Account</td><td>123456789</td><td class="right">$300.00</td></tr><tr><td class="right">&nbsp;</td><td colspan="2">Live Check</td><td>1234567</td><td class="right">$100.00</td></tr><tr><td class="right">Payment issued to:</td><td colspan="4">Ashish Aneja</td></tr><tr><td>&nbsp;</td><td colspan="2" valign="top"><p>Add Line 1 Add Line 2<br>Cupertino, CA 95014<br></p></td><td colspan="2" class="rightBoldBig">NON-NEGOTIABLE</td></tr></tbody></table></div></div></div><div class="row"><div class="col-sm-12 col-md-12"><div class="link"><a href="javascript:;" class="arrow">Pay History</a></div></div></div></div><div mp-primarypay-table="" data="vm.employeeData" class="primary-paytable"></div><div mp-primarypay-table="" data="vm.durationData" class="primary-paytable"></div><h4>Taxes</h4><div style="border-bottom: 1px solid #efefef"></div><div mp-primarypay-table="" data="vm.taxData" class="primary-paytable"></div><h4>Earnings</h4><div mp-primarypay-table="" data="vm.earningsData" class="primary-paytable result-table"></div><h4>Deductions</h4><div mp-primarypay-table="" data="vm.deductionData" class="primary-paytable result-table"></div><div mp-primarypay-table="" data="vm.pretaxData" class="primary-paytable result-table"></div><div mp-primarypay-table="" data="vm.posttaxData" class="primary-paytable result-table"></div><div mp-primarypay-table="" hide-header="true" data="vm.netpayData" class="primary-paytable result-table"></div><h4>Comments</h4><div class="well well-sm">Production Comments removed</div><div mp-primarypay-table="" data="vm.otherinfoData" class="primary-paytable"></div><p style="font-style:italic;"><font size="+1">*</font>Included in federal taxable wages</p><h4></h4><div mp-primarypay-table="" hide-header="true" data="vm.federalData" class="primary-paytable result-table"></div></div>'),a.put("app/mymoney/currentpaycheck/currentpaycheckprinthelp.html",'<div class="modal-header"><h3 class="modal-title pull-left">Help</h3><button type="button" class="close pull-right" ng-click="currentpaycheckHelpModalClose()" data-dismiss="modal">&times;</button><div class="clearfix"></div><h4 class="top-space-20">Printing Tips</h4></div><div class="modal-body">Because myPage was developed for Safari, Safari automatically formats your page for printing. No special print settings are required.</div><div class="modal-footer"><button class="btn btn-primary" ng-click="currentpaycheckHelpModalClose()">Close</button></div>'),a.put("app/mymoney/currentpaycheck/primarypaytable.html",'<table class="table"><thead><tr ng-if="hideHeader!=true"><th ng-repeat="(propkey,propvalue) in data[0]">{{propkey.replace(\'-\',\' \')}}</th></tr></thead><tbody><tr ng-repeat="rowvalue in data"><td ng-repeat="rowdata in rowvalue">{{rowdata}}</td></tr></tbody></table>'),a.put("app/mytime/timecard/timcardhistoryhelp.html",'<div class="modal-header"><h3 class="modal-title pull-left">Help</h3><button type="button" class="close pull-right" ng-click="timecardHelpModalClose()" data-dismiss="modal">&times;</button><div class="clearfix"></div><span class="padding-large-vertical">Timecard</span></div><div class="modal-body"><p>Fill out your timecard using timepairs—a start and end time that reflects the hours you work.</p><p>For example:</p><ul><li>8:00 a.m. - 12:00 p.m.</li><li>1:00 p.m. - 5:00 p.m.</li></ul><p>For US and Canada employees, lunch breaks should not be included as a timepair in the timecard.</p><h4>To submit a timecard:</h4><p>1. Click the date for which you want to enter hours worked.</p><p>2. Enter the start and end time. Use the green “+” icon to account for time before and after a lunch break.</p><p>3. Save your timecard.</p><p>4. Enter your hours worked for each day, then submit your timecard for the pay period.</p><p>Approved time away on myPage appears in the timecard and is visible via Time Away Request > Time Away History.</p><p>Shift premium and overtime hours auto-calculate into the timecard and appear as a separate line item from regular hours.</p><p>If you need to make changes, make sure you withdraw the timecard before your manager approves it. View the myPage: Create Submit Timecard quick reference guide for more information.</p><h4>To make a Timecard Adjustment Request:</h4><p>1. Click the Timecard Adjustment Request button.</p><p>2. Enter the time in and time out for the hours you actually worked.</p><p>3. Select the reason for the adjustment.</p><p>4. If you’re making multiple adjustments, click the green “+” icon to add additional time in and time out.</p><p>5. Select the acknowledgement checkbox and click Submit.</p><p>The Request History displays a summary of your request. You can edit and delete requests until your manager approves them. Once the request has been processed by Payroll, it can’t be changed and you will need to submit a new request.</p><p>A Completed status indicates that your request has been processed by Payroll and the adjustment will be reflected in one to two pay periods.</p><p>View the myPage: Make Timecard Edits for Previous Pay Periods quick reference guide for more information.</p></div><div class="modal-footer"><button class="btn btn-primary" ng-click="timecardHelpModalClose()">Close</button></div>'),a.put("app/mytime/timecard/timecardedit.html",'<div class="container timecard-edit"><div class="period-info"><div class="row"><span class="timepair-info pull-left">Timepairs for May 16, 2015</span> <span class="weekpair-info pull-right">Week 1: May 16, 2015 to May 22, 2015</span></div><div class="row timecard-content"><div class="table-responsive"><table class="table table-hover"><thead><tr><th>Paycode</th><th>From: Date and Time</th><th>To: Date and Time</th><th>Location</th><th>Amount</th></tr></thead><tbody><tr ng-repeat="timeData in vm.timepairsData"><td>{{timeData.payCode}}</td><td>{{timeData.fromDateTime}}</td><td>{{timeData.toDateTime}}</td><td>{{timeData.location}}</td><td>{{timeData.amount}}</td></tr></tbody></table></div></div></div></div>'),a.put("app/mytime/timecard/timercardhistory.html",'<div class="container-fluid cardhitory-container" ng-controller="timecardHistoryCtrl as vm"><h4>Timecard History <span><a ng-click="vm.openHelpModal()">Help</a></span></h4><div class="row"><h5>Search by date range</h5><div class="well well-lg"><div class="row"><div class="col-md-8"><div class="row"><div class="col-md-6"><p class="input-group"><input type="text" class="form-control" ng-model="dt" is-open="$parent.opened" min-date="minDate" max-date="\'2015-06-22\'" datepicker-options="dateOptions" ng-required="true" close-text="Close" required="required" onfocus="(this.type=\'date\')" placeholder="Start Date (MM/DD/YYYY)"> <span class="input-group-btn"><button type="button" class="btn btn-default"><i class="glyphicon glyphicon-calendar"></i></button></span></p></div><div class="col-md-6"><p class="input-group"><input type="text" class="form-control" options="dateOptions" date-disabled="disabled(date, mode)" ng-required="true" close-text="Close" required="required" placeholder="End Date (MM/DD/YYYY)" onfocus="(this.type=\'date\')"> <span class="input-group-btn"><button type="button" class="btn btn-default"><i class="glyphicon glyphicon-calendar"></i></button></span></p></div></div></div><div class="col-md-4"><button type="button" ng-click="vm.applyDurationdate()" class="btn btn-default">Apply</button></div></div></div><h5 class="top-vspace">Pay Periods from Dec 11, 2014 to May 07, 2015</h5><a class="whatsthis" href="javascript:;"><img ng-click="vm.openHelpModal()" src="/assets/images/question.png" alt="what is this?" class="question"></a><div mp-primarypay-table="" data="vm.durationData" class="primary-paytable"></div></div></div>')}]);