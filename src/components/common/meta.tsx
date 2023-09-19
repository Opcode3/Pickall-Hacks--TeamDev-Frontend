import Head from 'next/head'
import React from 'react'

type MetaType = {
  title:string, 
  desc:string, 
  url:string, 
  icon: string
}

const Meta = ({title, desc, url, icon}:MetaType) => {
  
  return (
    <Head>
      <title>{`${title}`}</title>
        <meta name="title" content={title} />
        <meta name="description" content={desc} />
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="A media platform"/>
        <meta property="og:url" content={url}/>
        <meta property="og:title" content={title}/>
        <meta property="og:description" content={desc}
        />
        <meta property="og:image" content={icon}/>

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image"/>
        <meta property="twitter:url" content={url}/>
        <meta property="twitter:title" content={title}/>
        <meta property="twitter:description" content={desc} />
        <meta property="twitter:image" content={icon} />


        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Quicksand:wght@300;400;500;600;700&display=swap" rel="stylesheet" />

    </Head>
  )
}

export default Meta