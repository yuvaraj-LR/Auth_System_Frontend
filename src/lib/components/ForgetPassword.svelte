<script>
    export let email;
    export let changepassword;

    export let form;
    console.log(form, "formmm....");

    export let data;
    const token = data?.token;

    email = (!email ? form?.error?.email : email);

    const action = !changepassword ? "?/verifyOTP" : "?/verifyOTPpass";
    console.log(action, "action....");

</script>

<section>
    <form method="post" action={action} class="email_form">
        <input type="email" name="eml" id="eml" class="inp" placeholder="Enter your email" value={email} autocomplete="off" disabled/>
        <input type="email" name="email" id="email" class="hidden" placeholder="Enter your email" value={email} autocomplete="off" />
        <div class="otp_desc">
            <p>An email with the OTP has been sent to {email}.</p>
            {#if changepassword}
                <p>Please enter the OTP below to sign in.</p>
            {:else}
                <p>Please enter the OTP below to change password.</p>
            {/if}
        </div>
        <input type="number" name="otp" id="otp" class="inp" placeholder="Enter OTP" autocomplete="off">

        <div class="forgetpassword flex">
            <span class="rest_time"></span>
            <button type="submit" class="fget_pass bg_color" formaction="/login/signin?/signByOTP">Resend OTP?</button>
        </div>

        <p class="{form?.error?.password ? "high_error" : "hidden"}">{form?.error?.password}</p>
        <p class="{form?.error?.invalidPass ? "high_error" : "hidden"}">{form?.error?.invalidPass}</p>

        <button type="submit" class="log_btn">
            <img src="/images/icons/arrow-right-long-solid-left.svg" alt="right-arrow">
            <span>Verify OTP</span>
        </button>

        <a href="/login/signin" class="flex flex_center center_text">Back</a>
    </form>

    <script>
        let restTime = document.querySelector(".rest_time");
        let restBtn = document.querySelector(".fget_pass");
        console.log(restBtn.classList);

        let intialCount = 45;

        let dispCount = setInterval(count, 1000);

        function count() {
            if(intialCount < 0) {
                restTime.style.opacity = 0;
                restBtn.classList.remove("bg_color");
                clearInterval(dispCount);
            } else {
                restTime.textContent = "Time Remaining : " + intialCount + " seconds.";
            }

            intialCount -= 1;
        }
    </script>
</section>

<style>

    .log_btn {
        border: 1px solid hsl(193, 100%, 19%);
    }

    .fget_pass {
        color: #925778;
        display: flex;
        justify-content: flex-end;
        margin: 0 0 45px;
    }

    .fget_pass:hover {
        text-decoration: underline;
        cursor: pointer;
    }

    p {
        font-size: 15px;
    }

    .otp_desc {
        margin: 5px;
        color: #00B4AE;
    }

    .center_text {
        margin: 15px;
    }

    .bg_color {
        color: #777777;
    }

    @media(min-width: 768px) {
    }

</style>