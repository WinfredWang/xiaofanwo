'use strict';

// Register `foodDetail` component, along with its associated controller and template
angular.module('foodDetail').component('foodDetail', {
    templateUrl : 'app/component/food-detail/food.detail.template.html',
    controller :  function FoodDetailController() {
        this.food = {
            "name":"鸭血粉丝汤",
            "rankNum": "1",
            "detail":"在南京，卖鸭血粉丝汤的摊子星罗棋布，从路边的小吃摊，到成规模的连锁店。可以毫不夸张的说，没吃过南京的鸭血粉丝就等于没来过南京，最有名的要算是回味鸭血粉丝，除此之外，石记鸭血粉丝汤、金源鸭血粉丝、永和园鸭血粉丝汤、鸭得堡鸭血粉丝和金源鸭血粉丝都算是南京鸭血粉丝汤的名店。<br>精明的摊主预先将鸭血煮熟，切成小块放在锅中，见有游客来，便捞出鸭血装在白瓷碗里，然后浇上一勺滚烫的鲜汤，滴上数滴香油，撒上一撮虾米和鸭肝鸭肠衣等，再点上一撮香菜。爱吃辣的客人，还可以再加上些辣椒油或胡椒，又香、又辣、可口的味。<br>鸭血粉丝名店：<br>回味鸭血粉丝（湖南路店）、石记鸭血粉丝汤、永和园、鸭得堡<br>金源鸭血粉丝：玄武区锁金村医院东，近南师大紫金校区，另有多家分店。</p>",
            "imageUrl":"images/yaxuefensi.jpeg",
        }
    }
});
