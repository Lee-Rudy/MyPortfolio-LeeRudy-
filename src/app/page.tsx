import {
  Heading,
  Text,
  Button,
  Avatar,
  RevealFx,
  Column,
  Badge,
  Row,
  Schema,
  Meta,
  Line,
} from "@once-ui-system/core";
import { home, about, person, baseURL, routes } from "@/resources";
import { Mailchimp } from "@/components";
import { Projects } from "@/components/work/Projects";
import { Posts } from "@/components/blog/Posts";

//spline
import Spline from '@splinetool/react-spline/next';
import { TbHandMove } from 'react-icons/tb';

export async function generateMetadata() {
  return Meta.generate({
    title: home.title,
    description: home.description,
    baseURL: baseURL,
    path: home.path,
    image: home.image,
  });
}

export default function Home() {
  return (
    <Column maxWidth="m" gap="l" paddingY="8" horizontal="center">
      
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={home.path}
        title={home.title}
        description={home.description}
        image={`/api/og/generate?title=${encodeURIComponent(home.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <Column fillWidth horizontal="center" gap="s">
        <Column maxWidth="s" horizontal="center" align="center">
          {home.featured.display && (
            <RevealFx
              fillWidth
              horizontal="center"
              paddingTop="16"
              paddingBottom="32"
              paddingLeft="12"
            >
              <Badge
                background="brand-alpha-weak"
                paddingX="12"
                paddingY="4"
                onBackground="neutral-strong"
                textVariant="label-default-s"
                arrow={false}
                href={home.featured.href}
              >
                <Row paddingY="2">{home.featured.title}</Row>
              </Badge>
            </RevealFx>
          )}
          <RevealFx translateY="4" fillWidth horizontal="center" paddingBottom="16">
            <Heading wrap="balance" variant="display-strong-l">
              {home.headline}
            </Heading>
          </RevealFx>
          <RevealFx translateY="8" delay={0.2} fillWidth horizontal="center" paddingBottom="32">
            <Text wrap="balance" onBackground="neutral-weak" variant="heading-default-xl">
              {home.subline}
            </Text>
          </RevealFx>
          <RevealFx paddingTop="12" delay={0.4} horizontal="center" paddingLeft="12">
            <Button
              id="about"
              data-border="rounded"
              href={about.path}
              variant="secondary"
              size="m"
              weight="default"
              arrowIcon
            >
              <Row gap="8" vertical="center" paddingRight="4">
                {about.avatar.display && (
                  <Avatar
                    marginRight="8"
                    style={{ marginLeft: "-0.75rem" }}
                    src={person.avatar}
                    size="m"
                  />
                )}
                {about.title}
              </Row>
            </Button>
          </RevealFx>
        </Column>
        <Column fillWidth horizontal="center" gap="12" paddingTop="m">
        <Row gap="8" vertical="center" horizontal="center">
            <TbHandMove size={20} style={{ opacity: 0.6 }} />
            <Text variant="body-default-s" onBackground="neutral-weak">
              Interagissez et faites tourner le modèle 3D (conçu sur Spline 3D "My Rooom Lee Rudy")
            </Text>
          </Row>
          <Spline
            scene="https://prod.spline.design/RzzDR1QbvpFXKsBy/scene.splinecode"
            style={{
              width: '100%',
              height: '500px',
              borderRadius: '15px',
              overflow: 'hidden'
            }}
          />
          
        </Column>
      </Column>

      {/* Section Projects - "Building Once UI" */}
      {/* <RevealFx translateY="16" delay={0.6}>
        <Projects range={[1, 1]} />
      </RevealFx> */}
      {/* Section "Mes Skills" avec Posts */}
      {/* {routes["/blog"] && (
        <Column fillWidth gap="24" marginBottom="l">
          <Row fillWidth paddingRight="64">
            <Line maxWidth={48} />
          </Row>
          <Row fillWidth gap="24" marginTop="40" s={{ direction: "column" }}>
            <Row flex={1} paddingLeft="l" paddingTop="24">
              <Heading as="h2" variant="display-strong-xs" wrap="balance">
                Mes Skills
              </Heading>
            </Row>
            <Row flex={3} paddingX="20">
              <Posts range={[0, 0]} columns="2" />
            </Row>
          </Row>
          <Row fillWidth paddingLeft="64" horizontal="end">
            <Line maxWidth={48} />
          </Row>
        </Column>
      )} */}
      {/* Section Projects supplémentaires */}
      {/* <Projects range={[8]} /> */}
      {/* eto raha hanova an'ilay isan'ilay projects eseho : raha izy rehetra dia hatao [2] */}
      {/* Section Newsletter - "Subscribe to Rudy's Newsletter" */}
      {/* <Mailchimp /> */}
    </Column>
  );
}
