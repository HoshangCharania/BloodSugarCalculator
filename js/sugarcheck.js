angular.module('HealthApp', [])
    .controller('HealthController', function($scope) {
        
        $scope.deleteAll = function(){
           afterOp=0.0;
           f_value=0.0;
           first_entry=true;
           old_value_op='add';
           $scope.value = null;
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
            $scope.classification= $scope.value+"mg/dL is LOW";
        }else if((number>=70) & (number<=110)){
            $scope.classification= $scope.value+"mg/dL is NORMAL";
        }else if((number>=111) & (number<=125)){
            $scope.classification= $scope.value+"mg/dL is PRE-DIABETES";
        }else if((number>=126)){
            $scope.classification= $scope.value+"mg/dL is DIABETES";
        }
    }
    $scope.checkWithoutFast =function(){
        if(number<=69){
            $scope.classification= $scope.value+"mg/dL is LOW";
        }else if((number>=70) & (number<=140)){
            $scope.classification= $scope.value+"mg/dL is NORMAL";
        }else if((number>=141) & (number<=160)){
            $scope.classification= $scope.value+"mg/dL is PRE-DIABETES";
        }else if((number>=161)){
            $scope.classification= $scope.value+"mg/dL is DIABETES";
        }
    }

    });

