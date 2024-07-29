import Button from "../components/Button"
import Head from "../components/Head"

type account = {
  logo: string
  description: string
  title: string
}

function page() {
  const accounts: account[] = [
    {
      logo: "https://yt3.ggpht.com/9OFmTb0K1ltYfSsDGtzm0QnrFUARMMZZKEBag3k6PtUMnarIVbXmE1ML7fYO5ymGT7vrIKI=s176-nd",
      title: "Activision ID",
      description: "Connect accounts and watch approved events and videos for a chance to win in-game rewards"
    },
    {
      logo: "https://yt3.ggpht.com/Iey47VziUp7kfElO_kZQfT4HkjuxM_Sq2MG6M5_PfXBhUKI90pcweCJrTEqEdHeG4QjdPvw=s176-nd",
      description: "Connect accounts and watch approved events and videos for a chance to win in-game rewards",
      title: "Battle.net"
    },
    {
      logo: "https://yt3.ggpht.com/9084tfFbGGpjzFzPi6Jrk8j2-64qcWXDyCXzA1N3Cs9cjX0Fb_qdyvsTC-Fi3wSI9NkfkQ=s176-nd",
      description: "Connect accounts and watch approved events and videos for a chance to win in-game rewards",
      title: "Electronic Arts"
    },
    {
      logo: "https://yt3.ggpht.com/2qhXXZm7rURHrwCBwuzUoe3lAVRWtq4D9fSj5A9PkJmCz8dBX5WsWdbWmQPsP0YI8_hOwk0=s176-nd",
      description: "Connect accounts and watch approved events and videos for a chance to win in-game rewards",
      title: "Epic Games"
    },
    {
      logo: "https://yt3.ggpht.com/qYwCY37vA51A2-m7OeWQKK-g3JJ1FoDBDzbp2mkA0oMfOf5pF3V7GXFE5m0kkrY5MMccep0=s176-nd",
      description: "Connect accounts and watch approved events and videos for a chance to win in-game rewards",
      title: "Garena"
    },
    {
      logo: "https://yt3.ggpht.com/4BvR8eb9byAU8gWo422dzHMi3Oik3sl-pKsoe8YIi6mbm8YSoTIUpvH90gin5rQ2HS_cOw=s176-nd",
      description: "Connect accounts and watch approved events and videos for a chance to win in-game rewards",
      title: "Krafton"
    },
    {
      logo: "https://yt3.ggpht.com/mL4dB3T4SjBZZabdH6yutbfmNRzLAV4TDOc7u_OSRM6sDVlX2ZRJQu1gdagfmmyrnlcoNp0=s176-nd",
      description: "Connect accounts and watch approved events and videos for a chance to win in-game rewards",
      title: "MLBB"
    },
    {
      logo: "https://yt3.ggpht.com/6bSxpnhLZCfvsjG6j5wytnqlFkl4f5HIPnfTCRNdPtbdgphO9DmSxuNc68lUMrS88lKHDdQ=s176-nd",
      description: "Connect accounts and watch approved events and videos for a chance to win in-game rewards",
      title: "NFL ID"
    },
    {
      logo: "https://yt3.ggpht.com/H_o6753e7ipKV6dsizTyTUaj2VfGC-cUXza44qunmFNZY6bej8uZfOM4TXo75Dgcq1oVCsk=s176-nd",
      description: "Connect accounts and watch approved events and videos for a chance to win in-game rewards",
      title: "PUBG MOBILE"
    },
    {
      logo: "https://yt3.ggpht.com/863cHsQ5PRS7zur_YJXSBYNey-bcTiSvNOrWEa23Z-9ceHs1PgDoNbqzLS4bwWBcpRaYy_KN=s176-b15-nd",
      description: "Connect accounts and watch approved events and videos for a chance to win in-game rewards",
      title: "Riot Games"
    },
    {
      logo: "https://yt3.ggpht.com/C1DoT4jX7xNwS-tT2fWb3920lFEu8oMb32GD6Ws4ofbi4_1xdawIHUsf-VmwEvdt2Bq5Ums=s176-nd",
      description: "Connect accounts and watch approved events and videos for a chance to win in-game rewards",
      title: "Ubisoft Account"
    },
  ]

  return (
    <div className="pl-[240px] overflow-x-hidden">
      <div className="mx-[32px]">
        <div className="max-w-[1016px] w-full mx-auto">
          <Head image="../images/common/settings-sharing.svg" info="Connect YouTube with other apps and watch more easily" about="Expand your experience" title="Connected apps">
            <p className="text-[14px] text-[#065FD4] cursor-pointer">See all sites authorized to access your Google Account</p>
          </Head>
          <div className="mb-[16px]">
            {accounts.map(({ logo, title, description }) => {
              return (
                <div className="py-[24px] flex items-center justify-between">
                  <div className="gap-[16px] items-center flex">
                    <img className="rounded-[50%] max-w-[48px] w-full max-h-[48px]" src={logo} />
                    <div>
                      <h1 className="font-semibold text-[14px] text-[#0F0F0F] pb-[4px]">{title}</h1>
                      <p className="text-[14px] text-[#606060]">{description}</p>
                    </div>
                  </div>
                  <Button classes="max-w-[118.67px] w-full" text="Connect" />
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default page