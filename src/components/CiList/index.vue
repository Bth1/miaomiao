<template>
  <div class="cinema_body">
    <ul>
      <li>
        <div>
          <span>大地影院(澳东世纪店)</span>
          <span class="q">
            <span class="price">22.9</span> 元起
          </span>
        </div>
        <div class="address">
          <span>金州区大连经济技术开发区澳东世纪3层</span>
          <span>1763.5km</span>
        </div>
        <div class="card">
          <div>小吃</div>
          <div>折扣卡</div>
        </div>
      </li>
      <li>
        <div>
          <span>大地影院(澳东世纪店)</span>
          <span class="q">
            <span class="price">22.9</span> 元起
          </span>
        </div>
        <div class="address">
          <span>金州区大连经济技术开发区澳东世纪3层</span>
          <span>1763.5km</span>
        </div>
        <div class="card">
          <div>小吃</div>
          <div>折扣卡</div>
        </div>
      </li>
      <li>
        <div>
          <span>大地影院(澳东世纪店)</span>
          <span class="q">
            <span class="price">22.9</span> 元起
          </span>
        </div>
        <div class="address">
          <span>金州区大连经济技术开发区澳东世纪3层</span>
          <span>1763.5km</span>
        </div>
        <div class="card">
          <div>小吃</div>
          <div>折扣卡</div>
        </div>
      </li>
      <li>
        <div>
          <span>大地影院(澳东世纪店)</span>
          <span class="q">
            <span class="price">22.9</span> 元起
          </span>
        </div>
        <div class="address">
          <span>金州区大连经济技术开发区澳东世纪3层</span>
          <span>1763.5km</span>
        </div>
        <div class="card">
          <div>小吃</div>
          <div>折扣卡</div>
        </div>
      </li>
      <li>
        <div>
          <span>大地影院(澳东世纪店)</span>
          <span class="q">
            <span class="price">22.9</span> 元起
          </span>
        </div>
        <div class="address">
          <span>金州区大连经济技术开发区澳东世纪3层</span>
          <span>1763.5km</span>
        </div>
        <div class="card">
          <div>小吃</div>
          <div>折扣卡</div>
        </div>
      </li>
      <li>
        <div>
          <span>大地影院(澳东世纪店)</span>
          <span class="q">
            <span class="price">22.9</span> 元起
          </span>
        </div>
        <div class="address">
          <span>金州区大连经济技术开发区澳东世纪3层</span>
          <span>1763.5km</span>
        </div>
        <div class="card">
          <div>小吃</div>
          <div>折扣卡</div>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "CiList"
};
</script>
<style scoped>
#content .cinema_body {
  flex: 1;
  overflow: auto;
}
.cinema_body ul {
  padding: 20px;
}
.cinema_body li {
  border-bottom: 1px solid #e6e6e6;
  margin-bottom: 20px;
}
.cinema_body div {
  margin-bottom: 10px;
}
.cinema_body .q {
  font-size: 11px;
  color: #f03d37;
}
.cinema_body .price {
  font-size: 18px;
}
.cinema_body .address {
  font-size: 13px;
  color: #666;
}
.cinema_body .address span:nth-of-type(2) {
  float: right;
}
.cinema_body .card {
  display: flex;
}
.cinema_body .card div {
  padding: 0 3px;
  height: 15px;
  line-height: 15px;
  border-radius: 2px;
  color: #f90;
  border: 1px solid #f90;
  font-size: 13px;
  margin-right: 5px;
}
.cinema_body .card div.or {
  color: #f90;
  border: 1px solid #f90;
}
.cinema_body .card div.bl {
  color: #589daf;
  border: 1px solid #589daf;
}

#content .login_body {
  width: 100%;
}
.login_body .login_text {
  width: 100%;
  height: 40px;
  border: none;
  border-bottom: 1px #ccc solid;
  margin-bottom: 5px;
  outline: none;
  text-indent: 10px;
}
.login_body .login_btn {
  height: 50px;
  margin: 10px;
}
.login_body .login_btn input {
  width: 100%;
  height: 100%;
  background: #e54847;
  border-radius: 3px;
  border: none;
  display: block;
  color: white;
  font-size: 20px;
}
.login_body .login_link {
  display: flex;
  justify-content: space-between;
}
.login_body .login_link a {
  text-decoration: none;
  margin: 0 5px;
  font-size: 12px;
  color: #e54847;
}
</style>