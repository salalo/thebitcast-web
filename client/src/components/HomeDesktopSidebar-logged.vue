<template>
  <div class="container">

    <div class="taker">
      <a href="#">
        <font-awesome-icon :icon="['fas', 'home']" class="icon alt" />
        <span>Home</span>        
      </a>
      <a href="#">
        <font-awesome-icon :icon="['fas', 'table']" class="icon alt" />
        <span>Categories</span>        
      </a>
      <a href="#">
        <font-awesome-icon :icon="['fas', 'heart']" class="icon alt" />
        <span>Following</span>        
      </a>
      <a href="#">
        <font-awesome-icon :icon="['fas', 'bookmark']" class="icon alt" />
        <span>Bookmarks</span>    
      </a>
    </div>

    <div class="giver">
      <a href="#">  
        <font-awesome-icon :icon="['fas', 'cloud-upload-alt']" class="icon alt" />
        <span>Upload podcast</span>
      </a>
      <a href="#">  
        <font-awesome-icon :icon="['fas', 'chart-line']" class="icon alt" />
        <span>Statistics panel</span>
      </a>
    </div>

    <div class="info">
      <a href="#">  
        <font-awesome-icon :icon="['fas', 'handshake']" class="icon alt" />
        <span>Our mission</span>
      </a>
      <a href="#">  
        <font-awesome-icon :icon="['fas', 'star']" class="icon alt" />
        <span>Premium</span>
      </a>
    </div>

    <div class="essentials">
      <a href="#">  
        <font-awesome-icon :icon="['fas', 'comment']" class="icon alt" />
        <span>Feedback</span>
      </a>
      <a href="#">  
        <font-awesome-icon :icon="['fas', 'question']" class="icon alt" />
        <span>Support & help</span>
      </a>
      <a href="#">  
        <font-awesome-icon :icon="['fas', 'flag']" class="icon alt" />
        <span>Report</span>
      </a>
    </div>

    <div class="footer">
      <span>&copy 2019 TheBitCast</span>
      <a href="#">About us</a>
      <a href="#">Copyright</a>
      <a href="#">Contact</a>
      <a href="#">Privacy & policy</a>
    </div>

  </div>
</template>

<script>

export default {
}

</script>

<style lang="scss" scoped>

@import '@/stylesheets/master.scss';

.container {
  background-color: #fff;
	box-shadow: 0 0 10px rgba(0, 0, 0, .3);
  width: 300px;
  height: calc(100vh - 100px);
  position: fixed;
  bottom: 0;
}

a {
  width: 100%;
  height: 40px;
  text-decoration: none;
  color: $grey;
  float: left;
  clear: both;

  .icon {
    margin: 0 50px;
    font-size: 18px;
    line-height: 40px;
    vertical-align: middle;
  }
  span {
    line-height: 40px;
    font-size: 16px;
    vertical-align: middle;
  }
}

.taker {}
// giver and info -> same height
.giver {}
.info { .icon, span { color: $main;  } }
.essentials {}

.footer {
  position: fixed;
  bottom: 20px;
  
  span {
    font-size: 15px;
    color: $lighter-grey;
    display: block;
    margin-bottom: 10px;
    text-align: center;
  }
  a {
    color: $grey;
    float: none;
    font-size: 11px;
    margin-left: 20px;
  }
}

</style>
