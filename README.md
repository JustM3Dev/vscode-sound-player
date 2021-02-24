# vscode-sound-player

## Description
This plugin is used to play the corresponding file audio in the vscode environment
Features

## Technical point
This plugin uses react on the backend.
The extension side uses web-audio-api to decode

## Problem
Because it is found that web-audio-api will decode the audio (it seems to be long audio at present), it will fail to decode, so the plug-in is also useful, and it is not considered as continuing development for the time being.
additional

If you know of any other nodejs-side audio decoding libraries, please send me an issue to continue development. The requirement for the library is to be able to obtain the audio sampling rate, the number of sampling frames, the number of channels and the audio data in each channel.
prompt

If you are also developing a vscode plug-in and find that its webview cannot play sound, then there is a way that is feasible (that is, the plug-in is using). The extension side decodes the audio and sends it to the webview side, and the webview side uses audio contextapi for sound playback.


# Chinese

## 描述
本插件用于在vscode环境中播放对应文件音频

## 功能
* 播放/停止

## 技术点
* webview端使用[React](https://react.docschina.org/languages)
* extension端使用[web-audio-api](https://github.com/audiojs/web-audio-api)解码

## 问题
因为发现`web-audio-api`进行音频(目前看似乎是长音频)解码时会解码失败，所以该插件也就凑合着用吧，暂时也不算继续开发。

## 额外
如果你有知道有其他nodejs端进行音频解码的库，欢迎给我提[issue](https://github.com/asurance/vscode-sound-player/issues)好继续开发。
对库的要求是能获取到音频的采样率，采样帧数，通道数和每个通道内的音频数据。

## 提示
如果你也在开发vscode的插件，并且发现其webview无法播放声音，那么这边有一种途径是可行的(也就是本插件正在使用的)。extension端对音频进行解码传给webview端，webview端使用`audio context`api进行声音播放。
