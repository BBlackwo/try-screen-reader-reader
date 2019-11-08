export class VoiceoverUtil {
  /**
   * Hold the voiceover key, use this with another key
   * to perform a voiceover command
   */
  public static async holdVoiceoverKey () {
    await page.keyboard.down('CapsLock');
  }

  /**
   * To read an entire document starting from 
   * the top (called “Read All”), press VO-A.
   * 
   * https://www.apple.com/voiceover/info/guide/_1128.html
   */
  public static async readAllPageContents () {
    await this.holdVoiceoverKey();
    await page.keyboard.press('a');
  }
}