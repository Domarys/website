import React from 'react'

import Helmet from "react-helmet"
import { withPrefix} from "gatsby"

import Layout from  '../../components/Layout'
import SEO from '../../components/Seo'

import Card from '../../components/CardArticle'

import { SectionTitleBlogStyle, SectionBlogStyle, SectionNewsletterStyle } from './styles'

import Medium from '../../assets/medium.png'
import OpenSource from  '../../assets/opensource.png'

const blog = [
  {
    logo : `${Medium}`,
    title : 'Remote access your Raspberry Pi quickly and easily',
    date: '03/08/21',
    description: 'Today we share this brief tutorial to help you access your Raspberry Pi remotely ...',
    url: 'https://medium.com/os-systems/remote-access-your-raspberry-pi-quickly-and-easily-da3297b2cf0e'
  },
  {
    logo : `${Medium}`,
    title : 'Accessing a Nitrogen 8M remotely using ShellHub and Yocto Project',
    date: '23/07/21',
    description: 'We start this article with a question: is it possible to innovate on IoT and Embedded ...',
    url: 'https://medium.com/os-systems/accessing-a-nitrogen-8m-remotely-using-shellhub-and-yocto-project-6b4056b6fa48'
  },
  {
    logo : `${OpenSource}`,
    title : '6 exciting new ShellHub features to look for in 2021',
    date: '26/05/21',
    description: 'ShellHub\'s community has been busy adding new features to the open source remote access tool....',
    url: 'https://opensource.com/article/20/7/linux-shellhub'
  },
  {
    logo : `${Medium}`,
    title : 'Bypass your Linux firewall with SSH over HTTP',
    date: '26/08/20',
    description: 'With the growth of connectivity and remote jobs, accessing remote computing resources ...',
    url: 'https://medium.com/os-systems/how-to-make-access-to-my-remote-machines-more-efficient-1c4db4acb5df'
  },
  {
    logo : `${OpenSource}`,
    title : 'Bypass your Linux firewall with SSH over HTTP',
    date: '29/07/20',
    description: 'Remote work is here to stay; use this helpful open source solution to quickly connect and access...',
    url: 'https://opensource.com/article/20/7/linux-shellhub'
  },
  {
    logo : `${Medium}`,
    title : 'SSH and ShellHub',
    date: '24/06/20',
    description: 'The SSH protocol is a secure alternative to protect communications integrity and...',
    url: 'https://medium.com/os-systems/ssh-and-shellhub-e3d38b3e12c7'
  },
  {
    logo : `${Medium}`,
    title : 'ShellHub: simple and efficient connection to remote devices',
    date: '05/06/20',
    description: 'Many companies had to adapt themselves to this new World. Remote jobs, e-commerce, ...',
    url: 'https://medium.com/os-systems/shellhub-simple-and-efficient-connection-to-remote-devices-939c4da1db0c'
  }
]


export default function pageBlog() {
  return (
    <Layout>
      <Helmet>
        <script src={withPrefix('mailerlite.js')} type="text/javascript" />
      </Helmet>
      <SEO title="Blog" description="Published articles and coverage." lang="en" />
      <div className="container">
        <SectionTitleBlogStyle>
            <div className="text">
              <h1>Blog</h1>
                <p>
                  In addition to Documentation, ShellHub has several articles. Here
                  you find more about features, how to integrate ShellHub in different
                  devices and more.
                  If you want to keep up-to-date with ShellHub news, releases and articles
                  subscribe to our newsletter!
                </p>
            </div>
        </SectionTitleBlogStyle>
        <SectionBlogStyle>
            <div className="all">
              {
                blog.map(({logo, title, date, description, url}, index) =>
                  <Card
                    key={index}
                    logo={logo}
                    title={title}
                    date={date}
                    description={description}
                    url={url}
                  />
                )
              }
            </div>
        </SectionBlogStyle>
        <SectionNewsletterStyle>
          <div class="form">
            <div class="ml-form-embed"
              data-account="960816:b0z5f4d5p4"
              data-form="4572460:s9h9t2">
            </div>
          </div>
        </SectionNewsletterStyle>
      </div>
    </Layout>
  )
}
