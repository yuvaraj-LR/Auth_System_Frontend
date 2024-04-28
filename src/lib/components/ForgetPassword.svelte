<script>
    export let email;

    export let form;
    export let data;

</script>

<section>
    <form action="" class="email_form">
        <input type="email" name="email" id="email" class="inp" placeholder="Enter your email" value={email} autocomplete="off" disabled />
        <div class="otp_desc">
            <p>An email with the OTP has been sent to {email}.</p>
            <p>Please enter the OTP below to sign in.</p>
        </div>
        <input type="number" name="otp" id="otp" class="inp" placeholder="Enter OTP" autocomplete="off">

        <div class="forgetpassword flex">
            <div class="align_space">
                <span class="rest_time"></span>
                <span class="fget_pass hidden">Resend OTP?</span>
            </div>
        </div>

        <button type="submit" class="log_btn">
            <img src="/images/icons/arrow-right-long-solid-left.svg" alt="right-arrow">
            <span>Verify OTP</span>
        </button>

        <a href="/login/signin" class="flex flex_center center_text">Back</a>

    </form>
    <script>
        const restDiv = document.querySelector(".rest_time");
        const restBtn = document.querySelector(".fget_pass");

        let initialCount = 5;
    
        let dispCount = setInterval(count, 1000);
    
        function count() {
            if (initialCount < 0) {
                // Enable the button after 45 seconds
                restDiv.classList.add("hidden");
                restBtn.classList.remove("hidden");
            } else {
                // Update the countdown timer
                restDiv.textContent = "Time Remaining: " + initialCount + " seconds";
            }
            initialCount = initialCount - 1;
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

    .align_space {
        display: flex;
        justify-content: space-between;
    }

    @media(min-width: 768px) {
    }

</style>