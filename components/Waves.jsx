import styled from "styled-components";
import Image from 'next/image';
import jigglypuffWave from '../public/waves/jigglypuffWave.png';
import tealWaveTop from '../public/waves/tealWaveTop.png';
import tealWaveBottom from '../public/waves/tealWaveBottom.png';
import clementineWave from '../public/waves/clementineWave.png';

const Waves = () => {
  return (
    <>
      <TopWave>
        <Image src={tealWaveTop} alt='' width={2000} />
      </TopWave>
      <TopWave>
        <Image src={jigglypuffWave} alt='' width={2000} />
      </TopWave>
      <BottomWave>
        <Image src={tealWaveBottom} alt='' width={2000} />
      </BottomWave>
      <BottomWave>
        <Image src={clementineWave} alt='' width={2000} />
      </BottomWave>
    </>
  );
}

const Wave = styled.div`
  position: absolute;
  left: 0;
  display: flex;
`;

const TopWave = styled(Wave)`
  top: 0;
`;

const BottomWave = styled(Wave)`
  bottom: 0;
`;

export default Waves;
