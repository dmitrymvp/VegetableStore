import imgSkeleton from '../../../assets/skeleton.png';
import loader from '../../../assets/loader.png';
import { Card, Box, Image } from '@mantine/core';

const SkeletonCard = () => {
  return (
    <Card h={414} w={302} padding="md" radius="md">
      <Box pos="relative" w={276} h={276}>
        <Image src={imgSkeleton} alt="skeleton" w="100%" h="100%" fit="cover" />
        <Image
          src={loader}
          alt="loader"
          w={22}
          pos="absolute"
          top={130}
          left={130}
          style={{ pointerEvents: 'none' }}
        />
      </Box>
    </Card>
  );
};

export default SkeletonCard;
