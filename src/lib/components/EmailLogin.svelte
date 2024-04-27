<script>
</script>

<section>
    <form action="" class="email_form">
        <input type="email" name="email" id="email" class="email_inp" placeholder="Enter your Email" autocomplete="off">
        <div class="password">
            <input type="password" name="password" id="password" class="password_inp" placeholder="Enter password">
            <img src="/images/icons/eye-close-icon.svg" id="close-eye" alt="closed-eye" class="close_icon" width="25" onclick="openPassword(1)">
            <img src="/images/icons/eye-open-icon.svg" id="open-eye" alt="open-eye" class="close_icon hidden" width="25" onclick="openPassword(2)">
        </div>

        <div class="forgetpassword">
            <a href="/login/password/forgetpassword" class="fget_pass">Forget Password?</a>
        </div>

        <button class="log_btn">
            <span>Sign In</span>
            <img src="/images/icons/arrow-right-long-solid.svg" alt="right-arrow">
        </button>

        <p class="signin text_center">
            <span>Start Now! Sign up here.</span>
            <span><a href="/login/signup" class="uppercase ternary_txt">Sign up?</a></span>
        </p>
    </form>
    <script>
        function openPassword(choice) {
            const closeEyeIcon = document.getElementById("close-eye");
            const openEyeIcon = document.getElementById("open-eye");
            const passwordInput = document.getElementById("password");

            if(choice == 1) {
                closeEyeIcon.classList.add("hidden");
                openEyeIcon.classList.remove("hidden");
                passwordInput.type = "text";
            } else {
                closeEyeIcon.classList.remove("hidden");
                openEyeIcon.classList.add("hidden");
                passwordInput.type = "password";
            }
        }
    </script>
</section>

<style>

    .password {
        position: relative;
    }

    .close_icon {
        position: absolute;
        right: 15px;
        top: 20px;
    }

    .close_icon:hover {
        cursor: pointer;
    }

    .fget_pass {
        color: #925778;
        display: flex;
        justify-content: flex-end;
        margin: 0 0 45px;
    }

    .fget_pass:hover {
        text-decoration: underline;
    }

    .signin {
        margin: 15px auto;
    }

    .log_btn {
        border: 1px solid #004B60;
    }

    .uppercase:hover {
        text-decoration: underline;
    }

    @media(min-width: 768px) {
        .fget_pass {
            margin: 0 0 90px;
        }
    }

</style>