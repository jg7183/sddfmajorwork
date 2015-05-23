 var app = angular.module('myApp',['ngStorage','flow']);
		
		
		
        app.controller('myController', function($scope, $localStorage) {
			
					$scope.storage = $localStorage.$default({
    						tutra: [{
											stID: 0,
											fname: "Spider",
											lname: "Man",
											subject: "Chemistry",
											grade: "A",
											day:"Wednesday"
										}									]
					});
					
					$scope.storage = $localStorage.$default({
    						tutraGradeStorage: [{
											mark:""
										}									]
					});
					  // end of creating localStorage 'datasource'		
			
			
			
					$scope.addStudentData = function () {
						$scope.storage.tutra.push(angular.copy($scope.addStudent));
						$scope.addStudent = {};
					
						//$scope.successfullyAdded = true;
					}; //end addPerson
				
					$scope.addStudentDayTime = function () {
						$scope.student.day = $scope.addStudent.day;
						$scope.student.time = $scope.addStudent.time;
						$scope.storage.tutra.push(angular.copy($scope.addStudent.day));
						
						//$scope.successfullyAdded = true;
					}; //end addPerson
				
				$scope.addStudentMark = function () {
					
						$scope.student.newMark = $scope.addStudent.newMark;
						$scope.student.newAssessment = $scope.addStudent.newAssessment;
						$scope.storage.tutraGradeStorage.push(angular.copy($scope.addStudent.newMark));
						gradeChart.addData([$scope.student.newMark],$scope.addStudent.newAssessment);
						gradeChart.update();
						//scope.storage.tutra.push(angular.copy($scope.addStudent.newMark));
						$scope.addStudent = {};
						//$scope.successfullyAdded = true;
				}; //end addPerson

					$scope.studentDashboard = function(student) {
						/*$scope.stID = student.stID;
						$scope.fname  = student.fname;
						$scope.lname  = student.lname;
						$scope.subject  = student.subject;
						$scope.grade  = student.grade;
						$scope.day = student.day;*/
						$scope.student = student;
					}
					
			







					// This deletes or clears ALL records in your localstorage
					// Be careful when using this
					$scope.clearAll = function(){
							$localStorage.$reset();	
					};	// end clearALL	

		$scope.deleteProduct = function (index) {
								$scope.index 		= 		index; 
								$scope.stID 		= 		$scope.storage.datasource[index].stID ;
								$scope.fname 		= 		$scope.storage.datasource[index].fname ;
								$scope.lname 	    = 		$scope.storage.datasource[index].lname ;
								$scope.subject 		= 		$scope.storage.datasource[index].subject ;
								$scope.grade 	    = 		$scope.storage.datasource[index].grade;
								$scope.day          = 		$scope.storage.datasource[index].day; 
								
								$scope.storage.datasource.splice(index, 1);
								console.log("Deleted")
								
					};	

        });  // end of myController
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		