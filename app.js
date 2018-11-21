var app = angular.module('myApp', []);

app.controller('movieCtrl', function($scope, $http) {

$scope.submitSearch = function (isValid){

$scope.searchHeader = "";

	  
	  $scope.urlsearch = "http://www.omdbapi.com/?t="+$scope.search+"&apikey=8edb56ae";
	  
	  $http.get($scope.urlsearch).then(function (response) {
      
	  $scope.myData = response.data;
	  
      $scope.searchHeader = "IMDB Search Result: " + $scope.myData.Title;  
          
      $scope.released = "Released Date: " +$scope.myData.Released;
    
      $scope.runtime = "RunTime of the movie: " +$scope.myData.Title+" is "+$scope.myData.Runtime+" long. ";
      
      $scope.country = "Country: " +$scope.myData.Country;
      
      $scope.boxOffice = "BoxOffice Collecitons in " +$scope.myData.Country+ " "+$scope.myData.BoxOffice;
      
      console.log(response.data.Poster);
          
      $scope.imageSource =  response.data.Poster;
          
      $scope.altText = $scope.myData.Title
      
      if($scope.myData.imdbRating >= 0 && $scope.myData.imdbRating <= 5 )
          {
           $scope.imdbR = "Okay Movie: " + $scope.myData.imdbRating + " " ;   
          }
      else if($scope.myData.imdbRating > 5 && $scope.myData.imdbRating < 7)
          {
           $scope.imdbR = "Average Movie: " + $scope.myData.imdbRating + " "  ;   
          }
      else if($scope.myData.imdbRating >= 7)
          {
           $scope.imdbR = "Good Movie: " + $scope.myData.imdbRating + " " ;
          }
	  //a catch all for if the returned JSON is undefined or has an error
      else {
      $scope.imdbR = "Invalid search, no results!";
      $scope.searchHeader = "";  
      }
      
  });

};
});