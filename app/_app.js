// _app.js
import { useEffect } from 'react';

function MyApp({ Component, pageProps }) {
    useEffect(() => {
        // Load the Facebook SDK script
        if (typeof window !== "undefined") {
            (function (d, s, id) {
                var js, fjs = d.getElementsByTagName(s)[0];
                if (d.getElementById(id)) return;
                js = d.createElement(s); js.id = id;
                js.src = "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v11.0";
                fjs.parentNode.insertBefore(js, fjs);
            }(document, 'script', 'facebook-jssdk'));
        }
    }, []);

    return <Component {...pageProps} />;
}

export default MyApp;