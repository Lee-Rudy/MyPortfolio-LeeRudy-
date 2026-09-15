import { Column, Heading, Meta, Schema, Text } from "@once-ui-system/core";
import HobbiesView from "@/components/hobbies/HobbiesView";
import { baseURL, hobbies, person } from "@/resources";

export async function generateMetadata() {
  return Meta.generate({
    title: hobbies.title,
    description: hobbies.description,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(hobbies.title)}`,
    path: hobbies.path,
  });
}

export default function Hobbies() {
  return (
    <Column maxWidth="l" gap="24">
      <Schema
        as="webPage"
        baseURL={baseURL}
        title={hobbies.title}
        description={hobbies.description}
        path={hobbies.path}
        image={`/api/og/generate?title=${encodeURIComponent(hobbies.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${hobbies.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <Column gap="8">
        <Heading variant="display-strong-s">Mes hobbies</Heading>
        <Text onBackground="neutral-weak" variant="body-default-m">
          Ce qui me définit au-delà du code et du design.
        </Text>
      </Column>
      <HobbiesView />
    </Column>
  );
}
