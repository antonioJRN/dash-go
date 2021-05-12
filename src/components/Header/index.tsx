import { Flex, Icon, IconButton, useBreakpointValue } from '@chakra-ui/react';
import { Profile } from './Profile';
import { NotificationNav } from './NotificationNav';
import { SearchBox } from './SearchBox';
import { Logo } from './Logo';
import { userSidebarDrawer } from '../../contexts/SidebarDrawerContext';
import { RiMenuLine } from 'react-icons/ri';


export function Header() {
  const { onOpen } = userSidebarDrawer()

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  })

  return(
    <Flex
      as="header"
      w="100%"
      maxWidth={1400}
      h="20"
      mx="auto"
      mt="4"
      px="6"
      align="center"
    >

      { !isWideVersion && (
        <IconButton
          aria-label="Open Navigation"
          icon={<Icon as={RiMenuLine}/>}
          fontSize="24"
          variant="unstyled"
          onClick={onOpen}
          mr="2"
        >

        </IconButton>
      )}
      <Logo />
    
      { isWideVersion && <SearchBox /> }
      <Flex 
        align="center"
        ml="auto"
      >
        <NotificationNav />
        <Profile showProfileData={isWideVersion} />
      </Flex>
    </Flex>
  )
}