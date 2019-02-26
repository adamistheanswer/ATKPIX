---
title: Contact
menuTitle: Contact
---



<style type="text/css">


.form-style-7{
	/* max-width:400px; */
	margin:50px auto;
	/* //background:#fff; */
	border-radius:2px;
	padding:20px;

}

.form-style-7 ul{
	list-style:none;
	padding:0;
	margin:0;	
}
.form-style-7 li{
	display: block;
	padding: 9px;
	border:1px solid #DDDDDD;
	margin-bottom: 30px;
	border-radius: 3px;
}
.form-style-7 li:last-child{
	border:none;
	margin-bottom: 0px;
	text-align: center;
}
.form-style-7 li > label{
	display: block;
	float: left;
	margin-top: -19px;
	background: #FFFFFF;
	height: 14px;
	padding: 2px 5px 2px 5px;
	color: #B9B9B9;
	font-size: 14px;
	overflow: hidden;
	
}
.form-style-7 input[type="name"],
.form-style-7 input[type="date"],
.form-style-7 input[type="datetime"],
.form-style-7 input[type="email"],
.form-style-7 input[type="number"],
.form-style-7 input[type="search"],
.form-style-7 input[type="time"],
.form-style-7 input[type="url"],
.form-style-7 input[type="password"],
.form-style-7 textarea,
.form-style-7 select 
{
	box-sizing: border-box;
	-webkit-box-sizing: border-box;
	-moz-box-sizing: border-box;
	width: 100%;
	display: block;
	outline: none;
	border: none;
	/* height: 25px; */
	line-height: 25px;
	font-size: 16px;
	padding: 0;
	
}
.form-style-7 input[type="name"]:focus,
.form-style-7 input[type="date"]:focus,
.form-style-7 input[type="datetime"]:focus,
.form-style-7 input[type="email"]:focus,
.form-style-7 input[type="number"]:focus,
.form-style-7 input[type="search"]:focus,
.form-style-7 input[type="time"]:focus,
.form-style-7 input[type="url"]:focus,
.form-style-7 input[type="password"]:focus,
.form-style-7 textarea:focus,
.form-style-7 select:focus 
{
}
.form-style-7 li > span{
	background: #F3F3F3;
	display: block;
	padding: 3px;
	margin: 0 -9px -9px -9px;
	text-align: center;
	color: #C0C0C0;
	
	/* font-size: 11px; */
}
.form-style-7 textarea{
	resize:none;
}
.form-style-7 input[type="submit"],
.form-style-7 input[type="button"]{
	background: #FF5733;
	border: none;
	padding: 10px 20px 10px 20px;
	border-bottom: 3px solid #D35400;
	border-radius: 3px;
	color: #ffffff;
}
.form-style-7 input[type="submit"]:hover,
.form-style-7 input[type="button"]:hover{
	background: #E67E22;
	color:#fff;
}
</style>







<form method="POST" action="https://formspree.io/helloworld@attackingpixels.com" class="form-style-7">
<ul>
<li>
    <input type="name" name="name" maxlength="100">
    <span>🤗 Enter your name</span>
</li>
<li>
    <input type="email" name="email" maxlength="100">
    <span>📧 Enter a valid email address</span>
</li>
<li>
    <textarea name="message" style="padding-bottom: 150px;"></textarea>
    <span>👋 Drop me a message</span>
</li>
<li>
    <input type="submit" value="Send">
    <!-- <button type="submit">Send Test</button> -->
</li>
</ul>
</form>

<!-- <form method="POST" action="https://formspree.io/helloworld@attackingpixels.com">
  <input type="name" name="name" placeholder="Name">
  <input type="email" name="email" placeholder="Your email">
  <textarea name="message" placeholder="Message"></textarea>
  <button type="submit">Send Test</button>
</form> -->

