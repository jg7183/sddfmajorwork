 var app = angular.module('myApp',['ngStorage','flow']);
		
		
		
        app.controller('myController', function($scope, $localStorage) {
			
					$scope.storage = $localStorage.$default({
						tutra:[{
							stID: 0,
							fname: "Spider",
							lname: "Man",
							subject: "Chemistry",
							grade: "A",
							day:"Wednesday",
							marks: [{
								mark: 10,
								assessmentNum: 1
							}, {
								mark: 20,
								assessmentNum: 2
							}, {
								mark: 10,
								assessmentNum: 3
							}]
						}]
					});
					  // end of creating localStorage 'datasource'		
			
			
			
					$scope.addStudentData = function () {
						
						var student = angular.copy($scope.addStudent);
						student.marks = []; //empty array
						$scope.storage.tutra.push(student)
						$scope.addStudent = {};
					
						//$scope.successfullyAdded = true;
					}; //end addPerson
				
					$scope.addStudentDayTime = function () {
						$scope.student.day = $scope.addStudent.day;
						$scope.student.time = $scope.addStudent.time;
						
						
						//$scope.successfullyAdded = true;
					}; //end addPerson
				
				$scope.newMark = {
					mark: 0,
					assessmentNum: 0
				};

				$scope.addStudentMark = function () {
					//get the marks and add it to the student
					$scope.student.marks.push({
						mark: $scope.newMark.mark,
						assessmentNum: $scope.newMark.assessmentNum
					});

					//now add it to the chart
					gradeChart.addData([$scope.newMark.mark], $scope.newMark.assessmentNum);
					gradeChart.update();
				}; //end addPerson

				$scope.undoMark = function (){
					
					gradeChart.removeData();
					gradeChart.update();
					console.log("Mark Undone")
					};
					
					
					$scope.studentDashboard = function(student) {
						/*$scope.stID = student.stID;
						$scope.fname  = student.fname;
						$scope.lname  = student.lname;
						$scope.subject  = student.subject;
						$scope.grade  = student.grade;
						$scope.day = student.day;*/
						$scope.student = student;
						//kill old canvas
						$('#myChart').remove();
						//re-create it with jquery
						$('#dashboard-content').prepend('<canvas id="myChart" width="402" height="402" style="width: 402px; height: 402px;" class="ui-block-c"></canvas>');
						//re-create it with chart.js, after 250ms (why 250 I do not know)
						setTimeout(function() {
							var studentGrades = document.getElementById('myChart').getContext('2d');
							gradeChart = new Chart(studentGrades).Line({
								labels : $scope.student.marks.map(function(mark) { return mark.assessmentNum }),
								datasets : [
									{
										fillColor : "rgba(172,194,132,0.4)",
										strokeColor : "#ACC26D",
										pointColor : "#fff",
										pointStrokeColor : "#9DB86D",
										data : $scope.student.marks.map(function(mark) { return mark.mark })
									}
								]
							});
							console.log('ok');
						}, 250);
					}
					
			







					// This deletes or clears ALL records in your localstorage
					// Be careful when using this
					$scope.clearAll = function(){
							$localStorage.$reset();	
					};	// end clearALL	
		
		//Initialises deletion process.
		$scope.deleteStudent = function (index) {
								$scope.index 		= 		index; 
								$scope.stID 		= 		$scope.storage.tutra[index].stID ;
								$scope.fname 		= 		$scope.storage.tutra[index].fname ;
								$scope.lname 	    = 		$scope.storage.tutra[index].lname ;
								$scope.subject 		= 		$scope.storage.tutra[index].subject ;
								$scope.grade 	    = 		$scope.storage.tutra[index].grade;
								$scope.day          = 		$scope.storage.tutra[index].day; 
								
								
					};	
					
				//confirms deletion
				$scope.deleteStudentYes = function (index) {
							; 
								$scope.storage.tutra.splice(index, 1);
							
								console.log("Deleted")
								
					};				

		$scope.editStudent = function (index) {
								$scope.index 		= 		index; 
								$scope.stID 		= 		$scope.storage.tutra[index].stID ;
								$scope.fname 		= 		$scope.storage.tutra[index].fname ;
								$scope.lname 	    = 		$scope.storage.tutra[index].lname ;
								$scope.subject 		= 		$scope.storage.tutra[index].subject ;
								$scope.grade 	    = 		$scope.storage.tutra[index].grade;
								$scope.day          = 		$scope.storage.tutra[index].day; 
								
								
					};	

        });  // end of myController
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		