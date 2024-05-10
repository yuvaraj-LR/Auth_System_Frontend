<script>
  import { enhance } from "$app/forms";
  export let data;

  let username = data?.userdata?.userData?.name;
</script>

<section class="home"> 

  <div class="navbar flex flex_space_between">
    <a href="/login/password/updatepassword"><button class="logout_btn">Forget Password</button></a>

    <h2>
      <span></span>
      <span>Welcome {username ? username : ""}</span>
    </h2>

    <form class="flex" action="?/logout" method="post" use:enhance>
      <button class="logout_btn" type="submit" formaction="?/logout">Logout</button>
    </form>
  </div>

  <div class="flex flex_center background">
    <img src="/wallpaper/bg-img.jpg" alt="background-img" class="bg_img">
  </div>
</section>

<style>

  .navbar {
    background-color: #004B60;
    color: #fff;
    display: flex;
    align-items: center;
    padding-inline: 1.5rem;
  }

  .bg_img {
    max-width: 1300px;
    width: 100%;
    margin: auto;
  }

  .flex_space_between {
    height: auto;
  }
    
</style>