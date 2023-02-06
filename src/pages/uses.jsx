import Head from 'next/head'

import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function ToolsSection({ children, ...props }) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Tool({ title, href, children }) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export default function Uses() {
  return (
    <>
      <Head>
        <title>Uses - Erwin Alam</title>
        <meta
          name="description"
          content="Software I use, gadgets I love, and other things I recommend."
        />
      </Head>
      <SimpleLayout
        title="Software I use, gadgets I love, and other things I recommend."
        intro="I get asked a lot about the things I use to build software, stay productive, or buy to fool myself into thinking I’m being productive when I’m really just procrastinating. Here’s a big list of all of my favorite stuff."
      >
        <div className="space-y-20">
          <ToolsSection title="Development tools">
            <Tool title="Visual Studio Code">
              I use VS Code for most of my work
            </Tool>
            <Tool title="PostMan">
              I use postman for testing my API endpoints and for mocking API endpoints for my front end development work.
            </Tool>
            <Tool title="TablePlus">
              Great software for working with databases. Has saved me from
              building about a thousand admin interfaces for my various projects
              over the years.
            </Tool>
          </ToolsSection>
          <ToolsSection title="Design">
            <Tool title="Figma">
              We started using Figma as just a design tool but now it’s become
              our virtual whiteboard for the entire company. Never would have
              expected the collaboration features to be the real hook.
            </Tool>
          </ToolsSection>
          <ToolsSection title="Technologies">
            <Tool title="Laravel">
              I use Laravel for most of my backend development work.
            </Tool>
            <Tool title="ReactJS">
              I use React for most of my frontend development work.
            </Tool>
            <Tool title="NextJS">
              I use NextJS for most of my frontend development work.
            </Tool>
            <Tool title="NodeJs">
              I use NodeJS for most of my backend development work.
            </Tool>
            <Tool title="CSS">
              I use TailwindCSS for most of my frontend development work. I also use Bootstrap for some of my frontend development work.
            </Tool>
            <Tool title="Database">
              I use MySQL for most of my backend development work. I also use MongoDB for some of my backend development work.
            </Tool>
          </ToolsSection>
        </div>
      </SimpleLayout>
    </>
  )
}
