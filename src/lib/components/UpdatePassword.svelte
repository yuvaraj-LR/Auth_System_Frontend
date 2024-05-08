<script>
    export let email;
    export let changePassword;
    export let useremail;

    export let form;
    export let data;

    email = (!email ? form?.error?.email : email);

    const action = (changePassword ? "?/changePass" : "?/updatePass");
</script>

<section>
    <form method="post" action={action} class="email_form">
        <input type="eml" name="eml" id="eml" class="inp" placeholder="Enter your email" value={useremail} autocomplete="off" disabled/>

        <input type="hidden" name="email" id="email" class="inp" placeholder="Enter your email" value={email} autocomplete="off" />
        <input type="hidden" name="token" id="token" value="" />

        <div class={changePassword ? "hidden" : "password"}>
            <input type="password" name="old-password" id="old-password" class="inp" placeholder="Old Password" autocomplete="off">
            <img src="/images/icons/eye-close-icon.svg" id="close-eye" alt="closed-eye" class="close_icon" width="25" onclick="openPassword(1)">
            <img src="/images/icons/eye-open-icon.svg" id="open-eye" alt="open-eye" class="close_icon hidden" width="25" onclick="openPassword(2)">
        </div>

        <div class="password">
            <input type="password" name="new-password" id="new-password" class={form?.error?.newPass ? "error_border" : ""} placeholder="New Password" autocomplete="off">

            <img src="/images/icons/eye-close-icon.svg" id="close-eye-new" alt="closed-eye" class="close_icon" width="25" onclick="openConfirmPassword(1)">
            <img src="/images/icons/eye-open-icon.svg" id="open-eye-conf" alt="open-eye" class="close_icon hidden" width="25" onclick="openConfirmPassword(2)">
    
            <input type="password" name="confirm-password" id="confirm-password" class={form?.error?.conPass ? "error_border" : ""} placeholder="Confirm Password" autocomplete="off">
        </div>

        <p class="{form?.error?.invalidPass ? "high_error" : "hidden"}">{form?.error?.invalidPass}</p>

        <button type="submit" class="log_btn">
            <img src="/images/icons/arrow-right-long-solid-left.svg" alt="right-arrow">
            <span>Change Password</span>
        </button>

        <a href="/" class="flex flex_center">Back</a>
    </form>
    <script>
        function openPassword(choice) {
            const closeEyeIcon = document.getElementById("close-eye");
            const openEyeIcon = document.getElementById("open-eye");
            const passwordInput = document.getElementById("old-password");

            if(choice == 1) {
                closeEyeIcon.classList.add("hidden");
                openEyeIcon.classList.remove("hidden");
                passwordInput.type = "text";
            } else if (choice == 2) {
                closeEyeIcon.classList.remove("hidden");
                openEyeIcon.classList.add("hidden");
                passwordInput.type = "password";
            } 
        }

        function openConfirmPassword(choice) {
            const closeEyeIconNew = document.getElementById("close-eye-new");
            const openEyeIconNew = document.getElementById("open-eye-conf");
            const newPasswordInput = document.getElementById("new-password");
            const confirmPasswordInput = document.getElementById("confirm-password");

            if (choice == 1) {
                closeEyeIconNew.classList.add("hidden");
                openEyeIconNew.classList.remove("hidden");
                newPasswordInput.type = "text";
                confirmPasswordInput.type = "text";
            } else {
                closeEyeIconNew.classList.remove("hidden");
                openEyeIconNew.classList.add("hidden");
                newPasswordInput.type = "password";
                confirmPasswordInput.type = "password";
            }
        }

        function tokenIdentifier() {
            let tokenInput = document.getElementById("token");

            const urlParams = new URLSearchParams(window.location.search);
            const token = urlParams.get('token');

            tokenInput.value = token;
        }

        tokenIdentifier();
    </script>
</section>

<style>

    .log_btn {
        border: 1px solid hsl(193, 100%, 19%);
    }

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

    .flex {
        margin: 20px auto;
        color: #00B4AE;
    }

    @media(min-width: 768px) {
    }

</style>