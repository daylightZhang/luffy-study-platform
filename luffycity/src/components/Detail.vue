<template>
    <div class="course_detail">
      <Header></Header>
      <div class="content">
        <div class="course_info">
          <div class="video">视频</div>
          <div class="core">
            <h3>爬虫从入门到进阶</h3>
            <p class="student">
              <span>3335人在学</span>
              <span>课程总时长：65课时/17小时</span>
              <span>难度：高级</span>
            </p>
            <div class="active">
              <span class="discount_type">限时折扣</span>
              <span class="duration">距离结束：仅剩 196天 12小时 34分 <time>02</time> 秒</span>
            </div>
            <div class="price">
              <span class="tips">活动价</span>
              <span class="discount_price">¥99.50</span>
              <span class="original_price">¥199.00</span>
            </div>
            <div class="btn">
              <span class="buy_now">立即购买</span>
              <span class="free_study">免费试学</span>
              <span class="add_cart"><img src="/static/image/cart-yellow.svg" alt="">加入购物车</span>
            </div>
          </div>
        </div>
        <div class="course_nav">
          <ul>
            <li :class="index==0?'this':''" @click="index=0">详情介绍</li>
            <li :class="index==1?'this':''" @click="index=1">课程章节 <span class="free_btn">(试学)</span></li>
            <li :class="index==2?'this':''" @click="index=2">用户评论 (6)</li>
            <li :class="index==3?'this':''" @click="index=3">常见问题</li>
          </ul>
        </div>
        <div class="other_info">
          <div class="course_about">
              <div class="nav_item course_about"  v-show="index==0">
                <img src="/static/image/detail_详情介绍.jpeg" alt="">
                <img src="/static/image/detail_详情介绍2.jpeg" alt="">
              </div>
              <div class="nav_item course_about"  v-show="index==1">
                课程章节
              </div>
              <div class="nav_item course_about"  v-show="index==2">
                用户评论
              </div>
              <div class="nav_item course_about"  v-show="index==3">
                常见问题
              </div>
          </div>
          <div class="teacher_about"></div>
        </div>
      </div>
      <Footer></Footer>
    </div>
</template>

<script>
import Header from "./common/Header"
import Footer from "./common/Footer"
export default {
    name: "Detail",
    data(){
      return {
        index: 0,
      }
    },
    created() {
      // 获取课程ID
      console.log( this.$route.params.id )
    },
    components:{
      Header,
      Footer,
    }
}
</script>

<style scoped>
.course_info{
  width: 1200px;
  padding-top: 30px;
  margin: 0 auto;
}
.course_info::after{
  content: "";
  display: block;
  clear: both;
}
.course_info .video{
  width: 690px;
  height: 388px;
  background-color: #000;
  float: left;
}
.course_info .core{
  float: left;
  width: 510px;
}
.course_info .core h3{
  font-size: 20px;
  color: #333;
  padding: 10px 23px;
  font-weight: normal;
}
.course_info .core .student{
  padding-left: 23px;
  padding-right: 23px;
  padding-bottom: 16px;
  font-size: 14px;
  color: #9b9b9b;
}
.course_info .core .student span{
  margin-right: 28px;
}
.course_info .core .active{
  background: #fa6240;
  font-size: 14px;
  padding: 10px 23px;
}
.course_info .active .discount_type{
  font-size: 16px;
  color: #fff;
  letter-spacing: .36px;
  line-height: 24px;
}
.course_info .active .duration{
  font-size: 14px;
  color: #fff;
  float: right;
  line-height: 26px;
}
.course_info .active .duration time{
  background-color: #fff;
  color: #5e5e5e;
  width: 24px;
  padding: 6px 4px;
}
.course_info .price{
  padding: 5px 23px;
  font-size: 14px;
  color: #4a4a4a;
}
.course_info .price .discount_price{
  font-size: 26px;
  color: #fa6240;
  margin-left: 10px;
  display: inline-block;
  margin-bottom: -5px;
}
.course_info .price .original_price{
  font-size: 14px;
  color: #9b9b9b;
  margin-left: 10px;
  text-decoration: line-through;
}
.course_info{
  position: relative;
}
.course_info .core .btn{
  position: absolute;
  bottom: 10px;
  width: 486px;
  padding-left: 24px;
}
.course_info .core .btn::after{
  content: "";
  display: block;
  clear: both;
}
.course_info .core .buy_now{
  text-align: center;
  width: 125px;
  height: 40px;
  line-height: 40px;
  background: #ffc210;
  border-radius: 4px;
  color: #fff;
  cursor: pointer;
  margin-right: 15px;
  float: left;
}
.course_info .core .free_study{
  width: 125px;
  height: 40px;
  border-radius: 4px;
  cursor: pointer;
  margin-right: 15px;
  background: #fff;
  color: #ffc210;
  border: 1px solid #ffc210;
  text-align: center;
  line-height: 40px;
  float: left;
}
.course_info .core .add_cart{
  font-size: 14px;
  color: #ffc210;
  text-align: center;
  cursor: pointer;
  float: right;
  line-height: 42px;

}
.course_info .core .add_cart img{
  width: 20px;
  height: auto;
  margin-right: 7px;
  vertical-align: middle;
}
.content .course_nav{
  width: 100%;
  height: auto;
  background: #fff;
  margin-bottom: 30px;
  box-shadow: 0 2px 4px 0 #f0f0f0;
}
.content .course_nav ul{
  width: 1200px;
  margin: 0 auto;
}
.content .course_nav ul::after{
  content: "";
  display: block;
  clear: both;
}
.content .course_nav ul li{
  margin: 0 auto;
  color: #4a4a4a;
  margin-right: 15px;
  padding: 26px 20px 16px;
  font-size: 17px;
  cursor: pointer;
  float: left;
}
.content .course_nav ul li.this{
  color: #ffc210;
  border-bottom: 2px solid #ffc210;
}
.content .course_nav ul li .free_btn{
  color: #fb7c55;
}


.content .other_info {
  width: 1200px;
  margin: auto;
}
.content .other_info::after {
  content:"";
  display: block;
  clear: both;
}
.content .other_info .course_about{
    width: 880px;
    height: auto;
    padding: 20px;
    background: #fff;
    float: left;
    overflow: hidden;
    position: relative;
    box-shadow: 0 2px 4px 0 #f0f0f0;
}

.content .course_about img{
    width: 100%;

}
</style>
