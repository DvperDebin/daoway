1.    Day 01

      整体后台搭建
      首页布局完成

      学到布局一招固定套路 一个div中 图片居中 并且上下左右有相同padding:先设置盒子大小，再设置padding，设置盒模型
      内置一个 display block 的 a 标签，width，height 100%， 最后图片继承大小即可

2.    Day 02

      所有静态布局完成
      放弃EJS 模板 研究artTemplate 模板

      daoWay的布局真的很烂。。。很多高度塌陷以及没必要的样式代码，应当注意，引以为戒！
      但是pages的布局可以学习，父级盒子中所有的子级盒子都设为inline-block，text-align center，再设置margin-top，垂直居中
      这样不利用margin 0 auto 或者position 四方向都设为0 margin auto 也可以实现垂直水平居中4

      white-space:pre/pre-wrap的使用 简直难受。。。所有的内容文字都要顶左边头开始写，不然显示时会有缩进

      图片的居中 利用background-image 和 background-position center 更简单

3.    Day 03

      目标完成所有页面数据读取

      artTemplate each使用 {{each 传入的数据}}  {{each $value.传入数据的某个属性}} {{$value}} {{$index}} {{/each}}  {{/each}}
      总之就是{{$value}} 和 {{$index}}