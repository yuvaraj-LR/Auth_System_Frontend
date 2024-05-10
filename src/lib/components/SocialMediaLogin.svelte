<script>
// @ts-nocheck

    export let title;

    import { onMount } from 'svelte';
    let googleUser;

    onMount(() => {
        // Load the Google Sign-In library
        const script = document.createElement('script');
        script.src = 'https://accounts.google.com/gsi/client';
        script.async = true;
        document.body.appendChild(script);

        script.onload = () => {
            // @ts-ignore
            google.accounts.id.initialize({
                client_id: '287055685779-k14s5kvj2sc4bgj51fnjbj57daoqnvm9.apps.googleusercontent.com',
                callback: handleSignIn,
                auto_prompt: false
            });
        };
    });

    function handleSignIn(response) {
        if (response.error) {
            console.error('Google Sign-In Error:', response.error);
            return;
        }
        googleUser = response;
    
        console.log('Google User:', googleUser?.credential);
      // Handle further actions after successful sign-in
        if(googleUser?.credential) {
            let tokenInput = document.getElementById("token");
            let submitBtn = document.getElementById("submit");

            tokenInput.value = googleUser.credential;

            if(tokenInput.value) {
                submitBtn?.click();
            }
        }
    }

</script>

<section>
    <div class="social_media_container flex flex_col">
        <h2 class="uppercase text_center">{title}</h2>

        <form action="/login/signin?/googleLogin" method="post">
            <div id="g_id_onload" data-client_id="287055685779-k14s5kvj2sc4bgj51fnjbj57daoqnvm9.apps.googleusercontent.com" data-auto_prompt="false">
                <!-- svelte-ignore a11y-click-events-have-key-events -->
                <!-- svelte-ignore a11y-no-static-element-interactions -->
                <div on:click={() => google.accounts.id.prompt()} class="google-signin-button">
                    <span><img src="/images/icons/google.svg" alt="google-icon"></span>
                    <span>Google</span>
                </div>
            </div>

            <input type="hidden" name="token" id="token">
            <input type="hidden" name="gid" id="gid" value="287055685779-k14s5kvj2sc4bgj51fnjbj57daoqnvm9.apps.googleusercontent.com">
            <input type="submit" name="submit" id="submit" class="hidden">
        </form>

        <button>
            <span><img src="/images/icons/facebook.svg" alt="fb-icon"></span>
            <span>Facebook</span>
        </button>
    </div>

    <div class="text_center seperator"><h4> ( OR ) </h4></div>
    
    
</section>

<style>

    .social_media_container {
        gap: 1.5rem;
    }

    .google-signin-button {
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        gap: 10px;
        font-size: 1.2rem;
        border-radius: 5px;
        border: 2px solid #aaaaaa;
        background-color: transparent;
        padding: 5px 0;
        cursor: pointer;
    }

    .google-signin-button:hover {
        border: 2px solid #555;
    }

    .seperator {
        margin: 2.5rem auto;
        position: relative;
    }

    .seperator::after {
        content: "";
        position: absolute;
        right: 10px;
        height: 2.5px;
        background: #999;
        width: 35%;
        top: .6125rem;
    }

    .seperator::before {
        content: "";
        position: absolute;
        left: 10px;
        height: 2.5px;
        background: #999;
        width: 35%;
        top: .6125rem;
    }

</style>