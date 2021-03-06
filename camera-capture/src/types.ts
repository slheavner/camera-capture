import { LaunchOptions } from 'puppeteer'

export interface CaptureBaseOptions {
  /**
   * Image-capture needs to serve a static HTML so the headless browser capture media from there. If given port number will be used for the server. Default is 8080.
   */
  port?: number
  puppeteerOptions?: LaunchOptions
  /**
   * If given, a folder with that path will be created (or if true is given at $HOME/.camera-capture/static) and a index.html file will be copied there so it can be served as static web page for the headless browser to use. This is not often necessary, but particularly when packaging the client package as a desktop application with asar or yackage .
   */
  mkdirServed?: string | boolean
  debug?: boolean;
}

export type SupportedFormats = 'image/png' | 'image/jpeg' | 'image/webp' | 'rgba'

export interface CaptureOptions extends CaptureBaseOptions {
  constrains?: MediaStreamConstraints;
  /**
   * TODO. Make sure that at least given number of milliseconds pass between frames
   */
  interval?: number;
  /**
   * Takes given number of shots and stops.
   */
  shots?: number;
  /**
   * Frames width in pixels. Default is 480.
   */
  width?: number;
  /**
   * Frames height in pixels. Default is 320.
   */
  height?: number;
  /**
   * If given it will make sure frames speed is no greater than given number of frames per second.
   */
  fps?: number;
  /**
   * Output frames image format. Accepted values:  `image/png`, `image/jpeg`, `image/webp`, `rgba`. By default is `rgba` which is raw data image 8-bit depth RGBA - as in HTML's ImageData object.
   */
  mime?: SupportedFormats;
}

export type Listener = (data: ImageData) => void | Promise<void>

export interface ImageData {
  width: number;
  height: number;
  data: Uint8ClampedArray;
}




