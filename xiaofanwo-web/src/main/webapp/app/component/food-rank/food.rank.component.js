'use strict';

// Register `foodRank` component, along with its associated controller and template
angular.module('foodRank').component('foodRank', {
    templateUrl : 'app/component/food-rank/food.rank.template.html',
    controller :  function FoodRankController() {
        this.foods = [
              {
                  "isNew": false, 
                  "name": "鸭血粉丝汤"
              }, 
              {
                  "isNew": false, 
                  "name": "牛肉锅贴"
              }, 
              {
                  "isNew": false, 
                  "name": "盐水鸭"
              }, 
              {
                  "isNew": true, 
                  "name": "赤豆元宵"
              }, 
              {
                  "isNew": false, 
                  "name": "桂花糖芋苗"
              }, 
              {
                  "isNew": true, 
                  "name": "鸡汁汤包"
              }, 
              {
                  "isNew": false, 
                  "name": "鸭油酥烧饼"
              }, 
              {
                  "isNew": false, 
                  "name": "皮肚面"
              },
              {
                  "isNew": false, 
                  "name": "鸭油酥烧饼"
              }, 
              {
                  "isNew": false, 
                  "name": "梅花糕"
              }, 
              {
                  "isNew": false, 
                  "name": "什锦豆腐涝"
              }
          ];
        
    }
});
