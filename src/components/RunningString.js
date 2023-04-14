import Marquee from 'react-fast-marquee';
import s from './RunningString.module.css';

export default function RunningString() {
  return (
    <div className={s.string}>
      <Marquee speed={45} gradientColor={[255, 255, 200]}>
        &nbsp;За рекомендацією від друга - знижка 10% на першу футболку!&nbsp;
      </Marquee>
    </div>
  );
}
