import { VoiceoverUtil } from './util/voiceover.util';
import { startScreenReader } from 'screen-reader-reader';

const REALLY_BIG_TIMEOUT = 1000000;

describe('my-page', () => {
  it(`should get the output for my-page`, async () => {
    jest.setTimeout(REALLY_BIG_TIMEOUT);

    await page.goto('http://localhost:8080/my-page.html');

    const result = await startScreenReader({ 
      waitForStable: true, 
    });

    VoiceoverUtil.readAllPageContents();

    expect(result).toMatchSnapshot();
  });
});
