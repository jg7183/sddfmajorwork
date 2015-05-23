 var app = angular.module('myApp',['ngStorage','flow']);
		
		
		
        app.controller('myController', function($scope, $localStorage) {
			
					$scope.storage = $localStorage.$default({
    						tutra: [{
											stID: 0,
											fname: "Spider",
											lname: "Man",
											subject: "Chemistry",
											grade: "A",
											day:"Wednesday",
											newMark:[3,4,12,8]
										}									]
					});
					
					$scope.storage = $localStorage.$default({
    						tutraGradeStorage: [{
											
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
						
						
						//$scope.successfullyAdded = true;
					}; //end addPerson
				
				$scope.addStudentMark = function () {
						var marknum = 0;
						$scope.student.newMark = $scope.addStudent.newMark[marknum];
						$scope.student.newAssessment = $scope.addStudent.newAssessment[marknum];
						gradeChart.addData([$scope.student.newMark[marknum]],$scope.addStudent.newAssessment[marknum]);
						gradeChart.update();
						marknum++;
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
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		