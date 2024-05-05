<script>
    import { enhance } from "$app/forms";
    export let form;

    console.log(form, "form...");
</script>

<section>
    <form method="post" action="?/login" class="email_form" use:enhance>
        <input type="email" name="email" id="email" class="inp {form?.error?.username ? "error_border" : ""}" placeholder="Enter your Email" autocomplete="off" autofocus>
        <div class="password">
            <input type="password" name="password" id="password" class="inp {form?.error?.password ? "error_border" : ""}" placeholder="Enter password">
            <img src="/images/icons/eye-close-icon.svg" id="close-eye" alt="closed-eye" class="close_icon" width="25" onclick="openPassword(1)">
            <img src="/images/icons/eye-open-icon.svg" id="open-eye" alt="open-eye" class="close_icon hidden" width="25" onclick="openPassword(2)">
        </div>

        <div class="forgetpassword">
            <button type="submit" class="fget_pass" formaction="?/signByOTP">Sign via OTP?</button>
            <button type="submit" class="fget_pass" formaction="?/updatePass">Forget Password?</button>
        </div>

        <p class="{form?.error?.invalidPass ? "high_error" : "hidden"}">{form?.error?.invalidPass}</p>
        <p class="{form?.success ? "high_error" : "hidden"}">Reset Password Link has been sent your email.</p>

        <button type="submit" class="log_btn">
            <span>Sign In</span>
            <img src="/images/icons/arrow-right-long-solid-right.svg" alt="right-arrow">
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
        
        const useremail = document.getElementById("email");
        const password = document.getElementById("password");

        useremail.addEventListener("keyup", () => {
            useremail.classList.remove("error_border");
            password.classList.remove("error_border");
        })

        password.addEventListener("keyup", () => {
            password.classList.remove("error_border");
            useremail.classList.remove("error_border");
        })

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

    .signin {
        margin: 20px auto;
    }

    .log_btn {
        border: 1px solid #004B60;
    }

    .uppercase:hover {
        text-decoration: underline;
    }

    @media(min-width: 768px) {
        .margin_pass {
            margin: 0 0 65px;
        }
    }

</style>