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
			
			
					//Function to add a new student to local storage
					$scope.addStudentData = function () {
						//Student variable is assigned to user inputted data
						var student = angular.copy($scope.addStudent);
						//Marks array is created
						student.marks = []; //empty array
						//Student is pushed to local storage.
						$scope.storage.tutra.push(student)
						$scope.addStudent = {};
					
						
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

				//This function removes the last item in the marks array, and then redraws the chart.
				$scope.undoMark = function (){
						//Removes the last array item, Adam showed me thie. Thought it was pretty smart.
						$scope.student.marks.splice($scope.student.marks.length - 1, 1)
						//Calls the studentDashboard function, so the Chart is redrawn with the now redacted data.
						$scope.studentDashboard($scope.student)
						//Console logs "Mark Undone", was there just to test ng-click was firing
						console.log("Mark Undone")
					};
					
					
					//ChartJS init and plot function.
					$scope.studentDashboard = function(student) {
						//Puts student dataset on the scope. 
						$scope.student = student;
						//kill old canvas, this ensures no clashing when you leave the page and come back.
						$('#myChart').remove();
						//re-create it with jquery, appends canvas element to page
						$('#dashboard-content').prepend('<canvas id="myChart" width="402" height="402" style="width: 402px; 			                        height: 402px;" class="ui-block-c"></canvas>');
						//re-create it with chart.js, after 250ms (why 250 I do not know)
						setTimeout(function() {
							//Getting the context of the canvas, determines what style of media is to be displayed.
							var studentGrades = document.getElementById('myChart').getContext('2d');
							gradeChart = new Chart(studentGrades).Line({
								labels : $scope.student.marks.map(function(mark) { return mark.assessmentNum }),
								datasets : [
									{
										//Line colour and styles, and plots. JSON formatted.
										fillColor : "rgba(172,194,132,0.4)",
										strokeColor : "#ACC26D",
										pointColor : "#fff",
										pointStrokeColor : "#9DB86D",
										data : $scope.student.marks.map(function(mark) { return mark.mark })
									}
								]
							});
							//If all goes smoothely, console logs a success. 
							console.log('Success');
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
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		