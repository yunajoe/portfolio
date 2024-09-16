function useThrottle() {
  const throttle = (callback: any, time: number) => {
    let wait = false;
    return function () {
      if (!wait) {
        callback.call();
        wait = true;
        setTimeout(() => {
          wait = false;
        }, time);
      }
    };
  };
  return throttle;
}

export default useThrottle;
