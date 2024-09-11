import {
  Box,
  Flex,
  Button,
  useColorModeValue,
  useColorMode,
  Text,
  Container,
} from '@chakra-ui/react';
import { IoMoon } from 'react-icons/io5';
import { LuSun } from 'react-icons/lu';

export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Container maxW={'900px'}>
      <Box bg={useColorModeValue('gray.400', 'gray.700')} px={4} my={4} borderRadius={'5'}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          {/* LEFT SIDE */}
          <Text
            fontSize={'2xl'}
            textTransform={'uppercase'}
            fontWeight={'bold'}
            my={2}
            bgGradient='linear(to-l, #8B5CF6, #C026D3)'
            bgClip='text'
          >
            Simple Todo App
          </Text>

          {/* RIGHT SIDE */}
          <Flex alignItems={'center'} gap={3}>
            <Text fontSize={'lg'} fontWeight={500}>
              Daily Tasks
            </Text>
            {/* Toggle Color Mode */}
            <Button onClick={toggleColorMode}>
              {colorMode === 'light' ? <IoMoon /> : <LuSun size={20} />}
            </Button>
          </Flex>
        </Flex>
      </Box>
    </Container>
  );
}
