import { Box, Flex, Text, Avatar } from "@chakra-ui/react";
import React from "react";

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({showProfileData = true}: ProfileProps) {
  return(
    <Flex align="center">
      { showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Antonio Jose</Text>
          <Text color="gray.300" fontSize="small">netinhorego13@gmail.com</Text>
        </Box>
      )}

      <Avatar size="md" name="Antonio Jose" src="http://github.com/diego3g.png"/>
    </Flex>
  )
}