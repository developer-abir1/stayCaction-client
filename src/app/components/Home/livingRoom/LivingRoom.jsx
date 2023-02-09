import { useQuery } from '@tanstack/react-query';

const LivingRoom = () => {
  const { data: service = [], isLoading } = useQuery({
    queryKey: ['services'],
    queryFn: async () => {
      const response = await fetch(
        '     https://stay-cation-server.vercel.app/service',
        {
          headers: {},
        }
      );
      return response.json();
    },
  });
  return <section></section>;
};

export default LivingRoom;
