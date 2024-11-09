"use client";

import CountUp from "react-countup";

const AnimatedCounter = ({ amount }: { amount: number }) => {
  //   const [isClient, setIsClient] = useState(false);

  //   useEffect(() => {
  //     setIsClient(true);
  //   }, []);

  //   if (!isClient) {
  //     return null;
  //   }

  return (
    <div className="w-full">
      <CountUp
        duration={2.75}
        decimal=","
        decimals={2}
        prefix="$"
        end={amount}
      />
    </div>
  );
};

export default AnimatedCounter;
