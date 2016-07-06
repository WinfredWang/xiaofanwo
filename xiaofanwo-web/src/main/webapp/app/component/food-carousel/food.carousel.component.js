'use strict';

// Register `phoneList` component, along with its associated controller and template
angular.module('foodCarousel').component('foodCarousel', {
    templateUrl : 'app/component/food-carousel/food.carousel.template.html',
    controller :  function FoodCarouselController() {
        this.foods = [
            {
                "imageUrl": "images/carousel/food-r1.png", 
                "name": "FOOD TITLE1",
            }, 
            {
                "imageUrl": "images/carousel/food-r2.png", 
                "name": "FOOD TITLE2", 
            }, 
            {
                "imageUrl": "images/carousel/food-r3.png", 
                "name": "FOOD TITLE3", 
            }
        ];
        if (this.foods.length > 0) {
            this.foods[0].isActive = true;    
        }
        
    }
});
