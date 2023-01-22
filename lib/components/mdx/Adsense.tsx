import React, { useEffect } from "react";
import Admonition from "@components/mdx/Admonition";
import { useAdsenseStore } from "@ads/adsense";
import { useRouter } from "next/router";

/**
 * Google Ads :)
 */
export function Adsense() {
    const enabled = useAdsenseStore((state) => state.enabled);

    if (!enabled)
        return (
            <Admonition title="太無情了擋廣告" type="warning">
                關閉 AdBlocker 讓機器龍多活一天
            </Admonition>
        );

    useEffect(() => {
        if((window as any).adsbygoogle?.loaded)
            return;

        ((window as any).adsbygoogle = (window as any).adsbygoogle || []).push({});
    }, []);

    return (
        <div aria-label="ads">
            <p className="my-2 text-sm text-gray-400 text-center">
                機器龍的精神食糧
            </p>
            <hr className="border-gray-500" />
            <div style={{ minHeight: "280px" }}>
                <ins
                    className="adsbygoogle"
                    aria-label="promote"
                    style={{ display: "block" }}
                    data-ad-client="ca-pub-1801171681307308"
                    data-ad-slot="7480799616"
                    data-ad-format="auto"
                    data-full-width-responsive="true"
                />
            </div>
        </div>
    );
}

export default Adsense;
