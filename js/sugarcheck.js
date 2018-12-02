angular.module('HealthApp', [])
    .controller('HealthController', function($scope) {
        $('.startup').append("<div class='alert alert-success alert-dismissable'><button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;</button>Welcome to Blood Sugar Level Calculator</div>")
        
        $scope.clear = function(){
            $scope.value="";
            $scope.widget.title="";
        }
        $scope.updateOutput =function(number){
            if(($scope.value == null) || ($scope.value == undefined)){
                $scope.value="";
            }
            if(typeof number=="number" || number=="."){
            number=number.toString();
            $scope.value =$scope.value+number;
            $scope.widget = {title: $scope.value};
        }else if(number==null){
            $scope.value =$scope.widget.title;
        }
    }

    $scope.checkValid = function(){
        number=Number($scope.value);
        $scope.removeWarning();
        if((typeof number=="number") & (number>=0) & (number.toString().length<=20)){
            // do computation
            $scope.checkPeriod(number);
        }else{
            $scope.classification="";
            $('.parent').empty();
            $('.parent').append("<div class='alert alert-danger alert-dismissable'><button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;</button>Please Enter a Valid Input.</div>")
            $(".parent").fadeTo(2000, 500).slideUp(2000, function(){
                $(".parent").slideUp(2000);
                 });   
        }
    }

    $scope.checkPeriod= function(number){
        var diet=$('input[name=optradio]:checked').val();
        if(diet=="not-fasting"){
            $scope.checkWithoutFast();
        }else{
            $scope.checkWithFast();
        }
        }
    $scope.checkWithFast =function(){
        if(number<=69){
            $scope.classification= "Blood Sugar Level is LOW";
            $scope.warningLow();
        }else if((number>=70) & (number<=110)){
            $scope.classification= "Blood Sugar Level is NORMAL";
        }else if((number>=111) & (number<=125)){
            $scope.classification="Blood Sugar Level is PRE-DIABETES";
        }else if((number>=126)){
            $scope.classification= "Blood Sugar Level is DIABETES";
            $scope.warningHigh();
        }
    }
    $scope.checkWithoutFast =function(){
        if(number<=69){
            $scope.classification= "Blood Sugar Level is LOW";
            $scope.warningLow();
        }else if((number>=70) & (number<=140)){
            $scope.classification= "Blood Sugar Level is NORMAL";
        }else if((number>=141) & (number<=160)){
            $scope.classification= "Blood Sugar Level is PRE-DIABETES";
        }else if((number>=161)){
            $scope.classification= "Blood Sugar Level is DIABETES";
            $scope.warningHigh();
        }
    }

    $scope.warningLow = function(){
            $('.warning').append("<div class='alert alert-danger alert-dismissable'><button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;</button>Very low blood sugar could be life threatening, if you think this situation is an emergency, please call 911.</div>");
    }

    $scope.warningHigh = function(){
        $('.warning').append("<div class='alert alert-danger alert-dismissable'><button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;</button>Very High blood sugar could be life threatening, if you think this situation is an emergency, please call 911.</div>");
    }

    $scope.removeWarning = function(){
        $('.warning').empty();
    }

    });

