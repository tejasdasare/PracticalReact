import React from "react";
import CountUp, { useCountUp } from "react-countup";

const CountUpPractice = () => {
  const { countUp, start, pauseResume, reset, update } = useCountUp({
    duration: 5,
    end: 10000,
  });

  return (
    <div>
      {countUp}
      {/* <button onClick={start}>Start</button>
        <button onClick={reset}>reset</button> */}
      {/* <button onClick={() => update(2000)}>update to 2000</button> */}
      {/* <button onClick={pauseResume}>pauseResume</button> */}

      <CountUp end={200} />
      <br />
      <CountUp end={200} duration={5} />
      <br />
      <CountUp start={500} end={1000} duration={5} />
      <br />
      <CountUp start={0} end={1000} duration={5} prefix="$" decimals={2} />
      <br />
      <CountUp start={0} end={1000} duration={5} suffix="USD" decimals={2} />
    </div>
  );
};

export default CountUpPractice;
