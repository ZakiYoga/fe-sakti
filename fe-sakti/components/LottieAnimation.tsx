import { useRef, useEffect } from 'react';
import Lottie, { LottieRefCurrentProps } from 'lottie-react';
import type { AnimationItem } from 'lottie-web';

interface LottieAnimationProps {
  animationData: object;
  loop?: boolean;
  autoplay?: boolean;
  style?: React.CSSProperties;
  className?: string;
  speed?: number;
  onComplete?: () => void;
  onLoopComplete?: () => void;
  segments?: [number, number];
  direction?: 1 | -1;
  isPaused?: boolean;
  isStopped?: boolean;
}

export default function LottieAnimation({
  animationData,
  loop = true,
  autoplay = true,
  style,
  className,
  speed = 1,
  onComplete,
  onLoopComplete,
  segments,
  direction = 1,
  isPaused = false,
  isStopped = false,
}: LottieAnimationProps) {
  const lottieRef = useRef<LottieRefCurrentProps>(null);

  useEffect(() => {
    const animation = lottieRef.current;
    if (!animation) return;

    // Set speed
    animation.setSpeed(speed);

    // Set direction
    animation.setDirection(direction);

    // Set segments if provided
    if (segments) {
      animation.playSegments(segments, true);
    }

    // Handle pause/play
    if (isPaused) {
      animation.pause();
    } else if (isStopped) {
      animation.stop();
    } else if (!autoplay) {
      animation.pause();
    } else {
      animation.play();
    }
  }, [speed, direction, segments, isPaused, isStopped, autoplay]);

  const handleComplete = () => {
    onComplete?.();
  };

  const handleLoopComplete = () => {
    onLoopComplete?.();
  };

  return (
    <Lottie
      lottieRef={lottieRef}
      animationData={animationData}
      loop={loop}
      autoplay={autoplay}
      style={style}
      className={className}
      onComplete={handleComplete}
      onLoopComplete={handleLoopComplete}
    />
  );
}