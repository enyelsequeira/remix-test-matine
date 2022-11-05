import {
  AppShell,
  Burger,
  Button,
  Group,
  MediaQuery,
  Navbar,
  Stack,
  Text,
} from "@mantine/core";

import { useState } from "react";

function AppShellHeader({ opened, setOpened }: any) {
  return (
    <Group
      p="sm"
      sx={{ backgroundColor: "#0C0F40", width: "100%" }}
      position="center"
    >
      <Button variant="subtle">Promoti</Button>
      <Button>Sign Up</Button>
      <Button variant="light">Log In</Button>
      <Button variant="subtle">Game</Button>
      <MediaQuery largerThan="sm" styles={{ display: "none" }}>
        <Burger
          opened={opened}
          onClick={() => setOpened((o: any) => !o)}
          size="sm"
          mr="xl"
        />
      </MediaQuery>
    </Group>
  );
}

function AppShellNavbar({ opened }: any) {
  return (
    <Navbar
      p="md"
      hiddenBreakpoint="sm"
      hidden={!opened}
      width={{ sm: 200, lg: 300 }}
      sx={{ backgroundColor: "#01001A", borderRight: "none" }}
    >
      <Stack mt="xl" align="center">
        <Button>Sign Usp</Button>
        <Button variant="light">Log In</Button>
        <Text>Promotions</Text>
        <Text>Tournaments</Text>
        <Text>Responsive Gaming</Text>
      </Stack>
    </Navbar>
  );
}

export default function Index() {
  const [opened, setOpened] = useState(false);

  return (
    <AppShell
      sx={{ backgroundColor: "#01001A" }}
      padding={0}
      navbar={<AppShellNavbar opened={opened} />}
    >
      <AppShellHeader opened={opened} setOpened={setOpened} />
      <Stack style={{ border: "solid #4EACE8", borderRadius: 10 }} p="sm">
        {Array(40)
          .fill("Page content goes here...")
          .map((str, i) => (
            <div key={i}>{str}</div>
          ))}
      </Stack>
    </AppShell>
  );
}
