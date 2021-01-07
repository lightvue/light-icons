<template>
  <div class="wrapper">
      <div class="conatiner">
          <h2 >
      Installation
    </h2>
    <div class="methods">
      <h3>Using npm</h3>     
       <pre><span class="pl-c"><span class="pl-c">#</span> v1.x </span>
npm install light-icons --save</pre>
<pre>// import in CSS files 
@import"~light-icons/dist/light-icon.css";</pre>
<p>OR</p>
<pre>// import directly in JS files <br>import "light-icons/dist/light-icon.css";</pre>

    </div>
    <div>
        <h3>How to use</h3>
        <p>Add <code>light-icon-*</code> class, either in <code>i</code> or <code>span</code> HTML Tag</p>
        <pre>&lt;i class="light-icon-facebook"&gt;&lt;/i&gt;</pre>
    </div>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.wrapper {
    padding: 50px 200px;
}
h2 {
    font-size: 30px;
    padding-bottom: 9px;
    margin: 40px 0 20px;
    border-bottom: 1px solid #eee;
    font-weight: 500;
    color: #566D79;
    text-align: center;
}
h3 {
    font-size: 24px;
    color: #566D79; 
    font-weight: 500;
}
pre {
    margin:20px 0 ;
    padding: 16px;
    overflow: auto;
    font-size: 85%;
    line-height: 1.45;
    border-radius: 6px;
    background:#FFFFFF;
}
p {
    margin: 30px 0;
}
code {
    padding: .2em .4em;
    margin: 0;
    font-size: 85%;
    background-color:#ffffff;
    border-radius: 6px;
}
@media only screen and (max-width: 1000px) {
  .wrapper {
    padding: 50px 100px;
  }
}
@media only screen and (max-width: 550px) {
  .wrapper {
    padding: 50px 20px;
  }
}
</style>