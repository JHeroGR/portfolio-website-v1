<template>
    <div class="contact">
      <h3>LET'S CONNECT!</h3>
      <p>Hit Me Up And We'll Keep In Touch!</p>
      <p>Email: <a href="mailto:jheroytc@gmail.com">jheroytc@gmail.com</a></p>
      <p>Phone: <a href="tel:+9568679183">(956) 867-9183</a></p>
      <form action="">
        <input type="email" id="email" name="email" placeholder="Email">
        <input type="text" id="subject" name="subject" placeholder="Subject">
        <textarea id="message" name="message" placeholder="Message" style="height:200px"></textarea>
        <input type="submit" value="Send Email">
      </form>
    </div>
</template>

<script>
export default {
  name: 'Contact',
  props: {
    msg: String
  }
  
}
</script>

<style scoped>
.contact {
  text-align: center;
}
.contact a {
  text-decoration: none;
  color: black;
}
.contact input, .contact textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid #717171;
  border-radius: 4px;
  box-sizing: border-box;
  margin-top: 6px;
  margin-bottom: 16px;
  resize: vertical;
  background: #b1b1b1;
}
::placeholder {
  color: black;
}
</style>