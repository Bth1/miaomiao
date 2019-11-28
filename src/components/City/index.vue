<template>
  <div class="city_body">
    <div class="city_list">
      <Loading v-if="isLoading" />
      <Scroller v-else ref="city_list">
        <div>
          <div class="city_hot">
            <h2>热门城市</h2>
            <ul class="clearfix">
              <li v-for="item in hotList" :key="item.id" @tap="hanleToCity(item.nm , item.id)">
                {{ item.nm }}
              </li>
            </ul>
          </div>
          <div class="city_sort" ref="city_sort">
            <div v-for="item in cityList" :key="item.index">
              <h2>{{ item.index }}</h2>
              <ul>
                <li v-for="itemList in item.list" :key="itemList.id" @tap="hanleToCity(itemList.nm , itemList.id)">
                  {{ itemList.nm }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Scroller>
    </div>
    <div class="city_index">
      <ul>
        <!--touchstart是移动端触摸事件,(item,index) in cityList中的index是数组下标，item.index的index是索引（A,B,C...Z）-->
        <li
          v-for="(item,index) in cityList"
          :key="item.index"
          @touchstart="handldeToIndex(index)"
        >{{ item.index }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "City",
  data() {
    return {
      cityList: [],
      hotList: [],
      isLoading : true
    };
  },
  mounted() {

    let citylist = window.localStorage.getItem('cityList');
    let hotlist = window.localStorage.getItem('hotList');
    
    if(citylist && hotlist) {
      this.isLoading = false;
      this.cityList = JSON.parse(citylist);
      this.hotList = JSON.parse(hotlist);
    }
    else{
      this.$axios.get("/api/cityList").then(res => {
        // console.log(res);
        let msg = res.data.msg;
        if (msg == "ok") {
          let cities = res.data.data.cities;
          let { cityList, hotList } = this.formatCityList(cities);
          this.cityList = cityList;
          // console.log(cityList);
          this.hotList = hotList;
          this.isLoading = false;
          window.localStorage.setItem('cityList',JSON.stringify(cityList));
          window.localStorage.setItem('hotList',JSON.stringify(hotList));
        }
      });
    }
  },
  methods: {
    formatCityList(cities) {
      let cityList = [];
      let hotList = [];

      //拼音分类检索
      for (let i = 0; i < cities.length; i++) {
        let firstLetter = cities[i].py.substring(0, 1).toUpperCase();
        if (toCom(firstLetter)) {
          //新添加索引Index
          cityList.push({
            index: firstLetter,
            list: [{ nm: cities[i].nm, id: cities[i].id }]
          });
        }
        //累加到已有索引index
        else {
          for (let j = 0; j < cityList.length; j++) {
            if (cityList[j].index === firstLetter) {
              cityList[j].list.push({ nm: cities[i].nm, id: cities[i].id });
            }
          }
        }
      }

      //比较检索的字母是否相等
      function toCom(firstLetter) {
        for (let i = 0; i < cityList.length; i++) {
          if (cityList[i].index === firstLetter) {
            return false;
          }
        }
        return true;
      }

      //索引字母排序
      cityList.sort((n1, n2) => {
        let num = n1.index < n2.index ? -1 : 1; //三目运算
        return num;
      });
      // console.log(cityList);

      //判断是否是热门城市
      for (let i = 0; i < cities.length; i++) {
        if (cities[i].isHot === 1) {
          hotList.push(cities[i]);
        }
      }
      // console.log(hotList);
      return {
        cityList,
        hotList
      };
    },
    handldeToIndex(index) {
      let h2 = this.$refs.city_sort.getElementsByTagName("h2"); //获取每个索引（就是A,B,C,D...Z）的位置
      // this.$refs.city_sort.parentNode.scrollTop = h2[index].offsetTop; //将屏幕最上方的位置设置成点击的索引的位置
      //下面是better-scroll提供的toScrollTop方法进行跳转
      this.$refs.city_list.toScrollTop(-h2[index].offsetTop);
    },
    hanleToCity(nm , id) {
      this.$store.commit('city/CITY_INFO',{ nm , id});
      this.$router.push('/movie/nowPlaying');
      //将本次点击的城市存入本地存储，刷新的时候同样显示为本次选择的城市（以防刷新重置城市）
      window.localStorage.setItem('nowNm',nm);
      window.localStorage.setItem('nowId',id);
    }
  }
};
</script>
<style scoped>
#content .city_body {
  margin-top: 45px;
  display: flex;
  width: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
}
.city_body .city_list {
  flex: 1;
  overflow: auto;
  background: #fff5f0;
}
.city_body .city_list::-webkit-scrollbar {
  background-color: transparent;
  width: 0;
}
.city_body .city_hot {
  margin-top: 20px;
}
.city_body .city_hot h2 {
  padding-left: 15px;
  line-height: 30px;
  font-size: 14px;
  background: #f0f0f0;
  font-weight: normal;
}
.city_body .city_hot ul li {
  float: left;
  background: #fff;
  width: 29%;
  height: 33px;
  margin-top: 15px;
  margin-left: 3%;
  padding: 0 4px;
  border: 1px solid #e6e6e6;
  border-radius: 3px;
  line-height: 33px;
  text-align: center;
  box-sizing: border-box;
}
.city_body .city_sort div {
  margin-top: 20px;
}
.city_body .city_sort h2 {
  padding-left: 15px;
  line-height: 30px;
  font-size: 14px;
  background: #f0f0f0;
  font-weight: normal;
}
.city_body .city_sort ul {
  padding-left: 10px;
  margin-top: 10px;
}
.city_body .city_sort ul li {
  line-height: 30px;
  line-height: 30px;
}
.city_body .city_index {
  width: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  border-left: 1px #e6e6e6 solid;
}
</style>
