<template>
  <Panel title="In货推荐" :class="$style.panel">
    <div :class="$style.content">
      <div :class="$style.item" v-for="item in items" :key="item.catory">
        <img :src="item.catory" alt="">
        <div :class="$style.list">
          <div :class="$style.product" v-for="p in item.list" :key="p.img">
            <img :src="p.img" :alt="p.title">
            <p :class="$style.title">{{p.title}}</p>
            <p :class="$style.price"><em>{{p.price}}</em>起</p>
            <article>
              <div :class="$style.wrapper">
                <div :class="$style.inner" :style="{width:p.progress+'%'}"></div>
              </div>
              <p>{{p.progress}}%</p>
            </article>
            <label>精选</label>
          </div>
        </div>
      </div>
    </div>
  </Panel>
</template>

<script>
import Panel from '../core/panel';
export default {
  name:"",
  components:{
    Panel
  },
  data() {
    return {
      items: [{
        catory: "//img12.360buyimg.com/jrpmobile/jfs/t3406/210/2247820735/50952/86016eea/5846d8e7N20446dbd.png?width=750&height=200",
        list: [{
          img: "//img30.360buyimg.com/cf/s250x250_jfs/t14881/283/656508232/143980/9b606acf/5a33a171N18c9c80a.jpg",
          title: "双响炮蓝牙音箱",
          price: "29.00",
          progress: 172,
        }, {
          img: "//img30.360buyimg.com/cf/s250x250_jfs/t15529/308/632300625/135123/adb9c6d0/5a37676dNc31da9ea.jpg",
          title: "脑波相机",
          price: "998.00",
          progress: 59,
        }]
      }, {
        catory: "//img12.360buyimg.com/jrpmobile/jfs/t3739/82/2244582797/54399/746c7d79/5846a953N66b67d05.png?width=750&height=200",
        list: [{
            img: "//img30.360buyimg.com/cf/s250x250_jfs/t11257/287/2281727659/55759/e00b90a/5a138f21N32dca834.jpg",
            title: "智能电动牙刷",
            price: "19.00",
            progress: 481,
        }, {
            img: "//img30.360buyimg.com/cf/s250x250_jfs/t14209/293/662014092/61635/bba5c330/5a33a983N077cac56.jpg",
            title: "烟草加热电子烟",
            price: "258.00",
            progress: 105,
        }]
      }, {
        catory: "//img12.360buyimg.com/jrpmobile/jfs/t3214/113/4408032436/61548/ce316eef/5846d310Ne93f00c9.png?width=750&height=200",
        list: [{
            img: "//img30.360buyimg.com/cf/s250x250_jfs/t15007/47/884045069/149879/17987250/5a3cb182N15868ea1.jpg",
            title: "赖公高淮封藏老酒",
            price: "99.00",
            progress: 199,
        }, {
            img: "//img30.360buyimg.com/cf/s250x250_jfs/t14197/160/546457496/134173/4e1baccd/5a30ccc5Na44f7492.jpg",
            title: "泗洪花雕醉蟹",
            price: "58.00",
            progress: 222,
        }]
      }],
    }
  },
}
</script>

<style lang="scss" module>
 @import "../../css/element.scss";
 .panel{
   @include panel;
   .content{
      @include flex;
      .item{
        >img{
          display: block;
          width: 100%;
          height: 170px;
        }
        .list{
          @include flex(row);
          .product{
            position: relative;
            width: 50%;
            height: 396px;
            box-sizing: border-box;
            background-color: rgba(0,0,0,.02);
            text-align: center;
            label{
              position: absolute;
              top:0;
              left:0;
              font-size: 20px;
              color:#ff0000;
              text-align: center;
              padding: 4px 8px;
              background-image: linear-gradient(-35deg,#c1c1c1 0,#acacac 100%)
            }
            img{
              width: 180px;
              height: 180px;
              margin: 44px auto 20px;
            }
            .title{
              font-family: PingFangSC-Medium,Arial, Helvetica, sans-serif;
              font-size: 28px;
              color: #444;
            }
            .price{
              font-family: PingFangSC-Medium,Arial, Helvetica, sans-serif;
              font-size: 20px;
              color: #999;
              height: 48px;
              line-height: 48px;           
              em{
                font-size: 36px;
                color: #ff3232;
                margin-right: 4px;
                &::before{
                  content:"￥";
                  font-size: 28px;
                  color: #ff3232;
                }
              }
            }
            article{
              @include flex(row);
              align-items: center;
              justify-content: space-around;
              padding: 0 20px;
              line-height: 30px;
              margin-top: 16px;
              .wrapper{
                height: 10px;
                width: 144px;
                background-color: #f6e6e6;
                border-radius: 22px;
                .inner{
                  width: 40%;
                  max-width: 100%;
                  height: 10px;
                  background-image: linear-gradient(270deg,#f55 1%,#ff9c31 100%);
                  border-radius: 22px;
                }
              }
              p{
                font-size: 24px;
                color: #999;
              }
            }
          }
        }
      }
   }
 }
</style>
