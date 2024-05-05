<script>
    import { enhance } from "$app/forms";
    export let form;

    console.log(form, "form...");
</script>

<section>
    <form method="post" action="?/signUp" class="email_form" use:enhance>
        <input type="text" name="name" id="name" class="inp {form?.error?.name ? "error_border" : ""}" placeholder="Enter your name" autocomplete="off">
        <input type="email" name="email" id="email" class="inp {form?.error?.email ? "error_border" : ""}" placeholder="Enter your email" autocomplete="off">
        <input type="text" name="number" id="number" class="inp {form?.error?.number ? "error_border" : ""}" placeholder="Enter your number" autocomplete="off">
        <div class="password">
            <input type="password" name="password" id="password" class="password_inp {form?.error?.name ? "error_border" : ""}" placeholder="Enter password">
            <img src="/images/icons/eye-close-icon.svg" id="close-eye" alt="closed-eye" class="close_icon" width="25" onclick="openPassword(1)">
            <img src="/images/icons/eye-open-icon.svg" id="open-eye" alt="open-eye" class="close_icon hidden" width="25" onclick="openPassword(2)">
        </div>

        <p class="{form?.error?.invalidPass ? "high_error" : "hidden"}">{form?.error?.invalidPass}</p>

        <button type="submit" class="log_btn">
            <img src="/images/icons/arrow-right-long-solid-left.svg" alt="right-arrow">
            <span>Sign Up</span>
        </button>

        <p class="signin text_center">
            <span>Familiar face? Sign in here. </span>
            <span><a href="/login/signin" class="uppercase ternary_txt">Sign in?</a></span>
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
    }

</style>